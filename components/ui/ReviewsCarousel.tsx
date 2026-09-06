'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

type Review =
  | { type: 'photo'; image: string; name: string; city: string; rating: number; months: string; text: string; verified: boolean; objectPosition?: string }
  | { type: 'text'; name: string; city: string; rating: number; text: string; verified: boolean }

const allReviews: Review[] = [
  { type: 'photo', image: '/images/review1.jpg', name: 'Valentina M.', city: 'Milano', rating: 5, months: '6 settimane', text: 'Onestamente non ci credevo. La cellulite è quasi sparita e ora mi sento molto più sicura di me.', verified: true },
  { type: 'photo', image: '/images/review2.jpg', name: 'Chiara B.', city: 'Roma', rating: 5, months: '2 mesi', text: 'Finalmente qualcosa che funziona davvero. La pelle è tornata tonica e compatta, lo consiglio a tutte.', verified: true },
  { type: 'photo', image: '/images/review5.jpg', name: 'Alessia C.', city: 'Firenze', rating: 5, months: '4 settimane', text: 'Risultati impressionanti in 4 settimane. La mia coscia non si era mai sentita così liscia.', verified: true },
  { type: 'photo', image: '/images/review6.jpg', name: 'Martina R.', city: 'Bologna', rating: 5, months: '6 settimane', text: 'Ho perso centimetri sui glutei e sulle cosce senza cambiare niente nella dieta. Una svolta.', verified: true, objectPosition: 'object-bottom' },
  { type: 'photo', image: '/images/review7.jpg', name: 'Elena P.', city: 'Venezia', rating: 5, months: '5 settimane', text: 'La differenza sulla coscia è enorme. Pelle liscia e levigata, zero cellulite visibile.', verified: true },
  { type: 'text', name: 'Alessia R.', city: 'Firenze', rating: 5, text: 'Lo uso ogni mattina sulle cosce e sui glutei. Dopo un mese la cellulite a buccia d\'arancia è quasi sparita. Non tornerei mai indietro.', verified: true },
  { type: 'text', name: 'Monica D.', city: 'Bologna', rating: 5, text: 'Con questo massaggiatore in 3 settimane ho visto miglioramenti concreti. Nessuna crema aveva mai funzionato così.', verified: true },
  { type: 'text', name: 'Federica L.', city: 'Venezia', rating: 5, text: 'La funzione di calore è una meraviglia. Le mie gambe sono molto meno pesanti e gonfie rispetto a prima.', verified: true },
  { type: 'photo', image: '/images/review3.jpg', name: 'Sara T.', city: 'Torino', rating: 5, months: '5 settimane', text: 'Risultati visibili già dopo 2 settimane. Le gambe sono molto più lisce e il gonfiore è diminuito tantissimo.', verified: true },
  { type: 'text', name: 'Giovanna P.', city: 'Palermo', rating: 5, text: 'Dopo due gravidanze la mia pelle era completamente ceduta. In 6 settimane ho recuperato una tonicità che non avevo più. Non me lo aspettavo.', verified: true },
  { type: 'text', name: 'Martina C.', city: 'Genova', rating: 5, text: '15 minuti al giorno e la differenza si vede. La cellulite sulle cosce si è ridotta in 4 settimane.', verified: true },
  { type: 'text', name: 'Simona V.', city: 'Bari', rating: 5, text: 'Avevo provato tutto. Questo è l\'unico che ha davvero funzionato sulla mia cellulite fibro. Lo consiglio.', verified: true },
  { type: 'photo', image: '/images/review4.jpg', name: 'Laura F.', city: 'Napoli', rating: 5, months: '7 settimane', text: 'Sono rimasta senza parole. Pelle più tonica, meno cellulite e mi sento meglio. I miglioramenti sono stati davvero notevoli.', verified: true },
  { type: 'text', name: 'Irene G.', city: 'Catania', rating: 5, text: 'Le gambe gonfie dopo una giornata in piedi sono diventate un ricordo. Il massaggio drenante funziona davvero.', verified: true },
  { type: 'text', name: 'Roberta M.', city: 'Verona', rating: 5, text: 'Ho speso centinaia di euro in trattamenti estetici e questo massaggiatore ha fatto più di tutti loro insieme.', verified: true },
  { type: 'text', name: 'Serena A.', city: 'Perugia', rating: 5, text: '"Cosa hai fatto?" mi ha chiesto la mia estetista. Solo BellaCura, ogni sera!', verified: true },
  { type: 'text', name: 'Paola N.', city: 'Ancona', rating: 5, text: 'Uso la testina a ventosa sulle cosce: la circolazione migliora tantissimo. Risultati in 2 settimane.', verified: true },
  { type: 'text', name: 'Raffaella S.', city: 'Reggio Calabria', rating: 5, text: 'La funzione ventosa è quello che mi ha convinto. Faccio il cupping 3 volte a settimana e la pelle a buccia d\'arancia è molto migliorata.', verified: true },
  { type: 'text', name: 'Antonella C.', city: 'Brescia', rating: 5, text: 'Uso la ventosa sulle gambe e la pelle è liscia come non lo era dai miei vent\'anni. Non me lo aspettavo a 43 anni.', verified: true },
  { type: 'text', name: 'Luisa T.', city: 'Modena', rating: 5, text: 'Il massaggio a pressione negativa è perfetto per drenare i liquidi. Le gambe pesanti sono sparite.', verified: true },
  { type: 'text', name: 'Carla M.', city: 'Padova', rating: 5, text: 'Ho scoperto il cupping grazie a BellaCura. La testina a ventosa lavora in profondità sulla cellulite come nessun altro strumento.', verified: true },
  { type: 'text', name: 'Daniela F.', city: 'Livorno', rating: 5, text: 'La cellulite sulle cosce si è attenuata molto in 5 settimane. Lo uso ogni sera prima di dormire, 10 minuti bastano.', verified: true },
  { type: 'text', name: 'Angela P.', city: 'Salerno', rating: 5, text: 'Con l\'acqua calda sotto la doccia i risultati arrivano ancora più in fretta. La pelle è molto più liscia.', verified: true },
  { type: 'text', name: 'Rosa B.', city: 'Messina', rating: 5, text: 'Mia sorella lo ha comprato per prima e quando ho visto la sua pelle ho ordinato subito anch\'io. Differenza visibile in 3 settimane.', verified: true },
  { type: 'text', name: 'Teresa L.', city: 'Como', rating: 5, text: 'Ho 52 anni e pensavo fosse troppo tardi. Invece in 8 settimane la cellulite si è ridotta di tanto. Non mollate.', verified: true },
  { type: 'text', name: 'Nadia R.', city: 'Taranto', rating: 5, text: 'Lo uso anche sull\'addome dopo il parto e la pancia si è molto rassodatta. Risultati davvero inaspettati.', verified: true },
  { type: 'text', name: 'Concetta V.', city: 'Caserta', rating: 5, text: 'Il pagamento alla consegna mi ha convinto. È arrivato in 2 giorni e da allora non l\'ho più posato.', verified: true },
  { type: 'text', name: 'Graziella M.', city: 'Foggia', rating: 5, text: 'Uso calore e vibrazione alta insieme: è come un massaggio professionale a casa. La cellulite si è attenuata visibilmente.', verified: true },
  { type: 'text', name: 'Silvia T.', city: 'Pisa', rating: 5, text: 'Avevo la cellulite edematosa molto accentuata. Dopo 7 settimane la pelle è molto più uniforme e il gonfiore è quasi sparito.', verified: true },
  { type: 'text', name: 'Ornella C.', city: 'Udine', rating: 5, text: 'Ne ho già comprati 3 come regalo per le amiche. Il prodotto è robusto e duraturo, i risultati si vedono.', verified: true },
  { type: 'text', name: 'Beatrice R.', city: 'Bergamo', rating: 5, text: 'Dopo l\'allenamento faccio 10 minuti di massaggio sulle cosce e i muscoli si recuperano più in fretta.', verified: true },
  { type: 'text', name: 'Patrizia M.', city: 'Cagliari', rating: 5, text: 'Cupping con la testina ventosa: ottimi risultati sulla cellulite. La pelle è tornata compatta in 3 settimane.', verified: true },
  { type: 'text', name: 'Claudia B.', city: 'Rimini', rating: 5, text: 'La batteria dura tantissimo e la ricarica USB-C è comodissima. La cellulite sta migliorando settimana dopo settimana.', verified: true },
  { type: 'text', name: 'Tiziana L.', city: 'Latina', rating: 5, text: 'Uso la ventosa ogni 2 giorni e le altre testine ogni giorno. Il mix di tecniche fa la differenza, la pelle non era mai così tonica.', verified: true },
  { type: 'text', name: 'Elena B.', city: 'Trieste', rating: 5, text: 'Le 5 intensità di vibrazione sono perfette. Uso la 3 la mattina e la 5 la sera. Risultati in 3 settimane.', verified: true },
]

const VISIBLE = 3 // cards visible at once on desktop

export default function ReviewsCarousel() {
  const [start, setStart] = useState(0)
  const total = allReviews.length

  const prev = () => setStart((s) => (s - 1 + total) % total)
  const next = () => setStart((s) => (s + 1) % total)

  const visibleItems = Array.from({ length: VISIBLE }, (_, i) => allReviews[(start + i) % total])

  return (
    <section className="py-7 md:py-14 bg-white" id="recensioni">
      <div className="container-tight">
        <div className="text-center mb-5 md:mb-10">
          <span className="badge mb-3">⭐ Recensioni Verificate</span>
          <h2 className="font-serif text-gray-900 mb-3">Cosa dicono le nostre clienti</h2>
          <p className="text-gray-500 text-sm">Oltre 2.400 donne soddisfatte · Foto e recensioni reali</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {visibleItems.map((r, i) => (
              <ReviewCard key={`${start}-${i}`} review={r} />
            ))}
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <ReviewCard review={allReviews[start]} />
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-rose-100 shadow-md rounded-full p-2 text-gray-400 hover:text-rose-600 transition-colors z-10"
            aria-label="Precedente"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-rose-100 shadow-md rounded-full p-2 text-gray-400 hover:text-rose-600 transition-colors z-10"
            aria-label="Successiva"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-3">
          {allReviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              className={`rounded-full transition-all ${i === start ? 'w-5 h-2 bg-rose-500' : 'w-2 h-2 bg-rose-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-2xl overflow-hidden border border-rose-100 bg-white shadow-sm flex flex-col">
      {review.type === 'photo' && (
        <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
          <Image
            src={review.image}
            alt={`Risultati di ${review.name}`}
            fill
            className={`object-cover ${review.objectPosition ?? 'object-top'}`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 flex">
            <div className="flex-1 bg-black/40 text-white text-[10px] font-bold text-center py-1">PRIMA</div>
            <div className="flex-1 bg-rose-600/80 text-white text-[10px] font-bold text-center py-1">DOPO</div>
          </div>
        </div>
      )}

      <div className="p-4 flex flex-col flex-1">
        <div className="flex gap-0.5 mb-2">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
          ))}
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-3 flex-1">"{review.text}"</p>

        {'months' in review && (
          <span className="inline-block bg-rose-50 text-rose-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-2 w-fit">
            ⏱ {review.months}
          </span>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-rose-50">
          <div>
            <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
            <p className="text-gray-400 text-xs">{review.city}</p>
          </div>
          {review.verified && (
            <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
              <CheckCircle2 size={11} /> Verificata
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
