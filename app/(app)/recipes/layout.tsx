import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'
import React from 'react'

interface RecipeLayoutProps {
  children: React.ReactNode
}

function Layout({ children }: RecipeLayoutProps) {
  return (
    <>
      <div className="flex w-full container py-2">
        <DynamicBreadcrumb />
      </div>
      <div className="container py-8 space-y-4">
        {children}
      </div>
    </>
  )
}

export default Layout
