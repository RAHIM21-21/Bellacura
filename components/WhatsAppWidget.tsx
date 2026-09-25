'use client'
import { useEffect, useState } from 'react'

export default function WhatsAppWidget() {
  const [labelVisible, setLabelVisible] = useState(false)
  const href = 'https://wa.me/393314430286?text=ho%20una%20domanda%20su%20bellacura%20...'

  useEffect(() => {
    // Slide label out after 12 s, retract after 5 s — happens once only
    const show = setTimeout(() => setLabelVisible(true), 12000)
    const hide = setTimeout(() => setLabelVisible(false), 17000)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hai domande? Scrivici su WhatsApp"
      className="fixed bottom-[96px] right-4 z-50 md:bottom-8 md:right-6 flex items-center justify-end"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Sliding label — appears once, to the left of the button */}
      <span
        className="mr-3 bg-white text-[#1D3557] text-xs font-bold px-3.5 py-2 rounded-full shadow-lg whitespace-nowrap"
        style={{
          opacity: labelVisible ? 1 : 0,
          transform: labelVisible ? 'translateX(0)' : 'translateX(12px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          pointerEvents: 'none',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        }}
      >
        Hai domande? Scrivici 💬
      </span>

      {/* WhatsApp button */}
      <span
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-black/20 shrink-0"
        style={{ background: '#25D366' }}
      >
        <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.494.664 4.83 1.822 6.845L2 30l7.37-1.794A13.922 13.922 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.836-1.6l-.418-.248-4.37 1.064 1.1-4.25-.272-.436A11.46 11.46 0 014.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.29-8.548c-.344-.172-2.036-1.004-2.352-1.118-.316-.116-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.536-2.766-1.706-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.154-.154.344-.4.516-.6.172-.2.23-.344.344-.574.116-.23.058-.43-.028-.602-.086-.172-.776-1.872-1.062-2.562-.28-.674-.564-.582-.776-.594l-.66-.012c-.23 0-.602.086-.918.43-.316.344-1.204 1.176-1.204 2.868s1.232 3.326 1.404 3.556c.172.23 2.426 3.706 5.878 5.196.822.354 1.464.566 1.964.724.824.262 1.574.224 2.168.136.66-.098 2.036-.832 2.322-1.636.286-.804.286-1.492.2-1.636-.086-.144-.316-.23-.66-.402z"/>
        </svg>
      </span>
    </a>
  )
}
