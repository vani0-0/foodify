import type { RecipeInformation } from '@/server/spoonacular/recipes/types'
import Image from 'next/image'
import { Heading } from '../typography/heading'
import { AspectRatio } from '../ui/aspect-ratio'
import { Badge } from '../ui/badge'
import { Skeleton } from '../ui/skeleton'

type RecipeStatsProps = Partial<RecipeInformation>

function RecipeInfoHeader(props: RecipeStatsProps) {
  const {
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    veryHealthy,
    cheap,
    veryPopular,
    sustainable,
    lowFodmap,
    weightWatcherSmartPoints,
    aggregateLikes,
    healthScore,
    title,
    image,
  } = props

  return (
    <div className="flex flex-col space-y-4 p-4">
      <Heading asChild>
        <h1>{title}</h1>
      </Heading>
      <hr />
      <div className="container max-w-4xl mx-auto space-y-4 flex flex-col">
        <DisplayImage image={image} />
        <div className="flex space-x-2 w-full justify-end">
          {vegetarian && <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">Vegetarian</Badge>}
          {vegan && <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">Vegan</Badge>}
          {glutenFree && <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">Gluten Free</Badge>}
          {dairyFree && <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">Dairy Free</Badge>}
          {veryHealthy && <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">Very Healthy</Badge>}
          {cheap && <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">Cheap</Badge>}
          {veryPopular && <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">Very Popular</Badge>}
          {sustainable && <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">Sustainable</Badge>}
          {lowFodmap && <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">Low FODMAP</Badge>}
          {weightWatcherSmartPoints !== undefined && (
            <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">
              Weight Watchers Points: &nbsp;
              {weightWatcherSmartPoints}
            </Badge>
          )}
          {aggregateLikes !== undefined && (
            <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">
              Likes:&nbsp;
              {aggregateLikes}
            </Badge>
          )}
          {healthScore !== undefined && (
            <Badge variant="default" className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white">
              Health Score:&nbsp;
              {healthScore}
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}

function DisplayImage({ image }: { image?: string }) {
  return (
    <AspectRatio ratio={16 / 9}>
      {image !== undefined
        ? (
            <Image
              src={image}
              alt="food-info-image"
              quality={100}
              className="rounded-xl object-cover "
              sizes="100"
              fill
              priority
            />
          )
        : <Skeleton className="h-full w-full rounded-xl" />}
    </AspectRatio>
  )
}

export default RecipeInfoHeader
