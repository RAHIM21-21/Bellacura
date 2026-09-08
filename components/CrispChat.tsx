'use client'

import { useEffect } from 'react'

export default function CrispChat() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
    if (!id) return

    // Load after page is idle — max 2s wait so the bubble appears quickly
    const load = () => {
      ;(window as any).$crisp = []
      ;(window as any).CRISP_WEBSITE_ID = id

      const s = document.createElement('script')
      s.src = 'https://client.crisp.chat/l.js'
      s.async = true
      document.head.appendChild(s)
    }

    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(load, { timeout: 2000 })
      return () => (window as any).cancelIdleCallback(id)
    } else {
      const timer = setTimeout(load, 2000)
      return () => clearTimeout(timer)
    }
  }, [])
  return null
}
