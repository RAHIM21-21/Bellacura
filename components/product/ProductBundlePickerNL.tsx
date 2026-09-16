'use client'

import { useState } from 'react'
import Image from 'next/image'

const CHECKOUT_SINGLE = 'https://bellacura-shop.myshopify.com/cart/48232541651102:1?checkout'
const CHECKOUT_DOUBLE = 'https://bellacura-shop.myshopify.com/cart/48238649606302:1?checkout'

const bundles = [
  {
    id: 'single',
    label: 'BellaCura Anti-Cellulitis Massager',
    subtitle: 'Cupping + warmte + vibratie + rood licht',
    tag: 'BESTSELLER',
    tagColor: 'bg-red-600',
    price: 59.95,
    originalPrice: 119.00,
    savings: 'Bespaar €59,05',
    perUnit: null,
    href: CHECKOUT_SINGLE,
  },
  {
    id: 'double',
    label: 'BellaCura DuoPakket',
    subtitle: '€49,50 per stuk · Bespaar €138,10',
    tag: 'BESTE WAARDE',
    tagColor: 'bg-amber-500',
    price: 99.00,
    originalPrice: 238.00,
    savings: 'Bespaar €139,00',
    perUnit: '€49,50 per stuk',
    href: CHECKOUT_DOUBLE,
  },
]

const freeGifts = [
  { name: 'Anti-Cellulitis Gids PDF', value: '€19,90' },
  { name: 'Gratis Expresverzending vanuit Italië', value: '€4,90' },
  { name: 'Detox Voedingsschema', value: '€14,90' },
]

export default function ProductBundlePickerNL() {
  const [selected, setSelected] = useState('single')
  const active = bundles.find((b) => b.id === selected)!

  return (
    <div className="space-y-4">

      {/* Bundle selector header */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
          Kies jouw pakket — Bespaar tot €139
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
              className={`relative w-full flex items-center gap-3 p-3 md:p-4 rounded-2xl border-2 text-left transition-all ${
                isSelected
                  ? 'border-[#1D3557] bg-[#DCEAF2] shadow-md'
                  : 'border-gray-200 bg-white hover:border-[#7EC8D4]'
              }`}
            >
              <span className={`absolute -top-3 right-4 ${bundle.tagColor} text-white text-[10px] font-bold px-3 py-0.5 rounded-full tracking-wide uppercase`}>
                {bundle.tag}
              </span>
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shrink-0 shadow-sm">
                <Image src="/images/product-green-hero.jpg" alt="BellaCura" fill className="object-cover" />
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
          href={active.href}
          className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 active:bg-[#0f1c2e] text-white font-bold text-base py-4 rounded-2xl transition-all shadow-lg shadow-[#A8DADC]"
        >
          Bestel Nu — Betaal Veilig Online →
        </a>
      </div>

      {/* Inbegrepen */}
      <div className="pt-1 pb-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">Inbegrepen bij jouw bestelling</span>
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
          { emoji: '🛡️', label: '90 Dagen Garantie' },
          { emoji: '🚚', label: 'Gratis Verzending' },
          { emoji: '🔒', label: 'Veilig Betalen' },
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
