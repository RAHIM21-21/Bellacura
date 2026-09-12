import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
 title: 'Come Ordinare – Guida al Pagamento alla Consegna',
 description: 'Scopri come ordinare su BellaCura in pochi passi. Pagamento alla consegna disponibile: ordini ora, paghi quando ricevi. Spedizione gratuita in 24-48h.',
 path: '/come-ordinare/',
})

export default function ComeOrdinarePage() {
 return (
 <>
 <section className="bg-gradient-to-br from-[#DCEAF2] to-white py-16 text-center">
 <div className="container-tight max-w-2xl">
 <span className="badge mb-4">Semplice e sicuro</span>
 <h1 className="font-sans text-4xl text-gray-900 mb-4">Come Ordinare su BellaCura</h1>
 <p className="text-gray-600 text-lg">In 3 passi semplici. Paga alla consegna — zero rischi, zero anticipi.</p>
 </div>
 </section>

 <section className="section bg-white">
 <div className="container-tight max-w-3xl">
 {/* Steps */}
 <div className="space-y-6 mb-16">
 {[
 { n: '1', icon: '', t: 'Scegli il prodotto', d: 'Visita la pagina del prodotto che vuoi. Scegli la quantità, il colore e la taglia se applicabile.', cta: { label: 'Massaggiatore 4 in 1', href: '/prodotti/massaggio-anticellulite-4in1/' } },
 { n: '2', icon: '', t: 'Compila il modulo d\'ordine', d: 'Inserisci nome, cognome, indirizzo di consegna e numero di telefono. Non serve creare un account. Scegli il metodo di pagamento: contrassegno (alla consegna) oppure carta/PayPal online.' },
 { n: '3', icon: '', t: 'Ricevi a casa e paga', d: 'Il corriere arriva a casa tua in 24-48 ore. Se hai scelto il contrassegno, paghi direttamente al corriere in contanti al momento della consegna. Se hai pagato online, non devi fare niente.' },
 ].map((step) => (
 <div key={step.n} className="card flex gap-6 items-start">
 <div className="w-12 h-12 rounded-full bg-[#457B9D] text-white font-bold text-xl flex items-center justify-center shrink-0">{step.n}</div>
 <div className="flex-1">
 <div className="flex items-center gap-2 mb-2">
 <span className="text-2xl">{step.icon}</span>
 <h3 className="font-semibold text-gray-900 text-lg">{step.t}</h3>
 </div>
 <p className="text-gray-600 text-sm leading-relaxed mb-3">{step.d}</p>
 {'cta' in step && (
 <Link href={(step.cta as any).href} className="text-[#457B9D] font-semibold text-sm underline">{(step.cta as any).label} →</Link>
 )}
 </div>
 </div>
 ))}
 </div>

 {/* Pagamento alla consegna explained */}
 <div className="p-8 bg-[#DCEAF2] rounded-2xl border border-[#D6EAF0] mb-10">
 <h2 className="font-sans text-2xl text-gray-900 mb-4"> Pagamento alla Consegna (Contrassegno)</h2>
 <p className="text-gray-600 mb-5 leading-relaxed">
 Il <strong>pagamento alla consegna</strong> è il metodo preferito dalle nostre clienti: ordini oggi, paghi solo quando il corriere ti consegna il prodotto a casa. Zero anticipi, zero rischi.
 </p>
 <ul className="space-y-2">
 {[
 'Nessun dato di pagamento richiesto al momento dell\'ordine',
 'Paghi in contanti direttamente al corriere',
 'Se il pacco non arriva entro 5 giorni, l\'ordine è gratuito',
 'Puoi rifiutare il pacco al corriere senza alcun costo',
 ].map((p) => (
 <li key={p} className="flex items-start gap-2 text-gray-700 text-sm">
 <CheckCircle2 size={16} className="text-[#457B9D] shrink-0 mt-0.5" /> {p}
 </li>
 ))}
 </ul>
 </div>

 <div className="grid sm:grid-cols-2 gap-4">
 <Link href="/prodotti/massaggio-anticellulite-4in1/" className="btn-primary text-center justify-center">Ordina Massaggiatore</Link>
 <Link href="/prodotti/leggings-anticellulite-3d/" className="btn-secondary text-center justify-center">Ordina Leggings 3D</Link>
 </div>
 </div>
 </section>
 </>
 )
}
