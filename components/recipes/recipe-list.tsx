'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useComplexRecipeSearch } from '@/hooks/useComplexSearch'
import { useRecipe } from '@/hooks/useRecipe'
import { AlertCircle, Loader2 } from 'lucide-react'
import React, { useCallback, useEffect, useRef } from 'react'
import RecipeCard from './recipe-card'

function RecipeList() {
  const dietType = useComplexRecipeSearch(state => state.diet)
  const mealType = useComplexRecipeSearch(state => state.meal)
  const cuisineType = useComplexRecipeSearch(state => state.cuisine)
  const search = useComplexRecipeSearch(state => state.search)

  const {
    data,
    status,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRecipe({ diet: dietType?.value, meal: mealType, cuisine: cuisineType, search })

  const recipes = React.useMemo(() =>
    data?.pages.flatMap(page => page.results) || [], [data])

  const observerTarget = useRef(null)

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries
    if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  useEffect(() => {
    const element = observerTarget.current
    const option = { threshold: 0 }

    const observer = new IntersectionObserver(handleObserver, option)
    if (element)
      observer.observe(element)

    return () => {
      if (element)
        observer.unobserve(element)
    }
  }, [handleObserver])

  useEffect(() => {
    const timer = setTimeout(() => {
      refetch()
    }, 500)

    return () => clearTimeout(timer)
  }, [dietType, mealType, cuisineType, refetch])

  if (status === 'error') {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>
          Error:
          {error.name}
        </AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {status === 'pending'
          ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            )
          : recipes.length > 0
            ? (
                recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
              )
            : (
                <p className="text-center col-span-full">No recipes found.</p>
              )}
      </div>
      {(isFetchingNextPage || hasNextPage) && (
        <div ref={observerTarget} className="flex justify-center items-center p-4">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      )}
    </div>
  )
}

function SkeletonCard() {
  return (
    <Card className="mb-4">
      <CardContent className="p-0">
        <Skeleton className="rounded-md aspect-[16/9] rounded-b-none" />
        <div className="px-2 py-4">
          <Skeleton className="min-h-[24px]" />
        </div>
        <div className="flex items-center pb-2 px-2">
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </CardContent>
    </Card>
  )
}

export default RecipeList
