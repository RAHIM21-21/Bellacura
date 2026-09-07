import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
 ...buildMetadata({
 title: 'Come Eliminare la Cellulite a Casa: 7 Metodi Efficaci',
 description:
 'Guida completa per eliminare la cellulite a casa. Scopri i 7 metodi più efficaci: massaggi, alimentazione, esercizi e dispositivi professionali. Risultati visibili in 2 settimane.',
 path: '/blog/come-eliminare-cellulite-casa/',
 }),
 keywords: 'come eliminare cellulite, cellulite rimedi casa, ridurre cellulite, massaggio anticellulite, cellulite gambe, cellulite cause',
}

const breadcrumb = breadcrumbSchema([
 { name: 'Home', url: `${SITE_URL}/` },
 { name: 'Blog', url: `${SITE_URL}/blog/` },
 { name: 'Come Eliminare la Cellulite a Casa', url: `${SITE_URL}/blog/come-eliminare-cellulite-casa/` },
])

export default function ArticoloCellulite() {
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

 {/* Breadcrumb */}
 <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 py-3">
 <ol className="container-tight flex items-center gap-2 text-sm text-gray-500">
 <li><Link href="/" className="hover:text-rose-500">Home</Link></li>
 <li>/</li>
 <li><Link href="/blog/" className="hover:text-rose-500">Blog</Link></li>
 <li>/</li>
 <li className="text-gray-900 font-medium" aria-current="page">Come Eliminare la Cellulite a Casa</li>
 </ol>
 </nav>

 <article className="section">
 <div className="max-w-3xl mx-auto px-4">

 {/* Header */}
 <header className="mb-10">
 <div className="flex items-center gap-3 mb-4">
 <span className="badge">Anticellulite</span>
 <time className="text-gray-400 text-sm" dateTime="2024-09-01">1 settembre 2024</time>
 <span className="text-gray-400 text-sm">· 8 min di lettura</span>
 </div>
 <h1 className="font-serif text-4xl text-gray-900 mb-6 leading-tight">
 Come Eliminare la Cellulite a Casa: 7 Metodi che Funzionano Davvero
 </h1>
 <p className="text-xl text-gray-600 leading-relaxed">
 La cellulite colpisce oltre l'80% delle donne, indipendentemente dal peso corporeo. In questa guida completa
 scopri i metodi più efficaci per ridurla comodamente a casa, senza spendere centinaia di euro in trattamenti estetici.
 </p>
 </header>

 {/* Featured image placeholder */}
 <div className="aspect-video rounded-3xl bg-rose-50 flex items-center justify-center text-8xl mb-10 shadow-sm">
 ‍
 </div>

 {/* Article content */}
 <div className="prose prose-gray max-w-none space-y-8">

 <section>
 <h2 className="font-serif text-2xl text-gray-900 mb-4">Cos'è la Cellulite e Perché Compare</h2>
 <p className="text-gray-700 leading-relaxed">
 La cellulite (o pannicolopatia edemato-fibrosclerotica) è un'alterazione del tessuto adiposo sottocutaneo
 che provoca la caratteristica pelle "a buccia d'arancia". Non è solo un inestetismo: indica una disfunzione
 nella circolazione linfatica e sanguigna del derma.
 </p>
 <p className="text-gray-700 leading-relaxed mt-3">
 Le cause principali includono: squilibri ormonali (estrogeni), predisposizione genetica, sedentarietà,
 alimentazione scorretta e ritenzione idrica. Per questo motivo non esiste una soluzione "universale" —
 l'approccio più efficace combina più strategie.
 </p>
 </section>

 <section>
 <h2 className="font-serif text-2xl text-gray-900 mb-6">I 7 Metodi Più Efficaci per Ridurre la Cellulite</h2>

 {[
 {
 num: '1',
 title: 'Massaggio Anticellulite con Dispositivo Elettrico',
 content: `Il massaggio meccanico è uno dei trattamenti più efficaci scientificamente documentati.
 Un massaggiatore anticellulite professionale combina vibrazione profonda e calore per stimolare la
 microcircolazione, drenare i liquidi in eccesso e rompere i depositi di grasso localizzato.

 Come eseguirlo correttamente: applica una crema anticellulite sulla zona da trattare,
 poi lavora con movimenti circolari dal basso verso l'alto per 10 minuti al giorno.
 Dopo 10-14 giorni di utilizzo costante noterai una riduzione visibile della pelle a buccia d'arancia.`,
 tip: 'Il massaggiatore BellaCura 4 in 1 combina vibrazione, calore a infrarossi e 4 testine specifiche per ogni zona del corpo.',
 },
 {
 num: '2',
 title: 'Idratazione: Bevi Almeno 2 Litri d\'Acqua al Giorno',
 content: `La ritenzione idrica è una delle cause principali della cellulite. Bere abbastanza acqua
 aiuta il corpo a eliminare le tossine, riduce il gonfiore e migliora l'elasticità della pelle.

 Per massimizzare i benefici, aggiungi succo di limone all'acqua al mattino: stimola il drenaggio
 linfatico e favorisce la digestione. Tisane drenanti a base di betulla, tarassaco o finocchio
 sono un valido complemento.`,
 tip: null,
 },
 {
 num: '3',
 title: 'Alimentazione Anti-Infiammatoria',
 content: `Riduci gli alimenti che favoriscono la ritenzione idrica: sale in eccesso, zuccheri raffinati,
 alcol e cibi ultra-processati. Aumenta invece: frutti di bosco (ricchi di antiossidanti),
 salmone e avocado (omega-3 anti-infiammatori), verdure a foglia verde (drenanti naturali).`,
 tip: null,
 },
 {
 num: '4',
 title: 'Esercizio Fisico Mirato',
 content: `Combinare cardio e allenamento con i pesi è la strategia più efficace. Il cardio (camminata
 veloce, nuoto, ciclismo) migliora la circolazione e brucia i grassi. Gli esercizi di tonificazione
 (squat, affondi, glutei) rendono la pelle più soda e compatta.

 Anche una passeggiata di 30 minuti al giorno fa la differenza nel tempo.`,
 tip: null,
 },
 {
 num: '5',
 title: 'Doccia Alternata Caldo-Freddo',
 content: `Un rimedio antico ma scientificamente valido. Il contrasto termico stimola la circolazione
 sanguigna e linfatica, riducendo il ristagno di liquidi. Termina sempre la doccia con 30 secondi
 di acqua fredda su gambe e glutei, massaggiando dall'alto verso il basso.`,
 tip: null,
 },
 {
 num: '6',
 title: 'Scrub Corpo Regolare',
 content: `Lo scrub esfoliante rimuove le cellule morte e stimola il microcircolo cutaneo,
 rendendo la pelle più ricettiva ai successivi trattamenti. Usa uno scrub al caffè 2-3 volte
 a settimana sulle zone interessate, con movimenti circolari decisi. Il caffè contiene caffeina,
 che ha dimostrate proprietà lipolitiche.`,
 tip: null,
 },
 {
 num: '7',
 title: 'Crema Anticellulite ad Assorbimento Profondo',
 content: `Le creme anticellulite non eliminano la cellulite da sole, ma potenziano significativamente
 l'effetto degli altri trattamenti. Scegli formule con caffeina, retinolo, estratto di edera o
 L-carnitina. Applica con un massaggio ascendente, preferibilmente dopo il massaggio meccanico
 quando i pori sono aperti.`,
 tip: null,
 },
 ].map((item) => (
 <div key={item.num} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
 <div className="flex items-start gap-4">
 <span className="w-10 h-10 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center flex-shrink-0">
 {item.num}
 </span>
 <div className="flex-1">
 <h3 className="font-semibold text-gray-900 text-lg mb-3">{item.title}</h3>
 <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{item.content}</div>
 {item.tip && (
 <div className="mt-4 bg-rose-50 rounded-xl p-3 text-rose-700 text-sm border border-rose-100">
 <strong>Consiglio BellaCura:</strong> {item.tip}
 </div>
 )}
 </div>
 </div>
 </div>
 ))}
 </section>

 <section>
 <h2 className="font-serif text-2xl text-gray-900 mb-4">Quanto Tempo Ci Vuole per Vedere i Risultati?</h2>
 <p className="text-gray-700 leading-relaxed">
 I primi miglioramenti — riduzione del gonfiore e maggiore tonicità — si notano già dopo <strong>7-10 giorni</strong>
 seguendo un programma costante. Per risultati più profondi e duraturi, sono necessarie 4-8 settimane
 di trattamento combinato (massaggi + alimentazione + esercizio).
 </p>
 <p className="text-gray-700 leading-relaxed mt-3">
 La costanza è la chiave. Un massaggio da 10 minuti al giorno, tutti i giorni, vale più di una sessione
 da un'ora una volta a settimana.
 </p>
 </section>

 </div>

 {/* CTA box */}
 <div className="mt-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-8 text-white text-center">
 <h2 className="font-serif text-2xl mb-3">Pronta a iniziare il tuo percorso?</h2>
 <p className="text-rose-100 mb-6">
 Il Massaggiatore Anticellulite 4 in 1 di BellaCura combina tutti e 7 i metodi in un unico dispositivo.
 </p>
 <Link
 href="/prodotti/massaggio-anticellulite-4in1/"
 className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-bold rounded-full hover:bg-rose-50 transition-colors"
 >
 Scopri il Massaggiatore – €59,90
 </Link>
 </div>

 {/* Author / related */}
 <div className="mt-10 pt-8 border-t border-gray-200">
 <p className="text-sm text-gray-500 mb-6">
 Articolo verificato dal team BellaCura · Aggiornato: 1 settembre 2024
 </p>
 <h3 className="font-semibold text-gray-900 mb-4">Leggi anche:</h3>
 <Link
 href="/blog/massaggio-anticellulite-benefici/"
 className="block card hover:shadow-md transition-shadow"
 >
 <p className="font-medium text-gray-900">Massaggio Anticellulite: Benefici, Tecniche e Frequenza Ideale →</p>
 </Link>
 </div>

 </div>
 </article>
 </>
 )
}
