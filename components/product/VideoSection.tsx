'use client'

import { useRef, useState, useEffect } from 'react'

const videos = [
  { src: '/video/promo.mp4', label: 'BellaCura in azione' },
  { src: '/video/ad1.mp4',   label: 'Risultati reali' },
  { src: '/video/ad2.mp4',   label: 'Come funziona' },
  { src: '/video/ad3.mp4',   label: 'Testimonianza' },
]

function VideoCard({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl group flex-shrink-0 w-[75vw] sm:w-auto">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-auto"
        aria-label={label}
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
  )
}

export default function VideoSection() {
  return (
    <>
      {/* Mobile: horizontal swipeable carousel */}
      <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 -mx-4 scrollbar-none">
        {videos.map((v) => (
          <div key={v.src} className="snap-center flex-shrink-0 w-[75vw]">
            <VideoCard src={v.src} label={v.label} />
          </div>
        ))}
      </div>

      {/* Desktop: 2-col then 4-col grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {videos.map((v) => (
          <VideoCard key={v.src} src={v.src} label={v.label} />
        ))}
      </div>
    </>
  )
}
