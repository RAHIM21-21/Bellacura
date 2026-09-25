export default function WhatsAppWidget() {
  const href =
    'https://wa.me/393314430286?text=ho%20una%20domanda%20su%20bellacura%20...'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hai una domanda? Scrivici su WhatsApp"
      className="fixed bottom-[88px] right-4 z-50 md:bottom-6 md:right-6 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bf5b] active:bg-[#1aa84f] text-white rounded-full shadow-lg shadow-black/20 transition-all duration-200 group"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Icon bubble */}
      <span className="flex items-center justify-center w-14 h-14 shrink-0">
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.494.664 4.83 1.822 6.845L2 30l7.37-1.794A13.922 13.922 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.836-1.6l-.418-.248-4.37 1.064 1.1-4.25-.272-.436A11.46 11.46 0 014.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.29-8.548c-.344-.172-2.036-1.004-2.352-1.118-.316-.116-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.536-2.766-1.706-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.154-.154.344-.4.516-.6.172-.2.23-.344.344-.574.116-.23.058-.43-.028-.602-.086-.172-.776-1.872-1.062-2.562-.28-.674-.564-.582-.776-.594l-.66-.012c-.23 0-.602.086-.918.43-.316.344-1.204 1.176-1.204 2.868s1.232 3.326 1.404 3.556c.172.23 2.426 3.706 5.878 5.196.822.354 1.464.566 1.964.724.824.262 1.574.224 2.168.136.66-.098 2.036-.832 2.322-1.636.286-.804.286-1.492.2-1.636-.086-.144-.316-.23-.66-.402z" />
        </svg>
      </span>
      {/* Label — visible on desktop hover */}
      <span className="hidden md:block text-sm font-bold pr-5 max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out">
        Hai una domanda? Scrivici su WhatsApp
      </span>
    </a>
  )
}
