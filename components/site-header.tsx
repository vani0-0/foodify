import { EggIcon } from 'lucide-react'
import Link from 'next/link'
import ModeToggler from './mode-toggler'
import { Heading } from './typography/heading'

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 border-b-2 backdrop-blur supports-[backdrop-filter]:bg-green-200/80 dark:supports-[backdrop-filter]:bg-green-800/80 flex justify-center">
      <div className="container px-2 flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center text-green-800 dark:text-green-200">
          <EggIcon className="mr-1 fill-current" size={20} fill="true" />
          <Heading variant="h4" className="font-bold" asChild>
            <span>foodify</span>
          </Heading>
        </Link>
        <div className="ml-auto">
          <ModeToggler />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
