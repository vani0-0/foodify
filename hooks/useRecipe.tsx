'use client'

import type { CuisineType, MealType } from '@/server/spoonacular/recipes/types'
import { searchRecipeById, searchRecipes } from '@/server/spoonacular/recipes/actions'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

function useRecipe({ diet, meal, cuisine, search }: { diet?: string, meal?: MealType, cuisine?: CuisineType, search: undefined | string }) {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ['search-recipe', diet, meal, cuisine, search],
    queryFn: ({ pageParam = 0 }) => searchRecipes({ diet, meal, cuisine, search, offset: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length * 10
      return nextPage < lastPage.totalResults ? nextPage : undefined
    },
  })
}
function useRecipeById({ id }: { id: string }) {
  return useQuery({
    queryKey: ['search-recipe-by-id', id],
    queryFn: () => searchRecipeById({ id: Number.parseInt(id) }),
  })
}

export { useRecipe, useRecipeById }
