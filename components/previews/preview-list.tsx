'use client'
import previews from '@/data/preview_data.json'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import PreviewCard from './preview-card'

function PreviewList() {
  return (
    <Carousel
      className="w-full"
      opts={{ align: 'start', loop: true }}
      plugins={[Autoplay({ delay: 3000 })]}
    >
      <CarouselContent>
        {previews.map(preview => (
          <CarouselItem key={preview.id} className="lg:basis-1/2 md:basis-full sm:basis-1/2">
            <PreviewCard preview={preview} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default PreviewList
