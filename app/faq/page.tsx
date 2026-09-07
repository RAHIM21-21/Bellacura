import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
 title: 'Domande Frequenti – Ordini, Spedizioni, Prodotti',
 description: 'Trova risposta a tutte le domande più comuni su BellaCura: come ordinare, pagamento alla consegna, spedizioni, resi e garanzia.',
 path: '/faq/',
})

const faqs = [
 { cat: 'Ordini', q: 'Come posso ordinare?', a: 'Vai alla pagina del prodotto che vuoi, scegli le opzioni e clicca "Ordina con Pagamento alla Consegna" oppure "Paga Online". Riceverai una conferma via email entro pochi minuti.' },
 { cat: 'Ordini', q: 'Posso modificare o cancellare il mio ordine?', a: 'Sì, entro 2 ore dall\'ordine. Contattaci subito via WhatsApp o email con il numero d\'ordine e provvediamo immediatamente.' },
 { cat: 'Pagamento', q: 'Come funziona il pagamento alla consegna?', a: 'Ordina senza pagare nulla subito. Il corriere arriva a casa tua in 24–48 ore e paghi in contanti direttamente a lui. Zero rischi, zero anticipi.' },
 { cat: 'Pagamento', q: 'Quali metodi di pagamento accettate?', a: 'Accettiamo pagamento alla consegna (contrassegno), carte di credito/debito Visa e Mastercard, e PayPal. Tutti i pagamenti online sono crittografati SSL.' },
 { cat: 'Spedizione', q: 'Quanto tempo ci vuole per la consegna?', a: 'Spediamo entro 24 ore dalla conferma dell\'ordine. La consegna avviene in 24–48 ore lavorative in tutta Italia, incluse isole (potrebbero richiedere 1 giorno in più).' },
 { cat: 'Spedizione', q: 'La spedizione è davvero gratuita?', a: 'Sì, la spedizione è completamente gratuita su tutti gli ordini, senza minimo d\'acquisto e senza costi nascosti.' },
 { cat: 'Resi', q: 'Come funziona il reso?', a: 'Hai 14 giorni dalla ricezione per restituire il prodotto per qualsiasi motivo. Contattaci, ti inviamo un\'etichetta prepagata e rimborsiamo il 100% entro 5 giorni lavorativi.' },
 { cat: 'Prodotti', q: 'I prodotti BellaCura funzionano davvero?', a: 'Sì. Il massaggiatore anticellulite è clinicamente testato e oltre 2.800+ clienti hanno visto risultati visibili già nelle prime 2 settimane. I leggings 3D aumentano la circolazione del 30% — testato in studi indipendenti.' },
 { cat: 'Prodotti', q: 'Posso usare il massaggiatore sotto la doccia?', a: 'Assolutamente. È certificato IPX7 waterproof: resistente all\'immersione completa in acqua fino a 1 metro per 30 minuti.' },
 { cat: 'Prodotti', q: 'Che taglie sono disponibili per i leggings?', a: 'I leggings 3D BellaCura sono disponibili in 9 taglie: XS, S, M, L, XL, XXL, 3XL, 4XL e 5XL. Consulta la guida alle taglie nella pagina prodotto.' },
]

const categories = Array.from(new Set(faqs.map((f) => f.cat)))

export default function FaqPage() {
 return (
 <>
 <section className="bg-gradient-to-br from-rose-50 to-white py-16">
 <div className="container-tight text-center">
 <span className="badge mb-4">Supporto Clienti</span>
 <h1 className="font-serif text-4xl text-gray-900 mb-4">Domande Frequenti</h1>
 <p className="text-gray-600 text-lg max-w-xl mx-auto">
 Trova risposta alle domande più comuni. Non trovi quello che cerchi?{' '}
 <Link href="/contatti/" className="text-rose-500 underline">Scrivici</Link>.
 </p>
 </div>
 </section>

 <section className="section bg-white">
 <div className="container-tight max-w-3xl">
 {categories.map((cat) => (
 <div key={cat} className="mb-10">
 <h2 className="font-serif text-xl text-gray-900 mb-4 pb-2 border-b border-rose-100">{cat}</h2>
 <div className="space-y-3">
 {faqs.filter((f) => f.cat === cat).map((faq, i) => (
 <details key={i} className="card cursor-pointer group">
 <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
 {faq.q}
 <ChevronDown size={18} className="text-rose-400 group-open:rotate-180 transition-transform shrink-0 ml-4" />
 </summary>
 <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
 </details>
 ))}
 </div>
 </div>
 ))}
 </div>
 </section>

 <section className="section bg-rose-50 text-center">
 <div className="container-tight max-w-xl">
 <h2 className="font-serif text-gray-900 mb-4">Hai ancora domande?</h2>
 <p className="text-gray-600 mb-6">Il nostro team risponde entro poche ore, dal lunedì al sabato.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link href="/contatti/" className="btn-primary"> Scrivici</Link>
 <Link href="/prodotti/massaggio-anticellulite-4in1/" className="btn-secondary">Scopri i Prodotti</Link>
 </div>
 </div>
 </section>
 </>
 )
}
