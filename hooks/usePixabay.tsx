import { searchImage } from '@/server/pixabay/actions'
import { useQuery } from '@tanstack/react-query'

function usePixabay({ name }: { name: string }) {
  return useQuery({
    queryKey: ['search-image', name],
    queryFn: () => searchImage({ name }),
  })
}

export { usePixabay }
