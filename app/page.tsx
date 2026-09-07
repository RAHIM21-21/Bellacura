import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Star, Truck, RotateCcw, Shield, ChevronRight, CheckCircle2 } from 'lucide-react'
import CountdownTimer from '@/components/home/CountdownTimer'
import ReviewsCarousel from '@/components/ui/ReviewsCarousel'
import BodyMap from '@/components/home/BodyMap'

export const metadata: Metadata = buildMetadata({
 title: 'BellaCura – Massaggiatore Anticellulite 4 in 1 | Spedizione 24-48h',
 description:
 'Il massaggiatore anticellulite professionale più venduto in Italia. Risultati visibili in 2 settimane. Pagamento alla consegna. Spedizione in 24-48 ore.',
 path: '/',
})

const testimonials = [
 {
 name: 'Francesca M.',
 city: 'Milano',
 rating: 5,
 text: 'Ho ordinato il massaggiatore e sono rimasta senza parole! Lo uso ogni sera e la mia pelle è già più tonica dopo 2 settimane.',
 date: '12 agosto 2024',
 verified: true,
 },
 {
 name: 'Giulia R.',
 city: 'Roma',
 rating: 5,
 text: 'Finalmente un prodotto che funziona davvero. Ho pagato alla consegna e sono arrivati in soli 2 giorni. Super consigliato!',
 date: '28 luglio 2024',
 verified: true,
 },
 {
 name: 'Sara L.',
 city: 'Napoli',
 rating: 5,
 text: 'Scettica all\'inizio, ora non potrei più farne a meno. La qualità è ottima e il servizio clienti è gentilissimo.',
 date: '5 agosto 2024',
 verified: true,
 },
]

const benefits = [
 {
 icon: '‍',
 title: 'Massaggio Professionale a Casa',
 description: '4 testine intercambiabili per un trattamento spa personalizzato in qualsiasi momento.',
 },
 {
 icon: '',
 title: 'Tecnologia a Vibrazione Profonda',
 description: 'Le vibrazioni penetrano in profondità per stimolare la circolazione e ridurre la ritenzione idrica.',
 },
 {
 icon: '',
 title: 'Risultati Visibili in 2 Settimane',
 description: 'Oltre 2.800+ clienti soddisfatte hanno visto miglioramenti concreti già dalla seconda settimana.',
 },
 {
 icon: '',
 title: 'Ricaricabile USB – Uso Ovunque',
 description: 'Batteria a lunga durata. Usalo in salotto, in viaggio o persino in ufficio.',
 },
]

export default function HomePage() {
 return (
 <>
 {/* HERO */}
 <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 py-14 sm:py-20">
 <div className="container-tight grid md:grid-cols-2 gap-10 items-center">

 {/* LEFT – copy */}
 <div>
 {/* Social proof pill */}
 <div className="flex items-center gap-2 mb-5">
 <div className="flex">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
 ))}
 </div>
 <span className="text-sm font-semibold text-gray-700">
 Oltre <strong className="text-rose-600">2.800+</strong> clienti soddisfatte
 </span>
 </div>

 <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-5 leading-tight">
 Elimina la cellulite{' '}
 <span className="text-rose-500">senza sforzo</span>{' '}
 — risultati in 14 giorni
 </h1>

 <p className="text-lg text-gray-600 mb-6 leading-relaxed">
 Il massaggiatore professionale 4 in 1 che stai cercando. Usalo 10 minuti al giorno
 e vedi la differenza dalla seconda settimana.
 </p>

 {/* Key bullets */}
 <ul className="space-y-2 mb-8">
 {[
 'Riduce visibilmente la cellulite – testato clinicamente',
 'Stimola la circolazione e drena la ritenzione idrica',
 'Modella gambe, glutei e addome con calore a 45°C',
 'Usalo sotto la doccia – completamente impermeabile',
 ].map((pt) => (
 <li key={pt} className="flex items-start gap-2 text-gray-700">
 <CheckCircle2 size={18} className="text-rose-500 mt-0.5 shrink-0" />
 <span>{pt}</span>
 </li>
 ))}
 </ul>

 {/* Stock urgency */}
 <div className="stock-badge mb-5 w-fit">
 <span className="stock-dot" />
 QUASI ESAURITO – Solo 7 pezzi rimasti
 </div>

 {/* Countdown */}
 <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
 Offerta speciale termina tra:
 </p>
 <CountdownTimer />

 {/* Price + CTA */}
 <div className="mt-6">
 <div className="flex items-baseline gap-3 mb-4">
 <span className="text-4xl font-bold text-gray-900">€59,90</span>
 <span className="text-xl text-gray-400 line-through">€119,00</span>
 <span className="badge text-base font-bold px-3 py-1">–50%</span>
 </div>

 <Link
 href="/checkout-scelta/?bundle=single"
 className="btn-primary w-full sm:w-auto justify-center text-base py-4 px-10"
 >
 Ordina Ora – Spedizione in 24-48h
 <ChevronRight size={18} className="ml-2" />
 </Link>
 <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
 Paga alla consegna · 14 giorni soddisfatti o rimborsati
 </p>
 </div>
 </div>

 {/* RIGHT – product visual */}
 <div className="relative flex items-center justify-center">
 <div className="w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 shadow-2xl shadow-rose-100 overflow-hidden">
 <img src="/images/massaggiatore-bellacura.jpg" alt="BellaCura Massaggiatore Anticellulite 4 in 1" className="w-full h-full object-cover" />
 </div>

 {/* Floating badge – delivery */}
 <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-rose-50">
 <span className="text-2xl"></span>
 <div>
 <p className="text-xs text-gray-500 font-medium">Spedizione Express</p>
 <p className="font-bold text-gray-900 text-sm">24–48 ore · Gratis</p>
 </div>
 </div>

 {/* Floating badge – reviews */}
 <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-rose-50">
 <div className="flex gap-0.5 mb-1">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
 ))}
 </div>
 <p className="text-xs font-bold text-gray-900">4.9 / 5</p>
 <p className="text-xs text-gray-400">248 recensioni</p>
 </div>
 </div>

 </div>
 </section>

 {/* TRUST STRIP */}
 <section className="bg-white border-y border-gray-100 py-5">
 <div className="container-tight">
 <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
 {[
 { icon: <Truck size={20} className="text-rose-500" />, text: 'Spedizione 24–48h Gratis' },
 { icon: <RotateCcw size={20} className="text-rose-500" />, text: 'Reso 14 Giorni' },
 { icon: <Shield size={20} className="text-rose-500" />, text: 'Pagamento Sicuro' },
 { icon: <span className="text-lg"></span>, text: 'Contrassegno Disponibile' },
 ].map((item, i) => (
 <li key={i} className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700">
 {item.icon} {item.text}
 </li>
 ))}
 </ul>
 </div>
 </section>

 {/* BENEFITS */}
 <section className="section bg-cream">
 <div className="container-tight">
 <div className="text-center mb-12">
 <span className="badge mb-3">Perché funziona</span>
 <h2 className="font-serif text-gray-900 mb-4">La tecnologia che fa la differenza</h2>
 <p className="text-gray-600 max-w-xl mx-auto">
 Non è un semplice massaggiatore. È un sistema professionale in 4 funzioni che le spa usano da anni.
 </p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {benefits.map((b) => (
 <div key={b.title} className="card text-center hover:shadow-md transition-shadow">
 <div className="text-4xl mb-4">{b.icon}</div>
 <h3 className="text-base font-semibold text-gray-900 mb-2">{b.title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* PRODUCT SECTION */}
 <section className="section bg-white">
 <div className="container-tight">
 <div className="text-center mb-12">
 <span className="badge mb-3"> Best Seller #1 in Italia</span>
 <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4">
 Massaggiatore Anticellulite 4 in 1
 </h2>
 <p className="text-gray-600 text-lg max-w-2xl mx-auto">
 Vibrazione profonda + pressione + calore + drenaggio. Tutto in un unico dispositivo.
 </p>
 </div>

 <div className="container-tight grid md:grid-cols-2 gap-12 items-center">
 <div className="grid grid-cols-2 gap-4">
 <div className="aspect-square rounded-2xl bg-rose-50 flex items-center justify-center text-6xl shadow-sm">‍</div>
 <div className="aspect-square rounded-2xl bg-pink-50 flex items-center justify-center text-6xl shadow-sm"></div>
 <div className="aspect-square rounded-2xl bg-fuchsia-50 flex items-center justify-center text-6xl shadow-sm"></div>
 <div className="aspect-square rounded-2xl bg-rose-50 flex items-center justify-center text-6xl shadow-sm"></div>
 </div>

 <div>
 <div className="flex items-center gap-2 mb-3">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
 ))}
 <span className="text-sm text-gray-500">(248 recensioni verificate)</span>
 </div>

 <div className="stock-badge mb-4 w-fit">
 <span className="stock-dot" />
 QUASI ESAURITO – Solo 7 pezzi rimasti
 </div>

 <div className="flex items-baseline gap-3 mb-6">
 <span className="text-4xl font-bold text-gray-900">€59,90</span>
 <span className="text-xl text-gray-400 line-through">€119,00</span>
 <span className="badge font-bold">–50% OGGI</span>
 </div>

 <ul className="space-y-3 mb-8">
 {[
 '4 testine intercambiabili incluse',
 '5 intensità di vibrazione regolabili',
 'Riscaldamento a infrarossi 45°C',
 'Ricarica USB-C · 90 min di autonomia',
 'Impermeabile – usalo sotto la doccia',
 ].map((feat) => (
 <li key={feat} className="flex items-center gap-2 text-gray-700">
 <CheckCircle2 size={16} className="text-rose-500 shrink-0" /> {feat}
 </li>
 ))}
 </ul>

 <Link href="/checkout-scelta/?bundle=single" className="btn-primary w-full justify-center text-base py-4">
 Vedi Dettagli & Ordina Ora
 <ChevronRight size={18} className="ml-2" />
 </Link>
 <p className="text-center text-sm text-gray-500 mt-3">
 Spedizione in 24–48h · Pagamento alla consegna · Reso 14 giorni
 </p>
 </div>
 </div>
 </div>
 </section>

      <BodyMap />

      {/* VIDEO PROMO */}
 <section className="bg-white py-16">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
 <span className="inline-block bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Vedi come funziona</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
 Risultati reali, routine semplice
 </h2>
 <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-xs">
 <video src="/videos/bellacura-promo.mp4" autoPlay muted loop playsInline className="w-full h-auto" />
 </div>
 <p className="mt-6 text-gray-500 text-sm max-w-md mx-auto">
 Solo 10 minuti al giorno. I risultati parlano da soli.
 </p>
 </div>
 </section>

 {/* TESTIMONIALS */}
 <section className="section bg-rose-50">
 <div className="container-tight">
 <div className="text-center mb-12">
 <span className="badge mb-3">Recensioni Verificate</span>
 <h2 className="font-serif text-gray-900 mb-4">Cosa dicono le nostre clienti</h2>
 <p className="text-gray-600">Oltre 2.800+ donne hanno già scelto BellaCura Italia</p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 {testimonials.map((t) => (
 <article key={t.name} className="card hover:shadow-md transition-shadow">
 <div className="flex items-center gap-1 mb-3">
 {[...Array(t.rating)].map((_, i) => (
 <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
 ))}
 {t.verified && (
 <span className="ml-auto text-xs text-green-600 font-medium flex items-center gap-1">
 <CheckCircle2 size={12} /> Verificata
 </span>
 )}
 </div>
 <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
 "{t.text}"
 </blockquote>
 <footer className="flex justify-between items-center">
 <div>
 <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
 <p className="text-gray-400 text-xs">{t.city}</p>
 </div>
 <time className="text-gray-400 text-xs" dateTime={t.date}>{t.date}</time>
 </footer>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* PHOTO REVIEWS */}
      <ReviewsCarousel />

 {/* FINAL CTA */}
 <section className="section bg-rose-600 text-white text-center">
 <div className="container-tight max-w-2xl">
 <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
 Offerta Limitata
 </span>
 <h2 className="font-serif text-white text-4xl mb-4">
 Inizia oggi — risultati in 14 giorni
 </h2>
 <p className="text-rose-100 mb-3 text-lg">
 Ordina ora, paga alla consegna. Spedizione express in 24–48 ore in tutta Italia.
 </p>
 <div className="stock-badge w-fit mx-auto mb-8" style={{background:'rgba(255,255,255,0.15)', color:'white', borderColor:'rgba(255,255,255,0.3)'}}>
 <span className="stock-dot" style={{background:'#fca5a5'}} />
 Solo 7 pezzi rimasti a questo prezzo
 </div>
 <Link
 href="/checkout-scelta/?bundle=single"
 className="inline-flex items-center justify-center px-10 py-4 bg-white text-rose-600 font-bold rounded-full hover:bg-rose-50 transition-colors shadow-xl text-lg"
 >
 Ordina Ora – Solo €59,90
 <ChevronRight size={20} className="ml-2" />
 </Link>
 <p className="text-rose-200 text-sm mt-4"> Spedizione in 24–48h · Paga alla consegna · 14 giorni reso gratis</p>
 </div>
 </section>
 </>
 )
}
