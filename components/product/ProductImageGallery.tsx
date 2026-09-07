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

const BLUR = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABAwUAAAAAAAAAAAAAAAAAAgMFAQQREkH/xAAVAQEBAAAAAAAAAAAAAAAAAAABBP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAwDAQACEQMRAD8AsstMXzMhowlSqZ4AASrHL//Z"
const THRESHOLD = 45

export default function ProductImageGallery() {
  const [active, setActive] = useState(0)
  const total = media.length

  // Refs for imperative DOM manipulation — zero React re-renders during drag
  const wrapperRef  = useRef<HTMLDivElement>(null)
  const startX      = useRef<number | null>(null)
  const dragPx      = useRef(0)

  const setTransform = (px: number, animated: boolean) => {
    if (!wrapperRef.current) return
    wrapperRef.current.style.transition = animated ? 'transform 0.22s ease-out' : 'none'
    wrapperRef.current.style.transform  = `translateX(${px}px)`
  }

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    dragPx.current = 0
    setTransform(0, false)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return
    let dx = e.touches[0].clientX - startX.current
    // Rubber-band at edges
    if ((active === 0 && dx > 0) || (active === total - 1 && dx < 0)) {
      dx = dx * 0.18
    }
    dragPx.current = dx
    setTransform(dx, false)  // direct DOM — no React render
  }

  const onTouchEnd = () => {
    const dx = dragPx.current
    if (Math.abs(dx) >= THRESHOLD) {
      // Animate to ±100% width then switch slide
      const el = wrapperRef.current
      if (!el) return
      const w = el.parentElement?.offsetWidth ?? 390
      const target = dx < 0 ? -w : w
      setTransform(target, true)
      setTimeout(() => {
        setActive(a => dx < 0 ? (a + 1) % total : (a - 1 + total) % total)
        // Reset without animation so it snaps back to 0 invisibly
        if (wrapperRef.current) {
          wrapperRef.current.style.transition = 'none'
          wrapperRef.current.style.transform  = 'translateX(0)'
        }
      }, 220)
    } else {
      // Snap back
      setTransform(0, true)
    }
    startX.current = null
    dragPx.current = 0
  }

  const goTo = (i: number) => setActive(i)
  const current = media[active]

  return (
    <div className="space-y-3">
      {/* Main viewer */}
      <div
        className="relative rounded-3xl overflow-hidden bg-gray-50 aspect-square shadow-xl select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Wrapper that moves with the finger */}
        <div ref={wrapperRef} className="absolute inset-0">
          {current.type === 'video' ? (
            <video
              src={current.src}
              className="w-full h-full object-contain"
              controls autoPlay loop playsInline preload="metadata"
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
              placeholder={active === 0 ? 'blur' : 'empty'}
              blurDataURL={BLUR}
            />
          )}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none">
          {media.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all duration-200 ${
              i === active ? 'bg-white w-4' : 'bg-white/50 w-1.5'
            }`} />
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
          <button key={i} onClick={() => goTo(i)} aria-label={item.alt}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-rose-400 ${
              active === i ? 'border-rose-500 ring-1 ring-rose-300 shadow-sm' : 'border-transparent hover:border-rose-300'
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
