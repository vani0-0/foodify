'use server'

 import type { CuisineType, MealType, RecipeInformation, RecipesResultType } from './types'
import { useFetch } from '@/hooks/useFetch'

async function searchRecipes({ diet, meal, cuisine, search, offset = 0 }: { diet?: string, meal?: MealType, cuisine?: CuisineType, search?: string, offset?: number }) {
  try {
    const query: Record<string, string> = {}
    if (search)
      query.query = search
    if (cuisine)
      query.cuisine = cuisine
    if (diet)
      query.diet = diet
    if (meal)
      query.type = meal

    const queryString = new URLSearchParams({
      addRecipeInformation: 'true',
      offset: offset.toString(),
      number: '10',
      ...query,
    }).toString()

    const url = `/recipes/complexSearch?${queryString}`
    const data = await useFetch(url, { method: 'GET' }) as RecipesResultType
    return data as RecipesResultType
  }
  catch (error) {
    throw new Error(error as string)
  }
}

async function searchRecipeById({ id }: { id: number }) {
  try {
    const query: Record<string, any> = {
      includeNutrition: true,
      addWinePairing: true,
      addTasteData: true
    }

    const queryString = new URLSearchParams(query).toString()
    const url = `/recipes/${id}/information?${queryString}`
    const data = await useFetch(url, { method: 'GET' }) as RecipeInformation
    return data as RecipeInformation
  }
  catch (error) {
    throw new Error(error as string)
  }
}

export { searchRecipes, searchRecipeById }