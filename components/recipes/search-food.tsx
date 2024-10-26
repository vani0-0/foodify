'use client'
import { useComplexRecipeSearch } from '@/hooks/useComplexSearch'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

function SearchFood() {
  const [searchInput, setSearchInput] = React.useState<string | undefined>(undefined)
  const updateSearch = useComplexRecipeSearch(state => state.updateSearch)

  const handleSearch = () => {
    updateSearch(searchInput)
  }

  return (
    <>
      <Input
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        placeholder="Search for recipes..."
      />
      <Button type="button" onClick={handleSearch}>Search</Button>
    </>
  )
}

export default SearchFood
