import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, productSchema, breadcrumbSchema, faqSchema, SITE_URL } from '@/lib/seo'
import ProductBundlePicker from '@/components/product/ProductBundlePicker'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import ReviewsCarousel from '@/components/ui/ReviewsCarousel'
import StickyOrderButton from '@/components/product/StickyOrderButton'
import VideoSection from '@/components/product/VideoSection'

export const metadata: Metadata = {
 ...buildMetadata({
 title: 'Massaggiatore Anticellulite 4 in 1 – Pelle Più Tonica in 14 Giorni | BellaCura',
 description:
 'Il massaggiatore anticellulite professionale più venduto in Italia. Vibrazione + calore 45°C + 4 testine. Risultati visibili in 2 settimane. Paga alla consegna. Spedizione 24-48h GRATIS.',
 path: '/prodotti/massaggio-anticellulite-4in1/',
 ogImage: `${SITE_URL}/images/massaggiatore-anticellulite-og.jpg`,
 }),
 keywords: [
 'massaggiatore anticellulite', 'massaggio anticellulite casa', 'dispositivo anticellulite',
 'massaggiatore corpo cellulite', 'trattamento cellulite casa', 'massaggiatore anticellulite elettrico',
 ].join(', '),
}

const reviews = [
 { author: 'Francesca M.', city: 'Milano', rating: 5, body: 'Incredibile! Dopo 2 settimane vedo già la differenza sulla coscia. La pelle è più tonica e meno a buccia d\'arancia. Lo consiglio a tutte!', date: '2024-08-12' },
 { author: 'Giulia R.', city: 'Roma', rating: 5, body: 'Ho pagato alla consegna e sono arrivati in 2 giorni. Il massaggiatore è potente ma delicato. Lo uso ogni sera prima di dormire.', date: '2024-07-28' },
 { author: 'Valentina C.', city: 'Napoli', rating: 5, body: 'Uso la funzione di riscaldamento combinata con la vibrazione massima. Sento i muscoli rilassarsi istantaneamente. Ottima qualità!', date: '2024-08-05' },
 { author: 'Marta B.', city: 'Torino', rating: 4, body: 'Molto soddisfatta. L\'unica cosa è che la batteria potrebbe durare un po\' di più, ma i risultati sono davvero evidenti dopo sole 3 settimane.', date: '2024-08-20' },
]

const faqs = [
 { question: 'Come funziona il massaggiatore anticellulite 4 in 1?', answer: 'Combina 4 tecnologie: vibrazione profonda ad alta frequenza, riscaldamento a infrarossi a 45°C, pressione meccanica regolabile e 4 testine intercambiabili. Insieme stimolano la circolazione, drenano i liquidi in eccesso e riducono visibilmente la cellulite.' },
 { question: 'In quanto tempo si vedono i risultati?', answer: 'La maggior parte delle clienti nota miglioramenti già dopo 7-10 giorni di utilizzo regolare (15 minuti al giorno). Risultati significativi dopo 4-6 settimane.' },
 { question: 'Posso usarlo anche sotto la doccia?', answer: 'Sì! Il massaggiatore è certificato IPX7 waterproof. Puoi usarlo tranquillamente sotto la doccia, aumentando l\'efficacia grazie al calore dell\'acqua.' },
 { question: 'Come funziona il pagamento alla consegna?', answer: 'Scegli "Pagamento alla consegna" al checkout. Il corriere consegna il prodotto a casa tua in 24-48 ore e paghi direttamente a lui in contanti al momento della ricezione.' },
 { question: 'Posso restituire il prodotto se non sono soddisfatta?', answer: 'Assolutamente sì. Hai 14 giorni dalla ricezione per restituire il prodotto per qualsiasi motivo. Il reso è completamente gratuito e rimborsiamo il 100% dell\'importo pagato.' },
]

const steps = [
 { n: '01', title: 'Applica il gel o l\'olio', body: 'Stendi il tuo olio massaggiante preferito sull\'area da trattare. Il gel aumenta la conduzione del calore e massimizza i risultati.' },
 { n: '02', title: 'Seleziona la testina', body: 'Scegli tra le 4 testine intercambiabili in base all\'area: grande per cosce, media per glutei, piccola per addome, dentellata per gambe.' },
 { n: '03', title: 'Massaggia 10–15 minuti', body: 'Usa movimenti circolari ascendenti. Inizia con intensità bassa e aumenta gradualmente fino al livello che preferisci.' },
 { n: '04', title: 'Ripeti ogni giorno', body: 'Per risultati visibili in 14 giorni, massaggia ogni sera. Dopo 14 giorni la differenza sarà evidente anche agli altri.' },
]

const features = [
 { title: 'Calore a 45°C', body: 'Penetra in profondità nel tessuto adiposo, scioglie i depositi di grasso e attiva il metabolismo cellulare.' },
 { title: '5 livelli di vibrazione', body: 'Da delicato a intenso. Adatta la potenza alla tua sensibilità e all\'area del corpo che stai trattando.' },
 { title: 'Impermeabile IPX7', body: 'Usalo sotto la doccia, in vasca o con oli. Il design waterproof lo rende versatile e facilissimo da pulire.' },
 { title: 'Ricarica USB-C', body: 'Basta 2 ore per una carica completa. 90 minuti di utilizzo continuativo per non interrompere la tua routine.' },
 { title: '4 testine intercambiabili', body: 'Coprimi tutte le zone critiche: cosce, glutei, addome, fianchi e polpacci con la testina giusta.' },
 { title: 'Silenzioso < 40 dB', body: 'Silenzioso come un sussurro. Usalo mentre guardi la TV, leggi o ti rilassi senza disturbare nessuno.' },
]

export default function ProductPage() {
 const schema_product = productSchema({
 name: 'BellaCura Massaggiatore Anticellulite 4 in 1',
 description: 'Massaggiatore anticellulite professionale con vibrazione profonda, riscaldamento a infrarossi 45°C, 4 testine intercambiabili e 5 livelli di intensità. Impermeabile IPX7.',
 image: '/images/massaggiatore-anticellulite-4in1.jpg',
 price: 59.90, sku: 'BC-MASS-4IN1', reviews,
 })
 const schema_breadcrumb = breadcrumbSchema([
 { name: 'Home', url: SITE_URL + '/' },
 { name: 'Massaggiatore Anticellulite 4 in 1', url: SITE_URL + '/prodotti/massaggio-anticellulite-4in1/' },
 ])
 const schema_faq = faqSchema(faqs)

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_product) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_breadcrumb) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_faq) }} />

 {/* OFFERTA A TEMPO */}
 <div className="text-center py-2 text-sm font-semibold tracking-wide" style={{background: 'linear-gradient(90deg, #F2C2CE 0%, #E8ADBE 50%, #F2C2CE 100%)', color: '#6B1E3A'}}>
 OFFERTA LIMITATA — Solo 7 pezzi disponibili a questo prezzo
 </div>

 {/* BREADCRUMB */}
 <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 py-2.5">
 <ol className="max-w-6xl mx-auto px-4 flex items-center gap-2 text-xs text-gray-400">
 <li><Link href="/" className="hover:text-rose-500">Home</Link></li>
 <li>/</li>
 <li><Link href="/prodotti/" className="hover:text-rose-500">Prodotti</Link></li>
 <li>/</li>
 <li className="text-gray-700 font-medium">Massaggiatore 4 in 1</li>
 </ol>
 </nav>

 {/*
 HERO — image left · purchase panel right
 */}
 <section className="bg-white py-8 md:py-12">
 <div className="max-w-6xl mx-auto px-4 sm:px-6">
 {/* Mobile-only: title + stars above gallery */}
 <div className="md:hidden space-y-3 mb-4">
 <div>
 <p className="text-rose-600 text-xs font-bold uppercase tracking-widest mb-1">BellaCura® Original</p>
 <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
 Massaggiatore Anticellulite 4 in 1™
 </h1>
 <p className="text-gray-500 text-base mt-1">Pelle più tonica e levigata — visibile in 14 giorni</p>
 </div>
 <div className="flex items-center gap-2">
 <div className="flex">
 {[...Array(5)].map((_, i) => (
 <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 ))}
 </div>
 <span className="font-bold text-gray-900">4.9/5.0</span>
 <span className="text-gray-400 text-sm">da 2.847 recensioni verificate</span>
 </div>
 </div>

 <div className="grid md:grid-cols-[1fr_420px] gap-3 md:gap-10 items-start">

 {/* LEFT: image gallery */}
 <ProductImageGallery />

 {/* RIGHT: sticky purchase panel */}
 <div className="md:sticky md:top-24 space-y-5">

 {/* Title + stars — desktop only */}
 <div className="hidden md:block space-y-4">
 <div>
 <p className="text-rose-600 text-xs font-bold uppercase tracking-widest mb-1">BellaCura® Original</p>
 <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
 Massaggiatore Anticellulite 4 in 1™
 </h1>
 <p className="text-gray-500 text-base mt-1">Pelle più tonica e levigata — visibile in 14 giorni</p>
 </div>
 <div className="flex items-center gap-2">
 <div className="flex">
 {[...Array(5)].map((_, i) => (
 <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 ))}
 </div>
 <span className="font-bold text-gray-900">4.9/5.0</span>
 <span className="text-gray-400 text-sm">da 2.847 recensioni verificate</span>
 </div>
 </div>

 {/* Benefit bullets */}
 <div className="space-y-2">
 {[
 'Pelle più tonica — vibrazione, calore e pressione',
 'Zero dolore, zero lividi — al contrario delle coppette',
 'Gambe più leggere — migliora la circolazione',
 '10 min al giorno — nessun salone a €200',
 ].map((text) => (
 <div key={text} className="flex items-start gap-3">
 <svg className="w-4 h-4 mt-0.5 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
 <span className="text-gray-700 text-sm">{text}</span>
 </div>
 ))}
 </div>

 {/* Bundle picker */}
 <ProductBundlePicker />

 </div>
 </div>
 </div>
 </section>

  {/*
 COME VISTO SU
 */}
 <section className="py-10 overflow-hidden" style={{background: 'linear-gradient(180deg, #fff 0%, #FDF0F3 100%)'}}>
   <div className="flex items-center gap-4 max-w-4xl mx-auto px-6 mb-8">
     <div className="flex-1 h-px bg-rose-100" />
     <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-400 whitespace-nowrap">Come visto su</p>
     <div className="flex-1 h-px bg-rose-100" />
   </div>
   <style>{`
     @keyframes marquee {
       0% { transform: translateX(0); }
       100% { transform: translateX(-50%); }
     }
     .logo-marquee { animation: marquee 28s linear infinite; }
     .logo-marquee:hover { animation-play-state: paused; }
     .logo-track {
       -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
       mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
     }
     .press-logo { opacity: 0.25; transition: opacity 0.25s; filter: brightness(0) saturate(0); }
     .press-logo:hover { opacity: 0.5; }
   `}</style>
   <div className="logo-track relative flex overflow-hidden">
     <div className="logo-marquee flex items-center gap-12 whitespace-nowrap px-6">
       {[
         { src: '/images/logo-vogue.png',       alt: 'Vogue Italia',  h: 28 },
         { src: '/images/logo-marie-claire.png', alt: 'Marie Claire', h: 48 },
         { src: '/images/logo-elle.png',         alt: 'Elle',         h: 28 },
         { src: '/images/logo-grazia.png',       alt: 'Grazia',       h: 28 },
         { src: '/images/logo-allure.png',       alt: 'Allure',       h: 54 },
         { src: '/images/logo-glamour.png',      alt: 'Glamour',      h: 52 },
         { src: '/images/logo-vogue.png',        alt: 'Vogue2',       h: 28 },
         { src: '/images/logo-marie-claire.png', alt: 'Marie2',       h: 48 },
         { src: '/images/logo-elle.png',         alt: 'Elle2',        h: 28 },
         { src: '/images/logo-grazia.png',       alt: 'Grazia2',      h: 28 },
         { src: '/images/logo-allure.png',       alt: 'Allure2',      h: 54 },
         { src: '/images/logo-glamour.png',      alt: 'Glamour2',     h: 52 },
       ].map(({ src, alt, h }) => (
         <span key={alt} style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 140, height: 60, flexShrink: 0}}>
           <img src={src} alt={alt} className="press-logo" style={{height: h, width: 'auto', objectFit: 'contain'}} />
         </span>
       ))}
     </div>
   </div>
 </section>

 {/* REVIEWS */}
 <ReviewsCarousel />

 {/*
 RISULTATI REALI
 */}
 <section className="bg-rose-50 py-14">
 <div className="max-w-4xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-10">
 <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">✨ Risultati certificati</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-2">I numeri parlano da soli</h2>
 <p className="text-gray-500 text-sm">Sondaggio su 1.200+ clienti BellaCura (2024)</p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { pct: 92, label: '92%', text: 'Riduzione visibile della cellulite già dalla prima settimana.' },
 { pct: 89, label: '89%', text: 'Pelle più liscia e gambe più leggere dopo soli 14 giorni.' },
 { pct: 94, label: '94%', text: 'Sollievo muscolare percepito dopo ogni sessione di massaggio.' },
 ].map(({ pct, label, text }) => {
 const r = 36; const circ = 2 * Math.PI * r;
 const dash = (pct / 100) * circ;
 return (
 <div key={label} className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-rose-100">
 <svg width="88" height="88" viewBox="0 0 88 88" className="shrink-0">
 <circle cx="44" cy="44" r={r} fill="none" stroke="#fce7f3" strokeWidth="8"/>
 <circle cx="44" cy="44" r={r} fill="none" stroke="#e11d48" strokeWidth="8"
 strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
 transform="rotate(-90 44 44)" />
 <text x="44" y="49" textAnchor="middle" fontSize="16" fontWeight="900" fill="#1f2937">{label}</text>
 </svg>
 <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
 </div>
 )
 })}
 </div>
 <p className="text-center text-xs text-gray-400 mt-6">*Basato su sondaggi condotti su clienti BellaCura reali nel 2024</p>
 </div>
 </section>

 {/*
 IL PROBLEMA
 */}
 <section className="bg-white py-16">
 <div className="max-w-4xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-12">
 <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Il problema</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-4">La vera causa della cellulite</h2>
 <p className="text-gray-600 max-w-2xl mx-auto">
 La cellulite non è solo un problema estetico. È causata da una cattiva circolazione linfatica che fa accumulare liquidi e tossine nel tessuto adiposo, creando la tipica pelle a buccia d&apos;arancia.
 </p>
 </div>

 {/* Before/After slider */}
 <div className="max-w-md mx-auto w-full px-4 sm:px-8">
 <BeforeAfterSlider
 beforeSrc="/images/prima-cellulite.jpg"
 afterSrc="/images/dopo-bellacura.jpg"
 beforeLabel="Prima"
 afterLabel="Dopo 14 giorni"
 alt="Risultati anticellulite BellaCura"
 aspectRatio="120%"
 />
 </div>

 {/* Results checklist */}
 <div className="grid md:grid-cols-2 gap-4 mt-4">
 <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
 <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2"><span className="text-red-400"></span> Senza trattamento</h3>
 <ul className="space-y-1.5 text-gray-500 text-sm">
 {['Pelle a buccia d\'arancia sulle cosce', 'Circolazione lenta e gambe pesanti', 'Cellulite resistente a dieta e sport', '€200+ per ogni seduta estetica'].map(p => (
 <li key={p} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0"></span>{p}</li>
 ))}
 </ul>
 </div>
 <div className="rounded-2xl bg-rose-50 border-2 border-rose-200 p-5">
 <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2"><span className="text-green-500"></span> Con BellaCura</h3>
 <ul className="space-y-1.5 text-gray-700 text-sm">
 {['Pelle liscia e tonica in 14 giorni', 'Circolazione attivata, gambe leggere', 'Cellulite ridotta con 10 min al giorno', 'Risparmio di migliaia di euro all\'anno'].map(p => (
 <li key={p} className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0"></span>{p}</li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </section>


 {/*
 VIDEO PROMO
 */}
 <section className="bg-white py-16">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
 <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Vedi come funziona</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
 Risultati reali, routine semplice
 </h2>
 <VideoSection />
 <p className="mt-6 text-gray-500 text-sm max-w-md mx-auto">
 Solo 10 minuti al giorno. I risultati parlano da soli.
 </p>
 </div>
 </section>


 {/*
 TECH + ZONES — combined compact section
 */}
 <section className="bg-white py-14">
 <div className="max-w-5xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-10">
 <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Tecnologia</span>
 <h2 className="text-3xl font-extrabold text-gray-900">Quello che lo rende unico</h2>
 <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">4 tecnologie in un solo dispositivo — tutto ciò che serve per risultati visibili a casa.</p>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
 {[
 { icon: '🔴', title: 'Luce rossa — collagene', desc: 'La luce rossa a 630 nm penetra nel derma e stimola la produzione di collagene, rendendo la pelle più soda, levigata e luminosa dopo ogni sessione.' },
 { icon: '🔥', title: 'Calore a 45°C', desc: "Il calore infrarosso scioglie i depositi di grasso sottocutaneo e potenzia l'assorbimento di oli e creme fino al 70% in più." },
 { icon: '💎', title: '5 livelli di vibrazione', desc: "Da delicato a intenso. Adatta la potenza alla tua sensibilità e all'area del corpo per un massaggio sempre preciso." },
 { icon: '💧', title: 'Impermeabile IPX7', desc: 'Usalo sotto la doccia o in vasca con oli e creme. Facile da pulire, pronto ogni giorno.' },
 ].map((t) => (
 <div key={t.title} className="bg-rose-50 rounded-2xl p-5 flex flex-col gap-2 border border-rose-100">
 <span className="text-2xl">{t.icon}</span>
 <h3 className="font-bold text-gray-900 text-sm">{t.title}</h3>
 <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
 </div>
 ))}
 </div>
 <div className="border-t border-gray-100 pt-8">
 <p className="text-center text-xs font-bold uppercase tracking-widest text-rose-500 mb-5">Un dispositivo per tutto il corpo</p>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
 {[
 { zone: 'Gambe & Cosce', desc: "Riduce l'aspetto della cellulite e attiva il collagene per una pelle più compatta." },
 { zone: 'Glutei', desc: 'Leviga e rassoda — la luce rossa stimola il rinnovamento cutaneo in profondità.' },
 { zone: 'Addome', desc: 'Drena i liquidi in eccesso e tona la pelle del ventre con il calore a 45°C.' },
 { zone: 'Schiena', desc: 'Scioglie la tensione muscolare e rilassa i nodi dopo una giornata lunga.' },
 ].map(({ zone, desc }) => (
 <div key={zone} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 hover:border-rose-200 transition-colors">
 <h3 className="font-bold text-gray-900 text-sm mb-1">{zone}</h3>
 <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>




 {/*
 CONFRONTO
 */}
 <section className="bg-white py-16">
 <div className="max-w-3xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-10">
 <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Confronto</span>
 <h2 className="text-3xl font-extrabold text-gray-900">BellaCura vs. Centro Estetico</h2>
 </div>
 <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
 <table className="w-full text-sm">
 <thead>
 <tr className="bg-gray-50 border-b border-gray-200">
 <th className="text-left px-5 py-4 text-gray-500 font-semibold w-1/3"></th>
 <th className="px-5 py-4 text-rose-600 font-bold text-center">BellaCura®</th>
 <th className="px-5 py-4 text-gray-400 font-semibold text-center">Centro Estetico</th>
 </tr>
 </thead>
 <tbody>
 {[
 { metric: 'Costo', bc: '€59,90 una tantum', clinic: '€80–200 a seduta' },
 { metric: 'Tempo', bc: '10 min a casa tua', clinic: '60 min + spostamento' },
 { metric: 'Frequenza', bc: 'Ogni giorno, quando vuoi', clinic: '1–2 volte a settimana' },
 { metric: 'Privacy', bc: '100% privato', clinic: 'In salone con estetista' },
 { metric: 'Costo annuale', bc: '€59,90', clinic: '€2.000–4.000+' },
 { metric: 'Appuntamento', bc: 'Non necessario', clinic: 'Obbligatorio' },
 { metric: 'Tecnologia', bc: 'Vibrazione + calore + 4 testine', clinic: 'Varia per salone' },
 ].map(({ metric, bc, clinic }, i) => (
 <tr key={metric} className={i % 2 === 0 ? 'bg-white' : 'bg-rose-50/30'}>
 <td className="px-5 py-3.5 text-gray-700 font-medium">{metric}</td>
 <td className="px-5 py-3.5 text-center font-semibold text-gray-900">{bc}</td>
 <td className="px-5 py-3.5 text-center text-gray-400">{clinic}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 <p className="text-center text-gray-500 text-sm mt-6">
 Con BellaCura risparmi fino a <strong className="text-rose-600">€3.960 l&apos;anno</strong> rispetto alle sedute in salone.
 </p>
 </div>
 </section>

 {/*
 FAQ
 */}
 <section className="bg-white py-16">
 <div className="max-w-2xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-10">
 <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">FAQ</span>
 <h2 className="text-3xl font-extrabold text-gray-900">Domande frequenti</h2>
 </div>
 <div className="space-y-3">
 {faqs.map((faq, i) => (
 <details key={i} className="group rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden">
 <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm list-none hover:bg-gray-100 transition-colors">
 {faq.question}
 <span className="text-rose-500 shrink-0 text-lg group-open:rotate-45 transition-transform">+</span>
 </summary>
 <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
 {faq.answer}
 </div>
 </details>
 ))}
 </div>
 </div>
 </section>

 {/*
 FINAL CTA
 */}
 <section className="py-16" style={{background: 'linear-gradient(135deg, #F5C8D6 0%, #EAB0C2 50%, #F2C2CE 100%)'}}>
 <div className="max-w-2xl mx-auto px-4 text-center">
 <div className="flex justify-center mb-4">
 {[...Array(5)].map((_, i) => (
 <svg key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 ))}
 </div>
 <h2 className="text-3xl font-extrabold mb-4" style={{color: '#5A1830'}}>Prova BellaCura senza rischi</h2>
 <p className="mb-8 text-lg" style={{color: '#7A2040'}}>
 Se non vedi risultati entro 14 giorni, ti rimborsiamo il 100%. Zero domande. Zero burocrazia.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href="/checkout/?prodotto=massaggio-4in1&qty=1&metodo=cod"
 className="font-bold text-lg px-10 py-4 rounded-2xl transition-colors shadow-xl" style={{background: '#7A2040', color: '#fff'}}
 >
 Ordina ora — Paga alla consegna
 </a>
 </div>
 <p className="text-sm mt-4" style={{color: '#9B4060'}}> Spedizione gratuita · Garanzia 14 giorni · 2.847+ clienti soddisfatte</p>
 </div>
 </section>

 {/* Cross-sell */}
 <section className="bg-white py-10 border-t border-gray-100">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
 <p className="text-gray-500 text-sm mb-4">Completa la tua routine anticellulite</p>
 <Link
 href="/prodotti/leggings-anticellulite-3d/"
 className="inline-flex items-center gap-3 bg-gray-50 hover:bg-rose-50 border border-gray-200 hover:border-rose-300 rounded-2xl px-6 py-4 transition-colors"
 >
 <span className="text-3xl"></span>
 <div className="text-left">
 <p className="font-bold text-gray-900 text-sm">Leggings Anticellulite 3D</p>
 <p className="text-gray-500 text-xs">Compressione graduata + termico 24/7 — da €34,90</p>
 </div>
 <span className="text-rose-500 text-lg ml-2">→</span>
 </Link>
 </div>
 </section>

 {/* Fixed sticky CTA — mobile + desktop */}
 <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl">
 {/* Mobile */}
 <StickyOrderButton />
 {/* Desktop */}
 <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto px-6 py-3 gap-6">
 <div className="flex items-center gap-4">
 <span className="font-extrabold text-gray-900 text-base">Massaggiatore Anticellulite 4 in 1™</span>
 <div className="flex items-center gap-1">
 {[...Array(5)].map((_, i) => (
 <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 ))}
 <span className="text-xs text-gray-500 ml-1">4.9 · 2.847 recensioni</span>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <div className="text-right">
 <span className="text-gray-400 line-through text-sm">€119,00</span>
 <span className="font-extrabold text-gray-900 text-xl ml-2">€59,90</span>
 </div>
 <StickyOrderButton desktop />
 </div>
 </div>
 </div>
 </>
 )
}
