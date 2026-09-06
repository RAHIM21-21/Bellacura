import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
 title: 'Termini e Condizioni | BellaCura',
 description: 'Termini e condizioni di vendita di BellaCura. Tutto quello che devi sapere prima di acquistare.',
 robots: { index: false, follow: false },
}

export default function TerminiCondizioniPage() {
 return (
 <main className="min-h-screen bg-cream-50 py-16">
 <div className="max-w-3xl mx-auto px-4 sm:px-6">
 <nav className="text-sm text-gray-500 mb-6">
 <Link href="/" className="hover:text-rose-600">Home</Link>
 <span className="mx-2">/</span>
 <span className="text-gray-800">Termini e Condizioni</span>
 </nav>

 <h1 className="text-3xl font-bold text-gray-900 mb-2">Termini e Condizioni di Vendita</h1>
 <p className="text-gray-500 text-sm mb-10">Ultimo aggiornamento: Settembre 2025</p>

 <div className="prose prose-gray max-w-none space-y-8">

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Informazioni sull&apos;azienda</h2>
 <p className="text-gray-700 leading-relaxed">
 BellaCura S.r.l. gestisce il sito bellacura.it e vende prodotti per la cura del corpo in tutta Italia. Per qualsiasi comunicazione: <a href="mailto:info@bellacura.it" className="text-rose-600 hover:underline">info@bellacura.it</a>
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Prodotti e disponibilità</h2>
 <p className="text-gray-700 leading-relaxed">
 I prodotti presentati sul sito sono disponibili fino ad esaurimento scorte. BellaCura si riserva il diritto di modificare prezzi e disponibilità in qualsiasi momento, senza preavviso. Le foto dei prodotti sono indicative; il prodotto ricevuto potrebbe presentare lievi differenze di colore dovute alla calibrazione del monitor.
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Prezzi e pagamento</h2>
 <p className="text-gray-700 leading-relaxed mb-3">
 Tutti i prezzi sono espressi in Euro (€) e includono IVA. Sono disponibili i seguenti metodi di pagamento:
 </p>
 <ul className="list-disc list-inside text-gray-700 space-y-2">
 <li><strong>Contrassegno (pagamento alla consegna):</strong> paghi in contanti al corriere alla ricezione del pacco</li>
 <li><strong>Carta di credito/debito:</strong> tramite circuiti Visa, Mastercard, gestiti da Stripe in modalità sicura</li>
 </ul>
 <p className="text-gray-700 leading-relaxed mt-3">
 Per il contrassegno potrebbe essere applicato un contributo spese di gestione di €2,00.
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Spedizioni e consegna</h2>
 <p className="text-gray-700 leading-relaxed mb-3">
 Spediamo in tutta Italia tramite corrieri espressi (SDA, BRT, GLS). I tempi di consegna indicativi sono:
 </p>
 <ul className="list-disc list-inside text-gray-700 space-y-2">
 <li>Nord Italia: 24–48 ore lavorative</li>
 <li>Centro Italia: 24–48 ore lavorative</li>
 <li>Sud Italia e isole: 48–72 ore lavorative</li>
 </ul>
 <p className="text-gray-700 leading-relaxed mt-3">
 La spedizione è <strong>gratuita</strong> per tutti gli ordini. Gli ordini effettuati entro le 14:00 nei giorni lavorativi vengono spediti il giorno stesso.
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Diritto di recesso</h2>
 <p className="text-gray-700 leading-relaxed">
 Hai diritto di recedere dal contratto entro <strong>30 giorni</strong> dalla ricezione del prodotto, senza dover fornire alcuna motivazione. Per esercitare il diritto di recesso, consulta la nostra pagina dedicata:{' '}
 <Link href="/diritto-recesso/" className="text-rose-600 hover:underline">Diritto di Recesso</Link>.
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Garanzia legale</h2>
 <p className="text-gray-700 leading-relaxed">
 Tutti i prodotti BellaCura sono coperti dalla garanzia legale di conformità di 2 anni prevista dal Codice del Consumo (D.Lgs. 206/2005). In aggiunta, offriamo la nostra <Link href="/garanzia/" className="text-rose-600 hover:underline">Garanzia Soddisfatti o Rimborsati 30 giorni</Link>.
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Limitazione di responsabilità</h2>
 <p className="text-gray-700 leading-relaxed">
 I prodotti BellaCura sono dispositivi per uso cosmetico/massaggio. Non sono dispositivi medici e non sostituiscono cure mediche. I risultati possono variare da persona a persona. BellaCura non è responsabile di un uso improprio dei prodotti.
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Legge applicabile e foro competente</h2>
 <p className="text-gray-700 leading-relaxed">
 I presenti Termini e Condizioni sono regolati dalla legge italiana. Per eventuali controversie con consumatori, è competente il giudice del luogo di residenza o domicilio del consumatore. Prima di adire le vie legali, ti invitiamo a contattarci per risolvere la questione amichevolmente.
 </p>
 </section>

 <section>
 <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Modifiche ai termini</h2>
 <p className="text-gray-700 leading-relaxed">
 BellaCura si riserva il diritto di modificare questi Termini in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento. L&apos;utilizzo del sito dopo la pubblicazione delle modifiche implica l&apos;accettazione dei nuovi termini.
 </p>
 </section>

 </div>

 <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
 <Link href="/garanzia/" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-rose-300 transition-colors text-center">
 <div className="text-2xl mb-2"></div>
 <div className="font-semibold text-gray-900 text-sm">Garanzia 30 giorni</div>
 </Link>
 <Link href="/diritto-recesso/" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-rose-300 transition-colors text-center">
 <div className="text-2xl mb-2">↩</div>
 <div className="font-semibold text-gray-900 text-sm">Diritto di Recesso</div>
 </Link>
 <Link href="/contatti/" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-rose-300 transition-colors text-center">
 <div className="text-2xl mb-2"></div>
 <div className="font-semibold text-gray-900 text-sm">Contattaci</div>
 </Link>
 </div>
 </div>
 </main>
 )
}
