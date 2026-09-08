'use client'

import { useEffect } from 'react'

export default function CrispChat() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
    if (!id) return

    // Delay 4s so Crisp doesn't compete with LCP — it's hidden anyway (we use WhatsApp)
    const timer = setTimeout(() => {
      ;(window as any).$crisp = []
      ;(window as any).CRISP_WEBSITE_ID = id

      const s = document.createElement('script')
      s.src = 'https://client.crisp.chat/l.js'
      s.async = true

      document.head.appendChild(s)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])
  return null
}
