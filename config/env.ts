import process from 'node:process'

const MODE = process.env.NODE_ENV
const SPOONACULAR_API_KEYS = (process.env.SPOONACULAR_API_KEYS as string).split(',') ?? []
const MONGODB_URI = process.env.MONGODB_URI ?? ''
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY ?? ''
const BASE_URL = 'https://api.spoonacular.com'

export { BASE_URL, MODE, MONGODB_URI, PIXABAY_API_KEY, SPOONACULAR_API_KEYS }
