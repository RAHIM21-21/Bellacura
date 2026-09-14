'use client'

import { useState } from 'react'
import { Package } from 'lucide-react'

export default function TrackingEmailForm({
  orderRef,
  nome,
  indirizzo,
}: {
  orderRef?: string
  nome?: string
  indirizzo?: string
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      await fetch('/api/capture-tracking-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          order_ref: orderRef,
          nome,
          indirizzo,
        }),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="bg-[#1D3557] rounded-2xl p-5 text-center">
        <div className="text-3xl mb-2">✅</div>
        <p className="font-semibold text-white text-sm">Perfetto! Controlla la tua email — ti abbiamo inviato tutti i dettagli.</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-[#DCEAF2] rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <Package size={17} className="text-[#457B9D] flex-shrink-0" />
        <p className="font-semibold text-[#1D3557] text-sm">Ricevi aggiornamenti sul tuo pacco</p>
      </div>
      <p className="text-gray-400 text-xs mb-4 leading-relaxed">
        Lascia la tua email — ti inviamo il numero di tracking non appena il pacco parte, così sai esattamente quando arriva.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="La tua email"
          className="w-full border border-[#DCEAF2] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#457B9D] bg-[#F8FBFD]"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#457B9D] text-white text-sm font-semibold py-3 rounded-xl hover:bg-[#366483] transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? 'Invio...' : '📦 Ricevi il tracking'}
        </button>
        {status === 'error' && <p className="text-red-500 text-xs text-center">Qualcosa è andato storto. Riprova.</p>}
      </form>
      <p className="text-gray-400 text-xs text-center mt-2">Facoltativo · Nessuno spam</p>
    </div>
  )
}
