'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Shield, Truck, RotateCcw, Star, Banknote } from 'lucide-react'

type FormData = {
  nome: string
  telefono: string
  indirizzo: string
}

const PRODUCT_INFO = {
  'massaggio-4in1': {
    name: 'Massaggiatore Anticellulite 4 in 1',
    price: 59.90,
    originalPrice: 79.90,
    image: '‍',
  },
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const prodotto = searchParams.get('prodotto') || 'massaggio-4in1'

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const product = PRODUCT_INFO[prodotto as keyof typeof PRODUCT_INFO] || PRODUCT_INFO['massaggio-4in1']

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, prodotto, quantita: 1 }),
      })
      const json = await res.json()
      if (json.success) {
        window.location.href = `/grazie/?ref=${json.order_ref}`
      } else {
        setError(json.error || 'Si è verificato un errore. Riprova.')
      }
    } catch {
      setError('Errore di rete. Controlla la connessione e riprova.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <Link href="/" className="font-serif text-2xl font-bold text-rose-600">BellaCura</Link>
          <p className="text-gray-500 text-sm mt-1">Checkout Sicuro</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">

            {/* COD badge */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
              <Banknote size={24} className="text-green-600 shrink-0" />
              <div>
                <p className="font-semibold text-green-800 text-sm">Pagamento alla consegna</p>
                <p className="text-xs text-green-700 mt-0.5">Il corriere raccoglie i soldi quando consegna il pacco. Nessun pagamento anticipato!</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-semibold text-gray-900 mb-4">Dove spediamo? <span className="text-gray-400 font-normal text-sm">— meno di 30 secondi</span></h2>
                <div className="space-y-4">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                    <input {...register('nome', { required: 'Nome richiesto', minLength: { value: 2, message: 'Minimo 2 caratteri' } })}
                      className={`w-full border rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.nome ? 'border-red-400' : 'border-gray-300'}`}
                      placeholder="Maria" />
                    {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefono * <span className="text-gray-400 font-normal">(per aggiornamenti consegna)</span></label>
                    <input {...register('telefono', { required: 'Telefono richiesto', minLength: { value: 9, message: 'Numero non valido' } })}
                      type="tel"
                      className={`w-full border rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.telefono ? 'border-red-400' : 'border-gray-300'}`}
                      placeholder="+39 333 1234567" />
                    {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Indirizzo Completo * <span className="text-gray-400 font-normal">(via, civico, CAP, città)</span></label>
                    <input {...register('indirizzo', { required: 'Indirizzo richiesto', minLength: { value: 10, message: 'Inserisci l\'indirizzo completo' } })}
                      className={`w-full border rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.indirizzo ? 'border-red-400' : 'border-gray-300'}`}
                      placeholder="Via Roma 12, 20100 Milano" />
                    {errors.indirizzo && <p className="text-red-500 text-xs mt-1">{errors.indirizzo.message}</p>}
                  </div>

                </div>
              </div>

              {error && (<div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">{error}</div>)}

              <button type="submit" disabled={submitting}
                className="btn-primary w-full justify-center text-lg py-5 disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? (
                  <span className="flex items-center gap-2 justify-center">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Elaborazione ordine...
                  </span>
                ) : '✓ Conferma Ordine – Paga alla Consegna'}
              </button>

              <p className="text-center text-xs text-gray-400">
                🔒 I tuoi dati sono usati solo per la spedizione
              </p>
            </form>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h2 className="font-semibold text-gray-900 mb-4">Riepilogo Ordine</h2>
              <div className="flex items-center gap-4 pb-4 border-b border-gray-100 mb-4">
                <div className="w-16 h-16 rounded-xl bg-rose-50 flex items-center justify-center text-3xl flex-shrink-0">{product.image}</div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                  <p className="text-gray-500 text-xs">Qty: 1</p>
                </div>
                <span className="font-bold text-gray-900 ml-auto">€{product.price.toFixed(2)}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600"><span>Subtotale</span><span className="line-through text-gray-400">€{product.originalPrice.toFixed(2)}</span></div>
                <div className="flex justify-between text-rose-600 font-semibold"><span>Sconto</span><span>–€{(product.originalPrice - product.price).toFixed(2)}</span></div>
                <div className="flex justify-between text-gray-600"><span>Spedizione</span><span className="text-green-600 font-medium">Gratuita</span></div>
              </div>
              <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-bold text-gray-900">
                <span>Totale alla consegna</span>
                <span className="text-xl">€{product.price.toFixed(2)}</span>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { icon: <Shield size={14} />, text: 'Pagamento solo alla consegna' },
                  { icon: <Truck size={14} />, text: 'Consegna in 24–48h express' },
                  { icon: <RotateCcw size={14} />, text: 'Reso gratuito entro 14 giorni' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-gray-600 text-xs">
                    <span className="text-rose-500">{item.icon}</span>{item.text}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (<Star key={i} size={12} className="text-amber-400 fill-amber-400" />))}
                  <span className="text-xs text-gray-500">4.9/5 · 248 recensioni</span>
                </div>
                <p className="text-xs text-gray-500 italic">"Prodotto fantastico, arrivato in 3 giorni e ho pagato alla consegna senza problemi!" — Giulia R., Roma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Caricamento...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
