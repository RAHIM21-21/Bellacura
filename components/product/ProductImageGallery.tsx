'use client'

import { useState, useRef } from 'react'

import Image from 'next/image'

const STOCK_NUMS = [5, 6, 7, 8, 9]

type MediaItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string }

const media: MediaItem[] = [
  { type: 'image', src: '/images/gallery-1-device.jpg',         alt: 'BellaCura — dispositivo massaggiatore anticellulite' },
  { type: 'image', src: '/images/gallery-2-ba-legs.png',        alt: 'Prima e dopo BellaCura — gambe' },
  { type: 'image', src: '/images/gallery-3-ba-glutei.png',      alt: 'Prima e dopo BellaCura — glutei e cosce' },
  { type: 'image', src: '/images/gallery-4-dopo-utilizzo.png',  alt: 'Dopo solo un utilizzo — risultati clinicamente dimostrati' },
  { type: 'image', src: '/images/gallery-5-tecnologia.png',     alt: 'Tecnologia clinicamente efficace — infrarossi, EMS, luce rossa' },
  { type: 'image', src: '/images/gallery-6-trustpilot.png',     alt: 'Recensioni Trustpilot — 4,8 su 5' },
  { type: 'video', src: '/video/promo-v2.mp4',                  alt: 'BellaCura in azione' },
]

const BLUR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGO48+oTAAVeArnwmq+HAAAAAElFTkSuQmCC"

export default function ProductImageGallery({ badge }: { badge?: { line1: string; line2: string } }) {
  const [active, setActive] = useState(0)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const total = media.length

  const goTo = (i: number) => setActive(Math.max(0, Math.min(total - 1, i)))

  const current = media[active]

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <div className="space-y-3">
      {/* Main viewer */}
      <div className="relative rounded-3xl overflow-hidden bg-gray-50 aspect-square shadow-xl select-none">
        {current.type === 'video' ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              key={active}
              src={current.src}
              className="w-full h-full object-contain"
              autoPlay
              loop
              playsInline
              muted
              preload="auto"
            />
            {/* Mute/unmute button */}
            <button
              onClick={toggleMute}
              aria-label={muted ? 'Attiva audio' : 'Disattiva audio'}
              className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              {muted ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                  <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.061z" />
                </svg>
              )}
            </button>
          </div>
        ) : (
          <Image
            key={active}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={active === 0}
            fetchPriority={active === 0 ? 'high' : 'auto'}
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
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.85 }}>{badge?.line1 ?? 'Garanzia'}</span>
            <span style={{ fontSize: 17, fontWeight: 800, lineHeight: 1 }}>90</span>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.85 }}>{badge?.line2 ?? 'giorni'}</span>
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
