'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const CHECKOUT_PATHS = ['/checkout-scelta', '/checkout', '/grazie']

export default function ExitIntentPopup() {
  const pathname = usePathname()
  const isCheckout = CHECKOUT_PATHS.some(p => pathname?.startsWith(p))

  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const triggered = useRef(false)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())

  useEffect(() => {
    if (isCheckout) return
    if (sessionStorage.getItem('exit_popup_seen')) return

    // Desktop: mouse leaves from the top of the viewport
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered.current) {
        triggered.current = true
        setVisible(true)
        sessionStorage.setItem('exit_popup_seen', '1')
      }
    }

    // Mobile + desktop: fast scroll back to top
    const onScroll = () => {
      const currentY = window.scrollY
      const currentTime = Date.now()
      const dy = lastScrollY.current - currentY
      const dt = currentTime - lastScrollTime.current

      if (
        !triggered.current &&
        dy > 0 &&
        currentY < 120 &&
        lastScrollY.current > 400 &&
        dt > 0 &&
        (dy / dt) * 1000 > 800
      ) {
        triggered.current = true
        setVisible(true)
        sessionStorage.setItem('exit_popup_seen', '1')
      }

      lastScrollY.current = currentY
      lastScrollTime.current = currentTime
    }

    // Time on site: trigger after 40 seconds if not yet shown
    const timeoutId = setTimeout(() => {
      if (!triggered.current) {
        triggered.current = true
        setVisible(true)
        sessionStorage.setItem('exit_popup_seen', '1')
      }
    }, 60000)

    document.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('scroll', onScroll)
    }
  }, [isCheckout])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/capture-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'exit_popup' }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (isCheckout || !visible) return null

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) setVisible(false) }}
    >
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none z-10"
          aria-label="Chiudi"
        >
          ×
        </button>

        <div className="bg-[#DCEAF2] px-8 pt-8 pb-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-[#457B9D] mb-2">Offerta esclusiva</p>
          <h2 className="text-3xl font-black text-gray-900 leading-tight mb-1">
            Aspetta — <span className="text-[#1D3557]">-10%</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Lascia la tua email e ricevi subito un codice sconto del 10% sul tuo primo ordine.
          </p>
        </div>

        <div className="px-8 py-6">
          {status === 'success' ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">🎉</div>
              <p className="font-bold text-gray-800 text-lg">Fatto!</p>
              <p className="text-gray-500 text-sm mt-1">
                Controlla la tua email, il codice sconto è in arrivo.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Se non lo ricevi entro 5 minuti, controlla la cartella spam.
              </p>
              <button
                onClick={() => setVisible(false)}
                className="mt-5 w-full bg-[#1D3557] text-white font-bold py-3 rounded-2xl hover:bg-[#152840] transition"
              >
                Vai allo shop →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                placeholder="La tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#1D3557] text-white font-bold py-3 rounded-2xl hover:bg-[#152840] transition disabled:opacity-60"
              >
                {status === 'loading' ? 'Invio in corso…' : 'Ricevi il codice sconto -10%'}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-xs text-center">Qualcosa è andato storto. Riprova.</p>
              )}
            </form>
          )}
        </div>

        <div className="border-t border-gray-100 px-8 py-3 flex justify-center gap-6 text-xs text-gray-400">
          <span>🔒 Dati sicuri</span>
          <span>📦 Spedizione gratis</span>
          <span>↩️ Reso 14 giorni</span>
        </div>
      </div>
    </div>
  )
}
