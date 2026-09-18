'use client'

// AddToCart pixel event is now fired directly in /checkout-scelta/page.tsx
// on page load — more reliable than catching the click here since navigation
// could cancel the beacon before it was sent.
export default function AddToCartTracker() {
  return null
}
