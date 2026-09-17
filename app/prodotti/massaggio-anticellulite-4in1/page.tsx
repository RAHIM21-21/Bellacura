import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, productSchema, breadcrumbSchema, faqSchema, SITE_URL } from '@/lib/seo'
import ProductBundlePicker from '@/components/product/ProductBundlePicker'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import StickyOrderButton from '@/components/product/StickyOrderButton'
import VideoSection from '@/components/product/VideoSection'
import CountdownTimer from '@/components/home/CountdownTimer'
import ComparisonVS from '@/components/product/ComparisonVS'

export const metadata: Metadata = {
 ...buildMetadata({
 title: 'BellaCura Massaggiatore Anticellulite – Pelle Più Tonica in 14 Giorni',
 description:
 'Il massaggiatore anticellulite professionale più venduto in Italia. Vibrazione + calore 45°C + luce rossa. Risultati visibili in 2 settimane. Paga alla consegna. Spedizione 24-48h GRATIS.',
 path: '/prodotti/massaggio-anticellulite-4in1/',
 ogImage: `${SITE_URL}/images/product-green-hero.jpg`,
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
 { question: 'Come funziona il massaggiatore anticellulite BellaCura?', answer: 'Combina 4 tecnologie: vibrazione profonda ad alta frequenza, riscaldamento a 45°C, luce rossa e pressione meccanica. Insieme stimolano la circolazione, drenano i liquidi in eccesso e riducono visibilmente la cellulite.' },
 { question: 'In quanto tempo si vedono i risultati?', answer: 'La maggior parte delle clienti nota miglioramenti già dopo 7-10 giorni di utilizzo regolare (10 minuti al giorno). Risultati significativi dopo 4-6 settimane.' },
 { question: 'Quanto dura la batteria?', answer: 'Con una singola carica di circa 2 ore tramite USB-C, il massaggiatore offre fino a 90 minuti di utilizzo continuativo. Puoi ricaricarlo ogni sera e averlo sempre pronto per la tua routine.' },
 { question: 'Come funziona il pagamento alla consegna?', answer: 'Scegli "Pagamento alla consegna" al checkout. Il corriere consegna il prodotto a casa tua in 24-48 ore e paghi direttamente a lui in contanti al momento della ricezione.' },
 { question: 'Posso restituire il prodotto se non sono soddisfatta?', answer: 'Assolutamente sì. Hai 90 giorni dalla ricezione per restituire il prodotto per qualsiasi motivo. Il reso è completamente gratuito e rimborsiamo il 100% dell\'importo pagato.' },
 { question: 'Vale la pena rispetto a un salone estetico?', answer: 'Un singolo trattamento anticellulite in salone costa in media €60–€100. Con BellaCura paghi €59,99 una sola volta e hai i trattamenti illimitati a casa tua, quando vuoi, per sempre. Molte nostre clienti risparmiano centinaia di euro ogni anno.' },
 { question: 'È sicuro per la pelle sensibile?', answer: 'Sì. La luce rossa e il calore a infrarossi sono tecnologie dolci usate anche in ambito medico-estetico. Inizia con la vibrazione più bassa e aumenta gradualmente. In caso di patologie cutanee, consulta il tuo medico prima dell\'uso.' },
]

const STOCK_NUMS = [5, 6, 7, 8, 9]
const dailyStock = STOCK_NUMS[Math.floor(Date.now() / 86400000) % STOCK_NUMS.length]

export default function ProductPage() {
 const schema_product = productSchema({
 name: 'BellaCura Massaggiatore Anticellulite',
 description: 'Massaggiatore anticellulite professionale con vibrazione profonda, riscaldamento a infrarossi 45°C, luce rossa e 5 livelli di intensità. Impermeabile IPX7.',
 image: '/images/product-green-hero.jpg',
 price: 59.99, sku: 'BC-MASS-4IN1', reviews,
 })
 const schema_breadcrumb = breadcrumbSchema([
 { name: 'Home', url: SITE_URL + '/' },
 { name: 'BellaCura Massaggiatore Anticellulite', url: SITE_URL + '/prodotti/massaggio-anticellulite-4in1/' },
 ])
 const schema_faq = faqSchema(faqs)

 return (
 <>
  <link
    rel="preload"
    as="image"
    href="/_next/image?url=%2Fimages%2Fproduct-green-hero.jpg&w=828&q=75"
    imageSrcSet="/_next/image?url=%2Fimages%2Fproduct-green-hero.jpg&w=390&q=75 390w, /_next/image?url=%2Fimages%2Fproduct-green-hero.jpg&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fproduct-green-hero.jpg&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fproduct-green-hero.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fproduct-green-hero.jpg&w=1200&q=75 1200w"
    imageSizes="(max-width: 768px) 100vw, 50vw"
  />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_product) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_breadcrumb) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_faq) }} />

 {/* OFFERTA A TEMPO */}
 <div className="py-3 px-4 bg-[#1D3557]">
   <div className="flex flex-col items-center justify-center gap-1.5 text-center">
     <span className="text-white/90 text-xs font-bold uppercase tracking-widest">{`⚡ Offerta limitata — Solo ${dailyStock} pezzi rimasti a questo prezzo`}</span>
     <Link href="/checkout-scelta/" className="cursor-pointer"><CountdownTimer /></Link>
   </div>
 </div>


 {/* HERO */}
 <section className="bg-white py-5 md:py-12">
 <div className="max-w-6xl mx-auto px-4 sm:px-6">
 <div className="md:hidden space-y-2 mb-3">
 <div>
 <p className="text-[#1D3557] text-xs font-bold uppercase tracking-widest mb-1">BellaCura® Original</p>
 <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
 BellaCura Massaggiatore Anticellulite™
 </h1>
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
 <a href="#recensioni" className="text-gray-400 text-sm hover:text-[#457B9D] hover:underline cursor-pointer transition-colors">da 2.800+ recensioni verificate</a>
 </div>
 </div>
 <div className="grid md:grid-cols-[1fr_420px] gap-3 md:gap-10 items-start">
 <ProductImageGallery />
 <div className="md:sticky md:top-24 space-y-3 md:space-y-5">
 <div className="hidden md:block space-y-4">
 <div>
 <p className="text-[#1D3557] text-xs font-bold uppercase tracking-widest mb-1">BellaCura® Original</p>
 <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
 BellaCura Massaggiatore Anticellulite™
 </h1>
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
 <a href="#recensioni" className="text-gray-400 text-sm hover:text-[#457B9D] hover:underline cursor-pointer transition-colors">da 2.800+ recensioni verificate</a>
 </div>
 </div>

 <ProductBundlePicker />
 </div>
 </div>
 </div>
 </section>

 {/* WHATSAPP SOCIAL PROOF */}
 <section id="recensioni" className="py-10 md:py-16" style={{background: 'linear-gradient(180deg, #EEF6FB 0%, #ffffff 100%)'}}>
 <div className="max-w-5xl mx-auto px-4 sm:px-6">

   {/* Header */}
   <div className="text-center mb-8 md:mb-12">
     <span className="inline-flex items-center gap-1.5 bg-white border border-[#A8DADC] text-[#1D3557] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
       <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
       Risultati verificati
     </span>

     {/* Stars row */}
     <div className="flex items-center justify-center gap-2 mt-4">
       <div className="flex">
         {[...Array(5)].map((_, i) => (
           <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
           </svg>
         ))}
       </div>
       <span className="font-bold text-gray-900 text-sm">4.9/5</span>
       <span className="text-gray-400 text-sm">· 2.800+ clienti soddisfatte</span>
     </div>
   </div>

   {/* Screenshots grid */}
   <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-6 md:overflow-visible md:pb-0">
     {[
       { src: '/images/review-wa-1.jpg', alt: 'Risultati cliente BellaCura 1' },
       { src: '/images/review-wa-2.jpg', alt: 'Risultati cliente BellaCura 2' },
       { src: '/images/review-wa-3.jpg', alt: 'Risultati cliente BellaCura 3' },
      { src: '/images/review-wa-4.jpg', alt: 'Risultati cliente BellaCura — WhatsApp' },
      { src: '/images/review-wa-6.jpg', alt: 'Risultati cliente BellaCura — WhatsApp' },
     { src: '/images/review-wa-7.jpg', alt: 'Risultati cliente BellaCura — Prima e Dopo' },
     ].map(({ src, alt }) => (
       <div key={src} className="flex-none w-[72vw] md:w-auto snap-start group">
         <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-transform duration-200 group-hover:scale-[1.02] group-hover:shadow-xl" style={{ aspectRatio: '9/16' }}>
           <Image
             fill
             src={src}
             alt={alt}
             sizes="(max-width: 768px) 72vw, 20vw"
             className="object-cover"
           />
         </div>
       </div>
     ))}
   </div>

   {/* Footer note */}
   <p className="text-center text-xs text-gray-400 mt-6">📱 Screenshot originali ricevuti su WhatsApp e Instagram — pubblicati con il consenso delle clienti</p>
 </div>
 </section>



 {/* RISULTATI REALI */}
 <section className="py-8 md:py-14" style={{background: '#1D3557'}}>
 <div className="max-w-4xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-6 md:mb-10">
 <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">✨ Risultati certificati</span>
 <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">I numeri parlano da soli</h2>
 <p className="text-white/70 text-sm">Sondaggio su 1.200+ clienti BellaCura (2024)</p>
 </div>
 <div className="grid md:grid-cols-3 gap-3 md:gap-6">
 {[
 { pct: 92, label: '92%', text: 'Riduzione visibile della cellulite già dalla prima settimana.' },
 { pct: 89, label: '89%', text: 'Pelle più liscia e gambe più leggere dopo soli 30 giorni.' },
 { pct: 94, label: '94%', text: 'Sollievo muscolare percepito dopo ogni sessione di massaggio.' },
 ].map(({ pct, label, text }) => {
 const r = 36; const circ = 2 * Math.PI * r;
 const dash = (pct / 100) * circ;
 return (
 <div key={label} className="bg-white rounded-2xl p-4 md:p-6 flex items-center gap-4 md:gap-5 shadow-sm border border-[#D6EAF0]">
 <svg width="72" height="72" viewBox="0 0 88 88" className="shrink-0 w-16 h-16 md:w-[88px] md:h-[88px]">
 <circle cx="44" cy="44" r={r} fill="none" stroke="#dcfce7" strokeWidth="8"/>
 <circle cx="44" cy="44" r={r} fill="none" stroke="#16a34a" strokeWidth="8"
 strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
 transform="rotate(-90 44 44)" />
 <text x="44" y="49" textAnchor="middle" fontSize="16" fontWeight="900" fill="#1f2937">{label}</text>
 </svg>
 <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
 </div>
 )
 })}
 </div>
 <p className="text-center text-xs text-white/50 mt-4">*Basato su sondaggi condotti su clienti BellaCura reali nel 2024</p>
 </div>
 </section>

 {/* VIDEO */}
 <section className="bg-white pt-4 pb-7 md:py-16">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
 <span className="inline-block bg-[#DCEAF2] text-[#1D3557] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">Vedi come funziona</span>
 <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8">
 Risultati reali, routine semplice
 </h2>
 <VideoSection />
 <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
 Solo 10 minuti al giorno. I risultati parlano da soli.
 </p>
 </div>
 </section>

 {/* FAQ */}
 <section className="faq-wave-bg py-7 md:py-16">
 <div className="max-w-2xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-6 md:mb-10">
 <span className="inline-block bg-[#DCEAF2] text-[#1D3557] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">FAQ</span>
 <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Domande frequenti</h2>
 </div>
 <div className="space-y-3">
 {faqs.map((faq, i) => (
 <details key={i} className="group rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden">
 <summary className="flex items-center justify-between gap-3 px-5 py-3.5 cursor-pointer font-semibold text-gray-900 text-sm list-none hover:bg-gray-100 transition-colors">
 {faq.question}
 <span className="text-[#457B9D] shrink-0 text-lg group-open:rotate-45 transition-transform">+</span>
 </summary>
 <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-3">
 {faq.answer}
 </div>
 </details>
 ))}
 </div>
 </div>
 </section>


 {/* FERMEZZA NATURALE — slider, no heading text, no checklist */}
 <section className="bg-white py-8 md:py-16">
 <div className="max-w-4xl mx-auto px-4 sm:px-6">
 <div className="text-center mb-6 md:mb-10">
 <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">Tonicità naturale</h2>
 <p className="text-gray-500 text-base md:text-lg">dopo sole 2 settimane di utilizzo quotidiano</p>
 </div>
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
 </div>
 </section>
 {/* COME VISTO SU */}
 <section className="py-6 md:py-10 overflow-hidden" style={{background: 'linear-gradient(180deg, #ffffff 0%, #DCEAF2 100%)'}}>
   <div className="flex items-center gap-4 max-w-4xl mx-auto px-6 mb-4 md:mb-8">
     <div className="flex-1 h-px bg-[#DCEAF2]" />
     <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#457B9D] whitespace-nowrap">Come visto su</p>
     <div className="flex-1 h-px bg-[#DCEAF2]" />
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
     <div className="logo-marquee flex items-center gap-8 whitespace-nowrap px-6">
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
           <img src={src} alt={alt} loading="lazy" decoding="async" width={140} height={60} className="press-logo" style={{height: h, width: 'auto', objectFit: 'contain'}} />
         </span>
       ))}
     </div>
   </div>
 </section>

 {/* IMAGES — back to back */}
 <section className="bg-white">
   <Image src="/images/massager-features-v2.jpg" alt="BellaCura Massaggiatore Anticellulite — funzionalità" width={1024} height={1024} className="w-full block" loading="lazy" />
   <Image src="/images/body-map-bellacura-v2.jpg" alt="Zone in cui puoi usare BellaCura" width={1024} height={1024} className="w-full block" loading="lazy" />
   <Image src="/images/routine-3passi-v2.jpg" alt="La tua routine BellaCura in 3 passi" width={1024} height={1024} className="w-full block" loading="lazy" />
 </section>

 {/* COMPARISON VS — moved to end */}
 <ComparisonVS />

 {/* Fixed sticky CTA */}
 <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl">
 <StickyOrderButton />
 <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto px-6 py-3 gap-6">
 <div className="flex items-center gap-4">
 <span className="font-extrabold text-gray-900 text-base">BellaCura Massaggiatore Anticellulite™</span>
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
 <span className="font-extrabold text-gray-900 text-xl ml-2">€59,99</span>
 </div>
 <StickyOrderButton desktop />
 </div>
 </div>
 </div>
 </>
 )
}
