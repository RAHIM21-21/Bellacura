'use client'

import { useEffect } from 'react'

export default function CrispChat() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
    if (!id) return
    ;(window as any).$crisp = []
    ;(window as any).CRISP_WEBSITE_ID = id

    const s = document.createElement('script')
    s.src = 'https://client.crisp.chat/l.js'
    s.async = true
    // Hide the default Crisp chat bubble once loaded — we use WhatsApp instead
    s.onload = () => {
      ;(window as any).$crisp.push(['do', 'chat:hide'])
    }
    document.head.appendChild(s)
  }, [])
  return null
}
