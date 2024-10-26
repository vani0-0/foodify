import type { RecipeInformation } from '@/server/spoonacular/recipes/types'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wine } from 'lucide-react'
import Image from 'next/image'
import StarRating from '../star-rating'

type WinePairingProps = Partial<RecipeInformation>

export default function WinePairing(props: WinePairingProps) {
  const { winePairing } = props

  if (winePairing === undefined || winePairing.pairedWines === undefined || winePairing.pairedWines?.length === 0) {
    return null
  }

  return (
    <Card className="flex flex-col flex-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wine className="w-6 h-6" />
          Wine Pairing
        </CardTitle>
        <CardDescription>Recommended wines for this recipe</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Paired Wines:</h3>
            <div className="flex flex-wrap gap-2">
              {winePairing.pairedWines?.map(wine => (
                <Badge key={wine} variant="secondary">
                  {wine}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Pairing Notes:</h3>
            <p className="text-sm text-muted-foreground">{winePairing.pairingText}</p>
          </div>
          {winePairing.productMatches && winePairing.productMatches.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Recommended Product:</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Image
                      src={winePairing.productMatches[0].imageUrl}
                      alt={winePairing.productMatches[0].title}
                      className="rounded-md"
                      width={28}
                      height={28}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{winePairing.productMatches[0].title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{winePairing.productMatches[0].description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{winePairing.productMatches[0].price}</span>
                        <StarRating rating={winePairing.productMatches[0].averageRating} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
