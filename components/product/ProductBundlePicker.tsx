'use client'

import { useState } from 'react'
import Image from 'next/image'

const bundles = [
  {
    id: 'single',
    label: 'BellaCura Massaggiatore',
    subtitle: 'Vibrazione + calore 45°C + 4 testine',
    tag: 'PIÙ VENDUTO',
    tagColor: 'bg-red-600',
    price: 59.90,
    originalPrice: 119.00,
    savings: 'Risparmi €59,10',
    perUnit: null,
    popular: false,
  },
  {
    id: 'double',
    label: 'BellaCura x2 — Coppia',
    subtitle: '€49,95 cad. · Risparmia €38,10',
    tag: 'MIGLIOR VALORE',
    tagColor: 'bg-amber-500',
    price: 99.90,
    originalPrice: 238.00,
    savings: 'Risparmi €138,10',
    perUnit: '€49,95 cad.',
    popular: true,
  },
]

const freeGifts = [
  { name: 'Guida Anti-Cellulite PDF', value: '€19,90' },
  { name: 'Spedizione Express Gratuita', value: '€4,90' },
  { name: 'Scheda Nutrizione Detox', value: '€14,90' },
]

export default function ProductBundlePicker() {
  const [selected, setSelected] = useState('single')
  const active = bundles.find((b) => b.id === selected)!

  return (
    <div className="space-y-4">

      {/* Bundle selector header */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
          Scegli il tuo kit — Risparmia fino a €100
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* Bundle cards */}
      <div className="space-y-3">
        {bundles.map((bundle) => {
          const isSelected = selected === bundle.id
          return (
            <button
              key={bundle.id}
              type="button"
              onClick={() => setSelected(bundle.id)}
              className={`relative w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                isSelected
                  ? 'border-rose-500 bg-rose-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-rose-300'
              }`}
            >
              <span className={`absolute -top-3 right-4 ${bundle.tagColor} text-white text-[10px] font-bold px-3 py-0.5 rounded-full tracking-wide uppercase`}>
                {bundle.tag}
              </span>
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-sm">
                <Image src="/images/massaggiatore-bellacura.jpg" alt="BellaCura" fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-sm leading-tight">{bundle.label}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{bundle.subtitle}</p>
                {bundle.savings && (
                  <p className="text-xs text-green-600 font-semibold mt-1">✓ {bundle.savings}</p>
                )}
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-gray-400 line-through leading-none">{bundle.originalPrice.toFixed(2).replace('.', ',')}€</p>
                <p className="font-extrabold text-gray-900 text-lg leading-tight">{bundle.price.toFixed(2).replace('.', ',')}€</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* CTA button */}
      <div className="pt-1">
        <a
          href={`/checkout-scelta/?bundle=${selected}`}
          className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 active:bg-rose-800 text-white font-bold text-base py-4 rounded-2xl transition-all shadow-lg shadow-rose-200"
        >
          Paga alla Consegna →
        </a>
      </div>

      {/* Incluso nel tuo ordine */}
      <div className="pt-1 pb-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">Incluso nel tuo ordine</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
        <div className="space-y-2">
          {freeGifts.map((g) => (
            <div key={g.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                <span className="text-sm text-gray-700">{g.name}</span>
              </div>
              <span className="text-xs text-gray-400 line-through ml-4">{g.value}</span>
            </div>
          ))}
        </div>
      </div>



      {/* Trust bar */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100">
        {[
          { emoji: '🛡️', label: 'Garanzia 14 giorni' },
          { emoji: '🚚', label: 'Spedizione Gratis' },
          { emoji: '🔒', label: 'Pagamento Sicuro' },
        ].map(({ emoji, label }) => (
          <div key={label} className="flex flex-col items-center gap-1 text-center">
            <span className="text-lg">{emoji}</span>
            <span className="text-[10px] text-gray-500 font-medium leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
