'use client'

import Link from 'next/link'
import { useState } from 'react'
// branded SVGs inline
import clsx from 'clsx'

const navLinks = [
 { href: '/prodotti/massaggio-anticellulite-4in1/', label: 'Massaggiatore' },
 { href: '/prodotti/leggings-anticellulite-3d/', label: 'Leggings 3D' },
 { href: '/blog/', label: 'Blog' },
]

const tickerMessages = [
 ' Consegna in 24–48 ore in tutta Italia',
 ' Pagamento alla consegna disponibile',
 ' Oltre 2.400 clienti soddisfatte',
 'Garanzia soddisfatti o rimborsati 14 giorni',
 'Spedizione GRATUITA su tutti gli ordini',
 'Offerta a tempo limitato – Solo oggi al 50%',
]

export default function Header() {
 const [open, setOpen] = useState(false)

 return (
 <header className="sticky top-0 z-50 bg-white shadow-sm">
 {/* Scrolling urgency ticker */}
 <div className="text-sm py-2 overflow-hidden" style={{background: 'linear-gradient(90deg, #F2C2CE 0%, #E8ADBE 50%, #F2C2CE 100%)', color: '#6B1E3A'}}>
 <div className="ticker-wrapper">
 <div className="ticker-track">
 {[...tickerMessages, ...tickerMessages].map((msg, i) => (
 <span key={i} className="ticker-item">
 {msg}
 <span className="ticker-sep">·</span>
 </span>
 ))}
 </div>
 </div>
 </div>

 <div className="container-tight flex items-center justify-between h-16">
 {/* Logo */}
 <Link href="/" className="logo-wordmark">
 <span className="logo-bella">Bella</span><span className="logo-cura">Cura</span>
 </Link>

 {/* Desktop nav */}
 <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
 {navLinks.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
 >
 {link.label}
 </Link>
 ))}
 </nav>

 {/* CTA */}
 <div className="hidden md:flex items-center gap-4">
 <a href="https://wa.me/393314430286?text=Ciao%21%20Ho%20una%20domanda%20sul%20massaggiatore%20BellaCura%20%F0%9F%98%8A" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-500 flex items-center gap-1 text-sm">
 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.12 2.38 2 2 0 012.11.2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg> Supporto
 </a>
 <Link href="/checkout-scelta" className="btn-primary py-2 px-6 text-sm">
 Ordina Ora
 </Link>
 </div>

 {/* Mobile menu toggle */}
 <button
 className="md:hidden p-2 text-gray-700"
 onClick={() => setOpen(!open)}
 aria-label={open ? 'Chiudi menu' : 'Apri menu'}
 >
 {open ? (
 <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
 ) : (
 <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
 )}
 </button>
 </div>

 {/* Mobile menu */}
 <div
 className={clsx(
 'md:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-300',
 open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
 )}
 >
 <nav className="flex flex-col px-4 py-4 gap-4" aria-label="Menu mobile">
 {navLinks.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="text-gray-700 hover:text-rose-600 font-medium py-2"
 onClick={() => setOpen(false)}
 >
 {link.label}
 </Link>
 ))}
 <Link
 href="/checkout-scelta"
 className="btn-primary text-center"
 onClick={() => setOpen(false)}
 >
 Ordina Ora
 </Link>
 </nav>
 </div>
 </header>
 )
}
