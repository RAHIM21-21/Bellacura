import type { Metadata } from 'next'
import CheckoutEmailForm from './CheckoutEmailForm'

export const metadata: Metadata = {
  title: 'La tua offerta riservata — BellaCura',
  robots: { index: false, follow: false },
}

export default function CheckoutEmailPage() {
  return <CheckoutEmailForm />
}
