import GoBack from '@/components/go-back'
import { Button } from '@/components/ui/button'
import { EggOff, Home } from 'lucide-react'
import Link from 'next/link'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">404</h1>
          <h2 className="text-2xl font-semibold tracking-tight">Page Not Found</h2>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed.</p>

          <div className="w-full max-w-sm mx-auto">
            <EggOff className="w-32 h-32 mx-auto" />
          </div>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <GoBack />
        </div>
      </div>
    </div>
  )
}

export default NotFound
