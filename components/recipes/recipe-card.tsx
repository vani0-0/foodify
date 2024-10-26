import type { RecipeType } from '@/server/spoonacular/recipes/types'
import Image from 'next/image'
import Link from 'next/link'
import StarRating from '../star-rating'
import { AspectRatio } from '../ui/aspect-ratio'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardFooter } from '../ui/card'

function RecipeCard({ recipe }: { recipe: RecipeType }) {
  const { image, title, diets, healthScore, id } = recipe
  return (
    <Card className="relative overflow-hidden mb-4">
      <CardContent className="p-0">
        <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
          <Image
            src={image}
            alt={title}
            quality={100}
            className="rounded-md object-cover rounded-b-none hover:scale-105 transition-all"
            sizes="100"
            fill
          />
        </AspectRatio>
        <div className="px-2 py-4">
          <p className="min-h-[48px] cursor-pointer">
            {title}
            {' '}
          </p>
        </div>
        <div className="flex items-center pb-2 text-xs">
          <StarRating rating={healthScore} />
        </div>
        <div className="px-2">
          {diets.map(diet => <Badge key={diet} variant="outline" className="cursor-pointer">{diet}</Badge>)}
        </div>
      </CardContent>
      <CardFooter className="pb-10">
        <Button variant="link" className="absolute  bottom-0 left-0">
          <Link href={`recipes/${id}`} target="_blank">view recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default RecipeCard
