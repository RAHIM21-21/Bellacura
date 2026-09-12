import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
 title: 'Contatti – Supporto Clienti BellaCura',
 description: 'Hai bisogno di aiuto? Contatta il team BellaCura via email o WhatsApp. Rispondiamo entro poche ore, dal lunedì al sabato.',
 path: '/contatti/',
})

export default function ContattiPage() {
 return (
 <>
 <section className="bg-gradient-to-br from-[#DCEAF2] to-white py-16 text-center">
 <div className="container-tight max-w-2xl">
 <span className="badge mb-4">Siamo qui per te</span>
 <h1 className="font-sans text-4xl text-gray-900 mb-4">Contattaci</h1>
 <p className="text-gray-600 text-lg">Il nostro team risponde entro poche ore. Dal lunedì al sabato, 9:00–19:00.</p>
 </div>
 </section>

 <section className="section bg-white">
 <div className="container-tight max-w-3xl">
 <div className="grid md:grid-cols-3 gap-6 mb-16">
 {[
 { icon: '', title: 'Email', info: 'offerte@bellacura-shop.it', sub: 'Risposta entro 4 ore', href: 'mailto:offerte@bellacura-shop.it' },
 { icon: '', title: 'WhatsApp', info: '+39 331 443 0286', sub: 'Risposta entro 1 ora', href: 'https://wa.me/393314430286' },
 { icon: '', title: 'Resi & Rimborsi', info: 'reso@bellacura.it', sub: 'Gestione entro 24h', href: 'mailto:reso@bellacura.it' },
 ].map((c) => (
 <a key={c.title} href={c.href} className="card text-center hover:shadow-md transition-shadow block">
 <div className="text-4xl mb-3">{c.icon}</div>
 <h3 className="font-semibold text-gray-900 mb-1">{c.title}</h3>
 <p className="text-[#457B9D] font-medium text-sm mb-1">{c.info}</p>
 <p className="text-gray-400 text-xs">{c.sub}</p>
 </a>
 ))}
 </div>

 <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 mb-8">
 <h3 className="font-bold text-blue-800 mb-2">⏱ Prima di scriverci, controlla le FAQ</h3>
 <p className="text-blue-700 text-sm mb-3">Molte domande hanno già risposta nella nostra pagina FAQ — potresti trovare la soluzione subito.</p>
 <Link href="/faq/" className="text-blue-600 font-semibold text-sm underline">Vai alle FAQ →</Link>
 </div>

 <div className="p-6 bg-gray-50 rounded-2xl">
 <h3 className="font-bold text-gray-900 mb-4">Hai un problema con il tuo ordine?</h3>
 <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
 {[
 { icon: '', t: 'Traccia il tuo ordine', href: '/traccia-ordine/' },
 { icon: '', t: 'Richiedi un reso', href: '/garanzia/' },
 { icon: '', t: 'Domande frequenti', href: '/faq/' },
 { icon: '', t: 'Vedi i nostri prodotti', href: '/prodotti/massaggio-anticellulite-4in1/' },
 ].map((l) => (
 <Link key={l.t} href={l.href} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 hover:border-[#A8DADC] transition-colors">
 <span>{l.icon}</span> {l.t} →
 </Link>
 ))}
 </div>
 </div>
 </div>
 </section>
 </>
 )
}
