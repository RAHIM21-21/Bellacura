'use client'

import { useEffect } from 'react'

export default function MicrosoftClarity() {
  useEffect(() => {
    // Defer Clarity until the browser is idle (max 4s) so it doesn't block LCP
    const load = () => {
      const w = window as any
      w.clarity = w.clarity || function(...args: any[]) {
        (w.clarity.q = w.clarity.q || []).push(args)
      }
      const t = document.createElement('script')
      t.async = true
      t.src = 'https://www.clarity.ms/tag/yen8wbdwef'
      const y = document.getElementsByTagName('script')[0]
      y.parentNode?.insertBefore(t, y)
    }

    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(load, { timeout: 4000 })
      return () => (window as any).cancelIdleCallback(id)
    } else {
      const timer = setTimeout(load, 4000)
      return () => clearTimeout(timer)
    }
  }, [])
  return null
}
