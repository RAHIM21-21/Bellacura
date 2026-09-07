export default function StickyOrderButton({ desktop = false }: { desktop?: boolean }) {
  if (desktop) {
    return (
      <a
        href="https://bellacura-shop.myshopify.com/cart/48238649606302:1?checkout"
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg whitespace-nowrap"
      >
        Ordina Ora
      </a>
    )
  }

  return (
    <div
      className="md:hidden flex items-center gap-3 px-3 pt-2.5"
      style={{ paddingBottom: 'max(10px, env(safe-area-inset-bottom))' }}
    >
      {/* Left: branding + price */}
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 leading-none mb-0.5">BellaCura®</p>
        <div className="flex items-baseline gap-1.5">
          <span className="text-gray-400 line-through text-xs">€119,00</span>
          <span className="font-extrabold text-gray-900 text-lg leading-none">€59,90</span>
        </div>
      </div>
      {/* Right: CTA button */}
      <a
        href="https://bellacura-shop.myshopify.com/cart/48238649606302:1?checkout"
        className="shrink-0 flex items-center justify-center bg-red-600 active:bg-red-700 text-white font-bold text-sm px-6 py-4 rounded-2xl shadow-lg whitespace-nowrap min-w-[130px]"
      >
        Ordina Ora →
      </a>
    </div>
  )
}
