import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
 title: 'Diritto di Recesso | BellaCura',
 description: 'Come esercitare il diritto di recesso e richiedere un reso o rimborso su BellaCura. Procedura semplice entro 14 giorni.',
 robots: { index: false, follow: false },
}

export default function DirittoRecessoPage() {
 return (
 <main className="min-h-screen bg-cream-50 py-16">
 <div className="max-w-3xl mx-auto px-4 sm:px-6">
 <nav className="text-sm text-gray-500 mb-6">
 <Link href="/" className="hover:text-rose-600">Home</Link>
 <span className="mx-2">/</span>
 <span className="text-gray-800">Diritto di Recesso</span>
 </nav>

 <h1 className="text-3xl font-bold text-gray-900 mb-2">Diritto di Recesso</h1>
 <p className="text-gray-500 text-sm mb-10">Ai sensi del D.Lgs. 206/2005 (Codice del Consumo)</p>

 {/* Hero box */}
 <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-6 mb-10 text-center">
 <div className="text-5xl mb-3"></div>
 <h2 className="text-2xl font-bold text-gray-900 mb-2">14 giorni per ripensarci</h2>
 <p className="text-gray-600 max-w-lg mx-auto">
 Puoi restituire qualsiasi prodotto entro 14 giorni dalla consegna, senza dover fornire alcuna spiegazione. Rimborso completo garantito.
 </p>
 </div>

 <div className="prose prose-gray max-w-none space-y-8">

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">Il tuo diritto per legge</h2>
 <p className="text-gray-700 leading-relaxed">
 Ai sensi dell&apos;art. 52 del Codice del Consumo, hai il diritto di recedere dal contratto di acquisto entro <strong>14 giorni</strong> dalla ricezione del prodotto, senza necessità di fornire alcuna motivazione e senza penali.
 </p>
 <p className="text-gray-700 leading-relaxed mt-3">
 <strong>BellaCura amplia questo diritto a 14 giorni</strong>, offrendoti il doppio del tempo previsto dalla legge per valutare il prodotto con calma.
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">Come esercitare il recesso — 3 passi</h2>

 <div className="space-y-4">
 <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
 <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-lg">1</div>
 <div>
 <h3 className="font-semibold text-gray-900 mb-1">Comunicaci la tua decisione</h3>
 <p className="text-gray-600 text-sm">
 Invia una email a <a href="mailto:resi@bellacura.it" className="text-rose-600 hover:underline">resi@bellacura.it</a> con oggetto <em>&quot;Reso ordine #[numero ordine]&quot;</em>, oppure scrivici su WhatsApp al numero indicato nella <Link href="/contatti/" className="text-rose-600 hover:underline">pagina contatti</Link>.
 </p>
 </div>
 </div>

 <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
 <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-lg">2</div>
 <div>
 <h3 className="font-semibold text-gray-900 mb-1">Rispedisci il prodotto</h3>
 <p className="text-gray-600 text-sm">
 Ti forniremo l&apos;indirizzo di reso. Imballa il prodotto nella confezione originale (o equivalente) e spediscilo con qualsiasi corriere. Le spese di restituzione sono a carico del cliente, salvo il caso di prodotto difettoso o errato.
 </p>
 </div>
 </div>

 <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
 <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-lg">3</div>
 <div>
 <h3 className="font-semibold text-gray-900 mb-1">Ricevi il rimborso</h3>
 <p className="text-gray-600 text-sm">
 Non appena riceveremo il reso e verificheremo le condizioni del prodotto, elaboreremo il rimborso entro <strong>5 giorni lavorativi</strong>. Il rimborso avviene con lo stesso metodo di pagamento usato per l&apos;acquisto.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">Condizioni del prodotto da restituire</h2>
 <p className="text-gray-700 leading-relaxed mb-3">Il prodotto restituito deve essere:</p>
 <ul className="list-disc list-inside text-gray-700 space-y-2">
 <li>In condizioni integre, senza danni o segni evidenti di usura eccessiva</li>
 <li>Completo di tutti gli accessori e componenti originali</li>
 <li>Accompagnato da una copia dello scontrino o della conferma d&apos;ordine</li>
 </ul>
 <p className="text-gray-700 leading-relaxed mt-3">
 Se il prodotto è danneggiato o incompleto, potremmo applicare una riduzione del rimborso proporzionale alla diminuzione di valore del bene.
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">Prodotto difettoso o sbagliato?</h2>
 <p className="text-gray-700 leading-relaxed">
 Se hai ricevuto un prodotto difettoso o diverso da quello ordinato, la restituzione è completamente <strong>gratuita</strong>: provvederemo noi alla raccolta del pacco tramite corriere. Contattaci entro 48 ore dalla consegna allegando foto del prodotto.
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">Modulo di recesso (facoltativo)</h2>
 <p className="text-gray-700 leading-relaxed">
 Non sei obbligato a usare un modulo specifico: una semplice email è sufficiente. Se preferisci, puoi indicare nella comunicazione: il tuo nome, il numero d&apos;ordine, i prodotti da restituire e il tuo IBAN per rimborsi su ordini in contrassegno.
 </p>
 </section>

 </div>

 {/* CTA */}
 <div className="mt-12 flex flex-col sm:flex-row gap-4">
 <a
 href="mailto:resi@bellacura.it"
 className="flex-1 block text-center bg-rose-600 text-white px-6 py-4 rounded-full font-semibold hover:bg-rose-700 transition-colors"
 >
 Richiedi il reso
 </a>
 <Link
 href="/garanzia/"
 className="flex-1 block text-center bg-white text-rose-600 border-2 border-rose-600 px-6 py-4 rounded-full font-semibold hover:bg-rose-50 transition-colors"
 >
 La nostra garanzia
 </Link>
 </div>
 </div>
 </main>
 )
}
