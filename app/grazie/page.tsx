import { Suspense } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import PurchasePixel from './PurchasePixel'
import TrackingEmailForm from './TrackingEmailForm'

export const metadata: Metadata = buildMetadata({
  title: 'Grazie per il tuo ordine!',
  description: 'Ordine ricevuto con successo.',
  path: '/grazie/',
  noIndex: true,
})

function GrazieContent({
  orderRef,
  nome,
  indirizzo,
  eventId,
}: {
  orderRef?: string
  nome?: string
  indirizzo?: string
  eventId?: string
}) {
  const firstName = nome ? nome.split(' ')[0] : null

  return (
    <div className="min-h-screen bg-[#F0F6FB] flex flex-col items-center justify-start py-10 px-4">
      <PurchasePixel eventId={eventId} />

      {/* Header */}
      <div className="w-full max-w-md">

        {/* Success badge */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-[#1D3557] flex items-center justify-center mb-5 shadow-lg">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#1D3557] mb-2">
            {firstName ? `Grazie, ${firstName}!` : 'Grazie per il tuo ordine!'}
          </h1>
          <p className="text-[#457B9D] text-base font-medium">Il tuo ordine è confermato ✓</p>
        </div>

        {/* Order summary */}
        <div className="bg-white rounded-2xl border border-[#DCEAF2] p-5 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#457B9D]">Riepilogo ordine</span>
            {orderRef && <span className="text-xs text-gray-400">{orderRef}</span>}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#1D3557]">BellaCura Massaggiatore Anticellulite</p>
              <p className="text-xs text-gray-400 mt-0.5">Pagamento alla consegna · 1 pz</p>
            </div>
            <span className="text-lg font-bold text-[#1D3557]">€59,90</span>
          </div>
          {indirizzo && (
            <div className="mt-3 pt-3 border-t border-[#EEF6FB]">
              <p className="text-xs text-gray-400 mb-0.5">Indirizzo di consegna</p>
              <p className="text-sm text-[#1D3557] font-medium">{indirizzo}</p>
            </div>
          )}
        </div>

        {/* Steps */}
        <div className="bg-white rounded-2xl border border-[#DCEAF2] p-5 mb-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#457B9D] mb-4">Cosa succede adesso</p>
          <ol className="space-y-3">
            {[
              { icon: '✅', text: 'Conferma d\'ordine ricevuta' },
              { icon: '📦', text: 'Pacco preparato e spedito entro 24h' },
              { icon: '🚚', text: 'Consegna in 2–4 giorni lavorativi' },
              { icon: '💵', text: 'Paghi in contanti alla consegna' },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-lg w-7 flex-shrink-0 text-center">{item.icon}</span>
                <span className="text-sm text-gray-700">{item.text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Tracking email form */}
        <div className="mb-5">
          <TrackingEmailForm orderRef={orderRef} nome={nome} indirizzo={indirizzo} />
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="block w-full text-center bg-[#1D3557] text-white font-semibold py-3.5 rounded-2xl hover:bg-[#152840] transition-colors text-sm mb-3"
        >
          Torna alla Home
        </Link>
        <p className="text-center text-xs text-gray-400">
          Domande?{' '}
          <a href="mailto:info@bellacura.it" className="text-[#457B9D] hover:underline">
            info@bellacura.it
          </a>
        </p>
      </div>
    </div>
  )
}

export default function GraziePage({
  searchParams,
}: {
  searchParams?: { ref?: string; nome?: string; ind?: string; eid?: string }
}) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#457B9D]">Caricamento...</div>}>
      <GrazieContent
        orderRef={searchParams?.ref}
        nome={searchParams?.nome}
        indirizzo={searchParams?.ind}
        eventId={searchParams?.eid}
      />
    </Suspense>
  )
}
