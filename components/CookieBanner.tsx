'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { grantConsent } from '@/lib/meta-client'

const KEY = 'bc_consent'
const SIX_MONTHS_MS = 6 * 30 * 24 * 60 * 60 * 1000

type Consent = { marketing: boolean; date: string }

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const c: Consent = JSON.parse(raw)
    if (!c?.date) return null
    if (Date.now() - new Date(c.date).getTime() > SIX_MONTHS_MS) return null
    return c
  } catch { return null }
}

function saveConsent(marketing: boolean) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ marketing, date: new Date().toISOString() }))
  } catch {}
}

export default function CookieBanner() {
  const [visible, setVisible]           = useState(false)
  const [panelOpen, setPanelOpen]       = useState(false)
  const [marketingOn, setMarketingOn]   = useState(false)
  const bannerRef                        = useRef<HTMLDivElement>(null)

  /* On mount: apply existing consent or show banner */
  useEffect(() => {
    const consent = readConsent()
    if (consent === null) {
      setVisible(true)
    } else if (consent.marketing) {
      grantConsent()
    }
    /* Expose opener for footer link */
    ;(window as { bcOpenCookieBanner?: () => void }).bcOpenCookieBanner = () => {
      setVisible(true)
      setPanelOpen(false)
    }
    return () => {
      delete (window as { bcOpenCookieBanner?: () => void }).bcOpenCookieBanner
    }
  }, [])

  /* Keep CSS var in sync so sticky CTA can move up */
  useEffect(() => {
    const el = bannerRef.current
    if (!el || !visible) {
      document.documentElement.style.setProperty('--bc-banner-h', '0px')
      return
    }
    const update = () =>
      document.documentElement.style.setProperty('--bc-banner-h', el.offsetHeight + 'px')
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [visible, panelOpen])

  function dismiss() {
    document.documentElement.style.setProperty('--bc-banner-h', '0px')
    setVisible(false)
    setPanelOpen(false)
  }

  function acceptAll() {
    saveConsent(true)
    grantConsent()
    dismiss()
  }

  function refuseAll() {
    saveConsent(false)
    dismiss()
  }

  function savePrefs() {
    saveConsent(marketingOn)
    if (marketingOn) grantConsent()
    dismiss()
  }

  if (!visible) return null

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-modal="false"
      aria-label="Preferenze cookie"
      className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-gray-200"
      style={{ boxShadow: '0 -4px 24px rgba(0,0,0,0.08)' }}
    >
      {/* ── Personalizza panel ──────────────────────────────── */}
      {panelOpen && (
        <div className="border-b border-gray-100 px-4 py-5">
          <div className="max-w-4xl mx-auto space-y-4">

            {/* Necessari — locked */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Necessari{' '}
                  <span className="text-xs font-normal text-gray-500">sempre attivi</span>
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Servono al funzionamento del sito: carrello, ordine, sicurezza. Non possono essere disattivati.
                </p>
              </div>
              {/* Locked on-toggle */}
              <div
                aria-disabled="true"
                className="shrink-0 mt-0.5 w-10 h-6 rounded-full relative cursor-not-allowed"
                style={{ background: '#1D3557', opacity: 0.45 }}
              >
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>

            {/* Marketing e statistiche — toggleable */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">Marketing e statistiche</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Ci permettono di misurare le visite e l'efficacia dei nostri annunci su Facebook e Instagram (Meta).
                </p>
              </div>
              <button
                role="switch"
                aria-checked={marketingOn}
                onClick={() => setMarketingOn(v => !v)}
                className="shrink-0 mt-0.5 w-10 h-6 rounded-full relative transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D3557]"
                style={{ background: marketingOn ? '#1D3557' : '#D1D5DB' }}
              >
                <span
                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200"
                  style={{ left: marketingOn ? 'calc(100% - 1.25rem)' : '0.25rem' }}
                />
                <span className="sr-only">{marketingOn ? 'Attivo' : 'Non attivo'}</span>
              </button>
            </div>

            <button
              onClick={savePrefs}
              className="bg-[#1D3557] text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-[#16294a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D3557]"
            >
              Salva preferenze
            </button>
          </div>
        </div>
      )}

      {/* ── Main bar ────────────────────────────────────────── */}
      <div className="px-4 py-4">
        <div className="max-w-4xl mx-auto pr-6 md:flex md:items-center md:gap-8">

          {/* Text */}
          <div className="mb-4 md:mb-0 md:flex-1">
            <p className="text-sm font-bold text-gray-900 mb-1">Rispettiamo la tua privacy</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Usiamo cookie tecnici, necessari al funzionamento del sito, e, solo con il tuo consenso,
              cookie di marketing e statistica per misurare le visite e mostrarti annunci più pertinenti.
              Puoi cambiare idea in qualsiasi momento dal link &ldquo;Preferenze cookie&rdquo; in fondo alla pagina.{' '}
              <Link href="/cookie-policy/" className="underline text-[#1D3557] hover:text-[#16294a]">
                Cookie policy
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 md:shrink-0">
            <div className="flex gap-2">
              <button
                onClick={refuseAll}
                className="flex-1 md:flex-none bg-[#1D3557] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#16294a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D3557] whitespace-nowrap"
              >
                Rifiuta
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 md:flex-none bg-[#1D3557] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#16294a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D3557] whitespace-nowrap"
              >
                Accetta tutti
              </button>
            </div>
            <div className="text-center md:text-left">
              <button
                onClick={() => setPanelOpen(v => !v)}
                className="text-xs text-[#1D3557] underline hover:text-[#16294a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D3557] rounded"
              >
                Personalizza
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* X = refusal */}
      <button
        onClick={refuseAll}
        aria-label="Chiudi e rifiuta i cookie di marketing"
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D3557]"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
