import type { Metadata } from 'next'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import ProductBundlePicker from '@/components/product/ProductBundlePicker'
import StickyOrderButton from '@/components/product/StickyOrderButton'

export const metadata: Metadata = {
  title: 'BellaCura — Pelle più liscia e tonica dal primo utilizzo',
  description: 'Il protocollo anticellulite professionale ora a casa tua. Senza creme inutili, centri estetici costosi e risultati che non arrivano mai. Paga alla consegna. Spedizione 24-48h GRATIS.',
  robots: { index: false, follow: false },
}

const BULLETS = [
  {
    icon: '🔄',
    text: 'Riattiva la microcircolazione e rompe le aderenze fibrose dalla prima sessione',
  },
  {
    icon: '📅',
    text: 'Risultati visibili sulla texture cutanea dalla 3ª–4ª settimana',
  },
  {
    icon: '💡',
    text: 'Stimola naturalmente la produzione di collagene con luce rossa 660nm',
  },
  {
    icon: '🎯',
    text: 'Agisce in profondità dove nessuna crema può arrivare',
  },
]

export default function V2Page() {
  return (
    <>
      <StickyOrderButton />

      {/* ANNOUNCEMENT BAR */}
      <div className="py-2.5 px-4 bg-[#1D3557] text-center">
        <span className="text-white text-xs font-bold uppercase tracking-widest">
          ⚡ Spedizione gratuita · Pagamento alla consegna disponibile
        </span>
      </div>

      {/* HERO SECTION */}
      <section className="bg-white py-5 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Mobile: headline before image */}
          <div className="md:hidden mb-4 space-y-1">
            <p className="text-[#1D3557] text-[11px] font-bold uppercase tracking-widest">
              BellaCura® Original
            </p>
            <h1 className="text-[26px] font-extrabold text-gray-900 leading-tight">
              Pelle più liscia e tonica dal primo utilizzo con BellaCura
            </h1>
            <p className="text-base font-semibold text-[#E63946]">
              Senza creme inutili, centri estetici costosi e risultati che non arrivano mai!
            </p>
            {/* Stars */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-gray-900 text-sm">4.8/5.0</span>
              <span className="text-gray-400 text-xs">· 2.800+ recensioni</span>
            </div>
          </div>

          {/* Grid: carousel left, copy right */}
          <div className="grid md:grid-cols-[1fr_420px] gap-4 md:gap-10 items-start">

            {/* LEFT — Image gallery */}
            <ProductImageGallery />

            {/* RIGHT — Copy + Offer */}
            <div className="md:sticky md:top-24 space-y-4">

              {/* Desktop headline (hidden on mobile) */}
              <div className="hidden md:block space-y-2">
                <p className="text-[#1D3557] text-[11px] font-bold uppercase tracking-widest">
                  BellaCura® Original
                </p>
                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                  Pelle più liscia e tonica dal primo utilizzo con BellaCura
                </h1>
                <p className="text-lg font-semibold text-[#E63946]">
                  Senza creme inutili, centri estetici costosi e risultati che non arrivano mai!
                </p>
                {/* Stars */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">4.8/5.0</span>
                  <span className="text-gray-400 text-sm">· 2.800+ recensioni verificate</span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-sm font-medium text-gray-600 italic border-l-4 border-[#1D3557] pl-3">
                Il protocollo anticellulite professionale ora a casa tua
              </p>

              {/* Benefits */}
              <ul className="space-y-2.5">
                {BULLETS.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5 shrink-0">{b.icon}</span>
                    <span className="text-sm text-gray-700 leading-snug">{b.text}</span>
                  </li>
                ))}
              </ul>

              {/* Bundle picker + CTA */}
              <ProductBundlePicker />

              {/* Risk reversal */}
              <div className="bg-green-50 border border-green-200 rounded-2xl px-4 py-3 text-center space-y-0.5">
                <p className="text-sm font-bold text-green-800">🛡️ Garanzia 90 giorni — Soddisfatta o rimborsata</p>
                <p className="text-xs text-green-700">Se non vedi risultati visibili, ti rimborsiamo tutto. Senza domande, senza stress.</p>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-gray-50 rounded-xl p-2.5">
                  <p className="text-base">📦</p>
                  <p className="text-[11px] font-semibold text-gray-700 mt-1">Paga alla<br/>consegna</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-2.5">
                  <p className="text-base">🚚</p>
                  <p className="text-[11px] font-semibold text-gray-700 mt-1">Consegna<br/>24–48 ore</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-2.5">
                  <p className="text-base">💧</p>
                  <p className="text-[11px] font-semibold text-gray-700 mt-1">Certificato<br/>IPX7</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
