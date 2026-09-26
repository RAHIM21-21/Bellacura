'use client'
/* Null-rendering client component: fires ViewContent on mount and
   delegates InitiateCheckout to all "checkout-scelta" link clicks. */
import { useEffect } from 'react'
import { trackViewContent, trackInitiateCheckout } from '@/lib/meta-client'

export default function PdpTrackers({ value }: { value: number }) {
  useEffect(() => {
    // ViewContent on PDP load
    try { trackViewContent(value) } catch {}

    // InitiateCheckout on any checkout link click (event delegation — works even for CtaBtn <a> tags)
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href*="checkout-scelta"]')
      if (!a) return
      const href = (a as HTMLAnchorElement).href
      const isDouble = href.includes('bundle=double')
      try { trackInitiateCheckout(isDouble ? 99.90 : 59.99, isDouble ? 2 : 1) } catch {}
    }
    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [value])
  return null
}
