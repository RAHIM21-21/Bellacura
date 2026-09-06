export default function StickyOrderButton({ desktop = false }: { desktop?: boolean }) {
  if (desktop) {
    return (
      <a
        href="/checkout-scelta/"
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg whitespace-nowrap"
      >
        Ordina Ora
      </a>
    )
  }

  return (
    <div className="md:hidden px-3 pt-3 pb-3" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
      <a
        href="/checkout-scelta/"
        className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-bold text-base py-4 rounded-2xl shadow-lg active:bg-red-700"
      >
        Ordina Ora — €59,90
      </a>
    </div>
  )
}
