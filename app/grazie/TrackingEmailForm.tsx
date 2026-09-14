'use client'

import { useState } from 'react'
import { Package } from 'lucide-react'

export default function TrackingEmailForm({ orderRef }: { orderRef?: string }) {
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
        body: JSON.stringify({ email: email.trim().toLowerCase(), order_ref: orderRef }),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="bg-[#EEF6FB] border border-[#DCEAF2] rounded-2xl p-5 text-center">
        <div className="text-3xl mb-2">✅</div>
        <p className="font-semibold text-[#1D3557] text-sm">Perfetto! Ti inviamo il numero di tracking entro 24 ore.</p>
      </div>
    )
  }

  return (
    <div className="bg-[#EEF6FB] border border-[#DCEAF2] rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-1">
        <Package size={18} className="text-[#457B9D]" />
        <p className="font-semibold text-[#1D3557] text-sm">Ricevi il numero di tracking del tuo pacco</p>
      </div>
      <p className="text-gray-500 text-xs mb-4 leading-relaxed">
        Lascia la tua email e ti inviamo il codice di tracciamento non appena il pacco parte — così sai esattamente quando arriva la tua consegna.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="La tua email"
          className="w-full border border-[#DCEAF2] rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#457B9D] bg-white"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#1D3557] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#152840] transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? 'Invio...' : '📦 Ricevi il tracking'}
        </button>
        {status === 'error' && <p className="text-red-500 text-xs text-center">Qualcosa è andato storto. Riprova.</p>}
      </form>
      <p className="text-gray-400 text-xs text-center mt-2">Facoltativo · Nessuno spam</p>
    </div>
  )
}
