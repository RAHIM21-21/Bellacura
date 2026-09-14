'use client'

import { useEffect } from 'react'

export default function PurchasePixel({ value = 59.90, currency = 'EUR', eventId }: { value?: number; currency?: string; eventId?: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      const eventData: Record<string, unknown> = { value, currency }
      if (eventId) eventData.eventID = eventId
      ;(window as any).fbq('track', 'Purchase', eventData, eventId ? { eventID: eventId } : undefined)
    }
  }, [])

  return null
}
