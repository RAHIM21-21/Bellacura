'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Star } from 'lucide-react'

const purchases = [
 { name: 'Martina', city: 'Milano', product: 'Massaggiatore 4 in 1', time: '2 minuti fa' },
 { name: 'Giulia', city: 'Roma', product: 'Massaggiatore 4 in 1', time: '5 minuti fa' },
 { name: 'Alessia', city: 'Napoli', product: 'Massaggiatore 4 in 1', time: '8 minuti fa' },
 { name: 'Sofia', city: 'Torino', product: 'Massaggiatore 4 in 1', time: '12 minuti fa' },
 { name: 'Laura', city: 'Firenze', product: 'Massaggiatore 4 in 1', time: '3 minuti fa' },
 { name: 'Valentina', city: 'Bologna', product: 'Massaggiatore 4 in 1', time: '7 minuti fa' },
 { name: 'Francesca', city: 'Venezia', product: 'Massaggiatore 4 in 1', time: '15 minuti fa' },
 { name: 'Chiara', city: 'Palermo', product: 'Massaggiatore 4 in 1', time: '1 minuto fa' },
]

const CHECKOUT_PATHS = ['/checkout-scelta', '/checkout', '/grazie']

export default function SocialProofToast() {
 const pathname = usePathname()
 const [visible, setVisible] = useState(false)
 const [current, setCurrent] = useState(0)

 const isCheckout = CHECKOUT_PATHS.some(p => pathname?.startsWith(p))

 useEffect(() => {
   if (isCheckout) return

   // First show after 6s
   const firstTimer = setTimeout(() => {
     setVisible(true)
     // Hide after 4s
     setTimeout(() => setVisible(false), 4000)
   }, 6000)

   // Then repeat every 18s
   const interval = setInterval(() => {
     setCurrent((c) => (c + 1) % purchases.length)
     setVisible(true)
     setTimeout(() => setVisible(false), 4000)
   }, 18000)

   return () => { clearTimeout(firstTimer); clearInterval(interval) }
 }, [isCheckout])

 if (isCheckout) return null

 const p = purchases[current]

 return (
   <div
     className={`fixed bottom-24 left-4 z-50 transition-all duration-500 ${
       visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
     }`}
   >
     <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 flex items-center gap-3 max-w-xs">
       <div className="w-10 h-10 rounded-full bg-[#D6EAF0] flex items-center justify-center text-xl shrink-0">
         🛍️
       </div>
       <div>
         <p className="text-sm font-semibold text-gray-900">
           {p.name} da {p.city}
         </p>
         <p className="text-xs text-gray-500">ha appena ordinato <strong>{p.product}</strong></p>
         <div className="flex items-center gap-1 mt-1">
           {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-amber-400 fill-amber-400" />)}
           <span className="text-xs text-gray-400 ml-1">{p.time}</span>
         </div>
       </div>
     </div>
   </div>
 )
}
