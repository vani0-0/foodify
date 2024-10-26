import loading from '@/assets/Food Rush Loader.gif'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

function Loading() {
  return (
    <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-2xl p-4">
      <CardContent>
        <Image src={loading} alt="Loading..." width={500} height={500} />
      </CardContent>
    </Card>
  )
}

export default Loading
