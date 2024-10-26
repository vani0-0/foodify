import type previews from '@/data/preview_data.json'
import Image from 'next/image'
import Link from 'next/link'
import StarRating from '../star-rating'
import { AspectRatio } from '../ui/aspect-ratio'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'

type PreviewType = typeof previews[0]

interface PreviewCardProp {
  preview: PreviewType
}

function PreviewCard(props: PreviewCardProp) {
  const { preview } = props

  return (
    <Card>
      <CardContent className="flex flex-col p-0">
        <AspectRatio ratio={3 / 2} className="bg-muted overflow-hidden">
          <Image
            src={preview.image}
            alt={preview.title}
            quality={100}
            className="rounded-md object-cover rounded-b-none"
            fill
          />
        </AspectRatio>
        <div className="px-2 py-4">
          <Link href={`/recipes/${preview.id}`}>
            <p className="min-h-[48px] cursor-pointer">
              {preview.title}
              {' '}
            </p>
          </Link>
        </div>
        <div className="flex items-center pb-2 text-xs">
          <StarRating rating={preview.healthScore} />
        </div>
        <div className="px-2">
          {preview.diets.map(diet => <Badge key={diet} variant="outline" className="cursor-pointer">{diet}</Badge>)}
        </div>
      </CardContent>
    </Card>
  )
}

export default PreviewCard
