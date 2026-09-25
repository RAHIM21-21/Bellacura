'use client'
import { useEffect } from 'react'

export default function CrispChat() {
  useEffect(() => {
    // Load Crisp for visitor tracking only — chat widget is hidden via CSS
    const w = window as typeof window & { $crisp?: unknown[]; CRISP_WEBSITE_ID?: string }
    w.$crisp = []
    w.CRISP_WEBSITE_ID = 'e5be4a38-80a0-4481-a9fc-fea93a34e20a'
    const script = document.createElement('script')
    script.src = 'https://client.crisp.chat/l.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    // Hide the Crisp chat bubble while keeping tracking active
    <style>{`
      .crisp-client .crisp-1mlsm4m,
      .crisp-client #crisp-chatbox,
      #crisp-chatbox,
      .cc-unoo { display: none !important; }
    `}</style>
  )
}
