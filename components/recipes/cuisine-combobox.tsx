'use client'

import type { CuisineType } from '@/server/spoonacular/recipes/types'
import { useComplexRecipeSearch } from '@/hooks/useComplexSearch'
import { ChevronsUpDown } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

const cuisines: CuisineType[] = [
  'african',
  'asian',
  'american',
  'british',
  'cajun',
  'caribbean',
  'chinese',
  'eastern european',
  'european',
  'french',
  'german',
  'greek',
  'indian',
  'irish',
  'italian',
  'japanese',
  'jewish',
  'korean',
  'latin american',
  'mediterranean',
  'mexican',
  'middle eastern',
  'nordic',
  'southern',
  'spanish',
  'thai',
  'vietnamese',
]

function CuisineCombobox() {
  const [open, setOpen] = React.useState(false)

  const selectCuisine = useComplexRecipeSearch(state => state.cuisine)
  const updateCuisine = useComplexRecipeSearch(state => state.updateCuisine)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {selectCuisine
            ? selectCuisine.charAt(0).toUpperCase() + selectCuisine.slice(1)
            : 'Select Cuisine...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {cuisines.map(cuisine => (
                <CommandItem
                  key={cuisine}
                  onSelect={() => {
                    updateCuisine(cuisine)
                    setOpen(false)
                  }}
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default CuisineCombobox
