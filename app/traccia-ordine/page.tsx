import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
 title: 'Traccia il tuo Ordine – BellaCura',
 description: 'Segui in tempo reale la spedizione del tuo ordine BellaCura. Inserisci il numero d\'ordine o il codice di tracciamento per vedere lo stato della consegna.',
 path: '/traccia-ordine/',
})

export default function TracciaOrdinePage() {
 return (
 <>
 <section className="bg-gradient-to-br from-[#DCEAF2] to-white py-16 text-center">
 <div className="container-tight max-w-xl">
 <span className="badge mb-4">Spedizioni</span>
 <h1 className="font-sans text-4xl text-gray-900 mb-4">Traccia il tuo Ordine</h1>
 <p className="text-gray-600 text-lg">Controlla lo stato della tua spedizione in tempo reale.</p>
 </div>
 </section>

 <section className="section bg-white">
 <div className="container-tight max-w-lg">
 <div className="card mb-8">
 <h2 className="font-semibold text-gray-900 mb-4">Inserisci il numero d'ordine</h2>
 <div className="space-y-3">
 <input
 type="text"
 placeholder="Es. BC-2024-001234"
 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#57A9C4] outline-none transition-colors text-gray-900"
 readOnly
 />
 <input
 type="email"
 placeholder="Email usata per l'ordine"
 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#57A9C4] outline-none transition-colors text-gray-900"
 readOnly
 />
 <button className="btn-primary w-full justify-center">
 Traccia il mio ordine
 </button>
 </div>
 <p className="text-xs text-gray-400 mt-3 text-center">Il numero d'ordine si trova nell'email di conferma che hai ricevuto.</p>
 </div>

 <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 mb-6">
 <h3 className="font-semibold text-blue-800 mb-2"> Non hai ricevuto l'email di conferma?</h3>
 <p className="text-blue-700 text-sm mb-3">Controlla la cartella spam. Se non la trovi, contattaci con il tuo nome e indirizzo di consegna.</p>
 <Link href="/contatti/" className="text-blue-600 font-semibold text-sm underline">Contattaci →</Link>
 </div>

 <div className="space-y-3">
 <h3 className="font-semibold text-gray-900">Tempi di consegna standard:</h3>
 {[
 { zona: 'Nord Italia', tempo: '24 ore lavorative' },
 { zona: 'Centro Italia', tempo: '24–48 ore lavorative' },
 { zona: 'Sud Italia', tempo: '48 ore lavorative' },
 { zona: 'Isole (Sicilia, Sardegna)', tempo: '48–72 ore lavorative' },
 ].map((z) => (
 <div key={z.zona} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
 <span className="text-gray-700 text-sm font-medium">{z.zona}</span>
 <span className="text-[#1D3557] text-sm font-bold">{z.tempo}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="section bg-[#DCEAF2] text-center">
 <div className="container-tight max-w-xl">
 <p className="text-gray-600 mb-4">Hai bisogno di aiuto con la tua spedizione?</p>
 <Link href="/contatti/" className="btn-primary inline-flex"> Contatta il Supporto</Link>
 </div>
 </section>
 </>
 )
}
