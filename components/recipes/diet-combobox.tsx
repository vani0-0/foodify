'use client'

import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Diets } from '@/config/diet-definitions'
import { useComplexRecipeSearch } from '@/hooks/useComplexSearch'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import React from 'react'

function DietCombobox() {
  const [open, setOpen] = React.useState(false)
  const selectedDiet = useComplexRecipeSearch(state => state.diet)
  const updateDiet = useComplexRecipeSearch(state => state.updateDiet)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {selectedDiet ? selectedDiet.label : 'Select Diet...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {Diets.map(diet => (
                <CommandItem
                  key={diet.value}
                  value={diet.value}
                  onSelect={(currentValue) => {
                    updateDiet(currentValue === selectedDiet?.value ? undefined : diet)
                    setOpen(false)
                  }}
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selectedDiet?.value === diet.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {diet.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default DietCombobox
