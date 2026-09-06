import Link from 'next/link'

export default function StickyOrderButton({ desktop = false }: { desktop?: boolean }) {
  if (desktop) {
    return (
      <Link
        href="/checkout-scelta/"
        className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg whitespace-nowrap"
      >
        Ordina Ora
      </Link>
    )
  }

  return (
    <div className="md:hidden p-3">
      <Link
        href="/checkout-scelta/"
        className="flex items-center justify-center gap-2 w-full bg-rose-600 text-white font-bold text-base py-4 rounded-2xl shadow-lg"
      >
        Ordina Ora — 59,90 EUR
      </Link>
    </div>
  )
}
