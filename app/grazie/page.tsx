import { Suspense } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
 title: 'Grazie per il tuo ordine!',
 description: 'Ordine ricevuto con successo. Riceverai una conferma via email.',
 path: '/grazie/',
 noIndex: true, // no index — not a page we want Google to crawl
})

function GrazieContent() {
 return (
 <div className="min-h-screen bg-cream flex items-center justify-center py-16 px-4">
 <div className="max-w-lg w-full text-center">
 <div className="text-7xl mb-6"></div>
 <h1 className="font-serif text-4xl text-gray-900 mb-4">
 Grazie per il tuo ordine!
 </h1>
 <p className="text-gray-600 mb-8 leading-relaxed">
 Il tuo ordine è stato ricevuto con successo. Riceverai una email di conferma entro pochi minuti.
 Il corriere ti contatterà per fissare la consegna in <strong>2-4 giorni lavorativi</strong>.
 </p>

 <div className="card mb-8 text-left">
 <h2 className="font-semibold text-gray-900 mb-4">Cosa succede adesso?</h2>
 <ol className="space-y-3">
 {[
 { step: '1', text: 'Ricevi la conferma d\'ordine via email' },
 { step: '2', text: 'Il tuo pacco viene preparato e spedito entro 24h' },
 { step: '3', text: 'Il corriere ti consegna in 2-4 giorni lavorativi' },
 { step: '4', text: 'Paghi in contanti al corriere al momento della consegna' },
 ].map((item) => (
 <li key={item.step} className="flex items-start gap-3">
 <span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">
 {item.step}
 </span>
 <span className="text-gray-700 text-sm">{item.text}</span>
 </li>
 ))}
 </ol>
 </div>

 <div className="space-y-3">
 <Link href="/" className="btn-primary w-full justify-center">
 Torna alla Home
 </Link>
 <a href="mailto:info@bellacura.it" className="text-rose-500 text-sm hover:underline block">
 Hai domande? Scrivici a info@bellacura.it
 </a>
 </div>
 </div>
 </div>
 )
}

export default function GraziePage() {
 return (
 <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Caricamento...</div>}>
 <GrazieContent />
 </Suspense>
 )
}
