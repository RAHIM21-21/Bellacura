'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
 beforeSrc: string
 afterSrc: string
 beforeLabel?: string
 afterLabel?: string
 alt?: string
 aspectRatio?: string
}

export default function BeforeAfterSlider({
 beforeSrc,
 afterSrc,
 beforeLabel = 'Prima',
 afterLabel = 'Dopo',
 alt = 'Prima e dopo',
 aspectRatio = '100%',
}: BeforeAfterSliderProps) {
 const containerRef = useRef<HTMLDivElement>(null)
 const [position, setPosition] = useState(50)
 const isDragging = useRef(false)

 const getPositionFromEvent = useCallback((clientX: number) => {
 const el = containerRef.current
 if (!el) return 50
 const rect = el.getBoundingClientRect()
 const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
 return (x / rect.width) * 100
 }, [])

 const onMouseDown = useCallback((e: React.MouseEvent) => {
 e.preventDefault()
 isDragging.current = true
 }, [])

 const onTouchStart = useCallback(() => {
 isDragging.current = true
 }, [])

 useEffect(() => {
 const onMove = (e: MouseEvent | TouchEvent) => {
 if (!isDragging.current) return
 const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
 setPosition(getPositionFromEvent(clientX))
 }
 const onUp = () => { isDragging.current = false }
 window.addEventListener('mousemove', onMove)
 window.addEventListener('mouseup', onUp)
 window.addEventListener('touchmove', onMove, { passive: true })
 window.addEventListener('touchend', onUp)
 return () => {
 window.removeEventListener('mousemove', onMove)
 window.removeEventListener('mouseup', onUp)
 window.removeEventListener('touchmove', onMove)
 window.removeEventListener('touchend', onUp)
 }
 }, [getPositionFromEvent])

 const onContainerClick = useCallback((e: React.MouseEvent) => {
 if (!isDragging.current) setPosition(getPositionFromEvent(e.clientX))
 }, [getPositionFromEvent])

 return (
 <div
 ref={containerRef}
 className="relative w-full select-none overflow-hidden rounded-3xl shadow-xl cursor-col-resize"
 style={{ paddingBottom: aspectRatio }}
 onClick={onContainerClick}
 aria-label={alt}
 >
 {/* AFTER — full width, back layer */}
 <div className="absolute inset-0">
 <Image src={afterSrc} alt={`Dopo — ${alt}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
 <span className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
 {afterLabel}
 </span>
 </div>

 {/* BEFORE — clipped to left portion */}
 <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
 <div className="absolute inset-0" style={{ width: containerRef.current ? `${containerRef.current.getBoundingClientRect().width}px` : '100vw' }}>
 <Image src={beforeSrc} alt={`Prima — ${alt}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
 </div>
 <span className="absolute bottom-4 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
 {beforeLabel}
 </span>
 </div>

 {/* Divider */}
 <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10" style={{ left: `${position}%`, transform: 'translateX(-50%)' }} />

 {/* Handle */}
 <div
 className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2"
 style={{ left: `${position}%` }}
 onMouseDown={onMouseDown}
 onTouchStart={onTouchStart}
 >
 <div className="w-11 h-11 rounded-full bg-white shadow-xl border-2 border-gray-100 flex items-center justify-center cursor-grab active:cursor-grabbing">
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9f1239" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <polyline points="15 18 9 12 15 6" />
 <polyline points="21 18 15 12 21 6" />
 </svg>
 </div>
 </div>

 {/* Hint */}
 <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-[10px] font-medium px-3 py-1 rounded-full pointer-events-none z-20 whitespace-nowrap">
 ← Scorri per confrontare →
 </div>
 </div>
 )
}
