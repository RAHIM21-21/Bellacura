'use client'

import { useState, useRef, useCallback } from 'react'
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

const THRESHOLD = 50 // px to commit a swipe

export default function ProductImageGallery() {
  const [active, setActive]       = useState(0)
  const [drag, setDrag]           = useState(0)       // live px offset while finger is down
  const [snapping, setSnapping]   = useState(false)   // true during snap-back animation
  const touchStartX               = useRef<number | null>(null)
  const total                     = media.length
  const current                   = media[active]

  // Neighbor shown behind current during drag
  const neighborIdx = drag < 0
    ? (active + 1) % total          // swiping left → next image peeks from right
    : (active - 1 + total) % total  // swiping right → prev image peeks from left
  const neighbor = drag !== 0 ? media[neighborIdx] : null

  const commitSwipe = useCallback((direction: 'left' | 'right') => {
    setActive(a => direction === 'left'
      ? (a + 1) % total
      : (a - 1 + total) % total
    )
    setDrag(0)
    setSnapping(false)
  }, [total])

  const cancelSwipe = useCallback(() => {
    setSnapping(true)
    setDrag(0)
    setTimeout(() => setSnapping(false), 300)
  }, [])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setSnapping(false)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    let dx = e.touches[0].clientX - touchStartX.current
    // Resist at edges
    if ((active === 0 && dx > 0) || (active === total - 1 && dx < 0)) {
      dx = dx * 0.2
    }
    setDrag(dx)
  }

  const onTouchEnd = () => {
    if (Math.abs(drag) >= THRESHOLD) {
      commitSwipe(drag < 0 ? 'left' : 'right')
    } else {
      cancelSwipe()
    }
    touchStartX.current = null
  }

  const goTo = (i: number) => {
    setActive(i)
    setDrag(0)
  }

  // Transition only during snap-back, never while finger is down
  const transition = snapping ? 'transform 0.25s ease-out' : 'none'

  return (
    <div className="space-y-3">
      {/* Main viewer */}
      <div
        className="relative rounded-3xl overflow-hidden bg-gray-50 aspect-square shadow-xl select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Neighbor image — behind current, peeking in from opposite side */}
        {neighbor && neighbor.type === 'image' && (
          <div
            className="absolute inset-0"
            style={{
              transform: `translateX(calc(${drag < 0 ? '100%' : '-100%'} + ${drag}px))`,
              transition,
            }}
          >
            <Image src={neighbor.src} alt={neighbor.alt} fill className="object-cover" />
          </div>
        )}

        {/* Current item */}
        {current.type === 'video' ? (
          <video
            src={current.src}
            className="w-full h-full object-contain"
            controls
            autoPlay
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ transform: `translateX(${drag}px)`, transition }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={active === 0}
              placeholder={active === 0 ? 'blur' : 'empty'}
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABAwUAAAAAAAAAAAAAAAAAAgMFAQQREkH/xAAVAQEBAAAAAAAAAAAAAAAAAAABBP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAwDAQACEQMRAD8AsstMXzMhowlSqZ4AASrHL//Z"
            />
          </div>
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
