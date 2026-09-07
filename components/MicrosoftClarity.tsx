'use client'

import { useEffect } from 'react'

export default function MicrosoftClarity() {
  useEffect(() => {
    // Microsoft Clarity — session recordings & heatmaps
    const w = window as any
    w.clarity = w.clarity || function(...args: any[]) {
      (w.clarity.q = w.clarity.q || []).push(args)
    }
    const t = document.createElement('script')
    t.async = true
    t.src = 'https://www.clarity.ms/tag/yen8wbdwef'
    const y = document.getElementsByTagName('script')[0]
    y.parentNode?.insertBefore(t, y)
  }, [])
  return null
}
