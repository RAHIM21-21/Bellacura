'use client'

import { useEffect } from 'react'

export default function PurchasePixel({ value = 59.90, currency = 'EUR' }: { value?: number; currency?: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      ;(window as any).fbq('track', 'Purchase', { value, currency })
    }
  }, [])

  return null
}
