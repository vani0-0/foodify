/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import type { RecipeInformation } from '@/server/spoonacular/recipes/types'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heading } from '../typography/heading'
import React from 'react'

type RecipeMoreInfoProps = Partial<RecipeInformation>

function RecipeMoreInfo(props: RecipeMoreInfoProps) {
  const { summary, sourceUrl, sourceName, instructions, analyzedInstructions } = props

  return (
    <div className='flex flex-col'>
      <section className="flex flex-col space-y-4 p-4">
        <Heading variant="h4" asChild>
          <h4>Summary</h4>
        </Heading>
        <hr />
        <div className="leading-7 [&:not(:first-child)]:mt-6" dangerouslySetInnerHTML={{ __html: summary! }} />
      <a href={sourceUrl} target="_blank" className="text-blue-800 dark:text-blue-200">view source: {sourceName}</a>

      </section>

      <section className="flex flex-col space-y-4 p-4">
        <Heading variant="h4" asChild>
          <h4>Instructions</h4>
        </Heading>
        <hr />
        <div className="leading-7 [&:not(:first-child)]:mt-6" dangerouslySetInnerHTML={{ __html: instructions! }} />
      </section>

      <section className="flex flex-col space-y-4 p-4">
        {analyzedInstructions && analyzedInstructions.map((instruction, index) => (
          <Card key={React.useId()}>
            <CardHeader>
              <CardTitle>{`Instruction Set ${index + 1}`}</CardTitle>
              <span className='text-muted-foreground text-xs'>{instruction.name ?? ''}</span>
              <hr />
            </CardHeader>
            <CardContent>
              {instruction.steps.map(step => (
                <Step key={step.number} {...step} />
              ))}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}

interface StepProps {
  number: number
  step: string
  ingredients: Array<{ name: string }>
  equipment: Array<{ name: string }>
  length?: { number: number, unit: string }
}

function Step({ number, step, ingredients, equipment, length }: StepProps) {
  return (
    <div className="mb-4 last:mb-0">
      <h5 className="font-semibold mb-2">
        Step{' '}
        {number}
      </h5>
      <p className="mb-2">{step}</p>
      {ingredients.length > 0 && (
        <div className="mb-2">
          <span className="font-semibold">Ingredients: </span>
          {ingredients.map(ingredient => (
            <Badge key={ingredient.name} variant="secondary" className="mr-1">
              {ingredient.name}
            </Badge>
          ))}
        </div>
      )}
      {equipment.length > 0 && (
        <div className="mb-2">
          <span className="font-semibold">Equipment: </span>
          {equipment.map(item => (
            <Badge key={item.name} variant="outline" className="mr-1">
              {item.name}
            </Badge>
          ))}
        </div>
      )}
      {length && (
        <div>
          <span className="font-semibold">Time: </span>
          {length.number}
          {' '}
          {length.unit}
        </div>
      )}
    </div>
  )
}

export default RecipeMoreInfo
