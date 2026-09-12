'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ChevronLeft, Shield, Truck, RotateCcw, Star } from 'lucide-react'

const SHOPIFY_URL = 'https://bellacura-shop.myshopify.com/cart/48232541651102:1?checkout'
const PRODUCT_LABEL = 'Massaggiatore 4 in 1 × 1'
const PRODUCT_PRICE = '€54,00'
const ORIGINAL_PRICE = '€59,90'

type Step = 'form' | 'success'

export default function CheckoutEmailForm() {
  const [step, setStep] = useState<Step>('form')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nome: '', cognome: '', telefono: '', indirizzo: '', citta: '', cap: '', note: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/notify-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          productLabel: PRODUCT_LABEL,
          productPrice: PRODUCT_PRICE,
        }),
      })
    } catch (_) {}
    setLoading(false)
    setStep('success')
  }

  return (
    <div className="min-h-screen" style={{ background: '#FDF8F9' }}>

      {/* Top trust bar */}
      <div className="text-center py-2 text-xs font-semibold" style={{ background: '#1A0F14', color: '#F2A7BB' }}>
        Spedizione Express 24–48h Gratis · Paga solo alla consegna · Reso 14 giorni
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/prodotti/massaggio-anticellulite-4in1/" className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#457B9D]">
            <ChevronLeft size={15} /> Indietro
          </Link>
          <span className="font-extrabold text-[#1D3557] text-xl">BellaCura®</span>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Shield size={13} className="text-green-500" /> Sicuro
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">

        {/* Discount banner */}
        <div className="bg-[#DCEAF2] border border-[#A8DADC] rounded-2xl px-5 py-3 mb-5 flex items-center gap-3">
          <span className="text-2xl">🎁</span>
          <div>
            <p className="text-sm font-extrabold text-[#152840]">Offerta riservata — Sconto 10% applicato</p>
            <p className="text-xs text-[#457B9D] mt-0.5">Questo prezzo è esclusivo per te · Valido per poco</p>
          </div>
        </div>

        {/* Product card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
          <div className="flex items-center gap-4 p-4">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#DCEAF2]">
              <Image
                src="/images/gallery-1-uso.jpg"
                alt="BellaCura Massaggiatore"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-extrabold text-gray-900 text-sm leading-tight">{PRODUCT_LABEL}</p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                ))}
                <span className="text-xs text-gray-400 ml-1">4.9 (2.800+ recensioni)</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Spedizione in 24–48h · Reso gratuito</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-gray-300 line-through">{ORIGINAL_PRICE}</p>
              <p className="text-xl font-extrabold text-gray-900">{PRODUCT_PRICE}</p>
              <span className="text-xs font-bold text-white bg-[#457B9D] px-2 py-0.5 rounded-full">–10%</span>
            </div>
          </div>
          <div className="bg-amber-50 border-t border-amber-100 px-4 py-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <p className="text-xs font-semibold text-amber-700">Offerta riservata — scade oggi</p>
          </div>
        </div>

        {/* STEP: FORM */}
        {step === 'form' && (
          <>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-extrabold text-gray-900">💵 Dove spediamo?</h2>
                <p className="text-sm text-gray-400 mt-0.5">Ci vogliono meno di 60 secondi</p>
              </div>
              <a href={SHOPIFY_URL} className="text-xs text-gray-400 hover:text-[#457B9D] underline underline-offset-2 shrink-0 ml-4">
                Preferisci pagare<br/>con carta?
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">Nome *</label>
                  <input name="nome" required value={form.nome} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#57A9C4] focus:ring-1 focus:ring-[#DCEAF2]"
                    placeholder="Maria" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">Cognome *</label>
                  <input name="cognome" required value={form.cognome} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#57A9C4] focus:ring-1 focus:ring-[#DCEAF2]"
                    placeholder="Rossi" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">Numero di Telefono *</label>
                <input name="telefono" required type="tel" value={form.telefono} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#57A9C4] focus:ring-1 focus:ring-[#DCEAF2]"
                  placeholder="+39 333 000 0000" />
                <p className="text-xs text-gray-400 mt-1">Per aggiornamenti sulla consegna</p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">Indirizzo di Spedizione *</label>
                <input name="indirizzo" required value={form.indirizzo} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#57A9C4] focus:ring-1 focus:ring-[#DCEAF2]"
                  placeholder="Via Roma 1, interno 3" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">Città *</label>
                  <input name="citta" required value={form.citta} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#57A9C4] focus:ring-1 focus:ring-[#DCEAF2]"
                    placeholder="Milano" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">CAP *</label>
                  <input name="cap" required value={form.cap} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#57A9C4] focus:ring-1 focus:ring-[#DCEAF2]"
                    placeholder="20100" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">Note per il corriere (opzionale)</label>
                <textarea name="note" value={form.note} onChange={handleChange} rows={2}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#57A9C4] focus:ring-1 focus:ring-[#DCEAF2] resize-none"
                  placeholder="Es. citofono, piano, orario preferito..." />
              </div>

              {/* Order summary */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{PRODUCT_LABEL}</span>
                  <span className="font-bold line-through text-gray-400">{ORIGINAL_PRICE}</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#1D3557] font-semibold">Sconto 10% applicato</span>
                  <span className="font-bold text-[#1D3557]">–€5,99</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Spedizione</span>
                  <span className="font-bold text-green-600">GRATIS</span>
                </div>
                <div className="flex justify-between text-base font-extrabold border-t border-gray-200 pt-2">
                  <span>Totale alla consegna</span>
                  <span>{PRODUCT_PRICE}</span>
                </div>
              </div>

              <button type="submit" disabled={loading}
                className="w-full bg-[#1D3557] hover:bg-[#152840] disabled:opacity-60 text-white font-extrabold text-base py-4 rounded-2xl transition-colors shadow-lg shadow-[#D6EAF0]"
              >
                {loading ? 'Invio in corso...' : `✓ Conferma Ordine — ${PRODUCT_PRICE}`}
              </button>

              <p className="text-center text-xs text-gray-400">
                🔒 I tuoi dati sono protetti · usati solo per la spedizione
              </p>
            </form>
          </>
        )}

        {/* STEP: SUCCESS */}
        {step === 'success' && (
          <div className="text-center py-10">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} className="text-green-500" />
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Ordine confermato! 🎉</h1>
            <p className="text-gray-500 mb-1">Grazie <strong>{form.nome}</strong>! Il tuo pacco è in preparazione.</p>
            <p className="text-gray-500 mb-2">Arriverà in <strong>24–48 ore</strong> all&apos;indirizzo indicato.</p>
            <p className="text-gray-500 mb-8">Pagherai <strong>{PRODUCT_PRICE}</strong> in contanti al corriere.</p>
            <div className="bg-[#DCEAF2] border border-[#D6EAF0] rounded-2xl p-4 text-left mb-8">
              <p className="text-sm font-bold text-gray-900 mb-2">Riepilogo ordine</p>
              <p className="text-sm text-gray-600">📦 {PRODUCT_LABEL}</p>
              <p className="text-sm text-gray-600">🏠 {form.indirizzo}, {form.cap} {form.citta}</p>
              <p className="text-sm text-gray-600">💰 Pagamento alla consegna — {PRODUCT_PRICE}</p>
            </div>
            <Link href="/" className="text-[#1D3557] font-bold hover:underline text-sm">← Torna alla Home</Link>
          </div>
        )}

      </main>
    </div>
  )
}
