import type { DietType } from '@/config/diet-definitions'
import type { CuisineType, MealType } from '@/server/spoonacular/recipes/types'
import { create } from 'zustand'

export interface State {
  cuisine: CuisineType | undefined
  diet: DietType | undefined
  meal: MealType | undefined
  search: string | undefined
}

export interface Actions {
  updateDiet: (diet: DietType | undefined) => void
  updateCuisine: (cuisine: CuisineType | undefined) => void
  updateMeal: (meal: MealType) => void
  updateSearch: (search: string | undefined) => void
}

const useComplexRecipeSearch = create<State & Actions>(set => ({
  cuisine: undefined,
  diet: undefined,
  meal: undefined,
  search: undefined,
  updateCuisine: (cuisine?: CuisineType) => set(state => ({
    cuisine: state.cuisine === cuisine ? undefined : cuisine,
  })),
  updateDiet: (diet: DietType | undefined) => set(state => ({
    diet: state.diet?.value === diet?.value ? undefined : diet,
  })),
  updateMeal: (meal: MealType | undefined) => set(state => ({
    meal: state.meal === meal ? undefined : meal,
  })),
  updateSearch: (search: string | undefined) => set({ search }),
}))

export { useComplexRecipeSearch }
