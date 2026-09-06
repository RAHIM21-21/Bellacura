'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

type MediaItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string }

const media: MediaItem[] = [
  { type: 'image', src: '/images/g1-logo.png',      alt: 'BellaCura — dispositivo' },
  { type: 'image', src: '/images/g2-thigh.jpg',     alt: 'Riduce la cellulite · Migliora la circolazione · Terapia con luce rossa' },
  { type: 'image', src: '/images/g3-stat.png',      alt: '94% — pelle visibilmente più compatta dopo 3 settimane' },
  { type: 'image', src: '/images/g4-martina.jpg',   alt: 'Prima e dopo — Martina C.' },
  { type: 'image', src: '/images/g5-francesca.png', alt: 'Prima e dopo — Francesca M.' },
  { type: 'image', src: '/images/garanzia-pink-bg.jpg', alt: 'Garanzia rimborso 14 giorni — zero domande, zero burocrazia' },
  { type: 'video', src: '/video/promo.mp4', alt: 'BellaCura in azione' },
]

export default function ProductImageGallery() {
  const [active, setActive] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const touchStartX = useRef<number | null>(null)

  const current = media[active]
  const total = media.length

  const goPrev = () => setActive((a) => (a - 1 + total) % total)
  const goNext = () => setActive((a) => (a + 1) % total)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) {
      dx < 0 ? goNext() : goPrev()
    }
    touchStartX.current = null
  }

  return (
    <div className="space-y-3">
      {/* Main viewer */}
      <div
        className="relative rounded-3xl overflow-hidden bg-rose-50 aspect-square shadow-xl select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {current.type === 'video' ? (
          <video
            ref={videoRef}
            src={current.src}
            className="w-full h-full object-cover"
            controls
            autoPlay
            loop
            playsInline
          />
        ) : (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover transition-opacity duration-300"
            priority
          />
        )}

        {/* Left / Right arrow buttons (visible on desktop hover, always on mobile) */}
        {active > 0 && (
          <button
            onClick={goPrev}
            aria-label="Precedente"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center text-gray-700 hover:bg-white transition z-10"
          >
            ‹
          </button>
        )}
        {active < total - 1 && (
          <button
            onClick={goNext}
            aria-label="Successiva"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center text-gray-700 hover:bg-white transition z-10"
          >
            ›
          </button>
        )}

        {/* Dot indicators */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {media.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Immagine ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === active ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>


      </div>

      {/* Stock badge — outside the image so it never covers product text */}
      <div className="flex items-center gap-2 bg-white border border-red-100 rounded-full px-4 py-2 shadow-sm w-fit">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs font-bold text-gray-800">Solo 7 pezzi rimasti</span>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-1.5">
        {media.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={item.alt}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-rose-400 ${
              active === i
                ? 'border-rose-500 ring-1 ring-rose-300 shadow-sm'
                : 'border-transparent hover:border-rose-300'
            }`}
          >
            {item.type === 'video' ? (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <span className="text-white text-xl">▶</span>
              </div>
            ) : (
              <Image src={item.src} alt={item.alt} fill className="object-cover" />
            )}
          </button>
        ))}
      </div>

      {/* Social proof bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-gray-50 rounded-2xl px-4 py-3 text-sm text-gray-600 mt-2">
        <span>⭐ 4.9/5 · 2.847 recensioni</span>
        <span>🚚 Spedizione gratuita</span>
        <span>💵 Paga alla consegna</span>
      </div>
    </div>
  )
}
