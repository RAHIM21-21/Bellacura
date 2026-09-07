'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

type MediaItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string }

const media: MediaItem[] = [
  { type: 'image', src: '/images/g1-clean.jpg',      alt: 'BellaCura — dispositivo' },
  { type: 'image', src: '/images/g2-thigh.jpg',     alt: 'Riduce la cellulite · Migliora la circolazione · Terapia con luce rossa' },
  { type: 'image', src: '/images/g3-stat.jpg',      alt: '94% — pelle visibilmente più compatta dopo 3 settimane' },
  { type: 'image', src: '/images/g4-martina.jpg',   alt: 'Prima e dopo — Martina C.' },
  { type: 'image', src: '/images/g5-francesca.jpg', alt: 'Prima e dopo — Francesca M.' },
  { type: 'image', src: '/images/garanzia-pink-bg.jpg', alt: 'Garanzia rimborso 14 giorni — zero domande, zero burocrazia' },
  { type: 'video', src: '/video/promo.mp4', alt: 'BellaCura in azione' },
]

const THRESHOLD = 40 // px to trigger slide

export default function ProductImageGallery() {
  const [active, setActive] = useState(0)
  const [drag, setDrag] = useState(0)       // live px offset while finger is down
  const [dragging, setDragging] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const total = media.length

  const goTo = (i: number) => setActive(Math.max(0, Math.min(total - 1, i)))
  const goPrev = () => goTo(active - 1)
  const goNext = () => goTo(active + 1)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setDragging(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.touches[0].clientX - touchStartX.current
    // Resist at edges
    if ((active === 0 && dx > 0) || (active === total - 1 && dx < 0)) {
      setDrag(dx * 0.25) // rubber-band feel at edges
    } else {
      setDrag(dx)
    }
  }

  const onTouchEnd = () => {
    if (Math.abs(drag) > THRESHOLD) {
      drag < 0 ? goNext() : goPrev()
    }
    setDrag(0)
    setDragging(false)
    touchStartX.current = null
  }

  const translateX = `calc(-${active * 100}% + ${drag}px)`

  return (
    <div className="space-y-3">
      {/* Main sliding viewer */}
      <div
        ref={containerRef}
        className="relative rounded-3xl overflow-hidden bg-gray-50 aspect-square shadow-xl select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Slide strip — all items in a row */}
        <div
          className={`flex h-full ${dragging ? '' : 'transition-transform duration-300 ease-out'}`}
          style={{ transform: `translateX(${translateX})`, width: `${total * 100}%` }}
        >
          {media.map((item, i) => (
            <div key={i} className="relative h-full flex-shrink-0" style={{ width: `${100 / total}%` }}>
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay={i === active}
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={i === 0}
                  placeholder={i === 0 ? 'blur' : 'empty'}
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABAwUAAAAAAAAAAAAAAAAAAgMFAQQREkH/xAAVAQEBAAAAAAAAAAAAAAAAAAABBP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAwDAQACEQMRAD8AsstMXzMhowlSqZ4AASrHL//Z"
                />
              )}
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none">
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
              <Image src={item.src} alt={item.alt} fill className="object-cover" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
