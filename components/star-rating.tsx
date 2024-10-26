import { Star, StarHalf } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

function FullStar() {
  return <Star className="fill-yellow-500 dark:fill-yellow-400 stroke-yellow-500 dark:stroke-yellow-400" />
}

function HalfStar() {
  return (
    <div className="flex">
      <Star className="stroke-yellow-500 dark:stroke-yellow-400" />
      <StarHalf className="absolute fill-yellow-500 dark:fill-yellow-400 stroke-yellow-500 dark:stroke-yellow-400" />
    </div>
  )
}

function EmptyStar() {
  return <Star className="stroke-yellow-500 dark:stroke-yellow-400" />
}

interface StarRatingProps {
  rating: number
}

function StarRating({ rating }: StarRatingProps) {
  const totalStars = 5
  const starValue = rating / 20

  const fullStars = Math.floor(starValue)
  const hasHalfStar = starValue % 1 !== 0
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0)

  const stars = []

  for (let fullStarIndex = 0; fullStarIndex < fullStars; fullStarIndex++) {
    stars.push(<FullStar key={`full-star-${rating}-${fullStarIndex}`} />)
  }

  if (hasHalfStar) {
    stars.push(<HalfStar key={`half-star-${rating}`} />)
  }

  for (let emptyStarIndex = 0; emptyStarIndex < emptyStars; emptyStarIndex++) {
    stars.push(<EmptyStar key={`empty-star-${rating}-${emptyStarIndex}`} />)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="flex items-center px-2 cursor-pointer">{stars}</TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">
            rating:
            <span>{` ${rating}`}</span>
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default StarRating
