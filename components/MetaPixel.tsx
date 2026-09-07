'use client'

import { useEffect } from 'react'

export default function MetaPixel() {
  useEffect(() => {
    // Meta Pixel — ID 1055883607362457
    const w = window as any
    if (w.fbq) return
    const n: any = w.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!w._fbq) w._fbq = n
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = []
    const t = document.createElement('script')
    t.async = true
    t.src = 'https://connect.facebook.net/en_US/fbevents.js'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode?.insertBefore(t, s)
    w.fbq('init', '1055883607362457')
    w.fbq('track', 'PageView')
  }, [])

  return (
    <noscript>
      <img
        height="1" width="1" style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1055883607362457&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  )
}
