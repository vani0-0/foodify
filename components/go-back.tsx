'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

function GoBack() {
  const { back } = useRouter()

  return (
    <Button variant="outline" className="w-full" onClick={back}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      Go Back
    </Button>
  )
}

export default GoBack
