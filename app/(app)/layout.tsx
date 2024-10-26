import SiteHeader from '@/components/site-header'
import React from 'react'

interface AppLayoutProps {
  children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      
      <main className="flex-1 flex flex-col items-center">{children}</main>
    </>
  )
}

export default AppLayout
