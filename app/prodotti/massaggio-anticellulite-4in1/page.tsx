import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, productSchema, breadcrumbSchema, faqSchema, SITE_URL } from '@/lib/seo'
import ProductBundlePicker from '@/components/product/ProductBundlePicker'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import ReviewsCarousel from '@/components/ui/ReviewsCarousel'
import StickyOrderButton from '@/components/product/StickyOrderButton'
import VideoSection from '@/components/product/VideoSection'
import CountdownTimer from '@/components/home/CountdownTimer'
import BodyMap from '@/components/home/BodyMap'
import ComparisonVS from '@/components/product/ComparisonVS'

export const metadata: Metadata = {
 ...buildMetadata({
 title: 'Massaggiatore Anticellulite 4 in 1 – Pelle Più Tonica in 14 Giorni | BellaCura',
 description:
 'Il massaggiatore anticellulite professionale più venduto in Italia. Vibrazione + calore 45°C + luce rossa. Risultati visibili in 2 settimane. Paga alla consegna. Spedizione 24-48h GRATIS.',
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
 { question: 'Come funziona il massaggiatore anticellulite 4 in 1?', answer: 'Combina 4 tecnologie: vibrazione profonda ad alta frequenza, riscaldamento a 45°C, luce rossa e pressione meccanica. Insieme stimolano la circolazione, drenano i liquidi in eccesso e riducono visibilmente la cellulite.' },
 { question: 'In quanto tempo si vedono i risultati?', answer: 'La maggior parte delle clienti nota miglioramenti già dopo 7-10 giorni di utilizzo regolare (10 minuti al giorno). Risultati significativi dopo 4-6 settimane.' },
 { question: 'Quanto dura la batteria?', answer: 'Con una singola carica di circa 2 ore tramite USB-C, il massaggiatore offre fino a 90 minuti di utilizzo continuativo. Puoi ricaricarlo ogni sera e averlo sempre pronto per la tua routine.' },
 { question: 'Come funziona il pagamento alla consegna?', answer: 'Scegli "Pagamento alla consegna" al checkout. Il corriere consegna il prodotto a casa tua in 24-48 ore e paghi direttamente a lui in contanti al momento della ricezione.' },
 { question: 'Posso restituire il prodotto se non sono soddisfatta?', answer: 'Assolutamente sì. Hai 14 giorni dalla ricezione per restituire il prodotto per qualsiasi motivo. Il reso è completamente gratuito e rimborsiamo il 100% dell\'importo pagato.' },
 { question: 'Vale la pena rispetto a un salone estetico?', answer: 'Un singolo trattamento anticellulite in salone costa in media €60–€100. Con BellaCura paghi €59,90 una sola volta e hai i trattamenti illimitati a casa tua, quando vuoi, per sempre. Molte nostre clienti risparmiano centinaia di euro ogni anno.' },
 { question: 'È sicuro per la pelle sensibile?', answer: 'Sì. La luce rossa e il calore a infrarossi sono tecnologie dolci usate anche in ambito medico-estetico. Inizia con la vibrazione più bassa e aumenta gradualmente. In caso di patologie cutanee, consulta il tuo medico prima dell\'uso.' },
]

const steps = [
 { n: '01', title: 'Applica il gel o l\'olio', body: 'Stendi il tuo olio massaggiante preferito sull\'area da trattare. Il gel aumenta la conduzione del calore e massimizza i risultati.' },
 { n: '02', title: 'Posiziona la testina', body: 'Appoggia la testina sull\'area da trattare — cosce, glutei, addome o fianchi — e lascia che il massaggio lavori in profondità.' },
 { n: '03', title: 'Massaggia 10 minuti', body: 'Usa movimenti circolari ascendenti. Inizia con intensità bassa e aumenta gradualmente fino al livello che preferisci.' },
 { n: '04', title: 'Ripeti ogni giorno', body: 'Per risultati visibili in 14 giorni, massaggia ogni sera. Dopo 14 giorni la differenza sarà evidente anche agli altri.' },
]

const features = [
 { title: 'Calore a 45°C', body: 'Penetra in profondità nel tessuto adiposo, scioglie i depositi di grasso e attiva il metabolismo cellulare.' },
 { title: '5 livelli di vibrazione', body: 'Da delicato a intenso. Adatta la potenza alla tua sensibilità e all\'area del corpo che stai trattando.' },
 { title: 'Impermeabile IPX7', body: 'Usalo sotto la doccia, in vasca o con oli. Il design waterproof lo rende versatile e facilissimo da pulire.' },
 { title: 'Ricarica USB-C', body: 'Basta 2 ore per una carica completa. 90 minuti di utilizzo continuativo per non interrompere la tua routine.' },
 { title: 'Design ergonomico', body: 'Impugnatura antiscivolo pensata per raggiungere agevolmente ogni zona — cosce, glutei, addome — anche in autonomia.' },
 { title: 'Silenzioso < 40 dB', body: 'Silenzioso come un sussurro. Usalo mentre guardi la TV, leggi o ti rilassi senza disturbare nessuno.' },
]

export default function ProductPage() {
 const schema_product = productSchema({
 name: 'BellaCura Massaggiatore Anticellulite 4 in 1',
 description: 'Massaggiatore anticellulite professionale con vibrazione profonda, riscaldamento a infrarossi 45°C, luce rossa e 5 livelli di intensità. Impermeabile IPX7.',
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
  <link
    rel="preload"
    as="image"
    href="/_next/image?url=%2Fimages%2Fg1-clean.jpg&w=828&q=75"
    imageSrcSet="/_next/image?url=%2Fimages%2Fg1-clean.jpg&w=390&q=75 390w, /_next/image?url=%2Fimages%2Fg1-clean.jpg&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fg1-clean.jpg&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fg1-clean.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fg1-clean.jpg&w=1200&q=75 1200w"
    imageSizes="(max-width: 768px) 100vw, 50vw"
  />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_product) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_breadcrumb) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_faq) }} />

 {/* OFFERTA A TEMPO */}
 <div className="py-3 px-4 bg-red-600">
   <div className="flex flex-col items-center justify-center gap-1.5 text-center">
     <span className="text-white/90 text-xs font-bold uppercase tracking-widest">⚡ Offerta limitata — Solo 7 pezzi rimasti a questo prezzo</span>
     <Link href="/checkout-scelta/" className="cursor-pointer"><CountdownTimer /></Link>
   </div>
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
 <section className="bg-white py-5 md:py-12">
 <div className="max-w-6xl mx-auto px-4 sm:px-6">
 {/* Mobile-only: title + stars above gallery */}
 <div className="md:hidden space-y-2 mb-3">
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
 <a href="#recensioni" className="text-gray-400 text-sm hover:text-rose-500 hover:underline cursor-pointer transition-colors">da 2.800+ recensioni verificate</a>
 </div>
 </div>

 <div className="grid md:grid-cols-[1fr_420px] gap-3 md:gap-10 items-start">

 {/* LEFT: image gallery */}
 <ProductImageGallery />

 {/* RIGHT: sticky purchase panel */}
 <div className="md:sticky md:top-24 space-y-3 md:space-y-5">

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
 <a href="#recensioni" className="text-gray-400 text-sm hover:text-rose-500 hover:underline cursor-pointer transition-colors">da 2.800+ recensioni verificate</a>
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

 {/* COD trust badges */}
 <div className="flex flex-wrap gap-2">
   <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full">
     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
     Paga alla consegna — nessun rischio
   </span>
   <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">
     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
     Spedizione gratuita 24-48h
   </span>
   <span className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold px-3 py-1.5 rounded-full">
     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
     Reso gratuito 14 giorni
   </span>
 </div>

 {/* Bundle picker */}
 <ProductBundlePicker />

 </div>
 </div>
 </div>
 </section>

 {/* REVIEWS */}
 <div id="recensioni"><ReviewsCarousel /></div>

  {/*
 COME VISTO SU
 */}
 <section className="py-6 md:py-10 overflow-hidden" style={{background: 'linear-gradient(180deg, #fff 0%, #FDF0F3 100%)'}}>
   <div className="flex items-center gap-4 max-w-4xl mx-auto px-6 mb-4 md:mb-8">
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
           <img src={src} alt={alt} loading="lazy" decoding="async" className="press-logo" style={{height: h, width: 'auto', objectFit: 'contain'}} />
         </span>
       ))}
     </div>
   </div>
 </section>

 {/*
 RISULTATI REALI
 */}
 <section className="bg-rose-50 py-8 md:py-14">
 <div className="max-w-4xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-6 md:mb-10">
 <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">✨ Risultati certificati</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-2">I numeri parlano da soli</h2>
 <p className="text-gray-500 text-sm">Sondaggio su 1.200+ clienti BellaCura (2024)</p>
 </div>
 <div className="grid md:grid-cols-3 gap-3 md:gap-6">
 {[
 { pct: 92, label: '92%', text: 'Riduzione visibile della cellulite già dalla prima settimana.' },
 { pct: 89, label: '89%', text: 'Pelle più liscia e gambe più leggere dopo soli 14 giorni.' },
 { pct: 94, label: '94%', text: 'Sollievo muscolare percepito dopo ogni sessione di massaggio.' },
 ].map(({ pct, label, text }) => {
 const r = 36; const circ = 2 * Math.PI * r;
 const dash = (pct / 100) * circ;
 return (
 <div key={label} className="bg-white rounded-2xl p-4 md:p-6 flex items-center gap-4 md:gap-5 shadow-sm border border-rose-100">
 <svg width="72" height="72" viewBox="0 0 88 88" className="shrink-0 w-16 h-16 md:w-[88px] md:h-[88px]">
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
 <p className="text-center text-xs text-gray-400 mt-4">*Basato su sondaggi condotti su clienti BellaCura reali nel 2024</p>
 </div>
 </section>

 {/*
 IL PROBLEMA
 */}
 <section className="bg-white pt-7 pb-4 md:py-16">
 <div className="max-w-4xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-6 md:mb-12">
 <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">Il problema</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-3">La vera causa della cellulite</h2>
 <p className="text-gray-600 max-w-2xl mx-auto">
 La cellulite non è solo un problema estetico. È causata da una cattiva circolazione linfatica che fa accumulare liquidi e tossine nel tessuto adiposo, creando la tipica pelle a buccia d&apos;arancia.
 </p>
 </div>

 {/* Before/After slider */}
 <div className="max-w-md mx-auto w-full px-0 sm:px-8">
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
 <div className="grid md:grid-cols-2 gap-3 mt-5">
 <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
 <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2"><span className="text-red-400"></span> Senza trattamento</h3>
 <ul className="space-y-1.5 text-gray-500 text-sm">
 {['Pelle a buccia d\'arancia sulle cosce', 'Circolazione lenta e gambe pesanti', 'Cellulite resistente a dieta e sport', '€200+ per ogni seduta estetica'].map(p => (
 <li key={p} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0"></span>{p}</li>
 ))}
 </ul>
 </div>
 <div className="rounded-2xl bg-rose-50 border-2 border-rose-200 p-4">
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
 <section className="bg-white pt-4 pb-7 md:py-16">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
 <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">Vedi come funziona</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-5 md:mb-8">
 Risultati reali, routine semplice
 </h2>
 <VideoSection />
 <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
 Solo 10 minuti al giorno. I risultati parlano da soli.
 </p>
 </div>
 </section>



      {/* TECH SECTION — premium redesign */}
      <section className="bc-tech-section" style={{ background: '#FBF8F4', padding: '80px 0 88px' }}>
        <style>{`
          @media (max-width: 767px) {
            .bc-tech-section { padding: 32px 0 20px !important; }
            .bc-tech-header { margin-bottom: 28px !important; }
            .bc-tech-card { padding: 20px 18px 18px !important; animation: none !important; }
            .bc-tech-icon { margin-bottom: 14px !important; }
            .bc-tech-h2 { font-size: 28px !important; }
          }
          @keyframes bc-fade-up {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .bc-tech-card {
            animation: bc-fade-up 0.55s ease both;
          }
          .bc-tech-card:hover {
            box-shadow: 0 8px 32px rgba(168,53,90,0.12), 0 2px 8px rgba(168,53,90,0.06);
            transform: translateY(-2px);
            transition: box-shadow 0.25s ease, transform 0.25s ease;
          }
        `}</style>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

          {/* Header */}
          <div className="bc-tech-header" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'white', border: '1px solid #f3d4dd',
              color: '#A8355A', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '6px 16px', borderRadius: 99, marginBottom: 20,
              boxShadow: '0 1px 4px rgba(168,53,90,0.08)',
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#A8355A', display: 'inline-block' }} />
              Tecnologia
            </div>
            <h2 className="bc-tech-h2" style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic', fontWeight: 600,
              fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: 1.1,
              color: '#0f0a0b', margin: '0 0 14px',
            }}>
              Quello che lo rende unico
            </h2>

          </div>

          {/* Cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}>

            {/* Card 1 — Luce Rossa */}
            <div className="bc-tech-card" style={{
              background: 'white', borderRadius: 20,
              padding: '32px 26px 28px',
              border: '1px solid rgba(168,53,90,0.10)',
              boxShadow: '0 2px 12px rgba(168,53,90,0.06)',
              animationDelay: '0ms',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(168,53,90,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 22,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A8355A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="12" y1="2" x2="12" y2="5"/>
                  <line x1="12" y1="19" x2="12" y2="22"/>
                  <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
                  <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
                  <line x1="2" y1="12" x2="5" y2="12"/>
                  <line x1="19" y1="12" x2="22" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
                  <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
                </svg>
              </div>
              <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#A8355A', marginBottom: 6 }}>
                Luce Rossa
              </p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic', fontWeight: 600,
                fontSize: 20, color: '#0f0a0b', margin: '0 0 12px', lineHeight: 1.2,
              }}>
                Collagene naturale
              </h3>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>
                La luce rossa a 630 nm stimola la naturale produzione di collagene della pelle, favorendo un aspetto più sodo, levigato e luminoso con l&apos;uso continuato.
              </p>
            </div>

            {/* Card 2 — Calore */}
            <div className="bc-tech-card" style={{
              background: 'white', borderRadius: 20,
              padding: '32px 26px 28px',
              border: '1px solid rgba(168,53,90,0.10)',
              boxShadow: '0 2px 12px rgba(168,53,90,0.06)',
              animationDelay: '80ms',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(168,53,90,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 22,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A8355A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2c0 6-6 6-6 12a6 6 0 0 0 12 0c0-6-6-6-6-12z"/>
                  <path d="M12 12c0 3-2 3-2 5a2 2 0 0 0 4 0c0-2-2-2-2-5z"/>
                </svg>
              </div>
              <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#A8355A', marginBottom: 6 }}>
                Calore
              </p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic', fontWeight: 600,
                fontSize: 20, color: '#0f0a0b', margin: '0 0 12px', lineHeight: 1.2,
              }}>
                Calore a 45°C
              </h3>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>
                Il calore piacevolmente riscaldante favorisce la microcircolazione e prepara la pelle per un&apos;azione massaggiante più profonda e rilassante.
              </p>
            </div>

            {/* Card 3 — Vibrazione */}
            <div className="bc-tech-card" style={{
              background: 'white', borderRadius: 20,
              padding: '32px 26px 28px',
              border: '1px solid rgba(168,53,90,0.10)',
              boxShadow: '0 2px 12px rgba(168,53,90,0.06)',
              animationDelay: '160ms',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(168,53,90,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 22,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A8355A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h2"/>
                  <path d="M20 12h2"/>
                  <path d="M5 7c0 0 2 2.5 2 5s-2 5-2 5"/>
                  <path d="M19 7c0 0-2 2.5-2 5s2 5 2 5"/>
                  <path d="M8 9c0 0 1 1.5 1 3s-1 3-1 3"/>
                  <path d="M16 9c0 0-1 1.5-1 3s1 3 1 3"/>
                  <line x1="12" y1="9" x2="12" y2="15"/>
                </svg>
              </div>
              <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#A8355A', marginBottom: 6 }}>
                Vibrazione
              </p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic', fontWeight: 600,
                fontSize: 20, color: '#0f0a0b', margin: '0 0 12px', lineHeight: 1.2,
              }}>
                5 livelli di intensità
              </h3>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>
                Da delicato a intenso. Adatta la potenza alla tua sensibilità e all&apos;area del corpo, per un massaggio sempre confortevole e preciso.
              </p>
            </div>

            {/* Card 4 — Impermeabile */}
            <div className="bc-tech-card" style={{
              background: 'white', borderRadius: 20,
              padding: '32px 26px 28px',
              border: '1px solid rgba(168,53,90,0.10)',
              boxShadow: '0 2px 12px rgba(168,53,90,0.06)',
              animationDelay: '240ms',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(168,53,90,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 22,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A8355A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L5.5 9.5a6.5 6.5 0 1 0 13 0L12 2z"/>
                </svg>
              </div>
              <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#A8355A', marginBottom: 6 }}>
                Impermeabile
              </p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic', fontWeight: 600,
                fontSize: 20, color: '#0f0a0b', margin: '0 0 12px', lineHeight: 1.2,
              }}>
                Certificazione IPX7
              </h3>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>
                Utilizzalo sotto la doccia o in vasca con oli e creme. Facile da pulire, pronto ogni giorno senza compromessi.
              </p>
            </div>

          </div>
        </div>
      </section>

      <BodyMap />

      <ComparisonVS />

 {/*
 FAQ
 */}
 <section className="bg-white py-7 md:py-16">
 <div className="max-w-2xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-6 md:mb-10">
 <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">FAQ</span>
 <h2 className="text-3xl font-extrabold text-gray-900">Domande frequenti</h2>
 </div>
 <div className="space-y-3">
 {faqs.map((faq, i) => (
 <details key={i} className="group rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden">
 <summary className="flex items-center justify-between gap-3 px-5 py-3.5 cursor-pointer font-semibold text-gray-900 text-sm list-none hover:bg-gray-100 transition-colors">
 {faq.question}
 <span className="text-rose-500 shrink-0 text-lg group-open:rotate-45 transition-transform">+</span>
 </summary>
 <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-3">
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
 <section className="py-8 md:py-16" style={{background: 'linear-gradient(135deg, #F5C8D6 0%, #EAB0C2 50%, #F2C2CE 100%)'}}>
 <div className="max-w-2xl mx-auto px-4 text-center">
 <div className="flex justify-center mb-3">
 {[...Array(5)].map((_, i) => (
 <svg key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 ))}
 </div>
 <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{color: '#5A1830'}}>Prova BellaCura senza rischi</h2>
 <p className="mb-5 md:mb-8 text-base md:text-lg" style={{color: '#7A2040'}}>
 Se non vedi risultati entro 14 giorni, ti rimborsiamo il 100%. Zero domande. Zero burocrazia.
 </p>
 <div className="flex flex-col sm:flex-row gap-3 justify-center">
 <a
 href="/checkout-scelta/"
 className="font-bold text-lg px-10 py-4 rounded-2xl transition-colors shadow-xl" style={{background: '#7A2040', color: '#fff'}}
 >
 Ordina ora — Paga alla consegna
 </a>
 </div>
 <p className="text-sm mt-4" style={{color: '#9B4060'}}> Spedizione gratuita · Garanzia 14 giorni · 2.800+ clienti soddisfatte</p>
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
 <span className="text-xs text-gray-500 ml-1">4.9 · 2.800+ recensioni</span>
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
