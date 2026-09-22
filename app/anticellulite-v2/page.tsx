import type { Metadata } from 'next'
import Image from 'next/image'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import ProductBundlePicker from '@/components/product/ProductBundlePicker'
import StickyOrderButton from '@/components/product/StickyOrderButton'

export const metadata: Metadata = {
  title: 'BellaCura — Pelle più liscia e tonica dal primo utilizzo',
  description: 'Il protocollo anticellulite professionale ora a casa tua. Senza creme inutili, centri estetici costosi e risultati che non arrivano mai. Paga alla consegna. Spedizione 24-48h GRATIS.',
  robots: { index: false, follow: false },
}

const FAQS = [
  {
    q: 'Come funziona BellaCura?',
    a: 'BellaCura combina 4 tecnologie: pressione negativa (ventosa), calore terapeutico, luce rossa 660nm e luce blu 415nm. Insieme mobilizzano il tessuto connettivo, stimolano la microcircolazione e riducono la comparsa della cellulite in modo progressivo e misurabile.',
  },
  {
    q: 'Con quale frequenza posso usarlo?',
    a: 'Consigliamo sessioni di 10–15 minuti al giorno o a giorni alterni. Dopo le prime 4 settimane puoi passare a 2–3 sessioni settimanali per mantenimento.',
  },
  {
    q: 'È sicuro da usare?',
    a: 'Sì, BellaCura è certificato IPX7 (impermeabile), testato dermatologicamente e adatto a tutti i tipi di pelle. Consigliamo di evitare l\u2019uso su pelle irritata o in caso di varici evidenti.',
  },
  {
    q: 'Su quali zone del corpo posso usarlo?',
    a: 'Cosce, fianchi, addome, braccia, glutei — qualsiasi zona che desideri trattare. La guida inclusa nel kit mostra le tecniche consigliate per ogni area.',
  },
  {
    q: 'Cosa include il kit?',
    a: 'Il dispositivo BellaCura, cavo USB-C, guida d\u2019uso illustrata e scheda dei protocolli per zona corporea.',
  },
  {
    q: 'Garanzia 90 giorni soddisfatta o rimborsata',
    a: 'Se entro 90 giorni non sei soddisfatta dei risultati, ti rimborsiamo l\u2019intero importo. Nessuna domanda, nessuna burocrazia. Contatta il nostro supporto e provvediamo al rimborso entro 3–5 giorni lavorativi.',
  },
  {
    q: 'Spedizione e resi',
    a: 'Spedizione gratuita in tutta Italia con consegna in 24–48 ore. Pagamento alla consegna disponibile. I resi sono gratuiti entro 90 giorni.',
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
  return (
    <div className="flex items-center gap-4">
      <div className="shrink-0 w-16 h-16 rounded-full border-4 border-[#1D3557] flex items-center justify-center bg-white">
        <span className="text-sm font-black text-[#1D3557]">{pct}</span>
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
      <div className="py-2.5 px-4 bg-[#1D3557] text-center">
        <p className="text-white text-xs font-bold uppercase tracking-widest">
          <strong>OFFERTA STAGIONALE:</strong> Fino al 63% di Sconto &amp; Spedizione Gratuita
        </p>
      </div>

      {/* 2. ABOVE FOLD */}
      <section className="bg-white py-5 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Mobile headline */}
          <div className="md:hidden mb-4 space-y-1.5">
            <div className="flex items-center gap-2">
              <Stars n={5} size={4} />
              <span className="font-bold text-gray-900 text-sm">4.8/5</span>
              <span className="text-gray-500 text-xs">Basato su 2.800+ Clienti</span>
            </div>
            <h1 className="text-[26px] font-extrabold text-gray-900 leading-tight">
              <strong>Pelle pi&#xf9; Liscia e Tonica in 10 Minuti</strong> con BellaCura
            </h1>
            <p className="text-base font-semibold text-[#E63946]">
              Senza creme inutili, centri estetici costosi e risultati che non arrivano mai!
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_420px] gap-4 md:gap-10 items-start">

            {/* LEFT: Gallery with Bestseller badge */}
            <div className="relative">
              <div className="absolute top-3 left-3 z-30 bg-[#1D3557] text-white text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md">
                Bestseller
              </div>
              <ProductImageGallery />
            </div>

            {/* RIGHT: Copy + Offer */}
            <div className="md:sticky md:top-24 space-y-4">

              {/* Desktop headline */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-2">
                  <Stars n={5} size={5} />
                  <span className="font-bold text-gray-900">4.8/5</span>
                  <span className="text-gray-500 text-sm">Basato su 2.800+ Clienti</span>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                  <strong>Pelle pi&#xf9; Liscia e Tonica in 10 Minuti</strong> con BellaCura
                </h1>
                <p className="text-lg font-semibold text-[#E63946]">
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
                  <span className="text-[8px] font-bold uppercase">90</span>
                  <span className="text-[7px] font-bold uppercase">giorni</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Provalo senza rischi per 90 giorni.</p>
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
      <section className="bg-white py-12 text-center px-4 border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          5.000+ Trasformazioni della Pelle
        </h2>
      </section>

      {/* 4. BEFORE/AFTER REVIEW CARDS (3) */}
      <section className="bg-white pb-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              img: '/images/g4-martina-branded.jpg',
              alt: 'Prima e dopo Martina',
              title: 'RISULTATI VISIBILI RAPIDAMENTE',
              quote: '"Non immaginavo un risultato cos&#xec; netto in cos&#xec; poco tempo. La texture &#xe8; completamente cambiata. Sono sulla mia seconda settimana e non riesco a smettere."',
              name: 'Martina C.',
              age: 34,
            },
            {
              img: '/images/g5-francesca-branded.jpg',
              alt: 'Prima e dopo Francesca',
              title: 'INCREDIBILE!',
              quote: '"Usavo creme ogni giorno da anni senza risultati. Con BellaCura ho visto in 3 settimane quello che le creme non mi hanno mai dato in 10 anni."',
              name: 'Francesca M.',
              age: 42,
            },
            {
              img: '/images/review-instagram-elena.jpg',
              alt: 'Recensione Elena',
              title: 'UN MIRACOLO A CASA TUA',
              quote: '"Dopo sole poche sessioni, la mia pelle sembrava completamente diversa. Pi&#xf9; liscia, pi&#xf9; tonica. Non lo abbandonerei mai."',
              name: 'Elena B.',
              age: 38,
            },
          ].map((card, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <div className="relative h-64 w-full">
                <Image src={card.img} alt={card.alt} fill className="object-cover" />
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
      </section>

      {/* 5. PROFESSIONAL TECHNOLOGY */}
      <section className="bg-[#F8F8F8] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                La Tecnologia Professionale <strong>Ora a Casa Tua</strong>
              </h2>
              <p className="text-gray-800 font-semibold text-base">
                Per anni, i trattamenti anticellulite efficaci erano riservati a centri estetici da 150&#x20ac;+ a sessione. Non pi&#xf9;.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                BellaCura porta questa tecnologia direttamente a casa tua, con la stessa scienza in un dispositivo comodo, facile da usare e 10 volte pi&#xf9; economico.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-72 md:h-80 shadow-xl">
              <Image src="/images/lifestyle-black-seated.jpg" alt="BellaCura in uso" fill className="object-cover" />
            </div>
          </div>
          {/* 2x2 stat grid with circular badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <StatCircle pct="89%" label={<>Ha notato la pelle <strong>visibilmente pi&#xf9; liscia</strong> e tonica</>} />
            <StatCircle pct="93%" label={<>Ha riferito cosce <strong>pi&#xf9; compatte e modellate</strong></>} />
            <StatCircle pct="94%" label={<>Ha confermato che il trattamento &#xe8; <strong>completamente indolore</strong></>} />
            <StatCircle pct="96%" label={<>Ha riportato un aspetto <strong>pi&#xf9; giovane e sano</strong> della pelle</>} />
          </div>
        </div>
      </section>

      {/* 6. STARS HEADER + VIDEO TESTIMONIALS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Stars n={5} size={5} />
            <span className="font-bold text-gray-900">4.8/5</span>
            <span className="text-gray-500 text-sm">Basato su 2.800+ Clienti</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
            Non sei sola. <strong>Storie di Donne Come Te.</strong>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/review-wa-1.jpg', label: 'Testimonianza 1' },
              { src: '/images/review-wa-2.jpg', label: 'Testimonianza 2' },
              { src: '/images/review-wa-3.jpg', label: 'Testimonianza 3' },
              { src: '/images/review-wa-4.jpg', label: 'Testimonianza 4' },
            ].map((v, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm" style={{aspectRatio:'9/16'}}>
                <Image src={v.src} alt={v.label} fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 fill-[#1D3557] ml-0.5" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TEXT REVIEW CARDS (4) */}
      <section className="bg-white pb-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'La Migliore Pelle di Sempre', quote: '"Idratante, rassodante, modellante dall&#x27;interno. Non tornerei mai pi&#xf9; alle creme."', name: 'Laura W.', age: 45 },
            { title: 'Risultati Pro, Senza Clinica!', quote: '"Mi risparmia tempo e denaro rispetto ai trattamenti estetici che costavano 10 volte tanto."', name: 'Olivia S.', age: 38 },
            { title: 'Pelle Tonica Senza Filler!', quote: '"Finalmente un metodo migliore per avere una pelle pi&#xf9; giovane senza procedure invasive."', name: 'Samantha J.', age: 58 },
            { title: 'Pelle Perfetta, Zero Dolore!', quote: '"Con BellaCura in 4 settimane ho ottenuto ci&#xf2; che non avevo mai ottenuto prima."', name: 'Madison T.', age: 32 },
          ].map((r, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-4 space-y-2 bg-white shadow-sm">
              <Stars n={5} size={3} />
              <p className="font-black text-gray-900 text-sm leading-tight">{r.title}</p>
              <p className="text-xs text-gray-600 leading-relaxed italic" dangerouslySetInnerHTML={{ __html: r.quote }} />
              <p className="text-xs font-bold text-gray-500">{r.name} | {r.age}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. THE POWERFUL DUAL-ACTION SYSTEM */}
      <section className="bg-[#F8F8F8] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">
            Il Potente <strong>Sistema a Doppia Azione</strong>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-3">
              <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Azione 1: Ventosa a Pressione Negativa</p>
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-md bg-gray-200">
                <Image src="/images/massager-features-v2.jpg" alt="Ventosa e calore BellaCura" fill className="object-cover" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                La pressione negativa lavora in profondit&#xe0; per mobilizzare il tessuto connettivo e rompere le aderenze fibrose responsabili della cellulite. Il calore terapeutico a 40&#xb0;C potenzia l&#x27;azione drenante e prepara la pelle ai trattamenti successivi.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Azione 2: Luce Rossa e Blu Avanzata</p>
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-md bg-gray-200">
                <Image src="/images/body-map-bellacura-v2.jpg" alt="Mappa zone BellaCura" fill className="object-cover" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                La luce rossa 660nm stimola i fibroblasti per una produzione naturale di collagene. La luce blu 415nm ha un&#x27;azione antibatterica e purificante che uniforma il tono cutaneo. Insieme trasformano la pelle dall&#x27;interno.
              </p>
            </div>
          </div>
          <p className="text-center text-base font-bold text-gray-800 max-w-2xl mx-auto mb-6">
            Questa combinazione potente &#xe8; il motivo per cui le donne vedono risultati visibili fin dal primo trattamento.
          </p>
          <CtaBtn label="AGGIUNGI AL CARRELLO &#x2192;" />
          <InStock />
        </div>
      </section>

      {/* 9. ACHIEVE YOUR GOALS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            Ottieni la <strong>Pelle che Desideri</strong>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-lg mx-auto">
            Che tu voglia una texture pi&#xf9; liscia, cosce pi&#xf9; compatte o una pelle pi&#xf9; luminosa &#x2014; BellaCura porta risultati visibili dove pi&#xf9; ne hai bisogno.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                before: '/images/prima-cellulite.jpg',
                after: '/images/dopo-bellacura.jpg',
                title: 'Pelle Liscia e Luminosa',
                time: 'PRIME 24 ORE',
                checks: ['Sensazione immediata di pelle pi&#xf9; tonica', 'Circolazione riattivata', 'Calore piacevole e rilassante'],
                quote: '"Dopo la prima sessione la mia pelle era gi&#xe0; diversa. Pi&#xf9; piena, pi&#xf9; viva."',
                name: 'Roberta G.', age: 41,
              },
              {
                before: '/images/lifestyle-green-knee.jpg',
                after: '/images/g4-martina-branded.jpg',
                title: 'Texture Visibilmente Migliorata',
                time: '1-2 SETTIMANE DI USO',
                checks: ['Texture cutanea migliorata', 'Riduzione del gonfiore', 'Pelle pi&#xf9; morbida al tatto'],
                quote: '"Dopo 10 giorni i miei jeans entravano di nuovo senza sforzo."',
                name: 'Marta L.', age: 37,
              },
              {
                before: '/images/gallery-1-uso.jpg',
                after: '/images/g5-francesca-branded.jpg',
                title: 'Compatta &amp; Perfetta',
                time: '2-4 SETTIMANE DI USO',
                checks: ['Riduzione visibile della cellulite', 'Pelle pi&#xf9; compatta su cosce e fianchi', 'Risultati fotografabili prima/dopo'],
                quote: '"Quattro settimane. &#xc8; tutto quello che ci &#xe8; voluto per essere di nuovo a mio agio."',
                name: 'Serena T.', age: 29,
              },
            ].map((card, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <div className="grid grid-rows-2 h-64">
                  <div className="relative overflow-hidden">
                    <Image src={card.before} alt="Prima" fill className="object-cover" />
                    <span className="absolute top-2 left-2 bg-white/90 text-gray-700 text-[10px] font-black uppercase px-2 py-0.5 rounded">Prima</span>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image src={card.after} alt="Dopo" fill className="object-cover" />
                    <span className="absolute bottom-2 left-2 bg-[#1D3557] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">Dopo</span>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-black text-gray-900 text-base" dangerouslySetInnerHTML={{ __html: card.title }} />
                    <p className="text-[#E63946] text-[11px] font-black uppercase tracking-wider mt-0.5">{card.time}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {card.checks.map((c, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 fill-green-500 shrink-0 mt-0.5" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        <span dangerouslySetInnerHTML={{ __html: c }} />
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-100 pt-3 space-y-1">
                    <Stars n={5} size={3} />
                    <p className="text-xs text-gray-600 italic" dangerouslySetInnerHTML={{ __html: card.quote }} />
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-gray-500">{card.name} | {card.age}</p>
                      <VerifiedBadge />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BELLACURA ADVANTAGE */}
      <section className="bg-[#F8F8F8] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            Il Vantaggio <strong>BellaCura</strong>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Ecco come BellaCura si distingue da qualsiasi altro dispositivo anticellulite sul mercato:
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div className="relative rounded-3xl overflow-hidden h-80 md:h-[500px] shadow-xl">
              <Image src="/images/product-green-hero.jpg" alt="BellaCura massaggiatore anticellulite" fill className="object-cover" />
            </div>
            <div className="space-y-2">
              {[
                { title: 'Design Ergonomico di Precisione', desc: 'Impugnatura studiata per raggiungere facilmente tutte le zone del corpo, anche da sola. La forma si adatta perfettamente alle curve naturali.' },
                { title: 'Copertura Superiore in Meno Tempo', desc: 'La testa massaggiante ampia copre pi&#xf9; superficie con ogni passata, riducendo i tempi del trattamento a soli 10 minuti al giorno.' },
                { title: 'Tecnologia a Pressione Perfetta', desc: '3 livelli di intensit&#xe0; regolabili: delicato sull&#x27;addome, pi&#xf9; intenso su cosce e glutei. Sempre sotto il tuo controllo.' },
                { title: 'Igloo Placcate in Oro 24K', desc: 'La luce rossa penetra pi&#xf9; in profondit&#xe0; grazie ai punti emittenti a 660nm, stimolando il collagene esattamente dove serve.' },
                { title: 'Trattamento Personalizzabile', desc: 'Combina ventosa, calore, luce rossa e luce blu nelle proporzioni che preferisci. Ogni zona del corpo &#xe8; diversa &#x2014; BellaCura si adatta a te.' },
              ].map((f, i) => (
                <details key={i} open={i === 0} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-bold text-gray-800 select-none list-none">
                    {f.title}
                    <svg className="w-4 h-4 text-gray-400 shrink-0 ml-2 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-3 pt-1 text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: f.desc }} />
                </details>
              ))}
            </div>
          </div>
          <CtaBtn label="AGGIUNGI AL CARRELLO &#x2192;" />
          <InStock />
        </div>
      </section>

      {/* 11. TECNOLOGIA 4-IN-1 (3 tiles, matching Glamory Advanced Serum Technology) */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            <strong>Tecnologia Avanzata</strong> del Dispositivo
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-lg mx-auto">
            BellaCura &#xe8; progettato per massimizzare ogni sessione. Ecco perch&#xe9; funziona cos&#xec; bene:
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <svg className="w-6 h-6 fill-[#1D3557]" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>,
                title: 'Dosaggio Perfetto',
                desc: 'Ogni impostazione eroga esattamente la pressione e la luce necessarie per quella zona e quella fase del trattamento.',
              },
              {
                icon: <svg className="w-6 h-6 fill-[#1D3557]" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>,
                title: 'Assorbimento Massimo',
                desc: 'Il calore e la ventosa aprono i tessuti per moltiplicare l&#x27;efficacia degli oli e creme applicati durante la sessione.',
              },
              {
                icon: <svg className="w-6 h-6 fill-[#1D3557]" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c6 0 6-3 12-3-1.98-2.6-2.91-5.97-3-9z"/></svg>,
                title: 'Zero Sprechi',
                desc: 'Il dispositivo lavora in profondit&#xe0; dove le creme non arrivano mai. Ogni minuto di sessione genera un impatto reale e misurabile.',
              },
            ].map((t, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-5 space-y-3 bg-white shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#1D3557]/10 flex items-center justify-center">
                  {t.icon}
                </div>
                <p className="font-black text-gray-900 text-base">{t.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. HOW IT WORKS */}
      <section className="bg-white py-14 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Come Funziona <strong>BellaCura</strong>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-2xl mx-auto">
            Quando attivi il dispositivo, le 4 tecnologie agiscono in sinergia direttamente sul tessuto. Il siero che applichi viene portato in profondit&#xe0; &#x2014; esattamente dove la cellulite ha origine, non solo in superficie.
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-3xl overflow-hidden h-80 md:h-[500px] shadow-xl">
              <Image src="/images/render-spa-hero.jpg" alt="BellaCura in uso" fill className="object-cover" />
            </div>
            <div className="space-y-5">
              <h3 className="font-extrabold text-gray-900 text-lg">
                BellaCura ottiene ci&#xf2; che le creme non possono:
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">&#x2022; Creme e trattamenti topici:</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Solo il 5&#x2013;10% degli ingredienti attivi penetra realmente nella pelle. Il resto rimane in superficie, senza raggiungere mai il tessuto connettivo dove si forma la cellulite.</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">&#x2022; BellaCura:</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Fino al 300% in pi&#xf9; di azione attiva direttamente nel derma. La ventosa rompe le aderenze, il calore apre i tessuti, le luci stimolano la produzione di collagene dal profondo.</p>
                </div>
              </div>
              {/* Inline review */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-2">
                <div className="flex items-center gap-2">
                  <Stars n={5} size={3} />
                  <span className="text-xs font-bold text-gray-800">Lara L. | 45</span>
                  <VerifiedBadge />
                </div>
                <p className="text-sm text-gray-600 italic">
                  &ldquo;Dopo un solo utilizzo, la mia pelle appariva visibilmente pi&#xf9; liscia e tonica. Nulla ha mai funzionato cos&#xec; velocemente.&rdquo;
                </p>
              </div>
              <CtaBtn label="AGGIUNGI AL CARRELLO &#x2192;" />
              <InStock />
            </div>
          </div>
        </div>
      </section>

      {/* 13. TECNOLOGIE SCIENTIFICAMENTE VALIDATE (6 tiles, like Glamory ingredients) */}
      <section className="bg-[#F8F8F8] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            <strong>Tecnologie Scientificamente Validate</strong> che Danno Risultati
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-lg mx-auto">
            BellaCura integra tecnologie certificate e testate per trasformare la pelle agendo in profondit&#xe0;:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { img: '/images/massager-features.jpg', name: 'Ventosa a Pressione Negativa', desc: 'Rompe fisicamente le aderenze fibrose che formano la buccia d&#x27;arancia, mobilizzando il grasso sottocutaneo in modo meccanico e profondo.' },
              { img: '/images/body-map-bellacura.jpg', name: 'Calore Terapeutico 40&#xb0;C', desc: 'Aumenta la permeabilit&#xe0; cutanea e la microcircolazione locale, rendendo la pelle pi&#xf9; ricettiva e potenziando tutti gli altri trattamenti.' },
              { img: '/images/benefits-led.jpg', name: 'Luce Rossa 660nm', desc: 'Fotobiomodulazione clinicamente provata: stimola i fibroblasti e la produzione naturale di collagene per una pelle pi&#xf9; compatta ed elastica.' },
              { img: '/images/lifestyle-green-knee.jpg', name: 'Luce Blu 415nm', desc: 'Azione antibatterica e anti-infiammatoria che uniforma il tono cutaneo, riduce rossori e prepara la pelle per i trattamenti successivi.' },
              { img: '/images/routine-3passi-v2.jpg', name: 'Protocollo in 3 Passi', desc: 'Una routine semplice: applica l&#x27;olio, attiva BellaCura, lascia agire. 10 minuti al giorno per risultati progressivi e misurabili.' },
              { img: '/images/product-green-box.jpg', name: 'Kit Completo Incluso', desc: 'Dispositivo + cavo USB-C + guida illustrata + scheda protocolli per zona corporea. Tutto ci&#xf2; di cui hai bisogno per iniziare subito.' },
            ].map((t, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <div className="p-4 space-y-1">
                  <p className="font-black text-gray-900 text-sm" dangerouslySetInnerHTML={{ __html: t.name }} />
                  <p className="text-xs text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.desc }} />
                </div>
                <div className="relative h-44 w-full bg-gray-100">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
              </div>
            ))}
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
