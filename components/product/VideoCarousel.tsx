'use client'

import { useRef, useState, useEffect } from 'react'

const videos = [
  '/video/ad6-v2.mp4',
  '/video/ad5.mp4',
  '/video/ad1.mp4',
  '/video/ad2.mp4',
  '/video/ad3.mp4',
  '/video/ad4.mp4',
  '/video/ad7.mp4',
]

function VideoCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [showPrompt, setShowPrompt] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const srcAssigned = useRef(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = true

    const tryPlay = () => { el.muted = true; el.play().catch(() => {}) }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!srcAssigned.current) {
          srcAssigned.current = true
          el.src = src
          el.muted = true
          el.load()
          el.addEventListener('canplay', tryPlay, { once: true })
        } else if (el.paused) {
          tryPlay()
        }
      } else {
        el.pause()
      }
    }, { threshold: 0.3 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [src])

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
    setShowPrompt(false)
  }

  return (
    <div
      className="relative flex-none snap-start rounded-2xl overflow-hidden bg-gray-900 shadow-sm"
      style={{ width: '42vw', maxWidth: '200px', aspectRatio: '9/16' }}
    >
      <video
        ref={videoRef}
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover"
        onCanPlay={() => setLoaded(true)}
      />

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* "Tocca per il suono" prompt */}
      {muted && showPrompt && loaded && (
        <button
          onClick={toggleMute}
          aria-label="Attiva audio"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full animate-pulse pointer-events-auto whitespace-nowrap"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 shrink-0">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
          </svg>
          Tocca per il suono
        </button>
      )}

      {/* Mute/unmute button */}
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Attiva audio' : 'Disattiva audio'}
        className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 focus:outline-none"
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
            <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.061z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default function VideoCarousel() {
  return (
    <div
      className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4"
      style={{ scrollbarWidth: 'none' }}
    >
      {videos.map((src, i) => (
        <VideoCard key={src} src={src} index={i} />
      ))}
    </div>
  )
}
