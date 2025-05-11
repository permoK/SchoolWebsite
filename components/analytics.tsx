"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // For static export, we'll just use the pathname without search params
    const url = pathname

    // Example analytics tracking
    console.log(`Page view: ${url}`)

    // Here you would typically call your analytics service
    // Example with Google Analytics:
    // if (typeof window.gtag === 'function') {
    //   window.gtag('config', 'GA-MEASUREMENT-ID', {
    //     page_path: url,
    //   })
    // }
  }, [pathname])

  return null
}

