'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Shield, Truck, RotateCcw, Star, CreditCard, Banknote } from 'lucide-react'

type FormData = {
 nome: string
 cognome: string
 email: string
 telefono: string
 indirizzo: string
 civico: string
 citta: string
 cap: string
 provincia: string
 privacy: boolean
}

const PROVINCE_ITALIANE = [
 'AG','AL','AN','AO','AQ','AR','AP','AT','AV','BA','BT','BL','BN','BG','BI','BO','BZ',
 'BS','BR','CA','CL','CB','CI','CE','CT','CZ','CH','CO','CS','CR','KR','CN','EN','FM',
 'FE','FI','FG','FC','FR','GE','GO','GR','IM','IS','SP','LT','LE','LC','LI','LO','LU',
 'MC','MN','MS','MT','VS','ME','MI','MO','MB','NA','NO','NU','OG','OT','OR','PD','PA',
 'PR','PV','PG','PU','PE','PC','PI','PT','PN','PZ','PO','RG','RA','RC','RE','RI','RN',
 'RO','SA','SS','SV','SI','SR','SO','TA','TE','TR','TO','OG','TP','TN','TV','TS','UD',
 'VA','VE','VB','VC','VR','VV','VI','VT',
]

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
 const metodo = searchParams.get('metodo') || 'cod'

 const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card'>(metodo as 'cod' | 'card')
 const [submitting, setSubmitting] = useState(false)
 const [success, setSuccess] = useState(false)
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
 setSuccess(true)
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
 <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
 <h2 className="font-semibold text-gray-900 mb-4">Metodo di Pagamento</h2>
 <div className="grid grid-cols-2 gap-3">
 <button type="button" onClick={() => setPaymentMethod('cod')}
 className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${paymentMethod === 'cod' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
 <Banknote size={24} />
 <div className="text-center">
 <p className="font-semibold text-sm">Contrassegno</p>
 <p className="text-xs opacity-75">Paga alla consegna</p>
 </div>
 </button>
 <button type="button" onClick={() => setPaymentMethod('card')}
 className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${paymentMethod === 'card' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
 <CreditCard size={24} />
 <div className="text-center">
 <p className="font-semibold text-sm">Carta di Credito</p>
 <p className="text-xs opacity-75">Visa, Mastercard, ecc.</p>
 </div>
 </button>
 </div>
 {paymentMethod === 'cod' && (
 <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
 <strong>Pagamento alla consegna:</strong> il corriere raccoglierà i soldi quando consegna il tuo pacco. Nessun pagamento anticipato!
 </div>
 )}
 </div>
 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
 <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
 <h2 className="font-semibold text-gray-900 mb-4">Informazioni di Contatto</h2>
 <div className="grid grid-cols-2 gap-4">
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
 <input {...register('nome', { required: 'Nome richiesto', minLength: { value: 2, message: 'Minimo 2 caratteri' } })}
 className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.nome ? 'border-red-400' : 'border-gray-300'}`}
 placeholder="Maria" />
 {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
 </div>
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-1">Cognome *</label>
 <input {...register('cognome', { required: 'Cognome richiesto' })}
 className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.cognome ? 'border-red-400' : 'border-gray-300'}`}
 placeholder="Rossi" />
 {errors.cognome && <p className="text-red-500 text-xs mt-1">{errors.cognome.message}</p>}
 </div>
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
 <input {...register('email', { required: 'Email richiesta', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email non valida' } })}
 type="email"
 className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
 placeholder="maria@email.it" />
 {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
 </div>
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-1">Telefono * <span className="text-gray-400 font-normal">(per la consegna)</span></label>
 <input {...register('telefono', { required: 'Telefono richiesto', minLength: { value: 9, message: 'Numero non valido' } })}
 type="tel"
 className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.telefono ? 'border-red-400' : 'border-gray-300'}`}
 placeholder="+39 333 1234567" />
 {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>}
 </div>
 </div>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
 <h2 className="font-semibold text-gray-900 mb-4">Indirizzo di Spedizione</h2>
 <div className="space-y-4">
 <div className="grid grid-cols-3 gap-4">
 <div className="col-span-2">
 <label className="block text-sm font-medium text-gray-700 mb-1">Via / Piazza *</label>
 <input {...register('indirizzo', { required: 'Indirizzo richiesto' })}
 className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.indirizzo ? 'border-red-400' : 'border-gray-300'}`}
 placeholder="Via Roma" />
 </div>
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-1">Civico *</label>
 <input {...register('civico', { required: 'Civico richiesto' })}
 className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.civico ? 'border-red-400' : 'border-gray-300'}`}
 placeholder="12" />
 </div>
 </div>
 <div className="grid grid-cols-3 gap-4">
 <div className="col-span-1">
 <label className="block text-sm font-medium text-gray-700 mb-1">CAP *</label>
 <input {...register('cap', { required: 'CAP richiesto', pattern: { value: /^\d{5}$/, message: '5 cifre' } })}
 className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.cap ? 'border-red-400' : 'border-gray-300'}`}
 placeholder="20100" maxLength={5} />
 {errors.cap && <p className="text-red-500 text-xs mt-1">{errors.cap.message}</p>}
 </div>
 <div className="col-span-1">
 <label className="block text-sm font-medium text-gray-700 mb-1">Città *</label>
 <input {...register('citta', { required: 'Città richiesta' })}
 className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.citta ? 'border-red-400' : 'border-gray-300'}`}
 placeholder="Milano" />
 </div>
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-1">Provincia *</label>
 <select {...register('provincia', { required: 'Provincia richiesta' })}
 className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 ${errors.provincia ? 'border-red-400' : 'border-gray-300'}`}>
 <option value="">--</option>
 {PROVINCE_ITALIANE.map((p) => (<option key={p} value={p}>{p}</option>))}
 </select>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
 <label className="flex items-start gap-3 cursor-pointer">
 <input type="checkbox" {...register('privacy', { required: 'Devi accettare la privacy policy' })}
 className="mt-0.5 w-4 h-4 accent-rose-500 flex-shrink-0" />
 <span className="text-sm text-gray-600">
 Ho letto e accetto la{' '}
 <Link href="/privacy-policy/" className="text-rose-500 underline" target="_blank">Privacy Policy</Link>{' '}
 e i{' '}
 <Link href="/termini-condizioni/" className="text-rose-500 underline" target="_blank">Termini e Condizioni</Link>. *
 </span>
 </label>
 {errors.privacy && <p className="text-red-500 text-xs mt-2 ml-7">{errors.privacy.message}</p>}
 </div>
 {error && (<div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">{error}</div>)}
 <button type="submit" disabled={submitting}
 className="btn-primary w-full justify-center text-lg py-5 disabled:opacity-60 disabled:cursor-not-allowed">
 {submitting ? (
 <span className="flex items-center gap-2">
 <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
 </svg>
 Elaborazione ordine...
 </span>
 ) : paymentMethod === 'cod' ? ' Conferma Ordine – Paga alla Consegna' : ' Procedi al Pagamento'}
 </button>
 </form>
 </div>
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
 <div className="flex justify-between text-gray-600"><span>Subtotale</span><span>€{product.price.toFixed(2)}</span></div>
 <div className="flex justify-between text-gray-600"><span>Spedizione</span><span className="text-green-600 font-medium">Gratuita</span></div>
 {paymentMethod === 'cod' && (<div className="flex justify-between text-gray-600"><span>Costo contrassegno</span><span>€0,00</span></div>)}
 </div>
 <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-bold text-gray-900">
 <span>Totale</span>
 <span className="text-xl">€{product.price.toFixed(2)}</span>
 </div>
 <div className="mt-4 bg-green-50 rounded-xl p-3 text-center">
 <p className="text-green-700 text-sm font-medium">Stai risparmiando €{(product.originalPrice - product.price).toFixed(2)}!</p>
 </div>
 <div className="mt-6 space-y-3">
 {[
 { icon: <Shield size={14} />, text: 'Pagamento 100% sicuro' },
 { icon: <Truck size={14} />, text: 'Consegna in 2-4 giorni lavorativi' },
 { icon: <RotateCcw size={14} />, text: 'Reso gratuito entro 30 giorni' },
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
