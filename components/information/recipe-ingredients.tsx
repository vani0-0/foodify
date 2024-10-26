/* eslint-disable @next/next/no-img-element */
'use client'

import type { ExtendedIngredient as ExtendedIngredientProps, RecipeInformation } from '@/server/spoonacular/recipes/types'
import placeholderIMG from '@/assets/placeholder.jpg'
import { usePixabay } from '@/hooks/usePixabay'
import { AlertCircle, Terminal } from 'lucide-react'
import React from 'react'
import { Heading } from '../typography/heading'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Card, CardContent } from '../ui/card'

type RecipeIngredientsProps = Partial<RecipeInformation>

export default function RecipeIngredients({ extendedIngredients }: RecipeIngredientsProps) {
  return (
    <section className="flex flex-col space-y-4 p-4">
      <Heading variant="h2">
        Ingredients
      </Heading>
      <hr />
      <div className="container mx-auto space-y-4 flex flex-col">
        {extendedIngredients?.length
          ? (
              <ul className="grid grid-cols-1 gap-4  md:grid-cols-2 2xl:grid-cols-3">
                {extendedIngredients.map(ingredient => (
                  <li key={ingredient.id}>
                    <ExtendedIngredient ingredient={ingredient} />
                  </li>
                ))}
              </ul>
            )
          : (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>No Ingredients Found</AlertTitle>
                <AlertDescription>Please try reloading the page.</AlertDescription>
              </Alert>
            )}
      </div>
    </section>
  )
}

function ExtendedIngredient({ ingredient }: { ingredient: ExtendedIngredientProps }) {
  const { name, image, original } = ingredient
  const { data, status, error } = usePixabay({ name: image })

  if (status === 'error') {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>
          Error:
          {error.name}
        </AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    )
  }

  const imageUrl = status === 'success' && data ? data.webformatURL : placeholderIMG.src

  return (
    <Card className="overflow-hidden">
      <CardContent className="relative p-0">
        <div className="relative h-40 flex items-center justify-center">
          {status === 'pending'
            ? (
                <img
                  src={placeholderIMG.src}
                  alt={name}
                  className="object-cover object-center"
                  height={40}
                />
              )
            : (
                <img
                  src={imageUrl}
                  alt={name}
                  className="object-cover object-center"
                  height={40}
                />
              )}
        </div>
        <div className="absolute bottom-0 px-4 py-2 text-white bg-black/80 w-full">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-white/80">{original}</p>
        </div>
      </CardContent>
    </Card>
  )
}
