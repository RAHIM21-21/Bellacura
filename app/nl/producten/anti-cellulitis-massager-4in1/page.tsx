import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, productSchema, breadcrumbSchema, faqSchema, SITE_URL } from '@/lib/seo'
import ProductBundlePickerNL from '@/components/product/ProductBundlePickerNL'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import StickyOrderButtonNL from '@/components/product/StickyOrderButtonNL'
import VideoSection from '@/components/product/VideoSection'
import CountdownTimer from '@/components/home/CountdownTimer'

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Anti-Cellulitis Massager 4-in-1 – Zichtbaar Resultaat in 14 Dagen',
    description:
      'Het professionele anti-cellulitis massager voor thuis. Cupping + warmte 45°C + rood licht + vibratie. Zichtbare resultaten in 2 weken. Gratis verzending vanuit Italië.',
    path: '/nl/producten/anti-cellulitis-massager-4in1/',
    ogImage: `${SITE_URL}/images/product-green-hero.jpg`,
  }),
  keywords: [
    'anti cellulitis massager', 'cellulitis behandeling thuis', 'anti cellulitis apparaat',
    'sinaasappelhuid verminderen', 'anti cellulitis massager', 'cellulitis massager elektrisch',
    'cupping massager', 'lichaamsmassager cellulitis',
  ].join(', '),
}

const faqs = [
  {
    question: 'Hoe werkt de 4-in-1 anti-cellulitis massager?',
    answer: 'De BellaCura combineert 4 technologieën: cupping (vacuüm), warmte tot 45°C, rood licht en vibratie. Samen stimuleren ze de bloedsomloop, draineren ze overtollig vocht en verminderen ze cellulitis zichtbaar.',
  },
  {
    question: 'Wanneer zie ik resultaten?',
    answer: 'De meeste klanten zien al verbetering na 7–10 dagen dagelijks gebruik (10 minuten per dag). Significante resultaten zijn zichtbaar na 4–6 weken.',
  },
  {
    question: 'Hoe lang gaat de batterij mee?',
    answer: 'Met één oplaadbeurt van circa 2 uur via USB-C biedt de massager tot 90 minuten continu gebruik. Elke avond opladen is voldoende.',
  },
  {
    question: 'Welke betaalmethoden worden geaccepteerd?',
    answer: 'Je kunt veilig betalen met iDEAL, creditcard (Visa/Mastercard) en Apple Pay. De betaling verloopt via een beveiligde Shopify-omgeving.',
  },
  {
    question: 'Kan ik het product terugsturen als ik niet tevreden ben?',
    answer: 'Absoluut. Je hebt 90 dagen na ontvangst om het product om welke reden dan ook terug te sturen. Het retourneren is volledig gratis en wij betalen 100% van het aankoopbedrag terug.',
  },
  {
    question: 'Is het de moeite waard vergeleken met een schoonheidssalon?',
    answer: 'Een enkele anti-cellulitis behandeling in een salon kost gemiddeld €60–€100. Met BellaCura betaal je eenmalig €59,99 en heb je onbeperkt behandelingen thuis, wanneer jij wilt. Veel klanten besparen honderden euro\'s per jaar.',
  },
  {
    question: 'Is het veilig voor de gevoelige huid?',
    answer: 'Ja. Rood licht en infraroodwarmte zijn zachte technologieën die ook in medisch-cosmetische omgevingen worden gebruikt. Begin met de laagste stand en verhoog geleidelijk. Raadpleeg bij huidaandoeningen eerst uw arts.',
  },
]

const STOCK_NUMS = [5, 6, 7, 8, 9]
const dailyStock = STOCK_NUMS[Math.floor(Date.now() / 86400000) % STOCK_NUMS.length]

const CHECKOUT_SINGLE = 'https://bellacura-shop.myshopify.com/cart/48232541651102:1?checkout'

export default function ProductPageNL() {
  const schema_product = productSchema({
    name: 'BellaCura Anti-Cellulitis Massager 4-in-1',
    description: 'Professioneel anti-cellulitis massager met cupping, warmte 45°C, rood licht en 5 intensiteitsniveaus. Waterbestendig IPX7.',
    image: '/images/product-green-hero.jpg',
    price: 59.99,
    sku: 'BC-MASS-4IN1-NL',
    reviews: [],
  })
  const schema_breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE_URL + '/' },
    { name: 'Anti-Cellulitis Massager 4-in-1', url: SITE_URL + '/nl/producten/anti-cellulitis-massager-4in1/' },
  ])
  const schema_faq = faqSchema(faqs)

  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/_next/image?url=%2Fimages%2Fproduct-green-hero.jpg&w=828&q=75"
        imageSrcSet="/_next/image?url=%2Fimages%2Fproduct-green-hero.jpg&w=390&q=75 390w, /_next/image?url=%2Fimages%2Fproduct-green-hero.jpg&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fproduct-green-hero.jpg&w=828&q=75 828w"
        imageSizes="(max-width: 768px) 100vw, 50vw"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_faq) }} />

      {/* TIJDELIJK AANBOD */}
      <div className="py-3 px-4 bg-[#1D3557]">
        <div className="flex flex-col items-center justify-center gap-1.5 text-center">
          <span className="text-white/90 text-xs font-bold uppercase tracking-widest">{`⚡ Tijdelijk aanbod — Nog maar ${dailyStock} stuks beschikbaar op deze prijs`}</span>
          <Link href={CHECKOUT_SINGLE} className="cursor-pointer"><CountdownTimer /></Link>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-white py-5 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:hidden space-y-2 mb-3">
            <div>
              <p className="text-[#1D3557] text-xs font-bold uppercase tracking-widest mb-1">BellaCura® Original</p>
              <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                Anti-Cellulitis Massager 4-in-1™
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
              <a href="#reviews" className="text-gray-400 text-sm hover:text-[#457B9D] hover:underline cursor-pointer transition-colors">2.800+ geverifieerde beoordelingen</a>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_420px] gap-3 md:gap-10 items-start">
            <ProductImageGallery badge={{ line1: 'Garantie', line2: 'dagen' }} />
            <div className="md:sticky md:top-24 space-y-3 md:space-y-5">
              <div className="hidden md:block space-y-4">
                <div>
                  <p className="text-[#1D3557] text-xs font-bold uppercase tracking-widest mb-1">BellaCura® Original</p>
                  <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                    Anti-Cellulitis Massager 4-in-1™
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
                  <a href="#reviews" className="text-gray-400 text-sm hover:text-[#457B9D] hover:underline cursor-pointer transition-colors">2.800+ geverifieerde beoordelingen</a>
                </div>
              </div>
              <ProductBundlePickerNL />
            </div>
          </div>
        </div>
      </section>

      {/* KLANTRESULTATEN */}
      <section id="reviews" className="py-10 md:py-16" style={{background: 'linear-gradient(180deg, #EEF6FB 0%, #ffffff 100%)'}}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-flex items-center gap-1.5 bg-white border border-[#A8DADC] text-[#1D3557] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Geverifieerde resultaten
            </span>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-gray-900 text-sm">4.9/5</span>
              <span className="text-gray-400 text-sm">· 2.800+ tevreden klanten</span>
            </div>
          </div>

          {/* WA screenshots — same images, no Italian text visible */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-6 md:overflow-visible md:pb-0">
            {[
              { src: '/images/review-wa-1.jpg', alt: 'BellaCura klantresultaat 1' },
              { src: '/images/review-wa-2.jpg', alt: 'BellaCura klantresultaat 2' },
              { src: '/images/review-wa-3.jpg', alt: 'BellaCura klantresultaat 3' },
              { src: '/images/review-wa-4.jpg', alt: 'BellaCura klantresultaat 4' },
              { src: '/images/review-wa-6.jpg', alt: 'BellaCura klantresultaat 5' },
              { src: '/images/review-wa-7.jpg', alt: 'BellaCura voor en na' },
            ].map(({ src, alt }) => (
              <div key={src} className="flex-none w-[72vw] md:w-auto snap-start group">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-transform duration-200 group-hover:scale-[1.02] group-hover:shadow-xl" style={{ aspectRatio: '9/16' }}>
                  <Image fill src={src} alt={alt} sizes="(max-width: 768px) 72vw, 20vw" className="object-cover" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">📱 Originele screenshots ontvangen via WhatsApp en Instagram — gepubliceerd met toestemming van de klanten</p>
        </div>
      </section>

      {/* STATISTIEKEN */}
      <section className="py-8 md:py-14" style={{background: '#1D3557'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 md:mb-10">
            <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">✨ Gecertificeerde resultaten</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">De cijfers spreken voor zich</h2>
            <p className="text-white/70 text-sm">Onderzoek onder 1.200+ BellaCura-klanten (2024)</p>
          </div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-6">
            {[
              { pct: 92, label: '92%', text: 'Zichtbare vermindering van cellulitis al in de eerste week.' },
              { pct: 89, label: '89%', text: 'Zachtere en strakkere huid na slechts 30 dagen.' },
              { pct: 94, label: '94%', text: 'Spierverlichting ervaren na elke massagesessie.' },
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
          <p className="text-center text-xs text-white/50 mt-4">*Gebaseerd op enquêtes onder echte BellaCura-klanten in 2024</p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-white pt-4 pb-7 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-[#DCEAF2] text-[#1D3557] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">Bekijk hoe het werkt</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8">
            Echte resultaten, eenvoudige routine
          </h2>
          <VideoSection />
          <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
            Slechts 10 minuten per dag. De resultaten spreken voor zich.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-wave-bg py-7 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 md:mb-10">
            <span className="inline-block bg-[#DCEAF2] text-[#1D3557] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Veelgestelde vragen</h2>
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

      {/* VOOR EN NA */}
      <section className="bg-white py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">Natuurlijke strakheid</h2>
            <p className="text-gray-500 text-base md:text-lg">na slechts 2 weken dagelijks gebruik</p>
          </div>
          <div className="max-w-md mx-auto w-full px-0 sm:px-8">
            <BeforeAfterSlider
              beforeSrc="/images/prima-cellulite.jpg"
              afterSrc="/images/dopo-bellacura.jpg"
              beforeLabel="Voor"
              afterLabel="Na 14 dagen"
              alt="BellaCura anti-cellulitis resultaten"
              aspectRatio="120%"
            />
          </div>
        </div>
      </section>

      {/* GEZIEN IN */}
      <section className="py-6 md:py-10 overflow-hidden" style={{background: 'linear-gradient(180deg, #ffffff 0%, #DCEAF2 100%)'}}>
        <div className="flex items-center gap-4 max-w-4xl mx-auto px-6 mb-4 md:mb-8">
          <div className="flex-1 h-px bg-[#DCEAF2]" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#457B9D] whitespace-nowrap">Gezien in</p>
          <div className="flex-1 h-px bg-[#DCEAF2]" />
        </div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .logo-marquee { animation: marquee 28s linear infinite; }
          .logo-marquee:hover { animation-play-state: paused; }
          .logo-track { -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%); mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%); }
          .press-logo { opacity: 0.25; transition: opacity 0.25s; filter: brightness(0) saturate(0); }
          .press-logo:hover { opacity: 0.5; }
        `}</style>
        <div className="logo-track relative flex overflow-hidden">
          <div className="logo-marquee flex items-center gap-8 whitespace-nowrap px-6">
            {[
              { src: '/images/logo-vogue.png',        alt: 'Vogue',        h: 28 },
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

      {/* AFBEELDINGEN */}
      <section className="bg-white">
        <Image src="/images/massager-features-v2.jpg" alt="BellaCura 4-in-1 massager functies" width={1024} height={1024} className="w-full block" loading="lazy" />
        <Image src="/images/body-map-bellacura-v2.jpg" alt="Zones waar je BellaCura kunt gebruiken" width={1024} height={1024} className="w-full block" loading="lazy" />
        <Image src="/images/routine-3passi-v2.jpg" alt="Jouw BellaCura routine in 3 stappen" width={1024} height={1024} className="w-full block" loading="lazy" />
      </section>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl">
        <StickyOrderButtonNL />
        <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto px-6 py-3 gap-6">
          <div className="flex items-center gap-4">
            <span className="font-extrabold text-gray-900 text-base">Anti-Cellulitis Massager 4-in-1™</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">4.9 · 2.800+ beoordelingen</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-gray-400 line-through text-sm">€119,00</span>
              <span className="font-extrabold text-gray-900 text-xl ml-2">€59,99</span>
            </div>
            <StickyOrderButtonNL desktop />
          </div>
        </div>
      </div>
    </>
  )
}
