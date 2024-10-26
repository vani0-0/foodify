import { BASE_URL, SPOONACULAR_API_KEYS } from '@/config/env'
import logger from '@/config/logger'

let currentApiKeyIndex = 0

async function useFetch(url: string, options: RequestInit = {}) {
  const fetchWithKey = async (keyIndex: number): Promise<any> => {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'x-api-key': SPOONACULAR_API_KEYS[keyIndex],
    }

    const headers = {
      ...defaultHeaders,
      ...options.headers,
    }

    const response = await fetch(`${BASE_URL}${url}`, { ...options, headers })

    if (response.status === 402 || response.status === 429) {
      logger.warn('Payment required or Too many requests - try the next key')
      const nextKeyIndex = (keyIndex + 1) % SPOONACULAR_API_KEYS.length
      currentApiKeyIndex = nextKeyIndex // Update the current key index
      return fetchWithKey(nextKeyIndex)
    }

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`)
    }

    return response.json()
  }

  const result = await fetchWithKey(currentApiKeyIndex)
  return result
}

export { useFetch }
