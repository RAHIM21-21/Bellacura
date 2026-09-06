import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
 ...buildMetadata({
 title: 'Massaggio Anticellulite: Benefici, Tecniche e Frequenza',
 description:
 'Scopri i benefici del massaggio anticellulite, le tecniche più efficaci e con quale frequenza eseguirlo per risultati ottimali. Guida completa con consigli pratici.',
 path: '/blog/massaggio-anticellulite-benefici/',
 }),
 keywords: 'massaggio anticellulite benefici, massaggio anticellulite frequenza, tecniche massaggio anticellulite, massaggio drenante gambe, massaggio anticellulite casa',
}

const breadcrumb = breadcrumbSchema([
 { name: 'Home', url: `${SITE_URL}/` },
 { name: 'Blog', url: `${SITE_URL}/blog/` },
 { name: 'Massaggio Anticellulite: Benefici e Tecniche', url: `${SITE_URL}/blog/massaggio-anticellulite-benefici/` },
])

export default function ArticoloMassaggio() {
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

 <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 py-3">
 <ol className="container-tight flex items-center gap-2 text-sm text-gray-500">
 <li><Link href="/" className="hover:text-rose-500">Home</Link></li>
 <li>/</li>
 <li><Link href="/blog/" className="hover:text-rose-500">Blog</Link></li>
 <li>/</li>
 <li className="text-gray-900 font-medium" aria-current="page">Massaggio Anticellulite: Benefici</li>
 </ol>
 </nav>

 <article className="section">
 <div className="max-w-3xl mx-auto px-4">
 <header className="mb-10">
 <div className="flex items-center gap-3 mb-4">
 <span className="badge">Massaggi</span>
 <time className="text-gray-400 text-sm" dateTime="2024-09-01">1 settembre 2024</time>
 <span className="text-gray-400 text-sm">· 6 min di lettura</span>
 </div>
 <h1 className="font-serif text-4xl text-gray-900 mb-6 leading-tight">
 Massaggio Anticellulite: Benefici, Tecniche e Frequenza Ideale
 </h1>
 <p className="text-xl text-gray-600 leading-relaxed">
 Il massaggio anticellulite è uno dei trattamenti più efficaci per combattere la pelle a buccia d'arancia.
 Ecco tutto quello che devi sapere per ottenere risultati concreti.
 </p>
 </header>

 <div className="aspect-video rounded-3xl bg-rose-50 flex items-center justify-center text-8xl mb-10 shadow-sm">
 </div>

 <div className="space-y-8">

 <section>
 <h2 className="font-serif text-2xl text-gray-900 mb-4">Perché il Massaggio Funziona sulla Cellulite?</h2>
 <p className="text-gray-700 leading-relaxed">
 La cellulite si forma quando le cellule adipose si ingrandiscono e spingono contro il tessuto connettivo,
 creando quella caratteristica superficie irregolare. Il massaggio agisce su più fronti:
 </p>
 <ul className="mt-4 space-y-2">
 {[
 'Stimola la microcircolazione sanguigna e linfatica',
 'Favorisce il drenaggio dei liquidi in eccesso',
 'Rompe i setti fibrosi che intrappolano le cellule adipose',
 'Migliora l\'ossigenazione dei tessuti',
 'Aumenta la produzione di collagene ed elastina',
 ].map((item) => (
 <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
 <span className="text-rose-500 font-bold mt-0.5"></span> {item}
 </li>
 ))}
 </ul>
 </section>

 <section>
 <h2 className="font-serif text-2xl text-gray-900 mb-6">Le 3 Tecniche di Massaggio Più Efficaci</h2>
 <div className="space-y-6">
 {[
 {
 title: 'Massaggio a Pizzicotto (Pétris age)',
 desc: 'Si esegue pizzicando e ruotando delicatamente la pelle tra pollice e indice, lavorando in piccole sezioni. Stimola in profondità il microcircolo. Ideale per cosce e glutei.',
 intensity: 'Media',
 },
 {
 title: 'Massaggio Drenante Ascendente',
 desc: 'Movimenti lunghi e decisi dal basso verso l\'alto (dalle caviglie verso l\'inguine). Favorisce il drenaggio linfatico e riduce il gonfiore delle gambe. Da eseguire con olio o crema.',
 intensity: 'Leggera',
 },
 {
 title: 'Massaggio a Vibrazione (con Dispositivo)',
 desc: 'Il più efficace. La vibrazione meccanica penetra nei tessuti profondi, impossibile da replicare manualmente. Un dispositivo professionale come il BellaCura 4 in 1 combina vibrazione, calore e pressione per risultati ottimali.',
 intensity: 'Profonda',
 },
 ].map((t) => (
 <div key={t.title} className="card border-l-4 border-rose-400">
 <div className="flex justify-between items-start mb-2">
 <h3 className="font-semibold text-gray-900">{t.title}</h3>
 <span className="badge text-xs">{t.intensity}</span>
 </div>
 <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
 </div>
 ))}
 </div>
 </section>

 <section>
 <h2 className="font-serif text-2xl text-gray-900 mb-4">Con Quale Frequenza Eseguire il Massaggio?</h2>
 <div className="grid sm:grid-cols-3 gap-4">
 {[
 { phase: 'Fase Intensiva', freq: 'Ogni giorno', duration: '2-4 settimane', desc: 'Per i primi risultati e per "sbloccare" i tessuti irrigiditi.' },
 { phase: 'Fase di Mantenimento', freq: '3-4 volte/settimana', duration: 'Continuativo', desc: 'Per consolidare i risultati e prevenire la recidiva.' },
 { phase: 'Minimo Efficace', freq: '2 volte/settimana', duration: 'Sempre', desc: 'Il minimo per mantenere i benefici nel tempo.' },
 ].map((p) => (
 <div key={p.phase} className="card text-center bg-rose-50 border-rose-100">
 <p className="font-bold text-rose-600 text-lg mb-1">{p.freq}</p>
 <p className="font-semibold text-gray-900 text-sm mb-1">{p.phase}</p>
 <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
 </div>
 ))}
 </div>
 </section>

 <section>
 <h2 className="font-serif text-2xl text-gray-900 mb-4">Consigli per Massimizzare i Risultati</h2>
 <div className="space-y-3">
 {[
 'Esegui sempre il massaggio su pelle pulita o con crema/olio anticellulite',
 'La mattina è ideale: il corpo è più ricettivo dopo il riposo notturno',
 'Bevi un bicchiere d\'acqua prima e dopo il massaggio per facilitare il drenaggio',
 'Abbina il massaggio a 30 minuti di camminata veloce quotidiana',
 'Non eseguire il massaggio su pelle arrossata, irritata o varicosa',
 ].map((tip, i) => (
 <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
 <span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">
 {i + 1}
 </span>
 <p className="text-gray-700 text-sm">{tip}</p>
 </div>
 ))}
 </div>
 </section>

 </div>

 {/* CTA */}
 <div className="mt-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-8 text-white text-center">
 <h2 className="font-serif text-2xl mb-3">Inizia il tuo trattamento oggi</h2>
 <p className="text-rose-100 mb-6">
 Il Massaggiatore 4 in 1 di BellaCura è progettato per eseguire tutte e 3 le tecniche in modo semplice, a casa tua.
 </p>
 <Link
 href="/prodotti/massaggio-anticellulite-4in1/"
 className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-bold rounded-full hover:bg-rose-50 transition-colors"
 >
 Scopri il Massaggiatore – €59,90
 </Link>
 </div>

 <div className="mt-10 pt-8 border-t border-gray-200">
 <p className="text-sm text-gray-500 mb-6">Articolo verificato dal team BellaCura · 1 settembre 2024</p>
 <h3 className="font-semibold text-gray-900 mb-4">Leggi anche:</h3>
 <Link href="/blog/come-eliminare-cellulite-casa/" className="block card hover:shadow-md transition-shadow">
 <p className="font-medium text-gray-900">Come Eliminare la Cellulite a Casa: 7 Metodi Efficaci →</p>
 </Link>
 </div>
 </div>
 </article>
 </>
 )
}
