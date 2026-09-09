'use client'

import { useState } from 'react'

import Image from 'next/image'

const STOCK_NUMS = [5, 6, 7, 8, 9]

type MediaItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string }

const media: MediaItem[] = [
  { type: 'image', src: '/images/g1-clean.jpg',        alt: 'BellaCura — dispositivo' },
  { type: 'image', src: '/images/g2-thigh.jpg',        alt: 'Riduce la cellulite · Migliora la circolazione · Terapia con luce rossa' },
  { type: 'image', src: '/images/g3-stat.jpg',         alt: '94% — pelle visibilmente più compatta dopo 3 settimane' },
  { type: 'image', src: '/images/g4-martina.jpg',      alt: 'Prima e dopo — Martina C.' },
  { type: 'image', src: '/images/g5-francesca.jpg',    alt: 'Prima e dopo — Francesca M.' },
  { type: 'image', src: '/images/garanzia-pink-bg.jpg',alt: 'Garanzia rimborso 14 giorni — zero domande, zero burocrazia' },
  { type: 'video', src: '/video/promo.mp4',            alt: 'BellaCura in azione' },
]

const BLUR = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABAwUAAAAAAAAAAAAAAAAAAgMFAQQREkH/xAAVAQEBAAAAAAAAAAAAAAAAAAABBP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAwDAQACEQMRAD8AsstMXzMhowlSqZ4AASrHL//Z"

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
            autoPlay
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

      {/* Stock badge */}
      <div className="flex items-center gap-2 bg-white border border-red-100 rounded-full px-4 py-2 shadow-sm w-fit">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs font-bold text-gray-800">{`Solo ${STOCK_NUMS[Math.floor(Date.now() / 86400000) % STOCK_NUMS.length]} pezzi rimasti`}</span>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-1.5">
        {media.map((item, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
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
              <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="80px" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
