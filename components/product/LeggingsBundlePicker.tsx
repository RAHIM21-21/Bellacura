'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL']
const colors = [
 { id: 'nero', label: 'Nero', hex: '#1a1a1a' },
 { id: 'grigio', label: 'Grigio', hex: '#9ca3af' },
 { id: 'verde', label: 'Verde Militare', hex: '#4b5e3c' },
]

const bundles = [
 {
 id: 'single',
 label: '1 Leggings 3D BellaCura',
 sub: '+ Guida anticellulite OMAGGIO inclusa',
 tag: 'SPEDIZIONE GRATUITA',
 tagColor: 'bg-[#457B9D]',
 price: 34.90,
 originalPrice: 69.90,
 savings: null,
 popular: false,
 },
 {
 id: 'double',
 label: '1 Leggings 3D = 1 Short in regalo',
 sub: '+ Guida anticellulite OMAGGIO inclusa',
 tag: 'OFFERTA SPECIALE 24h',
 tagColor: 'bg-amber-500',
 price: 34.90,
 originalPrice: 129.90,
 savings: 'Risparmi €95,00 – Short da €60 incluso GRATIS',
 popular: true,
 },
]

export default function LeggingsBundlePicker() {
 const [selectedBundle, setSelectedBundle] = useState('single')
 const [selectedSize, setSelectedSize] = useState('')
 const [selectedColor, setSelectedColor] = useState('nero')
 const [sizeError, setSizeError] = useState(false)

 const active = bundles.find((b) => b.id === selectedBundle)!

 const handleOrder = (method: string) => {
 if (!selectedSize) { setSizeError(true); return }
 setSizeError(false)
 const url = `/checkout/?prodotto=leggings-3d&qty=${selectedBundle === 'double' ? 2 : 1}&taglia=${selectedSize}&colore=${selectedColor}&metodo=${method}`
 window.location.href = url
 }

 return (
 <div className="space-y-5">
 {/* Bundle selector */}
 <div>
 <p className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Seleziona la tua offerta</p>
 <div className="space-y-3">
 {bundles.map((bundle) => {
 const isSelected = selectedBundle === bundle.id
 return (
 <label
 key={bundle.id}
 onClick={() => setSelectedBundle(bundle.id)}
 className={`relative flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
 isSelected ? 'border-[#1D3557] bg-[#DCEAF2]' : 'border-gray-200 bg-white hover:border-[#A8DADC]'
 }`}
 >
 {bundle.tag && (
 <span className={`absolute -top-3 right-4 ${bundle.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
 {bundle.tag}
 </span>
 )}
 <div className={`w-5 h-5 mt-0.5 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-[#1D3557]' : 'border-gray-300'}`}>
 {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#457B9D]" />}
 </div>
 <div className="flex-1 min-w-0">
 <p className="font-semibold text-gray-900 text-sm leading-tight">{bundle.label}</p>
 <p className="text-xs text-gray-500 mt-0.5">{bundle.sub}</p>
 {bundle.savings && <p className="text-xs text-green-600 font-semibold mt-1">{bundle.savings}</p>}
 </div>
 <div className="text-right shrink-0">
 <p className="font-bold text-gray-900">{bundle.price.toFixed(2).replace('.', ',')}€</p>
 <p className="text-xs text-gray-400 line-through">{bundle.originalPrice.toFixed(2).replace('.', ',')}€</p>
 </div>
 </label>
 )
 })}
 </div>
 </div>

 {/* Color selector */}
 <div>
 <p className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">
 Colore: <span className="normal-case font-normal text-gray-500">{colors.find(c => c.id === selectedColor)?.label}</span>
 </p>
 <div className="flex gap-3">
 {colors.map((c) => (
 <button
 key={c.id}
 onClick={() => setSelectedColor(c.id)}
 title={c.label}
 className={`w-9 h-9 rounded-full border-4 transition-all ${selectedColor === c.id ? 'border-[#1D3557] scale-110' : 'border-gray-200 hover:border-gray-300'}`}
 style={{ backgroundColor: c.hex }}
 />
 ))}
 </div>
 </div>

 {/* Size selector */}
 <div>
 <p className={`text-sm font-bold uppercase tracking-wide mb-2 ${sizeError ? 'text-red-500' : 'text-gray-700'}`}>
 Taglia{sizeError && <span className="ml-2 font-normal normal-case text-red-500">– seleziona una taglia</span>}
 </p>
 <div className="flex flex-wrap gap-2">
 {sizes.map((s) => (
 <button
 key={s}
 onClick={() => { setSelectedSize(s); setSizeError(false) }}
 className={`px-3 py-2 rounded-lg border-2 text-sm font-semibold transition-all ${
 selectedSize === s
 ? 'border-[#1D3557] bg-[#457B9D] text-white'
 : 'border-gray-200 text-gray-700 hover:border-[#7EC8D4]'
 }`}
 >
 {s}
 </button>
 ))}
 </div>
 <button className="text-xs text-[#457B9D] underline mt-2">Guida alle taglie →</button>
 </div>

 {/* CTAs */}
 <div className="space-y-3 pt-1">
 <button onClick={() => handleOrder('cod')} className="btn-primary w-full justify-center text-base py-4">
 Ordina con Pagamento alla Consegna
 </button>
 <button onClick={() => handleOrder('card')} className="btn-secondary w-full justify-center text-base py-4">
 Paga Online con Carta
 </button>
 </div>

 {/* Microtrust */}
 <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-1 flex-wrap">
 <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500" /> Pagamento sicuro</span>
 <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500" /> Reso gratuito 30gg</span>
 <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500" /> Taglie XS–5XL</span>
 </div>
 </div>
 )
}
