'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import PurchasePixel from './PurchasePixel'
import TrackingEmailForm from './TrackingEmailForm'

export default function GrazieClient({ orderRef }: { orderRef?: string }) {
  const [nome, setNome] = useState<string | null>(null)
  const [indirizzo, setIndirizzo] = useState<string | null>(null)

  useEffect(() => {
    try {
      setNome(sessionStorage.getItem('bc_nome'))
      setIndirizzo(sessionStorage.getItem('bc_indirizzo'))
    } catch {}
  }, [])

  const firstName = nome ? nome.split(' ')[0] : null

  return (
    <div className="min-h-screen bg-[#F0F6FB] flex flex-col items-center justify-start py-10 px-4">
      <PurchasePixel />

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
              { icon: '\u2705', text: "Conferma d\u2019ordine ricevuta" },
              { icon: '\U0001f4e6', text: 'Pacco preparato e spedito entro 24h' },
              { icon: '\U0001f69a', text: 'Consegna in 2\u20134 giorni lavorativi' },
              { icon: '\U0001f4b5', text: 'Paghi in contanti alla consegna' },
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
          <TrackingEmailForm orderRef={orderRef} nome={nome ?? undefined} indirizzo={indirizzo ?? undefined} />
        </div>

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
