'use client'

import { useEffect } from 'react'

// Fires Meta Pixel AddToCart whenever any link to /checkout-scelta/ is clicked
export default function AddToCartTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href') || ''
      if (href.includes('checkout-scelta') || href.includes('checkout/')) {
        const fbq = (window as any).fbq
        if (fbq) {
          fbq('track', 'AddToCart', {
            value: 59.90,
            currency: 'EUR',
            content_name: 'Massaggiatore Anticellulite 4 in 1',
            content_ids: ['massaggiatore-4in1'],
            content_type: 'product',
          })
        }
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
  return null
}
