import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, productSchema, breadcrumbSchema, faqSchema, SITE_URL } from '@/lib/seo'
import { Star, Truck, RotateCcw, Shield, ChevronDown, CheckCircle2, Zap } from 'lucide-react'
import LeggingsBundlePicker from '@/components/product/LeggingsBundlePicker'
import CountdownTimer from '@/components/home/CountdownTimer'

export const metadata: Metadata = {
 ...buildMetadata({
 title: 'Leggings Anticellulite 3D – Ridefinisci la tua silhouette senza sforzo | BellaCura',
 description:
 'I leggings anticellulite 3D clinicamente testati. Modellano gambe e glutei, riducono la cellulite e bruciano più calorie ogni giorno. Taglie XS–5XL. Pagamento alla consegna. Spedizione 24-48h.',
 path: '/prodotti/leggings-anticellulite-3d/',
 }),
 keywords: [
 'leggings anticellulite', 'leggings modellanti', 'leggings 3d cellulite',
 'pantaloni anticellulite', 'leggings compressione donna', 'leggings dimagranti',
 ].join(', '),
}

const reviews = [
 { author: 'Alessia T.', city: 'Milano', rating: 5, body: 'Li indosso ogni giorno in palestra e già dopo 3 settimane vedo la differenza sui glutei. La compressione è perfetta, non stringe mai nel punto sbagliato.', date: '2024-08-10' },
 { author: 'Carla M.', city: 'Roma', rating: 5, body: 'Ho preso la taglia XL e calza alla perfezione. La qualità del tessuto è ottima, non è trasparente e non scende. Finalmente dei leggings che funzionano davvero!', date: '2024-07-22' },
 { author: 'Francesca B.', city: 'Napoli', rating: 5, body: 'Ho ordinato il bundle 1+1 con lo short in regalo. Qualità incredibile per il prezzo. Le gambe sembrano già più snelle dopo 2 settimane.', date: '2024-08-18' },
 { author: 'Sofia R.', city: 'Torino', rating: 5, body: 'Finalmente una taglia 3XL che veste bene! Sono comodissimi e la compressione si sente subito. Ho già riordinato un secondo paio nel colore grigio.', date: '2024-08-25' },
]

const faqs = [
 { question: 'Come funzionano i leggings anticellulite 3D?', answer: 'Il tessuto 3D a compressione graduata aumenta il flusso sanguigno del 30%, stimola il sistema linfatico e genera un micro-massaggio continuo durante il movimento. Questo combatte la cellulite alla radice, modella gambe e glutei e aiuta a bruciare più calorie nel corso della giornata.' },
 { question: 'Che taglie sono disponibili?', answer: 'Disponibili in 9 taglie: XS, S, M, L, XL, XXL, 3XL, 4XL e 5XL. Consulta la nostra guida alle taglie per trovare la taglia giusta in base alle tue misure di vita e fianchi.' },
 { question: 'Posso indossarli tutto il giorno?', answer: 'Sì! Il tessuto traspirante e la compressione graduata li rendono confortevoli anche per uso prolungato — in palestra, in ufficio o durante le attività quotidiane. Molte clienti li indossano 8-10 ore al giorno.' },
 { question: 'Come si lavano?', answer: 'Lavatrice a 30°C, programma delicati. Si consiglia di usare una retina porta-indumenti. Non usare ammorbidente, non asciugare in asciugatrice. Stendi sempre a rovescio per preservare le proprietà del tessuto.' },
 { question: 'Come funziona il pagamento alla consegna?', answer: 'Scegli "Pagamento alla consegna" al checkout. Il corriere consegna il pacco a casa tua in 24-48 ore e paghi direttamente a lui in contanti al momento della ricezione. Nessun pagamento anticipato, zero rischi.' },
 { question: 'Posso restituire i leggings se non vanno bene di taglia?', answer: 'Assolutamente. Hai 30 giorni dalla ricezione per restituirli in qualsiasi condizione. Il reso è completamente gratuito e rimborsiamo il 100% dell\'importo pagato, incluso il costo di spedizione.' },
]

const keyBenefits = [
 { icon: '', text: 'Brucia più calorie ogni giorno, senza sforzo extra' },
 { icon: '', text: 'Riduce la cellulite alla radice – testato clinicamente' },
 { text: 'Modella gambe e glutei – effetto tonico immediato' },
 { icon: '', text: 'Aiuta a combattere le vene varicose capillari' },
]

export default function LeggingsPage() {
 const schema_product = productSchema({
 name: 'BellaCura Leggings Anticellulite 3D',
 description: 'Leggings anticellulite 3D a compressione graduata. Modellano gambe e glutei, riducono la cellulite e migliorano la circolazione. Disponibili in taglie XS–5XL e 3 colori.',
 image: '/images/leggings-anticellulite-3d.jpg',
 price: 34.90,
 sku: 'BC-LEGG-3D',
 reviews,
 })
 const schema_breadcrumb = breadcrumbSchema([
 { name: 'Home', url: SITE_URL + '/' },
 { name: 'Prodotti', url: SITE_URL + '/prodotti/' },
 { name: 'Leggings Anticellulite 3D', url: SITE_URL + '/prodotti/leggings-anticellulite-3d/' },
 ])
 const schema_faq = faqSchema(faqs)

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_product) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_breadcrumb) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_faq) }} />

 {/* Breadcrumb */}
 <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 py-3">
 <ol className="container-tight flex items-center gap-2 text-sm text-gray-500">
 <li><Link href="/" className="hover:text-rose-500">Home</Link></li>
 <li>/</li>
 <li><Link href="/prodotti/massaggio-anticellulite-4in1/" className="hover:text-rose-500">Prodotti</Link></li>
 <li>/</li>
 <li className="text-gray-900 font-medium" aria-current="page">Leggings Anticellulite 3D</li>
 </ol>
 </nav>

 {/* PRODUCT HERO */}
 <section className="bg-white py-10">
 <div className="container-tight">
 <div className="grid md:grid-cols-2 gap-12 items-start">

 {/* LEFT – gallery */}
 <div className="space-y-3">
 <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-rose-50 flex items-center justify-center text-[120px] shadow-lg overflow-hidden">

 </div>
 <div className="grid grid-cols-4 gap-3">
 {['','','',''].map((e, i) => (
 <div key={i} className="aspect-square rounded-xl bg-rose-50 border-2 border-transparent hover:border-rose-400 transition-colors flex items-center justify-center text-3xl cursor-pointer">
 {e}
 </div>
 ))}
 </div>

 {/* Clinical tested badge */}
 <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 mt-4">
 <span className="text-3xl"></span>
 <div>
 <p className="font-bold text-blue-800 text-sm">Clinicamente Testato</p>
 <p className="text-blue-700 text-xs">Aumenta il flusso sanguigno del 30% – studio indipendente</p>
 </div>
 </div>

 {/* Guarantee */}
 <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
 <span className="text-3xl"></span>
 <div>
 <p className="font-bold text-green-800 text-sm">Garanzia Soddisfatti o Rimborsati</p>
 <p className="text-green-700 text-xs">30 giorni – reso gratuito – rimborso 100%</p>
 </div>
 </div>
 </div>

 {/* RIGHT – product details */}
 <div className="md:sticky md:top-24">

 <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-2 leading-tight">
 Leggings Anticellulite 3D –{' '}
 <span className="text-rose-500">Ridefinisci la tua silhouette senza sforzo</span>
 </h1>
 <div className="w-16 h-1 bg-rose-400 rounded mb-5" />

 {/* Stars */}
 <div className="flex items-center gap-2 mb-5">
 <div className="flex">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
 ))}
 </div>
 <span className="font-bold text-gray-800">Oltre 4.800 clienti soddisfatte</span>
 </div>

 {/* Key benefits */}
 <ul className="space-y-2 mb-5">
 {keyBenefits.map((b) => (
 <li key={b.text} className="flex items-center gap-2 text-gray-800 font-medium">
 <span className="text-lg">{b.icon}</span> {b.text}
 </li>
 ))}
 </ul>

 {/* Stock urgency */}
 <div className="stock-badge mb-4 w-fit">
 <span className="stock-dot" />
 QUASI ESAURITO – Solo 4 pezzi rimasti
 </div>

 {/* Countdown */}
 <div className="mb-5">
 <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
 <Zap size={13} className="text-rose-500" /> Offerta speciale termina tra:
 </p>
 <CountdownTimer />
 </div>

 {/* Bundle + size picker */}
 <LeggingsBundlePicker />

 {/* Delivery */}
 <div className="flex items-center gap-2 text-sm text-gray-600 mt-5 p-3 bg-blue-50 rounded-xl border border-blue-100">
 <span className="text-blue-500"></span>
 <span><strong>Consegna veloce</strong> · Spedizione in <strong>24–48 ore</strong> · Gratis</span>
 </div>

 {/* Trust strip */}
 <div className="grid grid-cols-3 gap-2 text-center mt-4">
 {[
 { icon: <Truck size={16} />, label: 'Spedizione Gratis' },
 { icon: <RotateCcw size={16} />, label: 'Reso 30 Giorni' },
 { icon: <Shield size={16} />, label: 'Taglie XS–5XL' },
 ].map((item) => (
 <div key={item.label} className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex flex-col items-center gap-1">
 <span className="text-rose-500">{item.icon}</span>
 <span className="text-xs font-medium text-gray-700">{item.label}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* EDUCATIONAL SECTION */}
 <section className="section bg-cream">
 <div className="container-tight">
 <div className="grid md:grid-cols-2 gap-16 items-center">
 <div>
 <span className="badge mb-4">Gli unici leggings clinicamente testati</span>
 <h2 className="font-serif text-gray-900 mb-4">
 Agiscono sulla{' '}
 <span className="text-rose-500">vera causa</span>{' '}
 della cellulite
 </h2>
 <p className="text-gray-600 mb-5 leading-relaxed">
 La cellulite è causata da una cattiva circolazione sanguigna che porta a un accumulo
 di grasso e liquidi sotto la pelle. I normali leggings non cambiano nulla.
 </p>
 <p className="text-gray-600 mb-8 leading-relaxed">
 La tecnologia 3D dei nostri leggings genera una compressione graduata che aumenta
 il flusso sanguigno del <strong>30%</strong>, attiva il metabolismo cellulare locale e
 crea un micro-massaggio continuo ad ogni passo. Risultati visibili in 2 settimane.
 </p>

 <div className="space-y-3">
 <div className="p-4 rounded-xl bg-red-50 border border-red-100">
 <div className="flex items-center gap-2 mb-1">
 <span></span>
 <span className="font-bold text-sm text-red-700">Senza BellaCura</span>
 </div>
 <p className="text-sm text-red-600">Cattiva circolazione sanguigna → accumulo di grasso e liquidi → cellulite visibile</p>
 </div>
 <div className="p-4 rounded-xl bg-green-50 border border-green-100">
 <div className="flex items-center gap-2 mb-1">
 <span></span>
 <span className="font-bold text-sm text-green-700">Con BellaCura 3D</span>
 </div>
 <p className="text-sm text-green-600">Circolazione +30% → drenaggio attivo → gambe e glutei più tonici e levigati</p>
 </div>
 </div>
 </div>

 {/* Visual */}
 <div className="space-y-4">
 <div className="grid grid-cols-2 gap-4">
 <div className="rounded-2xl bg-red-50 border-2 border-red-100 p-6 text-center">
 <div className="text-5xl mb-3"></div>
 <p className="font-bold text-red-700 text-sm mb-1">PRIMA</p>
 <p className="text-xs text-red-500">Cellulite visibile, gambe pesanti, pelle rilassata</p>
 </div>
 <div className="rounded-2xl bg-green-50 border-2 border-green-100 p-6 text-center">
 <div className="text-5xl mb-3"></div>
 <p className="font-bold text-green-700 text-sm mb-1">DOPO 14 GIORNI</p>
 <p className="text-xs text-green-500">Gambe toniche, glutei sodi, pelle levigata</p>
 </div>
 </div>
 <div className="p-4 bg-white rounded-2xl shadow border border-gray-100 text-center">
 <p className="text-2xl font-bold text-rose-600 mb-1">Indossali e basta</p>
 <p className="text-sm text-gray-600">Lavorano per te 24h su 24 – anche seduta in ufficio</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* FEATURES */}
 <section className="section bg-white">
 <div className="container-tight">
 <div className="text-center mb-12">
 <span className="badge mb-3">Tecnologia 3D</span>
 <h2 className="font-serif text-gray-900 mb-3">Cosa rende unici i BellaCura 3D</h2>
 <p className="text-gray-500 max-w-xl mx-auto">Non sono semplici leggings compressivi — è una tecnologia brevettata che agisce sulla cellulite tutto il giorno.</p>
 </div>
 <div className="grid md:grid-cols-2 gap-4">
 {[
 { icon: '', title: 'Tessuto 3D Brevettato', desc: 'Filato tecnico a microcompressione che abbraccia ogni curva senza stringere.' },
 { icon: '', title: 'Circolazione +30%', desc: 'Aumenta il flusso sanguigno e linfatico, riducendo ritenzione e gonfiore.' },
 { icon: '', title: 'Effetto Termico', desc: 'Mantiene il calore corporeo nelle zone target, accelerando il metabolismo locale.' },
 { icon: '', title: 'Tessuto Traspirante', desc: 'Non si scalda, non pizzica. Perfetto per palestra, ufficio o uso quotidiano.' },
 { icon: '', title: 'Taglie XS a 5XL', desc: 'Per ogni corpo. 9 taglie disponibili con guida alle misure dettagliata.' },
 { icon: '', title: '3 Colori Disponibili', desc: 'Nero, Grigio e Verde Militare. Eleganti da soli o sotto qualsiasi outfit.' },
 ].map((f) => (
 <div key={f.title} className="card flex items-start gap-4 hover:shadow-md transition-shadow">
 <div className="text-3xl shrink-0">{f.icon}</div>
 <div>
 <h3 className="font-semibold text-gray-900 text-base mb-1">{f.title}</h3>
 <p className="text-gray-500 text-sm">{f.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* REVIEWS */}
 <section className="section bg-rose-50">
 <div className="container-tight">
 <div className="text-center mb-10">
 <span className="badge mb-3">Recensioni Verificate</span>
 <h2 className="font-serif text-gray-900 mb-2">Cosa dicono le nostre clienti</h2>
 <div className="flex items-center justify-center gap-2 mt-3">
 {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-amber-400 fill-amber-400" />)}
 <span className="font-bold text-gray-800 ml-1">4.9/5</span>
 <span className="text-gray-400 text-sm">· 312 recensioni</span>
 </div>
 </div>
 <div className="grid md:grid-cols-2 gap-6">
 {reviews.map((r) => (
 <article key={r.author} className="card hover:shadow-md transition-shadow">
 <div className="flex items-center justify-between mb-3">
 <div className="flex gap-0.5">
 {[...Array(r.rating)].map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
 </div>
 <span className="text-xs text-green-600 font-medium flex items-center gap-1">
 <CheckCircle2 size={12} /> Acquisto verificato
 </span>
 </div>
 <blockquote className="text-gray-700 text-sm leading-relaxed mb-3">"{r.body}"</blockquote>
 <div className="flex justify-between items-center">
 <div>
 <p className="font-semibold text-gray-900 text-sm">{r.author}</p>
 <p className="text-gray-400 text-xs">{r.city}</p>
 </div>
 <time className="text-gray-400 text-xs">{new Date(r.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="section bg-white">
 <div className="container-tight max-w-3xl">
 <h2 className="font-serif text-center text-gray-900 mb-10">Domande Frequenti</h2>
 <div className="space-y-4">
 {faqs.map((faq, i) => (
 <details key={i} className="card cursor-pointer group">
 <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
 {faq.question}
 <ChevronDown size={18} className="text-rose-400 group-open:rotate-180 transition-transform shrink-0 ml-4" />
 </summary>
 <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
 </details>
 ))}
 </div>
 </div>
 </section>

 {/* CROSS-SELL */}
 <section className="section bg-cream">
 <div className="container-tight text-center">
 <h2 className="font-serif text-gray-900 mb-3">Completa il tuo rituale anticellulite</h2>
 <p className="text-gray-500 mb-8 max-w-xl mx-auto">Le nostre clienti usano i leggings insieme al massaggiatore per risultati fino al 3× più rapidi.</p>
 <Link
 href="/prodotti/massaggio-anticellulite-4in1/"
 className="inline-flex items-center gap-3 card hover:shadow-md transition-shadow text-left max-w-md mx-auto"
 >
 <span className="text-5xl">‍</span>
 <div>
 <p className="font-bold text-gray-900">Massaggiatore Anticellulite 4 in 1</p>
 <p className="text-sm text-gray-500 mb-1">Vibrazione profonda + calore 45°C · 15 min/giorno</p>
 <span className="badge">€39,90 – Scopri →</span>
 </div>
 </Link>
 </div>
 </section>

 {/* FINAL CTA */}
 <section className="section bg-rose-600 text-white text-center">
 <div className="container-tight max-w-2xl">
 <h2 className="font-serif text-white text-3xl sm:text-4xl mb-4">
 Pronta a ridefinire la tua silhouette?
 </h2>
 <p className="text-rose-100 mb-8 text-lg">
 Ordina ora e ricevi in 24–48 ore. Paga alla consegna, senza rischi.
 </p>
 <Link
 href="/checkout/?prodotto=leggings-3d&metodo=cod"
 className="inline-flex items-center justify-center px-10 py-4 bg-white text-rose-600 font-bold rounded-full hover:bg-rose-50 transition-colors shadow-xl text-lg"
 >
 Ordina Ora – Solo €34,90
 </Link>
 <p className="text-rose-200 text-sm mt-4"> Paga alla consegna · 30 giorni reso gratis · 4.800+ clienti · Taglie XS–5XL</p>
 </div>
 </section>

 {/* STICKY MOBILE CTA */}
 <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-xl md:hidden z-40">
 <Link href="/checkout/?prodotto=leggings-3d&metodo=cod" className="btn-primary w-full justify-center">
 Ordina Ora – €34,90 · Paga alla Consegna
 </Link>
 </div>
 </>
 )
}
