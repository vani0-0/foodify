export interface RecipesResultType {
  results: RecipeType[]
  offset: number
  number: number
  totalResults: number
}

export interface RecipeType {
  id: number
  title: string
  image: string
  imageType: string
  dishTypes: string[]
  diets: string[]
  healthScore: number
  aggregateLikes: number
}

export type MealType = 'main-course' | 'side-dish' | 'dessert' | 'appetizer' | 'salad' | 'bread' | 'breakfast' | 'soup' | 'beverage' | 'sauce' | 'marinade' | 'fingerfood' | 'snack' | 'drink'

export type CuisineType = | 'african' | 'asian' | 'american' | 'british' | 'cajun' | 'caribbean' | 'chinese' | 'eastern european' | 'european' | 'french' | 'german' | 'greek' | 'indian' | 'irish' | 'italian' | 'japanese' | 'jewish' | 'korean' | 'latin american' | 'mediterranean' | 'mexican' | 'middle eastern' | 'nordic' | 'southern' | 'spanish' | 'thai' | 'vietnamese'

export interface RecipeInformation {
  vegetarian: boolean
  vegan: boolean
  glutenFree: boolean
  dairyFree: boolean
  veryHealthy: boolean
  cheap: boolean
  veryPopular: boolean
  sustainable: boolean
  lowFodmap: boolean
  weightWatcherSmartPoints: number
  gaps: string
  preparationMinutes: any
  cookingMinutes: any
  aggregateLikes: number
  healthScore: number
  creditsText: string
  sourceName: string
  pricePerServing: number
  extendedIngredients: ExtendedIngredient[]
  id: number
  title: string
  readyInMinutes: number
  servings: number
  sourceUrl: string
  image: string
  imageType: string
  nutrition: Nutrition
  taste: Taste
  summary: string
  cuisines: string[]
  dishTypes: string[]
  diets: any[]
  occasions: any[]
  winePairing: WinePairing
  instructions: string
  analyzedInstructions: AnalyzedInstruction[]
  originalId: any
  spoonacularScore: number
  spoonacularSourceUrl: string
}

export interface ExtendedIngredient {
  id: number
  aisle: string
  image: string
  consistency: string
  name: string
  nameClean: string
  original: string
  originalName: string
  amount: number
  unit: string
  meta: string[]
  measures: Measures
}

export interface Measures {
  us: Us
  metric: Metric
}

export interface Us {
  amount: number
  unitShort: string
  unitLong: string
}

export interface Metric {
  amount: number
  unitShort: string
  unitLong: string
}

export interface Nutrition {
  nutrients: Nutrient[]
  properties: Property[]
  flavonoids: Flavonoid[]
  ingredients: Ingredient[]
  caloricBreakdown: CaloricBreakdown
  weightPerServing: WeightPerServing
}

export interface Nutrient {
  name: string
  amount: number
  unit: string
  percentOfDailyNeeds: number
}

export interface Property {
  name: string
  amount: number
  unit: string
}

export interface Flavonoid {
  name: string
  amount: number
  unit: string
}

export interface Ingredient {
  id: number
  name: string
  amount: number
  unit: string
  nutrients: Nutrient2[]
}

export interface Nutrient2 {
  name: string
  amount: number
  unit: string
  percentOfDailyNeeds: number
}

export interface CaloricBreakdown {
  percentProtein: number
  percentFat: number
  percentCarbs: number
}

export interface WeightPerServing {
  amount: number
  unit: string
}

export interface Taste {
  sweetness: number
  saltiness: number
  sourness: number
  bitterness: number
  savoriness: number
  fattiness: number
  spiciness: number
}

export interface WinePairing {
  pairedWines: string[]
  pairingText: string
  productMatches: ProductMatch[]
}

export interface ProductMatch {
  id: number
  title: string
  description: string
  price: string
  imageUrl: string
  averageRating: number
  ratingCount: number
  score: number
  link: string
}

export interface AnalyzedInstruction {
  name: string
  steps: Step[]
}

export interface Step {
  number: number
  step: string
  ingredients: Ingredient2[]
  equipment: Equipment[]
  length?: Length
}

export interface Ingredient2 {
  id: number
  name: string
  localizedName: string
  image: string
}

export interface Equipment {
  id: number
  name: string
  localizedName: string
  image: string
}

export interface Length {
  number: number
  unit: string
}
