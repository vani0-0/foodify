'use client'

import type { MealType } from '@/server/spoonacular/recipes/types'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useComplexRecipeSearch } from '@/hooks/useComplexSearch'
import { Tooltip } from '@nextui-org/tooltip'
import { Apple, Beef, Beer, Coffee, Cookie, Croissant, Fish, IceCream, Salad, Sandwich, Soup, Utensils, Wine } from 'lucide-react'
import React from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

const mealTypeIcons: Record<MealType, React.ReactNode> = {
  'main-course': <Beef className="h-6 w-6" />,
  'side-dish': <Utensils className="h-6 w-6" />,
  'dessert': <IceCream className="h-6 w-6" />,
  'appetizer': <Sandwich className="h-6 w-6" />,
  'salad': <Salad className="h-6 w-6" />,
  'bread': <Croissant className="h-6 w-6" />,
  'breakfast': <Coffee className="h-6 w-6" />,
  'soup': <Soup className="h-6 w-6" />,
  'beverage': <Beer className="h-6 w-6" />,
  'sauce': <Wine className="h-6 w-6" />,
  'marinade': <Fish className="h-6 w-6" />,
  'fingerfood': <Cookie className="h-6 w-6" />,
  'snack': <Apple className="h-6 w-6" />,
  'drink': <Coffee className="h-6 w-6" />,
}

function MealToggleGroup() {
  const updateMeal = useComplexRecipeSearch(state => state.updateMeal)

  return (
    <ScrollArea className="border rounded-md">
      <div className="flex p-1">
        <ToggleGroup type="single">
          {(Object.keys(mealTypeIcons) as MealType[]).map(meal => (
            <Tooltip key={meal} delay={500} showArrow className="rounded-md border bg-secondary" content={<p className="capitalize">{meal.replace('-', ' ')}</p>}>
              <ToggleGroupItem value={meal} aria-label={`Toggle ${meal}`} onClick={() => updateMeal(meal)}>
                {mealTypeIcons[meal]}
              </ToggleGroupItem>
            </Tooltip>
          ))}
        </ToggleGroup>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default MealToggleGroup
