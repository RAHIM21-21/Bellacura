import { Suspense } from 'react'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import GrazieClient from './GrazieClient'

export const metadata: Metadata = buildMetadata({
  title: 'Grazie per il tuo ordine!',
  description: 'Ordine ricevuto con successo.',
  path: '/grazie/',
  noIndex: true,
})

export default function GraziePage({
  searchParams,
}: {
  searchParams?: { ref?: string }
}) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#457B9D]">Caricamento...</div>}>
      <GrazieClient orderRef={searchParams?.ref} />
    </Suspense>
  )
}
