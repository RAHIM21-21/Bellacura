'use client'

import { useEffect } from 'react'

export default function CrispChat() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
    if (!id) return

    // Inject CSS to lift Crisp bubble above the sticky CTA bar on mobile
    const style = document.createElement('style')
    style.textContent = `
      @media (max-width: 768px) {
        #crisp-chatbox > div { bottom: 90px !important; }
      }
    `
    document.head.appendChild(style)

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
