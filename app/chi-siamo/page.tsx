import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Star } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
 title: 'Chi Siamo – BellaCura, il Benessere Femminile Italiano',
 description: 'BellaCura nasce con una missione: portare il benessere professionale nella vita quotidiana di ogni donna italiana. Scopri la nostra storia e i nostri valori.',
 path: '/chi-siamo/',
})

export default function ChiSiamoPage() {
 return (
 <>
 <section className="bg-gradient-to-br from-[#EBF4F8] via-white to-[#EBF4F8] py-20 text-center">
 <div className="container-tight max-w-2xl">
 <span className="badge mb-4">La nostra storia</span>
 <h1 className="font-sans text-4xl text-gray-900 mb-6">
 Nate per far sentire ogni donna <span className="text-[#457B9D]">al meglio di sé</span>
 </h1>
 <p className="text-gray-600 text-lg leading-relaxed">
 BellaCura è un brand italiano di benessere femminile. Selezioniamo e proponiamo solo prodotti testati, efficaci e accessibili — perché ogni donna merita prendersi cura di sé, ogni giorno.
 </p>
 </div>
 </section>

 <section className="section bg-white">
 <div className="container-tight max-w-3xl">
 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
 <div className="aspect-video rounded-2xl bg-[#EBF4F8] flex items-center justify-center text-8xl">‍</div>
 <div>
 <h2 className="font-sans text-2xl text-gray-900 mb-4">La nostra missione</h2>
 <p className="text-gray-600 leading-relaxed mb-4">
 Crediamo che il benessere non debba essere un lusso riservato a poche. Per questo selezioniamo prodotti professionali e li rendiamo accessibili a tutte le donne italiane, con pagamento alla consegna e spedizione gratuita.
 </p>
 <p className="text-gray-600 leading-relaxed">
 Ogni prodotto BellaCura viene testato internamente, valutato dalle nostre clienti e proposto solo quando siamo certe che funzioni davvero.
 </p>
 </div>
 </div>

 <div className="grid md:grid-cols-3 gap-6 mb-16">
 {[
 { icon: 'Italia', title: '100% Italiano', desc: 'Spedizioni da magazzini italiani. Supporto clienti in italiano, 7 giorni su 7.' },
 { icon: '', title: 'Testato sul Campo', desc: 'Ogni prodotto viene testato per settimane prima di essere messo in vendita.' },
 { icon: '', title: 'Clienti Prima di Tutto', desc: 'Reso gratuito 14 giorni, garanzia 12 mesi, supporto dedicato per ogni ordine.' },
 ].map((v) => (
 <div key={v.title} className="card text-center">
 <div className="text-4xl mb-3">{v.icon}</div>
 <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
 </div>
 ))}
 </div>

 <div className="p-8 bg-[#EBF4F8] rounded-2xl text-center">
 <div className="flex justify-center mb-3">
 {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-amber-400 fill-amber-400" />)}
 </div>
 <p className="font-sans text-2xl text-gray-900 mb-2">"Non è solo un prodotto — è una routine che mi ha cambiata"</p>
 <p className="text-gray-500 text-sm">— Martina G., cliente BellaCura da 8 mesi</p>
 </div>
 </div>
 </section>

 <section className="section bg-[#1D3557] text-white text-center">
 <div className="container-tight max-w-xl">
 <h2 className="font-sans text-white text-3xl mb-4">Scopri i nostri prodotti</h2>
 <p className="text-[#D6EAF0] mb-8">Selezionati con cura, testati con rigore, amati da oltre 2.800+ donne italiane.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link href="/prodotti/massaggio-anticellulite-4in1/" className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#1D3557] font-bold rounded-full hover:bg-[#EBF4F8] transition-colors">Massaggiatore 4 in 1</Link>
 <Link href="/prodotti/leggings-anticellulite-3d/" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">Leggings 3D</Link>
 </div>
 </div>
 </section>
 </>
 )
}
