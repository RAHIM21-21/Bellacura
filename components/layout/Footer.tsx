import Link from 'next/link'

const footerLinks = {
 prodotti: [
 { href: '/prodotti/massaggio-anticellulite-4in1/', label: 'Massaggiatore Anticellulite 4 in 1' },
  ],
 aiuto: [
 { href: '/come-ordinare/', label: 'Come Ordinare' },
 { href: '/garanzia/', label: 'Garanzia & Resi' },
 { href: '/faq/', label: 'Domande Frequenti' },
 { href: '/traccia-ordine/', label: 'Traccia il tuo Ordine' },
 { href: '/contatti/', label: 'Contatti' },
 ],
 informazioni: [
 { href: '/chi-siamo/', label: 'Chi Siamo' },
 { href: '/blog/', label: 'Blog Benessere' },
 { href: '/blog/come-eliminare-cellulite-casa/', label: 'Eliminare la Cellulite' },
 { href: '/blog/massaggio-anticellulite-benefici/', label: 'Benefici del Massaggio' },
 ],
 legale: [
 { href: '/privacy-policy/', label: 'Privacy Policy' },
 { href: '/termini-condizioni/', label: 'Termini e Condizioni' },
 { href: '/cookie-policy/', label: 'Cookie Policy' },
 { href: '/diritto-recesso/', label: 'Diritto di Recesso' },
 ],
}

export default function Footer() {
 return (
 <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
 <div className="container-tight">

 {/* Trust bar */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-gray-800 rounded-2xl">
 {[
 { icon: '', title: 'Spedizione 24–48h', sub: 'Gratuita su tutti gli ordini' },
 { icon: '', title: 'Paga alla Consegna', sub: 'Nessun rischio, paghi quando ricevi' },
 { icon: '', title: 'Reso Gratuito 30gg', sub: 'Soddisfatti o rimborsati al 100%' },
 { icon: '', title: '2.800+ Clienti', sub: 'Recensioni verificate 4.9/5' },
 ].map((t) => (
 <div key={t.title} className="text-center">
 <div className="text-2xl mb-1">{t.icon}</div>
 <p className="text-white text-sm font-semibold">{t.title}</p>
 <p className="text-gray-400 text-xs">{t.sub}</p>
 </div>
 ))}
 </div>

 <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
 {/* Brand */}
 <div className="col-span-2 md:col-span-1">
 <p className="font-serif text-2xl font-bold text-white mb-3">BellaCura</p>
 <p className="text-sm text-gray-400 leading-relaxed mb-4">
 Prodotti di benessere selezionati per la donna italiana. Qualità, cura e risultati garantiti.
 </p>
 <div className="flex gap-4">
 <a href="https://www.instagram.com/bellacura.it" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors text-sm">Instagram</a>
 <a href="https://www.tiktok.com/@bellacura.it" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors text-sm">TikTok</a>
 </div>
 </div>

 <div>
 <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Prodotti</h3>
 <ul className="space-y-2">
 {footerLinks.prodotti.map((l) => (
 <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-rose-400 text-sm transition-colors">{l.label}</Link></li>
 ))}
 </ul>
 </div>

 <div>
 <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Aiuto</h3>
 <ul className="space-y-2">
 {footerLinks.aiuto.map((l) => (
 <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-rose-400 text-sm transition-colors">{l.label}</Link></li>
 ))}
 </ul>
 </div>

 <div>
 <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Informazioni</h3>
 <ul className="space-y-2">
 {footerLinks.informazioni.map((l) => (
 <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-rose-400 text-sm transition-colors">{l.label}</Link></li>
 ))}
 </ul>
 </div>

 <div>
 <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legale</h3>
 <ul className="space-y-2">
 {footerLinks.legale.map((l) => (
 <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-rose-400 text-sm transition-colors">{l.label}</Link></li>
 ))}
 </ul>
 </div>
 </div>

 {/* Payment methods + copyright */}
 <div className="border-t border-gray-800 pt-8">
 <div className="flex flex-col md:flex-row items-center justify-between gap-4">
 <p className="text-gray-500 text-sm">© {new Date().getFullYear()} BellaCura · Tutti i diritti riservati</p>
 <div className="flex items-center gap-3 text-gray-600 text-xs">
 <span className="bg-gray-800 px-3 py-1 rounded font-bold">VISA</span>
 <span className="bg-gray-800 px-3 py-1 rounded font-bold">MC</span>
 <span className="bg-gray-800 px-3 py-1 rounded font-bold">PayPal</span>
 <span className="bg-gray-800 px-3 py-1 rounded font-bold">Contrassegno</span>
 </div>
 </div>
 </div>
 </div>
 </footer>
 )
}
