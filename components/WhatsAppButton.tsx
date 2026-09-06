'use client'

import { useState } from 'react'

const PHONE = '393314430286'
const MESSAGE = encodeURIComponent('Ciao! Ho una domanda sul massaggiatore BellaCura 😊')
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[998] flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      <div
        className={`transition-all duration-200 origin-bottom-right ${
          hovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl px-4 py-3 text-sm text-gray-700 max-w-[200px] text-center border border-gray-100">
          <p className="font-semibold text-gray-900 mb-0.5">Hai bisogno di aiuto?</p>
          <p className="text-xs text-gray-500">Scrivici su WhatsApp 💬</p>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      </div>

      {/* Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200"
        style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
      >
        <svg viewBox="0 0 32 32" className="w-9 h-9" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.635 4.64 1.84 6.64L2.667 29.333l6.907-1.813A13.28 13.28 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 2.4c6.04 0 10.93 4.893 10.93 10.933 0 6.04-4.89 10.933-10.93 10.933a10.88 10.88 0 0 1-5.573-1.533l-.4-.24-4.107 1.08 1.093-3.987-.267-.413A10.88 10.88 0 0 1 5.07 16c0-6.04 4.893-10.933 10.933-10.933zm-3.04 5.36c-.24-.533-.493-.547-.72-.56-.187-.013-.4-.013-.613-.013-.214 0-.56.08-.853.4-.294.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.213 3.52 5.453 4.786 2.694 1.067 3.24.854 3.827.8.586-.053 1.893-.773 2.16-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373-.32-.16-1.893-.934-2.187-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-.986 1.253-.16.213-.32.24-.64.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.143-.144.32-.374.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.693-1.747-.96-2.387z"/>
        </svg>

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      </a>
    </div>
  )
}
