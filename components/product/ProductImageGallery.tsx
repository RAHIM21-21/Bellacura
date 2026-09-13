'use client'

import { useState } from 'react'

import Image from 'next/image'

const STOCK_NUMS = [5, 6, 7, 8, 9]

type MediaItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string }

const media: MediaItem[] = [
  { type: 'image', src: '/images/render-spa-hero.jpg',        alt: 'BellaCura — dispositivo' },
  { type: 'image', src: '/images/product-box-blue.jpg',       alt: 'BellaCura — kit completo con scatola e cavo USB' },
  { type: 'image', src: '/images/lifestyle-black-seated.jpg', alt: 'BellaCura in uso — trattamento coscia e addome' },
  { type: 'image', src: '/images/benefits-led.jpg',           alt: 'Riduce la cellulite · Migliora la circolazione · Terapia a luce rossa e blu' },
  { type: 'image', src: '/images/routine-3passi.jpg',          alt: 'La tua routine BellaCura in 3 passi' },
  { type: 'image', src: '/images/body-map-bellacura.jpg',      alt: 'Zone in cui puoi usare BellaCura' },
  { type: 'image', src: '/images/massager-features.jpg',       alt: 'Massaggiatore 4-in-1 BellaCura — funzionalità' },
  { type: 'image', src: '/images/g4-martina-branded.jpg',     alt: 'Prima e dopo — Martina C. · 1 Mese · 10 Minuti al giorno' },
  { type: 'image', src: '/images/g5-francesca-branded.jpg',   alt: 'Prima e dopo — Francesca M. ★★★★★' },
  { type: 'video', src: '/video/promo.mp4',                   alt: 'BellaCura in azione' },
]

const BLUR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGO48+oTAAVeArnwmq+HAAAAAElFTkSuQmCC"

export default function ProductImageGallery() {
  const [active, setActive] = useState(0)
  const total = media.length

  const goTo = (i: number) => setActive(Math.max(0, Math.min(total - 1, i)))

  const current = media[active]

  return (
    <div className="space-y-3">
      {/* Main viewer */}
      <div className="relative rounded-3xl overflow-hidden bg-gray-50 aspect-square shadow-xl select-none">
        {current.type === 'video' ? (
          <video
            key={active}
            src={current.src}
            className="w-full h-full object-contain"
            controls
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <Image
            key={active}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={active === 0}
            placeholder="blur"
            blurDataURL={BLUR}
          />
        )}

        {/* Garanzia 90 giorni badge — visible only on hero image */}
        {active === 0 && (
          <div
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 20,
              background: '#1D3557',
              color: '#fff',
              borderRadius: '50%',
              width: 72,
              height: 72,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              lineHeight: 1.15,
              pointerEvents: 'none',
            }}
          >
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.85 }}>Garanzia</span>
            <span style={{ fontSize: 17, fontWeight: 800, lineHeight: 1 }}>90</span>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.85 }}>giorni</span>
          </div>
        )}

        {/* Left arrow */}
        {active > 0 && (
          <button
            onClick={() => goTo(active - 1)}
            aria-label="Precedente"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}

        {/* Right arrow */}
        {active < total - 1 && (
          <button
            onClick={() => goTo(active + 1)}
            aria-label="Successivo"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none">
          {media.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'bg-white w-4' : 'bg-white/50 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Preload adjacent images silently */}
      <div className="hidden" aria-hidden="true">
        {[active - 1, active + 1].map(i => {
          if (i < 0 || i >= total) return null
          const item = media[i]
          if (item.type !== 'image') return null
          return (
            <Image
              key={i}
              src={item.src}
              alt=""
              width={1}
              height={1}
              priority
            />
          )
        })}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-1.5">
        {media.map((item, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={item.alt}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#457B9D] ${
              active === i
                ? 'border-[#1D3557] ring-1 ring-[#7EC8D4] shadow-sm'
                : 'border-transparent hover:border-[#7EC8D4]'
            }`}
          >
            {item.type === 'video' ? (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <span className="text-white text-xl">▶</span>
              </div>
            ) : (
              <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="80px" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
