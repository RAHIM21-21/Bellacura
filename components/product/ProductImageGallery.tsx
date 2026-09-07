'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

type MediaItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string }

const media: MediaItem[] = [
  { type: 'image', src: '/images/g1-clean.jpg',         alt: 'BellaCura — dispositivo' },
  { type: 'image', src: '/images/g2-thigh.jpg',         alt: 'Riduce la cellulite · Migliora la circolazione · Terapia con luce rossa' },
  { type: 'image', src: '/images/g3-stat.jpg',          alt: '94% — pelle visibilmente più compatta dopo 3 settimane' },
  { type: 'image', src: '/images/g4-martina.jpg',       alt: 'Prima e dopo — Martina C.' },
  { type: 'image', src: '/images/g5-francesca.jpg',     alt: 'Prima e dopo — Francesca M.' },
  { type: 'image', src: '/images/garanzia-pink-bg.jpg', alt: 'Garanzia rimborso 14 giorni — zero domande, zero burocrazia' },
  { type: 'video', src: '/video/promo.mp4',             alt: 'BellaCura in azione' },
]

const THRESHOLD = 40

export default function ProductImageGallery() {
  const [active, setActive]       = useState(0)
  const [slideClass, setSlideClass] = useState('')
  const [animKey, setAnimKey]     = useState(0)
  const touchStartX               = useRef<number | null>(null)
  const total                     = media.length
  const current                   = media[active]

  const navigate = (next: number, direction: 'left' | 'right') => {
    setSlideClass(direction === 'right' ? 'gallery-slide-right' : 'gallery-slide-left')
    setAnimKey(k => k + 1)
    setActive(next)
  }

  const goPrev = () => navigate((active - 1 + total) % total, 'right')
  const goNext = () => navigate((active + 1) % total, 'left')

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > THRESHOLD) dx > 0 ? goPrev() : goNext()
    touchStartX.current = null
  }

  return (
    <div className="space-y-3">
      {/* Main viewer */}
      <div
        className="relative rounded-3xl overflow-hidden bg-gray-50 aspect-square shadow-xl select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {current.type === 'video' ? (
          <video
            key={active}
            src={current.src}
            className="w-full h-full object-contain"
            controls
            autoPlay
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <Image
            key={animKey}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover ${slideClass}`}
            priority={active === 0}
            placeholder={active === 0 ? 'blur' : 'empty'}
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABAwUAAAAAAAAAAAAAAAAAAgMFAQQREkH/xAAVAQEBAAAAAAAAAAAAAAAAAAABBP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAwDAQACEQMRAD8AsstMXzMhowlSqZ4AASrHL//Z"
          />
        )}

        {/* Prev / Next arrows (desktop) */}
        {active > 0 && (
          <button
            onClick={goPrev}
            aria-label="Immagine precedente"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center text-gray-700 hover:bg-white transition hidden sm:flex"
          >
            ‹
          </button>
        )}
        {active < total - 1 && (
          <button
            onClick={goNext}
            aria-label="Immagine successiva"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center text-gray-700 hover:bg-white transition hidden sm:flex"
          >
            ›
          </button>
        )}

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
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

      {/* Stock badge */}
      <div className="flex items-center gap-2 bg-white border border-red-100 rounded-full px-4 py-2 shadow-sm w-fit">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs font-bold text-gray-800">Solo 7 pezzi rimasti</span>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-1.5">
        {media.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(i, i > active ? 'left' : 'right')}
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
    </div>
  )
}
