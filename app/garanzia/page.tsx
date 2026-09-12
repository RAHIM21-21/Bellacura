import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
 title: 'Garanzia & Resi – 14 Giorni Soddisfatti o Rimborsati',
 description: 'BellaCura garantisce il rimborso completo entro 14 giorni. Reso gratuito, nessuna domanda. Scopri la nostra politica di garanzia.',
 path: '/garanzia/',
})

export default function GaranziaPage() {
 return (
 <>
 <section className="bg-gradient-to-br from-green-50 to-white py-16 text-center">
 <div className="container-tight max-w-2xl">
 <div className="text-6xl mb-4"></div>
 <h1 className="font-sans text-4xl text-gray-900 mb-4">Garanzia Soddisfatti o Rimborsati</h1>
 <p className="text-gray-600 text-lg">
 Ordina con fiducia. Se per qualsiasi motivo non sei soddisfatta, restituisci il prodotto entro 14 giorni e ti rimborsiamo il 100% — nessuna domanda.
 </p>
 </div>
 </section>

 <section className="section bg-white">
 <div className="container-tight max-w-3xl">
 <div className="grid md:grid-cols-3 gap-6 mb-16">
 {[
 { icon: '', title: '14 Giorni', sub: 'Hai 14 giorni dalla ricezione per restituire il prodotto, anche se aperto e usato.' },
 { icon: '', title: 'Reso Gratuito', sub: 'Ti inviamo un\'etichetta prepagata. Non paghi nulla per la spedizione di ritorno.' },
 { icon: '', title: 'Rimborso 100%', sub: 'Rimborsiamo l\'intero importo pagato entro 5 giorni lavorativi dalla ricezione del reso.' },
 ].map((item) => (
 <div key={item.title} className="card text-center hover:shadow-md transition-shadow">
 <div className="text-4xl mb-3">{item.icon}</div>
 <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed">{item.sub}</p>
 </div>
 ))}
 </div>

 <h2 className="font-sans text-2xl text-gray-900 mb-6">Come fare un reso</h2>
 <div className="space-y-4 mb-12">
 {[
 { n: '1', t: 'Contattaci entro 14 giorni', d: 'Scrivi a reso@bellacura.it o contattaci via WhatsApp con il numero d\'ordine e il motivo (opzionale).' },
 { n: '2', t: 'Ricevi l\'etichetta prepagata', d: 'Ti inviamo un\'etichetta di spedizione gratuita via email entro poche ore.' },
 { n: '3', t: 'Spedisci il prodotto', d: 'Imbusto il prodotto (anche senza scatola originale) e portalo in un qualsiasi punto di ritiro del corriere.' },
 { n: '4', t: 'Ricevi il rimborso', d: 'Appena riceviamo il pacco (2-3 giorni), rimborsiamo il 100% sul tuo metodo di pagamento entro 5 giorni lavorativi.' },
 ].map((step) => (
 <div key={step.n} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
 <div className="w-8 h-8 rounded-full bg-[#457B9D] text-white font-bold flex items-center justify-center shrink-0">{step.n}</div>
 <div>
 <p className="font-semibold text-gray-900">{step.t}</p>
 <p className="text-gray-500 text-sm mt-1">{step.d}</p>
 </div>
 </div>
 ))}
 </div>

 <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
 <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2"><CheckCircle2 size={18} /> Garanzia prodotto – 12 mesi</h3>
 <p className="text-green-700 text-sm leading-relaxed">
 Oltre alla politica di reso, tutti i prodotti BellaCura sono coperti da garanzia legale di conformità di 24 mesi e garanzia commerciale BellaCura di 12 mesi per difetti di fabbricazione. In caso di difetto, sostituiamo il prodotto gratuitamente.
 </p>
 </div>
 </div>
 </section>

 <section className="section bg-[#DCEAF2] text-center">
 <div className="container-tight max-w-xl">
 <h2 className="font-sans text-gray-900 mb-4">Pronta ad ordinare senza rischi?</h2>
 <p className="text-gray-600 mb-6">Paga alla consegna, reso gratuito 14 giorni. Zero rischi.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link href="/prodotti/massaggio-anticellulite-4in1/" className="btn-primary">Massaggiatore 4 in 1</Link>
 <Link href="/prodotti/leggings-anticellulite-3d/" className="btn-secondary">Leggings 3D</Link>
 </div>
 </div>
 </section>
 </>
 )
}
