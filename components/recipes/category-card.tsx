import { Card, CardContent } from '../ui/card'
import CuisineCombobox from './cuisine-combobox'
import DietCombobox from './diet-combobox'
import MealToggleGroup from './meal-toggle-group'
import SearchFood from './search-food'

function CategoryCard() {
  return (
    <Card>
      <CardContent className="p-4">

        <div className="grid sm:space-x-2 sm:flex w-full">
          <div className="flex space-x-2 mb-2 max-w-fit">
            <CuisineCombobox />
            <DietCombobox />
          </div>
          <div className="flex space-x-2 mb-2 max-w-fit">
            <SearchFood />
          </div>
        </div>

        <div className="max-w-fit">
          <MealToggleGroup />
        </div>
      </CardContent>
    </Card>
  )
}

export default CategoryCard
