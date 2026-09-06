'use client'

import { useState } from 'react'
import Image from 'next/image'

const technologies = [
  {
    icon: '🔴',
    name: 'Luce Rossa',
    desc: 'Supporta la naturale produzione di collagene della pelle, per zone più toniche, compatte e levigate.',
  },
  {
    icon: '🔥',
    name: 'Calore',
    desc: 'Crea un massaggio piacevolmente riscaldante, favorendo la circolazione nelle zone trattate.',
  },
  {
    icon: '🫧',
    name: 'Cupping Technology',
    desc: 'Il massaggio a ventosa stimola la microcircolazione per una pelle dall\'aspetto più levigato e tonico.',
  },
]

const annotations = [
  { id: 'neck',  area: 'Collo & Spalle', desc: 'Relax & tonifica',   side: 'left'  as const, top: '30%', techIndex: 0 },
  { id: 'belly', area: 'Addome',          desc: 'Stimola & tonifica', side: 'right' as const, top: '58%', techIndex: 1 },
  { id: 'legs',  area: 'Gambe & Glutei',  desc: 'Modella & tonifica', side: 'left'  as const, top: '79%', techIndex: 2 },
]

export default function BodyMap() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null)

  const toggleSpot = (i: number) => {
    setActiveSpot(prev => (prev === i ? null : i))
  }

  const activeTech = activeSpot !== null ? technologies[activeSpot] : null

  return (
    <section className="bg-cream py-6 sm:py-20">
      <div className="container-tight">

        {/* Header */}
        <div className="text-center mb-4">
          <div className="badge mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8355A] inline-block mr-2" />
            Massaggiatore 4 in 1™
          </div>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Una sola tecnologia.<br />Tutto il tuo corpo.
          </h2>
        </div>

        {/* Image container — NO overflow-hidden so overlays are never clipped */}
        <div className="mx-auto mb-2" style={{ maxWidth: 420 }}>
          <div
            className="relative rounded-[28px] shadow-[0_16px_56px_rgba(168,53,90,0.16),0_2px_8px_rgba(168,53,90,0.08)]"
            onClick={() => setActiveSpot(null)}
          >
            {/* Edge darkening overlay */}
            <div
              className="absolute inset-0 z-[1] pointer-events-none rounded-[28px]"
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.28) 0%, transparent 38%, transparent 62%, rgba(0,0,0,0.18) 100%)',
              }}
            />

            <Image
              src="/images/body-map-woman.jpg"
              alt="BellaCura — zone trattabili"
              width={720}
              height={1080}
              className="w-full block rounded-[28px]"
              priority
            />

            {/* Body-area annotation pills */}
            {annotations.map(ann => (
              <button
                key={ann.id}
                type="button"
                onClick={e => { e.stopPropagation(); toggleSpot(ann.techIndex) }}
                className="absolute z-[10] flex items-center"
                style={{
                  top: ann.top,
                  transform: 'translateY(-50%)',
                  left: ann.side === 'left' ? '4%' : undefined,
                  right: ann.side === 'right' ? '4%' : undefined,
                  flexDirection: ann.side === 'left' ? 'row' : 'row-reverse',
                  gap: 0,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                <div
                  className="rounded-[8px] px-3 py-[7px] whitespace-nowrap transition-all duration-200"
                  style={{
                    background: activeSpot === ann.techIndex ? 'rgba(168,53,90,0.65)' : 'rgba(10,5,5,0.35)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: activeSpot === ann.techIndex ? '1px solid rgba(255,255,255,0.55)' : '1px solid rgba(255,255,255,0.22)',
                    transform: activeSpot === ann.techIndex ? 'scale(1.04)' : 'scale(1)',
                  }}
                >
                  <span className="block font-[Raleway,system-ui,sans-serif] text-[8px] font-extrabold tracking-[0.18em] uppercase mb-0.5" style={{ color: 'rgba(255,255,255,0.95)' }}>
                    {ann.area}
                  </span>
                  <span className="block font-serif italic font-light text-[0.78rem]" style={{ color: 'rgba(255,255,255,0.78)' }}>
                    {ann.desc}
                  </span>
                </div>

                {ann.side === 'left' ? (
                  <svg width="52" height="14" viewBox="0 0 52 14" fill="none" className="shrink-0" style={{ pointerEvents: 'none' }}>
                    <line x1="1" y1="7" x2="42" y2="7" stroke="white" strokeWidth="1.4" strokeOpacity="0.85" />
                    <polygon points="40,3.5 51,7 40,10.5" fill="white" fillOpacity="0.85" />
                  </svg>
                ) : (
                  <svg width="52" height="14" viewBox="0 0 52 14" fill="none" className="shrink-0" style={{ pointerEvents: 'none' }}>
                    <line x1="51" y1="7" x2="10" y2="7" stroke="white" strokeWidth="1.4" strokeOpacity="0.85" />
                    <polygon points="12,3.5 1,7 12,10.5" fill="white" fillOpacity="0.85" />
                  </svg>
                )}
              </button>
            ))}

            {/* Tech emoji buttons — bottom of image */}
            <div
              className="absolute z-[10] left-0 right-0 flex justify-around"
              style={{ bottom: 18, padding: '0 10%' }}
            >
              {technologies.map((tech, i) => (
                <button
                  key={tech.name}
                  type="button"
                  aria-label={tech.name}
                  onClick={e => { e.stopPropagation(); toggleSpot(i) }}
                  className="flex items-center justify-center rounded-full text-[18px] transition-all duration-[250ms] select-none"
                  style={{
                    width: 46, height: 46,
                    background: activeSpot === i ? 'rgba(168,53,90,0.65)' : 'rgba(10,5,5,0.45)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: activeSpot === i ? '1px solid rgba(255,255,255,0.55)' : '1px solid rgba(255,255,255,0.28)',
                    transform: activeSpot === i ? 'scale(1.14)' : 'scale(1)',
                    cursor: 'pointer',
                  }}
                >
                  {tech.icon}
                </button>
              ))}
            </div>

            {/* Centered info overlay — appears inside image when active */}
            <div
              className="absolute z-[20] left-0 right-0 pointer-events-none"
              style={{
                bottom: 80,
                padding: '0 12px',
                transition: 'opacity 0.25s ease, transform 0.25s ease',
                opacity: activeTech ? 1 : 0,
                transform: activeTech ? 'translateY(0)' : 'translateY(6px)',
              }}
            >
              {activeTech && (
                <div
                  className="rounded-2xl px-5 py-4 mx-auto"
                  style={{
                    maxWidth: 280,
                    background: 'rgba(8,3,3,0.78)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <p className="font-[Raleway,system-ui,sans-serif] text-[9px] font-extrabold tracking-[0.18em] uppercase mb-1.5" style={{ color: 'rgba(255,255,255,0.95)' }}>
                    {activeTech.icon} {activeTech.name}
                  </p>
                  <p className="font-serif italic text-[0.78rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>
                    {activeTech.desc}
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
