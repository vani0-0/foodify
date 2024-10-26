'use server'

import type { PixabayImage } from './types'
import { PIXABAY_API_KEY } from '@/config/env'

async function searchImage({ name }: { name: string }) {
  try {
    const query: Record<string, string> = {}
    if (name)
      query.q = name

    const queryString = new URLSearchParams({ key: PIXABAY_API_KEY, ...query, image_type: 'photo', orientation: 'horizontal' }).toString()
    const url = `https://pixabay.com/api?${queryString}`
    const response = await fetch(url, { method: 'GET' })

    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`)

    const data = await response.json() as PixabayImage
    return data.total > 1 ? data.hits[0] : null
  }
  catch (error) {
    throw new Error(error as string)
  }
}

export { searchImage }
