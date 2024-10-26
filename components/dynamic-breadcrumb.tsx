'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function DynamicBreadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`
          const isLast = index === pathSegments.length - 1

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast
                  ? (
                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                  )
                  : (
                    <BreadcrumbLink href={href}>
                      {segment}
                    </BreadcrumbLink>
                  )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
