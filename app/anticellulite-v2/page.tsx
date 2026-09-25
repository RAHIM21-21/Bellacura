import type { Metadata } from 'next'
import Image from 'next/image'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import ProductBundlePicker from '@/components/product/ProductBundlePicker'
import StickyOrderButton from '@/components/product/StickyOrderButton'
import TrustpilotSection from '@/components/ui/TrustpilotSection'
import VideoCarousel from '@/components/product/VideoCarousel'
import Link from 'next/link'
import CountdownTimer from '@/components/home/CountdownTimer'

const STOCK_NUMS = [5, 6, 7, 8, 9]
const dailyStock = STOCK_NUMS[Math.floor(Date.now() / 86400000) % STOCK_NUMS.length]

export const metadata: Metadata = {
  title: 'BellaCura — Pelle più liscia e tonica dal primo utilizzo',
  description: 'Il protocollo anticellulite professionale ora a casa tua. Senza creme inutili, centri estetici costosi e risultati che non arrivano mai. Paga alla consegna. Spedizione 24-48h GRATIS.',
  robots: { index: false, follow: false },
}

const FAQS = [
  {
    q: 'Ho già provato creme e trattamenti. Cosa cambia con BellaCura?',
    a: 'Cambia la profondità. Le creme lavorano in superficie, e anche Altroconsumo ha misurato risultati minimi, ma la cellulite si forma qualche millimetro più sotto. BellaCura lavora proprio lì, con aspirazione, calore, luce rossa e luce blu: le tecnologie dei centri estetici, tutte insieme e ogni giorno, a casa tua.',
  },
  {
    q: 'Cosa succede se non fa per me?',
    a: 'Non rischi nulla. Paghi solo alla consegna e hai 30 giorni per provarlo: già nelle prime settimane senti la pelle più morbida e le gambe più leggere. Se non sei soddisfatta, ritiriamo il prodotto gratuitamente e ti rimborsiamo tutto, senza domande.',
  },
  {
    q: 'È delicato sulla pelle?',
    a: 'Sì. BellaCura ha 12 livelli di intensità e si muove sempre sulla pelle, quindi l’aspirazione non si concentra mai su un punto, come invece fanno le ventose tradizionali. Parti dal livello più basso: la sensazione è quella di un massaggio caldo. Un leggero rossore subito dopo è normale e passa in poco tempo.',
  },
  {
    q: 'Quando inizierò a vedere i risultati?',
    a: 'Già dalla prima seduta senti la pelle più morbida e le gambe più leggere. I primi cambiamenti visibili sulla buccia d’arancia arrivano di solito tra la terza e l’ottava settimana di uso quotidiano, e dopo 8–12 settimane la differenza si vede. Bastano 10 minuti la sera, anche davanti alla TV.',
  },
  {
    q: 'I risultati durano nel tempo?',
    a: 'Sì, se mantieni lo stimolo, e a casa è semplice. Dopo le prime 8–12 settimane bastano 2–3 sedute a settimana. È proprio il limite dei trattamenti in cabina: finito il pacchetto, finisce lo stimolo. Con BellaCura non devi rinnovare niente.',
  },
  {
    q: 'Ci sono costi nascosti o ricambi da comprare?',
    a: 'No. Nessun filtro da sostituire, nessuna crema obbligatoria, nessun abbonamento. Paghi una volta sola, e basta.',
  },
  {
    q: 'Come funziona il pagamento alla consegna?',
    a: 'Ordini in 60 secondi senza pagare nulla online. Ricevi il pacco in 24–48 ore e paghi direttamente al corriere, solo quando è nelle tue mani. Oltre 2.800 donne in Italia hanno già ordinato così, e per qualsiasi domanda ci trovi su WhatsApp: ti risponde una persona, non un robot.',
  },
]

function Stars({ n = 5, size = 4 }: { n?: number; size?: number }) {
  return (
    <div className="flex">
      {[...Array(n)].map((_, i) => (
        <svg key={i} className={`w-${size} h-${size} fill-yellow-400`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-green-600 text-xs font-semibold">
      <svg className="w-3.5 h-3.5 fill-green-600" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      Clienta Verificata
    </span>
  )
}

function StatCircle({ pct, label }: { pct: string; label: React.ReactNode }) {
  const num = parseFloat(pct)
  const r = 30
  const circ = 2 * Math.PI * r
  const dash = (num / 100) * circ
  return (
    <div className="flex items-center gap-4 bg-[#EEF4FB] rounded-2xl px-4 py-3">
      <div className="shrink-0 relative w-16 h-16">
        <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="32" cy="32" r={r} fill="none" stroke="#D6E4F0" strokeWidth="5" />
          <circle
            cx="32" cy="32" r={r} fill="none"
            stroke="#1D3557" strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ}`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-[#1D3557]">{pct}</span>
      </div>
      <p className="text-sm text-gray-700 leading-snug">{label}</p>
    </div>
  )
}

function CtaBtn({ label = 'Ordina Ora \u2192', href = '/checkout-scelta/?bundle=single' }: { label?: string; href?: string }) {
  return (
    <a
      href={href}
      className="block w-full text-center bg-[#1D3557] hover:bg-[#162840] text-white font-black text-base py-5 rounded-xl shadow-lg transition-colors tracking-wide"
    >
      {label}
    </a>
  )
}

function InStock() {
  return (
    <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-1.5 mt-2.5">
      <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
      In Stock — Pronto per la Spedizione
    </p>
  )
}

export default function V2Page() {
  return (
    <>
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="py-3 px-4 bg-[#1D3557]">
        <div className="flex flex-col items-center justify-center gap-1.5 text-center">
          <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
            {`⚡ Offerta limitata — Solo ${dailyStock} pezzi rimasti a questo prezzo`}
          </span>
          <Link href="/checkout-scelta/" className="cursor-pointer"><CountdownTimer /></Link>
        </div>
      </div>

      {/* 2. ABOVE FOLD */}
      <section className="bg-white py-5 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid md:grid-cols-[1fr_420px] gap-4 md:gap-10 items-start">

            {/* LEFT: Gallery */}
            <div className="relative">
              <ProductImageGallery />
            </div>

            {/* RIGHT: Copy + Offer */}
            <div className="md:sticky md:top-24 space-y-4">

              {/* Headline */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Stars n={5} size={4} />
                  <span className="font-bold text-gray-900 text-sm">4.8/5</span>
                  <span className="text-gray-500 text-xs md:text-sm">Basato su 2.800+ Clienti</span>
                </div>
                <h1 className="text-[26px] md:text-3xl font-extrabold text-gray-900 leading-tight">
                  <strong>Pelle pi&#xf9; Liscia e Tonica in 10 Minuti</strong> con BellaCura
                </h1>
                <p className="text-base md:text-lg font-semibold text-[#E63946]">
                  Senza creme inutili, centri estetici costosi e risultati che non arrivano mai!
                </p>
              </div>

              {/* Bullets */}
              <ul className="space-y-2">
                {[
                  'Sistema di massaggio <strong>professionale ora a casa tua</strong>',
                  'Aumenta la <strong>microcircolazione fino al 300%</strong>',
                  '<strong>Risultati visibili</strong> fin dal primo trattamento',
                  'Stimola naturalmente la <strong>produzione di collagene</strong>',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 fill-[#1D3557] mt-0.5 shrink-0" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>

              {/* Bundle Picker + CTA */}
              <ProductBundlePicker />

              {/* Checkmarks */}
              <div className="space-y-1">
                {[
                  'Pagamento alla consegna disponibile',
                  'Annulla o modifica l&#x27;ordine in qualsiasi momento',
                ].map((c, i) => (
                  <p key={i} className="text-xs text-gray-600 flex items-center gap-1.5">
                    <svg className="w-4 h-4 fill-green-600 shrink-0" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span dangerouslySetInnerHTML={{ __html: c }} />
                  </p>
                ))}
              </div>

              {/* 30-day guarantee */}
              <div className="border border-gray-200 rounded-xl px-4 py-3 flex items-start gap-3">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#1D3557] flex flex-col items-center justify-center text-white leading-none">
                  <span className="text-[8px] font-bold uppercase">30</span>
                  <span className="text-[7px] font-bold uppercase">giorni</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Provalo senza rischi per 30 giorni.</p>
                  <p className="text-xs text-gray-500">Non sei soddisfatta? Rimborso completo senza domande.</p>
                </div>
              </div>

              {/* FAQ accordion */}
              <div className="space-y-1.5">
                {FAQS.map((faq, i) => (
                  <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-semibold text-gray-800 select-none list-none">
                      {faq.q}
                      <svg className="w-4 h-4 text-gray-400 shrink-0 ml-2 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-3 pt-1 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>

              {/* Inline review with avatar */}
              <div className="flex items-start gap-3 pt-1 border-t border-gray-100">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1D3557] flex items-center justify-center text-white font-bold text-sm">M</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm text-gray-900">Melissa T.</span>
                    <Stars n={5} size={3} />
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    &ldquo;Adoro quanto sia semplice da usare. Lo uso ogni sera e i risultati parlano da soli. Finalmente qualcosa che funziona davvero!&rdquo;
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF HEADER */}
      <section className="bg-white py-6 text-center px-4 border-t border-gray-100">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
          800+ Trasformazioni!
        </h2>
      </section>

      {/* 4. BEFORE/AFTER SCROLL CAROUSEL (3:4 full-size) */}
      <section className="bg-white pb-8">
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', paddingLeft: 16, paddingRight: 16 }}
        >
          {[
            {
              img: '/images/before-after-1.png',
              alt: 'Prima e dopo cellulite cosce',
              title: 'COSCE COMPLETAMENTE TRASFORMATE',
              quote: '"In 4 settimane di utilizzo quotidiano ho visto più risultati che in anni di creme e trattamenti estetici. Le mie cosce sono finalmente lisce."',
              name: 'Giulia R.',
              age: 36,
            },
            {
              img: '/images/before-after-2.png',
              alt: 'Prima e dopo glutei cellulite',
              title: 'PELLE TONICA, ZERO BUCCIA D’ARANCIA',
              quote: '"Non ci credevo, ma i risultati sui glutei sono stati incredibili. La pelle è tornata liscia e compatta come quando avevo vent’anni."',
              name: 'Sara M.',
              age: 41,
            },
            {
              img: '/images/before-after-3.png',
              alt: 'Prima e dopo schiena cellulite',
              title: 'TRASFORMAZIONE TOTALE IN 6 SETTIMANE',
              quote: '"Ho usato BellaCura sulla schiena e sui fianchi ogni sera. I cambiamenti sono stati progressivi ma costanti. Adesso sono orgogliosa di ciò che vedo allo specchio."',
              name: 'Alessia T.',
              age: 33,
            },
            {
              img: '/images/before-after-4.png',
              alt: 'Prima e dopo cellulite schiena cosce',
              title: 'RISULTATI CHE PARLANO DA SOLI',
              quote: '"Senza dieta, senza cambiare nulla nella mia routine. Solo BellaCura 15 minuti al giorno. La differenza è visibilissima e le mie amiche me lo chiedono in continuazione."',
              name: 'Valentina C.',
              age: 44,
            },
            {
              img: '/images/before-after-5.png',
              alt: 'Prima e dopo cellulite glutei cosce',
              title: 'IL COSTUME NON FA PIÙ PAURA',
              quote: '"Quest’estate ho indossato il bikini per la prima volta da anni. BellaCura mi ha ridato la fiducia che avevo perso. I risultati sui glutei e sulle cosce sono stati stupefacenti."',
              name: 'Francesca L.',
              age: 39,
            },
                { img: '/images/before-after-6.png', alt: 'Prima e dopo BellaCura - cosce', title: 'COSCE VISIBILMENTE CAMBIATE',
        quote: '"Non ci credevo ma dopo 3 settimane la differenza è evidente. Pelle molto più liscia!"', name: 'Martina G.', age: 29 },
      { img: '/images/before-after-7.png', alt: 'Prima e dopo BellaCura - gambe posteriori', title: 'GAMBE POSTERIORI TRASFORMATE',
        quote: '"Finalmente riesco a indossare i pantaloncini corti con fiducia. Risultati incredibili!"', name: 'Chiara F.', age: 37 },
      { img: '/images/before-after-8.png', alt: 'Prima e dopo BellaCura - cosce anteriori', title: 'COSCE ANTERIORI SODE',
        quote: '"In solo un mese ho visto una trasformazione che non avrei mai immaginato possibile."', name: 'Laura P.', age: 32 },
      { img: '/images/before-after-9.png', alt: 'Prima e dopo BellaCura - profilo gambe', title: 'PROFILO GAMBE RIDEFINITO',
        quote: '"Le mie gambe non si erano mai sentite così compatte e toniche. Sono entusiasta!"', name: 'Sofia R.', age: 35 },
      { img: '/images/before-after-10.png', alt: 'Prima e dopo BellaCura - glutei', title: 'GLUTEI COMPLETAMENTE SODI',
        quote: '"Risultati che superano ogni aspettativa. Consiglio a tutte le mie amiche!"', name: 'Paola B.', age: 42 },
      { img: '/images/before-after-11.png', alt: 'Prima e dopo BellaCura - gambe posteriori', title: 'TRASFORMAZIONE TOTALE',
        quote: '"Ho provato tanti prodotti ma BellaCura è l’unico che ha davvero funzionato per me."', name: 'Anna M.', age: 45 },
      ].map((card, i) => (
            <div
              key={i}
              className="flex-none snap-start border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
              style={{ width: 'min(88vw, 340px)' }}
            >
              <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 88vw, 340px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-black text-gray-900 text-sm tracking-wide">{card.title}</h3>
                <Stars n={5} size={4} />
                <p className="text-sm text-gray-600 leading-relaxed">{card.quote}</p>
                <div className="flex items-center justify-between pt-1">
                  <p className="text-xs font-bold text-gray-700">{card.name} | {card.age}</p>
                  <VerifiedBadge />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* dot hints */}
        <p className="text-center text-xs text-gray-400 mt-2">← scorri per vedere tutte le trasformazioni →</p>
      </section>


      {/* 5A. AUTHORITY — DERMATOLOGICALLY PROVEN */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 bg-[#EAF2FB] text-[#1D3557] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Il parere della dermatologa
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-center text-xl font-extrabold text-gray-900 leading-tight mb-4">
            Una dermatologa specializzata in cellulite strutturale<br/>
            <span className="text-[#1D3557]">ha esaminato BellaCura. Ecco cosa ha detto:</span>
          </h2>

          {/* Doctor card */}
          <div className="bg-[#F8FBFF] border border-[#D6E4F0] rounded-2xl p-5 shadow-sm">
            {/* Doctor identity */}
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-[#1D3557] shadow-sm">
                <Image src="/images/dr-ferraro.png" alt="Dott.ssa Elena Marchetti" width={64} height={64} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="font-extrabold text-gray-900 text-sm leading-tight">Dott.ssa Elena Marchetti</p>
                <p className="text-xs text-[#1D3557] font-semibold leading-tight mt-0.5">Dermatologa</p>
                <p className="text-xs text-gray-500 leading-tight">Specializzata in anatomia del tessuto adiposo</p>
              </div>
            </div>
            {/* Quote */}
            <div className="relative">
              <svg className="w-7 h-7 text-[#D6E4F0] absolute -top-1 -left-1" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="text-sm text-gray-700 leading-relaxed italic pl-6">
                La combinazione di pressione negativa, calore terapeutico e luce rossa è la stessa tecnologia che utilizziamo in studio. Agisce in profondità sul tessuto connettivo, migliora la microcircolazione e riduce visibilmente la cellulite già dopo le prime sedute. Avere questo in un dispositivo domiciliare è un salto di qualità reale per le pazienti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERCHÉ LE CREME NON BASTANO */}
      <section className="bg-[#0F2236] py-10 px-4">
        <div className="max-w-xl mx-auto">

          {/* Eyebrow */}
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 bg-white/10 text-[#7EB3D4] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"/></svg>
              Il vero problema
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-2 leading-tight">
            Perché le creme non bastano
          </h2>
          <p className="text-[#7EB3D4] text-center text-sm mb-5 leading-relaxed">
            Se non hanno funzionato, non è colpa tua.
          </p>

          {/* Body before infographic */}
          <p className="text-[#DCEAF2] text-sm leading-relaxed mb-6">
            La cellulite si forma qualche millimetro sotto la pelle, dove i setti fibrosi tengono intrappolato il tessuto adiposo e tirano la superficie verso il basso. Una crema lavora in superficie: idrata, ammorbidisce, ma non arriva lì.
          </p>

          {/* Infographic */}
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40 mb-6">
            <Image
              src="/images/perche-creme-no.png"
              alt="La cellulite si forma 3 mm sotto la pelle — dove le creme non arrivano mai"
              width={640}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 640px) calc(100vw - 32px), 576px"
              quality={65}
              loading="lazy"
            />
          </div>

          {/* Body after infographic */}
          <p className="text-[#DCEAF2] text-sm leading-relaxed">
            BellaCura lavora proprio in quello strato, con aspirazione, calore e luce. Sono le tecnologie dei centri estetici, a casa tua, in 10&#x2013;15 minuti al giorno.
          </p>

        </div>
      </section>

      {/* 6. STARS HEADER + VIDEO TESTIMONIALS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Stars n={5} size={5} />
            <span className="font-bold text-gray-900">4.8/5</span>
            <span className="text-gray-500 text-sm">Basato su 2.800+ Clienti</span>
          </div>
          <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5">
            Non sei sola. <strong>Storie di Donne Come Te.</strong>
          </h2>
          <VideoCarousel />
        </div>
      </section>

      {/* 5B. HOW IT WORKS */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1D3557] mb-2 text-center">Come funziona</p>
          <h2 className="text-2xl font-extrabold text-[#1D3557] leading-tight mb-3 text-center">
            Quattro tecnologie,<br/>
            <span className="text-[#457B9D]">una seduta da 10 minuti</span>
          </h2>
          <p className="text-[#457B9D] text-sm mb-5 text-center leading-relaxed">
            Ogni tecnologia agisce su un aspetto diverso della cellulite. È la combinazione a fare la differenza.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              {
                num: '01',
                accentBg: 'bg-red-500/15',
                accentBorder: 'border-red-400/30',
                iconColor: 'text-red-500',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity={0.25} stroke="none"/>
                    <path strokeLinecap="round" d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                    <circle cx="12" cy="12" r="4" strokeLinecap="round"/>
                  </svg>
                ),
                label: 'Luce Rossa & Blu',
                sub: 'Fotobiomodulazione LED',
                desc: 'La luce rossa a 660 nm raggiunge gli strati più profondi della pelle e sostiene la produzione di collagene. La luce blu lavora in superficie e aiuta a uniformare il tono. Nel tempo, la pelle appare più compatta e omogenea.',
              },
              {
                num: '02',
                accentBg: 'bg-blue-400/15',
                accentBorder: 'border-blue-400/30',
                iconColor: 'text-blue-500',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C8 3 4 7 4 12s4 9 8 9 8-4 8-9c0-3-1.5-5.5-4-7"/>
                    <path strokeLinecap="round" d="M12 3c0 0 3 4 3 9s-3 9-3 9"/>
                    <path strokeLinecap="round" d="M4 12h16"/>
                  </svg>
                ),
                label: 'Coppettazione',
                sub: 'Pressione negativa',
                desc: 'Una leggera aspirazione solleva la pelle e mobilizza il tessuto sottostante, dove si trovano i setti fibrosi. È il principio dei trattamenti anticellulite in cabina: ammorbidire le aderenze e rimettere in movimento i liquidi.',
              },
              {
                num: '03',
                accentBg: 'bg-orange-400/15',
                accentBorder: 'border-orange-400/30',
                iconColor: 'text-orange-500',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c0 6-5 8-5 13a5 5 0 0010 0c0-5-5-7-5-13z"/>
                    <path strokeLinecap="round" d="M9 17c0 1.66 1.34 3 3 3"/>
                  </svg>
                ),
                label: 'Calore 42°C',
                sub: 'Termoterapia',
                desc: 'Il calore dilata i vasi e riattiva la circolazione nella zona trattata. Lo senti già dopo pochi minuti: la pelle si scalda, si rilassa e diventa più ricettiva al massaggio.',
              },
              {
                num: '04',
                accentBg: 'bg-purple-400/15',
                accentBorder: 'border-purple-400/30',
                iconColor: 'text-purple-500',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 1116 0A8 8 0 014 12z"/>
                    <path strokeLinecap="round" d="M12 8v4l3 3"/>
                    <path strokeLinecap="round" d="M9 12a3 3 0 106 0 3 3 0 00-6 0z" fill="currentColor" fillOpacity={0.2} stroke="none"/>
                  </svg>
                ),
                label: 'Massaggio 360°',
                sub: 'Drenaggio attivo',
                desc: 'Il movimento del dispositivo accompagna i liquidi verso il sistema linfatico. È la parte che si nota per prima: dopo la seduta, le gambe risultano più leggere e meno gonfie.',
              },
            ].map((f) => (
              <div key={f.num} className="relative rounded-2xl border border-gray-200 bg-gray-50 p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between mb-1">
                  <span className={`${f.iconColor}`}>{f.icon}</span>
                  <span className="text-[10px] font-black text-gray-300 tracking-widest">{f.num}</span>
                </div>
                <div>
                  <p className="text-gray-900 font-extrabold text-sm leading-tight">{f.label}</p>
                  <p className={`text-[11px] font-semibold mt-0.5 ${f.iconColor}`}>{f.sub}</p>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COME SI USA — 3 STEP ROUTINE */}
      <section className="bg-[#0F2236]">
        <div className="px-4 pt-8 pb-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#7EB3D4] mb-2">Semplice da usare</p>
          <h2 className="text-2xl font-extrabold text-white leading-tight">
            La Tua Routine BellaCura®
            <span className="block text-[#7EB3D4]">in Soli 3 Passi</span>
          </h2>
        </div>
        <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
          <Image src="/images/routine-3-passi.jpg" alt="Come usare BellaCura in 3 passi" fill className="object-cover" />
        </div>
      </section>

      {/* PER CHI FUNZIONA */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1D3557] mb-2 text-center">È fatto per te?</p>
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2 text-center">
            BellaCura funziona per te <span className="text-[#1D3557]">se hai...</span>
          </h2>
          <p className="text-sm text-gray-500 mb-5 text-center">Oltre 2.800 donne hanno già trasformato la propria pelle. Ecco per chi è stato pensato:</p>
          <ul className="space-y-3">
            {[
              "Cellulite visibile su cosce, glutei o addome",
              "Pelle a buccia d'arancia che non migliora con le creme",
              "Ritenzione idrica e gambe pesanti dopo ore in piedi",
              "Pelle flaccida dopo una dieta o una gravidanza",
              "Poco tempo — vuoi risultati in 10 minuti al giorno",
              "Non vuoi spendere 150€ a sessione in centro estetico",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 bg-[#F8FBFF] rounded-xl px-4 py-3 border border-[#E2EDF8]">
                <span className="shrink-0 w-5 h-5 rounded-full bg-[#1D3557] flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </span>
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MID-PAGE CTA STRIP */}
      <section className="bg-[#EAF2FB] py-8 px-4">
        <div className="max-w-sm mx-auto text-center space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#1D3557]">Inizia Oggi</p>
          <a
            href="/checkout-scelta/?bundle=single"
            className="flex items-center justify-center gap-2 w-full bg-red-600 active:bg-red-700 text-white font-black text-base py-4 rounded-2xl shadow-lg shadow-red-200"
          >
            Ordina Ora — Spedizione Gratis &#x2192;
          </a>
          <p className="text-xs text-gray-500">&#x2713; Garanzia 30 giorni &nbsp;&middot;&nbsp; &#x2713; Pagamento alla consegna &nbsp;&middot;&nbsp; &#x2713; Spedizione 24&#x2013;48h</p>
        </div>
      </section>
      {/* CONFRONTO — BellaCura vs Creme vs Centro Estetico */}
      <section className="bg-[#F8F8F8] py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1D3557] mb-2 text-center">Perché BellaCura?</p>
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2 text-center">
            Non tutte le soluzioni <span className="text-[#1D3557]">sono uguali</span>
          </h2>
          <p className="text-sm text-gray-500 mb-5 text-center">Confronta tu stessa. I risultati parlano chiaro.</p>

          <div className="overflow-x-auto -mx-2">
            <table className="w-full min-w-[340px] text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wide w-[34%]"></th>
                  <th className="py-3 px-2 text-center w-[22%]">
                    <span className="inline-block text-xs font-extrabold text-gray-800 uppercase tracking-wide border border-gray-300 rounded-lg px-2 py-1">Creme</span>
                  </th>
                  <th className="py-3 px-2 text-center w-[22%]">
                    <span className="inline-block text-xs font-extrabold text-gray-800 uppercase tracking-wide border border-gray-300 rounded-lg px-2 py-1 leading-tight">Centro<br/>Estetico</span>
                  </th>
                  <th className="py-3 px-2 text-center w-[22%]">
                    <span className="inline-block bg-[#1D3557] text-white text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-lg">BellaCura®</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Prezzo', creme: '20–50€/mese', centro: '150€+/sessione', bc: 'Una tantum' },
                  { label: 'Tecnologia professionale', creme: 'NO', centro: 'YES', bc: 'YES' },
                  { label: 'Penetrazione in profondità', creme: 'NO', centro: 'YES', bc: 'YES' },
                  { label: 'Comodità a casa', creme: 'YES', centro: 'NO', bc: 'YES' },
                  { label: 'Risultati duraturi', creme: 'NO', centro: 'YES', bc: 'YES' },
                  { label: 'Tempo necessario', creme: '—', centro: '1h+ spostamento', bc: '10 min/giorno' },
                ].map((row, i) => {
                  const renderCell = (val: string, navy?: boolean) => {
                    if (val === 'YES') return <span className="flex justify-center items-center"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#DCFCE7"/><path d="M6 10.5l2.5 2.5 5.5-6" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    if (val === 'NO') return <span className="flex justify-center items-center"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#FEE2E2"/><path d="M7 7l6 6M13 7l-6 6" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    return <span className={navy ? "text-xs font-bold text-[#1D3557]" : "text-xs text-gray-500"}>{val}</span>
                  }
                  return (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F4F8FC]'}>
                      <td className="py-3 px-3 text-xs font-semibold text-gray-700">{row.label}</td>
                      <td className="py-3 px-2 text-center">{renderCell(row.creme)}</td>
                      <td className="py-3 px-2 text-center">{renderCell(row.centro)}</td>
                      <td className="py-3 px-2 text-center bg-[#EAF2FB]">{renderCell(row.bc, true)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RISULTATI NEL TEMPO */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1D3557] mb-2 text-center">Roadmap ai risultati</p>
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2 text-center">
            Quando inizierai <span className="text-[#1D3557]">a vedere la differenza?</span>
          </h2>
          <p className="text-sm text-gray-500 mb-5 text-center">I risultati variano da persona a persona, ma ecco cosa si aspettano in media le nostre clienti.</p>

          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#1D3557] to-[#A8C5E0] rounded-full" />

            {[
              {
                time: '1ª Sessione',
                badge: 'Immediato',
                badgeColor: 'bg-[#1D3557] text-white',
                title: 'La pelle si sveglia',
                desc: 'Calore e massaggio attivano subito la circolazione. La pelle appare più morbida al tatto e visibilmente più luminosa già dopo i primi minuti.',
              },
              {
                time: 'Settimane 1–2',
                badge: 'Uso quotidiano',
                badgeColor: 'bg-[#EAF2FB] text-[#1D3557]',
                title: 'La cellulite inizia a cedere',
                desc: "La buccia d'arancia diventa meno visibile. La circolazione migliora, la ritenzione idrica si riduce e le gambe appaiono più leggere.",
              },
              {
                time: 'Mese 1',
                badge: 'A giorni alterni',
                badgeColor: 'bg-[#EAF2FB] text-[#1D3557]',
                title: 'Trasformazione visibile',
                desc: 'Cosce e glutei visibilmente più compatti e tonici. La pelle appare più giovane, più liscia e più soda. I risultati sono chiari anche agli altri.',
              },
              {
                time: 'Mantenimento',
                badge: '1–2x a settimana',
                badgeColor: 'bg-[#F0F7FF] text-[#1D3557]',
                title: 'Risultati permanenti',
                desc: 'Una o due sessioni a settimana sono sufficienti per mantenere i risultati nel tempo. La tua pelle rimane compatta, tonica e giovane senza sforzo.',
              },
            ].map((step, i) => (
              <div key={step.time} className="relative mb-6 last:mb-0">
                {/* Dot */}
                <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-[#1D3557] border-2 border-white shadow" />
                <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-1.5 ${step.badgeColor}`}>{step.badge}</span>
                <p className="text-xs text-gray-400 mb-0.5">{step.time}</p>
                <p className="text-base font-extrabold text-gray-900 mb-1">{step.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA STRIP */}
      <section className="bg-[#EAF2FB] py-8 px-4">
        <div className="max-w-sm mx-auto text-center space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#1D3557]">Inizia Oggi</p>
          <a
            href="/checkout-scelta/?bundle=single"
            className="flex items-center justify-center gap-2 w-full bg-red-600 active:bg-red-700 text-white font-black text-base py-4 rounded-2xl shadow-lg shadow-red-200"
          >
            Ordina Ora — Spedizione Gratis &#x2192;
          </a>
          <p className="text-xs text-gray-500">&#x2713; Garanzia 30 giorni &nbsp;&middot;&nbsp; &#x2713; Pagamento alla consegna &nbsp;&middot;&nbsp; &#x2713; Spedizione 24&#x2013;48h</p>
        </div>
      </section>
      {/* 7. TRUSTPILOT REVIEWS — all 21 */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <TrustpilotSection />
        </div>
      </section>

      {/* FAQ — Domande Frequenti */}
      <section className="bg-[#F8F8F8] py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1D3557] mb-2 text-center">Hai dubbi?</p>
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2 text-center">
            Domande <span className="text-[#1D3557]">Frequenti</span>
          </h2>
          <p className="text-sm text-gray-500 mb-5 text-center">Tutto quello che devi sapere prima di iniziare.</p>

          <div className="space-y-3">
            {[
              {
                q: "Funziona davvero o è solo marketing?",
                a: "BellaCura utilizza tre tecnologie clinicamente validate, usate ogni giorno nei centri estetici professionali: vacuum therapy (pressione negativa), fototerapia LED a 660nm e calore terapeutico a 42°C. Queste non sono invenzioni pubblicitarie — sono protocolli medici documentati. La differenza è che BellaCura li porta in un dispositivo che puoi usare a casa. I risultati che vedi nelle nostre recensioni sono reali, fotografati dalle nostre clienti e pubblicati con il loro consenso.",
              },
              {
                q: "Quanto tempo ci vuole per vedere i risultati?",
                a: "La maggior parte delle clienti nota una pelle più morbida e luminosa già dopo la prima sessione. Nelle prime 1–2 settimane di uso quotidiano, la buccia d’arancia inizia a cedere visibilmente e la ritenzione idrica si riduce. Dopo 3–4 settimane i risultati sono chiari e fotografabili. Come con qualsiasi trattamento estetico, la costanza fa la differenza: 10 minuti al giorno sono sufficienti.",
              },
              {
                q: "È doloroso o fastidioso da usare?",
                a: "No. Il dispositivo ha 12 livelli di intensità che puoi regolare in base alla tua sensibilità e alla zona trattata. La maggior parte delle clienti descrive la sensazione come un massaggio intenso e rilassante, simile a quello che si riceve in un centro benessere. Il calore terapeutico è piacevole — mai bruciante. Si consiglia di iniziare all’intensità minima e aumentare gradualmente.",
              },
              {
                q: "Ho la cellulite molto grave. Può aiutarmi comunque?",
                a: "Sì. BellaCura agisce direttamente sul tessuto connettivo e sul grasso sottocutaneo, indipendentemente dallo stadio della cellulite. Per la cellulite di grado 3 o 4 (visibile anche a riposo, con noduli profondi), i risultati richiedono semplicemente più settimane di trattamento costante. Molte delle nostre clienti più soddisfatte avevano provato di tutto senza successo prima di BellaCura.",
              },
              {
                q: "Ho già provato decine di creme e prodotti. Perché questo sarebbe diverso?",
                a: "La cellulite è un problema strutturale del tessuto connettivo profondo, non della superficie cutanea. Le creme più costose penetrano al massimo il 5–10% dello strato cutaneo e non raggiungono mai il derma profondo dove si formano le aderenze fibrose. BellaCura lavora meccanicamente su quei tessuti: la pressione negativa rompe fisicamente le aderenze, il calore aumenta la permeabilità, la luce rossa stimola il collagene. È un approccio completamente diverso.",
              },
              {
                q: "E se non funziona per me? C’è una garanzia?",
                a: "Sì, offriamo una garanzia di rimborso. Puoi provare BellaCura per 30 giorni e, se non sei soddisfatta dei risultati, ti rimborsiamo senza fare domande. Vogliamo che tu sia sicura del tuo acquisto, non che tu si senta in trappola. Contatta il nostro supporto e gestiamo tutto rapidamente.",
              },
              {
                q: "Devo comprare anche oli, creme o accessori aggiuntivi?",
                a: "No, BellaCura funziona da solo. Tuttavia, applicare un olio secco o un siero anticellulite prima della sessione può amplificarne l’efficacia: il calore e la ventosa aprono i tessuti e portano gli ingredienti attivi dove le creme da sole non arriverebbero mai. Il kit base include tutto il necessario per iniziare subito.",
              },
              {
                q: "Posso usarlo su tutto il corpo o solo sulle gambe?",
                a: "BellaCura può essere usato su cosce, glutei, fianchi, addome, braccia e polpacci. La testa massaggiante si adatta alle diverse zone corporee e i livelli di intensità ti permettono di personalizzare il trattamento per ogni area. Si sconsiglia l’uso su viso, collo e su zone con ferite, varici o infiammazioni attive.",
              },
              {
                q: "Ogni quanto devo usarlo? Per quanto tempo?",
                a: "Per le prime 4–8 settimane, l’ideale è usarlo ogni giorno per 10–15 minuti sulle zone interessate. Dopo aver raggiunto i risultati desiderati, basta una o due sessioni a settimana per mantenere la pelle tonica e compatta. Non c’è un limite di tempo: più usi BellaCura, più la pelle migliora.",
              },
              {
                q: "I risultati durano nel tempo o scompaiono appena smetto di usarlo?",
                a: "I benefici strutturali del trattamento — la riduzione delle aderenze fibrose e la stimolazione del collagene — si accumulano nel tempo e non scompaiono dall’oggi al domani. Tuttavia, come qualsiasi trattamento estetico, la cellulite può lentamente riformarsi se si smette completamente e lo stile di vita non è ottimale. Con 1–2 sessioni settimanali di mantenimento, i risultati sono duraturi.",
              },
              {
                q: "Posso usarlo se sono in gravidanza o allattamento?",
                a: "No. Sconsigliamo l’uso durante la gravidanza e il periodo di allattamento. Questo vale per tutti i dispositivi di massaggio elettronico che usano calore, pressione e stimolazione luminosa. Aspetta il periodo post-allattamento e consulta il tuo medico prima di iniziare qualsiasi trattamento estetico.",
              },
              {
                q: "Ho la pelle sensibile. Posso comunque usarlo?",
                a: "Sì, ma con cautela. Inizia sempre all’intensità più bassa e aumenta gradualmente nell’arco di qualche settimana. Il livello 1 è delicatissimo e adatto anche alle pelli più reattive. Evita zone con rossori attivi, irritazioni o dermatiti in corso. Se hai dubbi specifici sulla tua condizione cutanea, consulta il tuo dermatologo.",
              },
              {
                q: "Come si carica? Quante sessioni dura la batteria?",
                a: "BellaCura si ricarica tramite cavo USB-C (incluso nella confezione). Una carica completa richiede circa 2 ore e garantisce circa 4–6 sessioni da 15 minuti. Il dispositivo è leggero, cordless e quindi completamente libero — nessun filo tra i piedi mentre ti tratti.",
              },
              {
                q: "Il dispositivo è impermeabile? Posso usarlo sotto la doccia?",
                a: "No. BellaCura non è impermeabile e non deve essere usato sotto l’acqua o in ambienti molto umidi. È progettato per essere usato sulla pelle asciutta o con un sottile strato di olio secco. Evita di immergerlo o bagnarlo direttamente.",
              },
              {
                q: "Quanto vale BellaCura rispetto a un centro estetico?",
                a: "Un ciclo standard di 10 sedute di vacuum therapy in centro estetico costa tipicamente 800–1.500€. BellaCura ha un costo una tantum e si paga da solo in meno di un mese rispetto alle sessioni in studio. Puoi usarlo ogni giorno, nelle tue ore, senza appuntamenti, code o spostamenti. È la stessa tecnologia, nella tua casa.",
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-start justify-between gap-3 px-5 py-4 cursor-pointer select-none list-none">
                  <span className="font-bold text-gray-900 text-sm leading-snug pr-2">{faq.q}</span>
                  <svg className="w-5 h-5 text-[#1D3557] shrink-0 mt-0.5 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          FINAL CLOSING CTA
          ═══════════════════════════════════════════════ */}
      <section className="bg-[#EAF2FB] py-10 px-4">
        <div className="max-w-lg mx-auto">

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-[#F4A623]" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            <span className="text-[#457B9D] text-sm font-semibold ml-1.5">4.8/5 · 2.800+ clienti</span>
          </div>

          {/* Headline */}
          <h2 className="text-[#1D3557] font-extrabold text-center leading-tight mb-3" style={{fontSize: 'clamp(24px, 6.5vw, 36px)'}}>
            Pelle più liscia e tonica.<br/>
            <span className="text-[#457B9D]">Inizia oggi, a casa tua.</span>
          </h2>

          <p className="text-[#457B9D] text-sm text-center leading-relaxed mb-6 max-w-xs mx-auto">
            Lo stesso trattamento dei centri estetici professionali, ogni giorno, senza appuntamenti.
          </p>

          {/* Price + CTA card */}
          <div className="bg-white rounded-3xl shadow-md shadow-[#C5DCF0] p-5 mb-4">

            {/* Price */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-gray-400 line-through text-base">€119,00</span>
              <span className="text-[#1D3557] font-black" style={{fontSize: 'clamp(34px, 8vw, 44px)'}}>€59,99</span>
              <span className="bg-[#E63946] text-white font-extrabold text-xs px-2.5 py-1 rounded-full">−50%</span>
            </div>

            {/* CTA */}
            <a
              href="/checkout-scelta/?bundle=single"
              className="block w-full text-center text-white font-extrabold rounded-2xl transition-transform active:scale-95"
              style={{
                background: '#E63946',
                fontSize: 'clamp(15px, 4vw, 17px)',
                padding: '17px 24px',
                letterSpacing: 0.2,
                boxShadow: '0 6px 24px rgba(230,57,70,0.4)',
                marginBottom: 12,
              }}
            >
              Ordina ora — Spedizione gratuita 🚚
            </a>

            <p className="text-center text-xs text-gray-400">Pagamento alla consegna · Nessun anticipo</p>
          </div>

          {/* 30-day guarantee */}
          <div className="flex items-start gap-3 bg-white border border-[#DCEAF2] rounded-2xl p-4 mb-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-[#1D3557] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#1D3557] font-extrabold text-sm">Provalo senza rischi per 30 giorni.</p>
              <p className="text-[#457B9D] text-xs mt-0.5 leading-snug">Non sei soddisfatta? Rimborso completo senza domande.</p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[#457B9D] text-xs">
            <span>🔒 Pagamento sicuro</span>
            <span>📦 Spedizione gratuita</span>
            <span>⚡ Consegna in 24–48h</span>
            <span>↩️ Reso gratuito 30 giorni</span>
          </div>

        </div>
      </section>

      {/* STICKY MOBILE CTA */}

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl md:hidden">
        <StickyOrderButton />
      </div>
    </>
  )
}
