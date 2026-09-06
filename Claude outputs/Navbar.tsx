'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import BellaCuraLogo from '@/components/ui/BellaCuraLogo'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-rose-100 shadow-sm">
      <div className="container-tight flex items-center justify-between h-16">

        {/* Logo */}
        <BellaCuraLogo size="md" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <Link href="/prodotti/massaggio-anticellulite-4in1/" className="hover:text-rose-600 transition-colors">Prodotto</Link>
          <Link href="#recensioni" className="hover:text-rose-600 transition-colors">Recensioni</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/prodotti/massaggio-anticellulite-4in1/"
            className="hidden md:inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            <ShoppingCart size={15} />
            Ordina Ora
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-rose-600"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-rose-50 px-6 py-4 space-y-3 text-sm font-medium text-gray-700">
          <Link href="/" className="block hover:text-rose-600" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/prodotti/massaggio-anticellulite-4in1/" className="block hover:text-rose-600" onClick={() => setOpen(false)}>Prodotto</Link>
          <Link href="#recensioni" className="block hover:text-rose-600" onClick={() => setOpen(false)}>Recensioni</Link>
          <Link
            href="/prodotti/massaggio-anticellulite-4in1/"
            className="block mt-2 text-center bg-rose-600 text-white py-2.5 rounded-full font-bold"
            onClick={() => setOpen(false)}
          >
            Ordina Ora
          </Link>
        </div>
      )}
    </header>
  )
}
