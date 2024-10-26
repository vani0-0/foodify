import type { Metadata, Viewport } from 'next'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Montserrat } from 'next/font/google'
import Provider from './_providers'
import './globals.css'

const montserrat = Montserrat({
  preload: true,
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `$s - ${siteConfig.name}`,
  },
  description: siteConfig.desciption,
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(montserrat.className, 'min-h-screen bg-background antialiased transition-all duration-150')} suppressHydrationWarning>
        <Provider>
          <div className="relative flex flex-col min-h-screen bg-background">
            {children}
          </div>
          <TailwindIndicator />
        </Provider>
      </body>
    </html>
  )
}
