'use client'

import RecipeInfoHeader from '@/components/information/recipe-info-header'
import RecipeIngredients from '@/components/information/recipe-ingredients'
import RecipeMoreInfo from '@/components/information/recipe-more-info'
import WinePairing from '@/components/information/wine-pairing'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useRecipeById } from '@/hooks/useRecipe'
import { AlertCircle } from 'lucide-react'

 function Page({ params }: { params: { id: string } }) {
  const { id } = params

  const { data, status, error } = useRecipeById({ id })
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

  if (status === 'pending') {
    return (
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* <SkeletonCard /> */}
        </div>
      </div>
    )
  }

  return (
    <div className="container flex flex-col space-y-2 py-4 bg-background">
      <RecipeInfoHeader {...data} />
      <RecipeIngredients {...data} />
      <WinePairing {...data} />
      <RecipeMoreInfo {...data} />
    </div>
  )
}

export default Page
