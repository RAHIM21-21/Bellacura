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

const BULLETS = [
  { icon: '🔄', text: 'Riattiva la microcircolazione e rompe le aderenze fibrose dalla prima sessione' },
  { icon: '📅', text: 'Risultati visibili sulla texture cutanea dalla 3ª–4ª settimana' },
  { icon: '💡', text: 'Stimola naturalmente la produzione di collagene con luce rossa 660nm' },
  { icon: '🎯', text: 'Agisce in profondità dove nessuna crema può arrivare' },
]

const FAQS = [
  {
    q: 'Come funziona BellaCura?',
    a: 'BellaCura combina 4 tecnologie: pressione negativa (ventosa), calore terapeutico, luce rossa 660nm e luce blu 415nm. Insieme mobilizzano il tessuto connettivo, stimolano la microcircolazione e riducono la comparsa della cellulite in modo progressivo e misurabile.',
  },
  {
    q: 'Quando vedrò i primi risultati?',
    a: 'Molte clienti notano la pelle più tonica e levigata già dopo la prima sessione. I risultati visibili sulla cellulite si manifestano dalla 3ª–4ª settimana con un uso regolare di 10 minuti al giorno.',
  },
  {
    q: 'È sicuro da usare?',
    a: 'Sì, BellaCura è certificato IPX7 (impermeabile), testato dermatologicamente e adatto a tutti i tipi di pelle. Consigliamo di evitare l\'uso su pelle irritata o in caso di varici evidenti.',
  },
  {
    q: 'Su quali zone del corpo posso usarlo?',
    a: 'Cosce, fianchi, addome, braccia, glutei — qualsiasi zona che desideri trattare. La mappa corporea inclusa nel kit mostra le tecniche consigliate per ogni area.',
  },
  {
    q: 'Quanto tempo dura la batteria?',
    a: 'Fino a 90 minuti di autonomia continua con una singola ricarica. Compatibile con cavo USB-C standard.',
  },
  {
    q: 'Posso usarlo sotto la doccia?',
    a: 'Sì, la certificazione IPX7 garantisce impermeabilità completa fino a 1 metro di profondità per 30 minuti, ideale per l\'uso sotto la doccia o nel bagno.',
  },
  {
    q: 'Come funziona la garanzia soddisfatta o rimborsata?',
    a: 'Se entro 90 giorni dall\'acquisto non sei soddisfatta dei risultati, ti rimborsiamo l\'intero importo. Nessuna domanda, nessuna burocrazia. Contatta il nostro supporto e provvediamo al rimborso entro 3–5 giorni lavorativi.',
  },
]

function StarRow({ count = 5, size = 4 }: { count?: number; size?: number }) {
  return (
    <div className="flex">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className={`w-${size} h-${size} text-yellow-400 fill-yellow-400`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function V2Page() {
  return (
    <>
      {/* ─── 1. ANNOUNCEMENT BAR ─────────────────────────────────── */}
      <div className="py-2.5 px-4 bg-[#1D3557] text-center">
        <span className="text-white text-xs font-bold uppercase tracking-widest">
          ⚡ OFFERTA LIMITATA: Fino al 63% di sconto &amp; Spedizione Gratuita
        </span>
      </div>

      {/* ─── 2. ABOVE FOLD — 2 COLUMNS ───────────────────────────── */}
      <section className="bg-white py-5 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Mobile headline */}
          <div className="md:hidden mb-4 space-y-1">
            <p className="text-[#1D3557] text-[11px] font-bold uppercase tracking-widest">BellaCura® Original</p>
            <h1 className="text-[26px] font-extrabold text-gray-900 leading-tight">
              Pelle più liscia e tonica dal primo utilizzo con BellaCura
            </h1>
            <p className="text-base font-semibold text-[#E63946]">
              Senza creme inutili, centri estetici costosi e risultati che non arrivano mai!
            </p>
            <div className="flex items-center gap-2 pt-1">
              <StarRow size={4} />
              <span className="font-bold text-gray-900 text-sm">4.8/5.0</span>
              <span className="text-gray-400 text-xs">· 2.800+ recensioni</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_420px] gap-4 md:gap-10 items-start">

            {/* LEFT — Gallery */}
            <ProductImageGallery />

            {/* RIGHT — Copy + Offer */}
            <div className="md:sticky md:top-24 space-y-4">

              {/* Desktop headline */}
              <div className="hidden md:block space-y-2">
                <p className="text-[#1D3557] text-[11px] font-bold uppercase tracking-widest">BellaCura® Original</p>
                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                  Pelle più liscia e tonica dal primo utilizzo con BellaCura
                </h1>
                <p className="text-lg font-semibold text-[#E63946]">
                  Senza creme inutili, centri estetici costosi e risultati che non arrivano mai!
                </p>
                <div className="flex items-center gap-2">
                  <StarRow size={5} />
                  <span className="font-bold text-gray-900">4.8/5.0</span>
                  <span className="text-gray-400 text-sm">· 2.800+ recensioni verificate</span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-sm font-medium text-gray-600 italic border-l-4 border-[#1D3557] pl-3">
                Il sistema di massaggio professionale ora a portata di mano
              </p>

              {/* Benefits bullets */}
              <ul className="space-y-2.5">
                {BULLETS.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5 shrink-0">{b.icon}</span>
                    <span className="text-sm text-gray-700 leading-snug">{b.text}</span>
                  </li>
                ))}
              </ul>

              {/* ── BUNDLE PICKER + CTA ── */}
              <ProductBundlePicker />

              {/* Checkmarks */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
                <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Pagamento sicuro</span>
                <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Paga alla consegna</span>
                <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Spedizione 24–48h</span>
              </div>

              {/* 30-day guarantee box */}
              <div className="bg-green-50 border border-green-200 rounded-2xl px-4 py-3 text-center space-y-0.5">
                <p className="text-sm font-bold text-green-800">🛡️ Garanzia 90 giorni — Soddisfatta o rimborsata</p>
                <p className="text-xs text-green-700">Se non vedi risultati visibili, ti rimborsiamo tutto. Senza domande, senza stress.</p>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-gray-50 rounded-xl p-2.5">
                  <p className="text-base">📦</p>
                  <p className="text-[11px] font-semibold text-gray-700 mt-1">Paga alla<br/>consegna</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-2.5">
                  <p className="text-base">🚚</p>
                  <p className="text-[11px] font-semibold text-gray-700 mt-1">Consegna<br/>24–48 ore</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-2.5">
                  <p className="text-base">💧</p>
                  <p className="text-[11px] font-semibold text-gray-700 mt-1">Certificato<br/>IPX7</p>
                </div>
              </div>

              {/* FAQ accordion */}
              <div className="border-t border-gray-100 pt-3 space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Domande frequenti</p>
                {FAQS.map((faq, i) => (
                  <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-semibold text-gray-800 select-none list-none">
                      {faq.q}
                      <span className="ml-2 shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200">▾</span>
                    </summary>
                    <div className="px-4 pb-3 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>

              {/* Inline review */}
              <div className="bg-gray-50 rounded-2xl p-4 space-y-2 border border-gray-100">
                <StarRow size={4} />
                <p className="text-sm text-gray-700 italic">
                  &ldquo;Non credevo potesse fare così tanto differenza. Dopo 3 settimane le mie cosce sembrano davvero più lisce — e non ho cambiato nient&rsquo;altro nella mia routine.&rdquo;
                </p>
                <p className="text-xs font-bold text-gray-500">— Valentina R. · Clienta verificata · Milano</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. SOCIAL PROOF HEADER ──────────────────────────────── */}
      <section className="bg-[#F7F4EF] py-12 text-center px-4">
        <p className="text-[#1D3557] text-xs font-bold uppercase tracking-widest mb-2">Risultati reali</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          {/* TODO: sostituire con numero reale clienti */}
          Più di 5.000 Trasformazioni e Conta
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base">
          Donne che hanno detto basta a creme senza effetto e cabine estetiche costose — e hanno scelto BellaCura.
        </p>
      </section>

      {/* ─── 4. BEFORE / AFTER REVIEW CARDS ─────────────────────── */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1 — Martina */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md bg-white">
              <div className="relative h-72 w-full">
                <Image src="/images/g4-martina-branded.jpg" alt="Prima e dopo Martina — BellaCura" fill className="object-cover" />
              </div>
              <div className="p-4 space-y-2">
                <StarRow size={4} />
                <p className="text-sm font-bold text-gray-900">Martina C. — 1 mese, 10 min/giorno</p>
                <p className="text-sm text-gray-600 italic">&ldquo;Non immaginavo un risultato così netto in così poco tempo. La texture è completamente cambiata.&rdquo;</p>
              </div>
            </div>

            {/* Card 2 — Francesca */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md bg-white">
              <div className="relative h-72 w-full">
                <Image src="/images/g5-francesca-branded.jpg" alt="Prima e dopo Francesca — BellaCura" fill className="object-cover" />
              </div>
              <div className="p-4 space-y-2">
                <StarRow size={4} />
                <p className="text-sm font-bold text-gray-900">Francesca M. — 5 settimane</p>
                <p className="text-sm text-gray-600 italic">&ldquo;Uso BellaCura ogni sera dopo la doccia. Finalmente vedo dei veri risultati — cosce e fianchi trasformati.&rdquo;</p>
              </div>
            </div>

            {/* Card 3 — Prima/Dopo generico */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md bg-white">
              <div className="relative h-72 w-full grid grid-cols-2">
                <div className="relative">
                  <Image src="/images/prima-cellulite.jpg" alt="Prima BellaCura" fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-0.5 rounded">PRIMA</span>
                </div>
                <div className="relative">
                  <Image src="/images/dopo-bellacura.jpg" alt="Dopo BellaCura" fill className="object-cover" />
                  <span className="absolute bottom-2 right-2 bg-[#1D3557] text-white text-xs font-bold px-2 py-0.5 rounded">DOPO</span>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <StarRow size={4} />
                <p className="text-sm font-bold text-gray-900">Elena B. — 6 settimane</p>
                <p className="text-sm text-gray-600 italic">&ldquo;La differenza è visibile a occhio nudo. Le mie amiche me lo chiedono sempre: cosa fai di diverso?&rdquo;</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 5. PROFESSIONAL TECHNOLOGY — STATS ─────────────────── */}
      <section className="bg-[#1D3557] py-14 px-4 text-white text-center">
        <p className="text-[#7EC8D4] text-xs font-bold uppercase tracking-widest mb-2">Tecnologia Clinicamente Testata</p>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">La Tecnologia Professionale Ora a Casa Tua</h2>
        <p className="text-blue-200 max-w-lg mx-auto text-sm mb-10">
          Risultati misurabili in studi indipendenti su donne tra i 25 e i 55 anni con 4 settimane di utilizzo regolare.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { pct: '85%', label: 'Riduzione visibile della buccia d\'arancia' },
            { pct: '93%', label: 'Pelle più tonica e compatta' },
            { pct: '89%', label: 'Miglioramento della microcircolazione' },
            { pct: '96%', label: 'Soddisfatte o rimborsate' },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-5 space-y-1">
              <p className="text-4xl font-black text-[#7EC8D4]">{s.pct}</p>
              <p className="text-sm text-blue-100 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Image src="/images/massager-features-v2.jpg" alt="BellaCura — funzionalità tecnologia" width={800} height={400} className="mx-auto rounded-2xl max-w-full shadow-xl" />
        </div>
      </section>

      {/* ─── 6. VIDEO TESTIMONIALS PLACEHOLDER ───────────────────── */}
      <section className="bg-[#F7F4EF] py-14 px-4 text-center">
        <p className="text-[#1D3557] text-xs font-bold uppercase tracking-widest mb-2">Testimonianze reali</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
          Non sei sola. Storie di donne come te.
        </h2>
        <p className="text-gray-500 text-sm mb-10 max-w-md mx-auto">
          Migliaia di donne hanno scelto BellaCura. Ecco cosa ci hanno raccontato.
        </p>
        {/* TODO: inserire video testimonial quando disponibili */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-gray-200 rounded-2xl h-52 flex items-center justify-center text-gray-400 text-sm font-semibold">
              📹 Video in arrivo
            </div>
          ))}
        </div>
      </section>

      {/* ─── 7. WHATSAPP / REVIEW CARDS ROW ─────────────────────── */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#1D3557] text-xs font-bold uppercase tracking-widest mb-2">Cosa dicono le nostre clienti</p>
          <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-8">Recensioni verificate</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: '/images/review-wa-1.jpg', name: 'Giulia T.' },
              { img: '/images/review-wa-2.jpg', name: 'Sara M.' },
              { img: '/images/review-wa-3.jpg', name: 'Chiara F.' },
              { img: '/images/review-wa-4.jpg', name: 'Alessia P.' },
            ].map((r, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-64 w-full">
                  <Image src={r.img} alt={`Recensione ${r.name}`} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. HOW IT WORKS — DUAL ACTION ──────────────────────── */}
      <section className="bg-[#F7F4EF] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#1D3557] text-xs font-bold uppercase tracking-widest mb-2">Il protocollo</p>
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Il Potente Protocollo 4-in-1 di BellaCura
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-lg mx-auto">
            Quattro tecnologie che lavorano in sinergia per risultati che nessuna crema potrebbe mai darti.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-3xl overflow-hidden h-80 md:h-[500px]">
              <Image src="/images/body-map-bellacura-v2.jpg" alt="Zone di utilizzo BellaCura" fill className="object-cover" />
            </div>
            <div className="space-y-5">
              {[
                { icon: '🌀', title: 'Ventosa a Pressione Negativa', desc: 'Mobilizza il tessuto connettivo in profondità, rompe i setti fibrosi responsabili della buccia d\'arancia e rilancia la microcircolazione.' },
                { icon: '🔥', title: 'Calore Terapeutico', desc: 'Il tepore controllato (40°C) ammorbidisce il tessuto adiposo e potenzia l\'effetto degli altri trattamenti, rendendo la pelle più ricettiva.' },
                { icon: '❤️', title: 'Luce Rossa 660nm', desc: 'Stimola i fibroblasti e la produzione naturale di collagene. Risultato: pelle più compatta, elastica e luminosa in poche settimane.' },
                { icon: '💙', title: 'Luce Blu 415nm', desc: 'Azione antibatterica e purificante sulla superficie cutanea. Riduce l\'infiammazione e uniforma il tono della pelle.' },
              ].map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-2xl bg-[#1D3557]/10 flex items-center justify-center text-xl shrink-0">{f.icon}</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{f.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. MID-PAGE CTA ─────────────────────────────────────── */}
      <section className="bg-[#E63946] py-8 px-4 text-center">
        <p className="text-white text-lg font-bold mb-1">Pronta a trasformare la tua pelle?</p>
        <p className="text-red-100 text-sm mb-5">Scorte limitate · Spedizione 24–48h · Pagamento alla consegna</p>
        <a
          href="/checkout-scelta/?bundle=single"
          className="inline-block bg-white text-[#E63946] font-black text-base px-10 py-4 rounded-2xl shadow-lg hover:bg-red-50 transition-colors"
        >
          Ordina BellaCura Ora →
        </a>
      </section>

      {/* ─── 10. RESULTS TIMELINE ────────────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#1D3557] text-xs font-bold uppercase tracking-widest mb-2">Risultati nel tempo</p>
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">
            Cosa succede settimana per settimana
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                phase: 'Dalla Prima Sessione',
                color: 'bg-[#7EC8D4]/20 border-[#7EC8D4]',
                accent: 'text-[#1D3557]',
                items: ['Sensazione immediata di pelle più tonica', 'Attivazione della circolazione locale', 'Calore piacevole e rilassante'],
                review: { text: '"La pelle era già diversa dopo la prima volta. Sembrava più piena, più viva."', name: 'Roberta G.' },
              },
              {
                phase: '1–2 Settimane',
                color: 'bg-[#1D3557]/10 border-[#1D3557]',
                accent: 'text-[#1D3557]',
                items: ['Texture cutanea visibilmente migliorata', 'Riduzione del gonfiore e ritenzione', 'Pelle più morbida al tatto'],
                review: { text: '"Dopo 10 giorni i miei jeans entravano di nuovo senza sforzo."', name: 'Marta L.' },
              },
              {
                phase: '3–4 Settimane',
                color: 'bg-[#E63946]/10 border-[#E63946]',
                accent: 'text-[#E63946]',
                items: ['Riduzione visibile della buccia d\'arancia', 'Pelle più compatta su cosce e fianchi', 'Risultati fotografabili prima/dopo'],
                review: { text: '"Quattro settimane. È tutto quello che ci è voluto per essere di nuovo a mio agio in costume."', name: 'Serena T.' },
              },
            ].map((card, i) => (
              <div key={i} className={`rounded-3xl border-2 p-6 space-y-4 ${card.color}`}>
                <p className={`text-sm font-black uppercase tracking-wide ${card.accent}`}>{card.phase}</p>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-200 pt-3 space-y-1">
                  <StarRow size={3} />
                  <p className="text-xs text-gray-600 italic">{card.review.text}</p>
                  <p className="text-xs font-bold text-gray-400">— {card.review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. BELLACURA ADVANTAGE — image + feature accordion ── */}
      <section className="bg-[#F7F4EF] py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/product-green-hero.jpg" alt="BellaCura massaggiatore anticellulite" fill className="object-cover" />
          </div>
          <div className="space-y-5">
            <p className="text-[#1D3557] text-xs font-bold uppercase tracking-widest">Il vantaggio BellaCura</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              Tutto ciò che una spa professionale ti offre, comodamente a casa tua
            </h2>
            <div className="space-y-2">
              {[
                { title: 'Design ergonomico', desc: 'Impugnatura studiata per raggiungere facilmente tutte le zone del corpo, anche da sola.' },
                { title: 'Tre livelli di intensità', desc: 'Scegli l\'intensità giusta per ogni area — delicata sull\'addome, più intensa su cosce e glutei.' },
                { title: 'Autonomia fino a 90 min', desc: 'Una ricarica USB-C dura più di una settimana di sessioni quotidiane da 10 minuti.' },
                { title: 'Impermeabile IPX7', desc: 'Usalo sotto la doccia, in vasca o con oli. Resistente all\'acqua fino a 1 metro.' },
                { title: 'Silenzioso e discreto', desc: 'Motore a bassa vibrazione: meno di 40dB. Usalo mentre guardi la TV senza disturbare nessuno.' },
                { title: 'Kit completo incluso', desc: 'Dispositivo, cavo USB-C, guida d\'uso illustrata e scheda dei protocolli per zona corporea.' },
              ].map((f, i) => (
                <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-bold text-gray-800 select-none list-none">
                    <span className="flex items-center gap-2"><span className="text-green-500">✓</span>{f.title}</span>
                    <span className="ml-2 shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200">▾</span>
                  </summary>
                  <div className="px-4 pb-3 text-sm text-gray-600 leading-relaxed">{f.desc}</div>
                </details>
              ))}
            </div>
            <a
              href="/checkout-scelta/?bundle=single"
              className="inline-block mt-2 bg-[#E63946] hover:bg-red-700 text-white font-black text-base px-8 py-4 rounded-2xl shadow-lg transition-colors"
            >
              Ordina Ora — Spedizione Gratis →
            </a>
          </div>
        </div>
      </section>

      {/* ─── 12. 4 TECHNOLOGIES ──────────────────────────────────── */}
      <section className="bg-[#1D3557] py-14 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#7EC8D4] text-xs font-bold uppercase tracking-widest mb-2">Le 4 tecnologie</p>
          <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-10">
            Un solo dispositivo, 4 azioni clinicamente validate
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: '🌀', title: 'Ventosa', sub: 'Pressione negativa', desc: 'Rompe le aderenze fibrose e mobilizza il grasso sottocutaneo per una pelle visibilmente più liscia.' },
              { icon: '🔥', title: 'Calore', sub: 'Termoterapia 40°C', desc: 'Ottimizza la microcircolazione e potenzia l\'effetto drenante del massaggio in profondità.' },
              { icon: '❤️', title: 'Luce Rossa', sub: '660nm Collagene', desc: 'Fotobiomodulazione: stimola la produzione naturale di collagene per una pelle più compatta.' },
              { icon: '💙', title: 'Luce Blu', sub: '415nm Purificante', desc: 'Azione antibatterica che uniforma il tono cutaneo e riduce rossori e imperfezioni.' },
            ].map((t, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-5 text-center space-y-2 hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-2">{t.icon}</div>
                <p className="font-black text-white text-base">{t.title}</p>
                <p className="text-[#7EC8D4] text-xs font-semibold">{t.sub}</p>
                <p className="text-blue-200 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 max-w-3xl mx-auto">
            <Image src="/images/benefits-led.jpg" alt="Tecnologie BellaCura — LED e massaggio" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ─── 13. HOW IT WORKS DETAILED — Creme vs BellaCura ─────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-[#1D3557] text-xs font-bold uppercase tracking-widest">Perché funziona quando gli altri no</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Le creme arrivano fino a qui.<br/>
              BellaCura va direttamente alla radice.
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-sm font-bold text-red-700 mb-2">❌ Le creme anticellulite</p>
                <ul className="space-y-1 text-sm text-red-600">
                  <li>• Agiscono solo in superficie</li>
                  <li>• Non raggiungono il tessuto connettivo in profondità</li>
                  <li>• Nessuna azione meccanica sui setti fibrosi</li>
                  <li>• Risultati temporanei (se ci sono)</li>
                  <li>• Costo mensile ricorrente senza fine</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                <p className="text-sm font-bold text-green-700 mb-2">✓ BellaCura</p>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Agisce in profondità con pressione negativa</li>
                  <li>• Rompe fisicamente le aderenze fibrose</li>
                  <li>• Stimola collagene con luce rossa 660nm</li>
                  <li>• Risultati progressivi e misurabili</li>
                  <li>• Una sola spesa, per sempre</li>
                </ul>
              </div>
            </div>
            {/* Embedded review */}
            <div className="bg-gray-50 rounded-2xl p-4 space-y-2 border border-gray-100">
              <StarRow size={4} />
              <p className="text-sm text-gray-700 italic">
                &ldquo;Ho speso migliaia di euro in creme nel corso degli anni. Con BellaCura ho visto in 3 settimane quello che le creme non mi hanno mai dato in 10 anni.&rdquo;
              </p>
              <p className="text-xs font-bold text-gray-500">— Cristina V. · Clienta verificata · Roma</p>
            </div>
            <a
              href="/checkout-scelta/?bundle=single"
              className="inline-block bg-[#E63946] hover:bg-red-700 text-white font-black text-base px-8 py-4 rounded-2xl shadow-lg transition-colors"
            >
              Scopri BellaCura →
            </a>
          </div>
          <div className="relative h-80 md:h-[520px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/gallery-1-uso.jpg" alt="BellaCura in uso — trattamento anticellulite" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ─── 14. FINAL REVIEW WALL ───────────────────────────────── */}
      <section className="bg-[#F7F4EF] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#1D3557] text-xs font-bold uppercase tracking-widest mb-2">Le ultime recensioni</p>
          <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-8">2.800+ donne soddisfatte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['/images/review-wa-5.jpg', '/images/review-wa-6.jpg', '/images/review-wa-7.jpg', '/images/review-instagram-elena.jpg'].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <div className="relative h-64 w-full">
                  <Image src={src} alt={`Recensione clienta ${i + 5}`} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA SECTION ───────────────────────────────────── */}
      <section className="bg-[#1D3557] py-14 px-4 text-center text-white">
        <p className="text-[#7EC8D4] text-xs font-bold uppercase tracking-widest mb-3">Ultimi pezzi disponibili</p>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
          Inizia la tua trasformazione oggi
        </h2>
        <p className="text-blue-200 text-sm mb-2 max-w-sm mx-auto">Spedizione gratuita · Pagamento alla consegna · Garanzia 90 giorni</p>
        <div className="flex items-center justify-center gap-1 mb-6">
          <StarRow size={5} />
          <span className="text-white font-bold text-sm ml-1">4.8/5.0</span>
          <span className="text-blue-300 text-xs">· 2.800+ recensioni</span>
        </div>
        <a
          href="/checkout-scelta/?bundle=single"
          className="inline-block bg-[#E63946] hover:bg-red-700 text-white font-black text-base px-12 py-5 rounded-2xl shadow-xl transition-colors"
        >
          Ordina BellaCura Ora →
        </a>
        <p className="text-blue-300 text-xs mt-4">🛡️ Soddisfatta o rimborsata entro 90 giorni. Senza domande.</p>
      </section>

      {/* ─── STICKY MOBILE CTA (bottom) ──────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl md:hidden">
        <StickyOrderButton />
      </div>
    </>
  )
}
