'use client'

import Image from 'next/image'
import { CheckCircle2, Star } from 'lucide-react'

const photoReviews = [
  { image: '/images/review1.png',              name: 'Valentina M.', city: 'Milano',  rating: 5, months: '6 settimane', text: 'Non ci credevo, ma i risultati parlano da soli! La cellulite è quasi sparita.' },
  { image: '/images/review2.png',              name: 'Chiara B.',    city: 'Roma',    rating: 5, months: '2 mesi',      text: 'Finalmente un prodotto che funziona davvero! La pelle è tornata tonica e compatta.' },
  { image: '/images/gallery-4-primaedopo.png', name: 'Alessia C.',   city: 'Firenze', rating: 5, months: '4 settimane', text: 'Risultati impressionanti in sole 4 settimane. La coscia non era mai stata così liscia!' },
  { image: '/images/review5.png',              name: 'Martina R.',   city: 'Bologna', rating: 5, months: '6 settimane', text: 'Ho perso centimetri sui glutei e sulle cosce senza cambiare la dieta. Una svolta!' },
  { image: '/images/review6.png',              name: 'Elena P.',     city: 'Venezia', rating: 5, months: '5 settimane', text: 'La differenza sulla coscia è enorme. Pelle liscia e levigata, zero cellulite visibile.' },
  { image: '/images/review3.png',              name: 'Sara T.',      city: 'Torino',  rating: 5, months: '5 settimane', text: 'Visibile già dopo 2 settimane! Le gambe sono molto più lisce.' },
  { image: '/images/gallery-9-primaedopo2.jpg',name: 'Laura F.',     city: 'Napoli',  rating: 5, months: '7 settimane', text: 'Sono rimasta senza parole! Pelle più tonica, meno cellulite e più energia.' },
  { image: '/images/review4.png',              name: 'Monica D.',    city: 'Bologna', rating: 5, months: '3 settimane', text: 'In 3 settimane ho visto miglioramenti concreti. Nessuna crema aveva mai funzionato così!' },
]

const textReviews = [
  { name: 'Federica L.',  city: 'Venezia',         text: 'La funzione di calore è una meraviglia. Le mie gambe sono molto meno pesanti e gonfie rispetto a prima.' },
  { name: 'Giovanna P.',  city: 'Palermo',          text: 'Dopo due gravidanze la mia pelle era completamente ceduta. In 6 settimane ho recuperato una tonicità che non avevo più.' },
  { name: 'Martina C.',   city: 'Genova',           text: '15 minuti al giorno e la differenza è evidente. La cellulite sulle cosce si è ridotta in sole 4 settimane.' },
  { name: 'Irene G.',     city: 'Catania',          text: 'Le gambe gonfie dopo una giornata in piedi sono diventate un ricordo. Il massaggio drenante funziona benissimo.' },
  { name: 'Roberta M.',   city: 'Verona',           text: 'Ho speso centinaia di euro in trattamenti estetici e questo ha fatto più di tutti loro messi insieme.' },
  { name: 'Serena A.',    city: 'Perugia',          text: '"Cosa hai fatto?" mi ha chiesto la mia estetista. Solo BellaCura, ogni sera!' },
  { name: 'Teresa L.',    city: 'Como',             text: 'Ho 52 anni e pensavo fosse troppo tardi. Invece in 8 settimane la cellulite si è ridotta di tanto. Non mollate mai!' },
  { name: 'Ornella C.',   city: 'Udine',            text: 'Ne ho già comprati 3 come regalo per le amiche. I risultati parlano da soli.' },
  { name: 'Claudia B.',   city: 'Rimini',           text: 'La batteria dura tantissimo e la ricarica USB-C è comodissima. La cellulite sta migliorando settimana dopo settimana.' },
  { name: 'Elena B.',     city: 'Trieste',          text: 'Le 5 intensità di vibrazione sono perfette. Risultati visibili in 3 settimane.' },
  { name: 'Rosa B.',      city: 'Messina',          text: 'Mia sorella lo ha comprato per prima e quando ho visto la sua pelle ho ordinato subito anche io.' },
  { name: 'Concetta V.',  city: 'Caserta',          text: 'Il pagamento alla consegna mi ha convinto. È arrivato in 2 giorni e da allora non l\'ho più posato.' },
]

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function ReviewsCarousel() {
  return (
    <section className="py-14 bg-white" id="recensioni">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">⭐ Recensioni Verificate</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Cosa dicono le nostre clienti</h2>
          <p className="text-gray-400 text-sm">Oltre 2.400 donne soddisfatte · Foto e risultati reali</p>
        </div>

        {/* PHOTO REVIEWS — swipeable horizontal carousel */}
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 -mx-4 px-4 scrollbar-none">
          {photoReviews.map((r) => (
            <div
              key={r.name + r.image}
              className="snap-start flex-shrink-0 w-[72vw] sm:w-64 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-rose-50">
                <Image
                  src={r.image}
                  alt={`Risultati di ${r.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 72vw, 256px"
                />
                {/* Weeks badge */}
                <div className="absolute top-2 left-2 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  ⏱ {r.months}
                </div>
              </div>

              {/* Text */}
              <div className="p-3 flex flex-col gap-1.5 flex-1">
                <Stars />
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-gray-900 text-sm">{r.name}</span>
                  <CheckCircle2 size={13} className="text-blue-500 fill-blue-500" />
                </div>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">"{r.text}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint dots */}
        <div className="flex justify-center gap-1.5 mt-4 mb-10">
          {photoReviews.map((_, i) => (
            <div key={i} className={`rounded-full transition-all ${i === 0 ? 'w-4 h-1.5 bg-rose-500' : 'w-1.5 h-1.5 bg-rose-200'}`} />
          ))}
        </div>

        {/* TEXT REVIEWS — 2-col grid mobile, 3-col desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {textReviews.map((r) => (
            <div key={r.name} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <Stars />
              <div className="flex items-center gap-1 mt-2 mb-1">
                <span className="font-bold text-gray-900 text-xs">{r.name}</span>
                <CheckCircle2 size={11} className="text-blue-500 fill-blue-500" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-4">"{r.text}"</p>
              <p className="text-gray-300 text-[10px] mt-2">{r.city}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
