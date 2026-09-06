import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, SITE_URL } from '@/lib/seo'
import { Star } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
 title: 'Leggings Anticellulite: Come Funzionano Davvero? La Guida Completa',
 description: 'I leggings anticellulite funzionano? Scopri come la tecnologia 3D agisce sulla cellulite, cosa dice la scienza e quali risultati puoi aspettarti in 2 settimane.',
 path: '/blog/leggings-anticellulite-come-funzionano/',
})

export default function BlogLeggingsPage() {
 return (
 <article className="max-w-2xl mx-auto px-4 py-12">
 <nav className="text-sm text-gray-400 mb-6">
 <Link href="/" className="hover:text-rose-500">Home</Link> /{' '}
 <Link href="/blog/" className="hover:text-rose-500">Blog</Link> /{' '}
 <span className="text-gray-700">Leggings Anticellulite</span>
 </nav>

 <span className="badge mb-4">Guida Completa</span>
 <h1 className="font-serif text-4xl text-gray-900 mb-4 leading-tight">
 Leggings Anticellulite: Come Funzionano Davvero?
 </h1>
 <p className="text-gray-500 text-sm mb-8">Aggiornato: 15 settembre 2024 · 8 min di lettura</p>

 <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
 <p className="text-lg font-medium text-gray-800">
 I leggings anticellulite funzionano? La risposta breve è: <strong>dipende dalla tecnologia</strong>. Quelli a semplice compressione generica, no. Quelli con tessuto 3D brevettato, sì — e la scienza lo conferma.
 </p>

 <h2 className="font-serif text-2xl text-gray-900 mt-8">La causa reale della cellulite</h2>
 <p>La cellulite non è solo grasso. È il risultato di una <strong>cattiva microcircolazione</strong> che provoca l'accumulo di liquidi e tossine nel tessuto adiposo sottocutaneo. Questo gonfia le cellule adipose, che spingono verso l'alto creando l'effetto "buccia d'arancia".</p>
 <p>Per combatterla davvero, bisogna agire sulla circolazione — non sulla superficie della pelle.</p>

 <h2 className="font-serif text-2xl text-gray-900 mt-8">Come funziona la tecnologia 3D</h2>
 <p>I <Link href="/prodotti/leggings-anticellulite-3d/" className="text-rose-500 underline font-medium">leggings anticellulite 3D BellaCura</Link> utilizzano un filato tecnico tridimensionale che genera una <strong>compressione graduata</strong>: più intensa alle caviglie, progressivamente più leggera salendo. Questo crea un effetto "pompa" che:</p>
 <ul className="list-disc pl-6 space-y-1">
 <li>Aumenta il flusso sanguigno del <strong>30%</strong> nelle zone trattate</li>
 <li>Stimola il sistema linfatico per drenare i liquidi in eccesso</li>
 <li>Genera calore locale che accelera il metabolismo cellulare</li>
 <li>Crea un micro-massaggio continuo ad ogni passo</li>
 </ul>

 <h2 className="font-serif text-2xl text-gray-900 mt-8">In quanto tempo si vedono i risultati?</h2>
 <p>In base alle recensioni delle nostre clienti e agli studi clinici disponibili:</p>
 <ul className="list-disc pl-6 space-y-1">
 <li><strong>Settimana 1–2:</strong> gambe più leggere, riduzione del gonfiore serale</li>
 <li><strong>Settimana 3–4:</strong> pelle visibilmente più tonica, cellulite meno marcata</li>
 <li><strong>Settimana 6–8:</strong> miglioramenti significativi e duraturi con uso regolare</li>
 </ul>

 <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100 my-8">
 <p className="font-semibold text-gray-900 mb-2"> Consiglio BellaCura</p>
 <p className="text-gray-700 text-sm">Per risultati fino a 3× più rapidi, combina i leggings con il <Link href="/prodotti/massaggio-anticellulite-4in1/" className="text-rose-500 underline">massaggiatore anticellulite 4 in 1</Link>. Il massaggio serale + i leggings durante il giorno creano un effetto sinergico che molte clienti descrivono come "trasformativo".</p>
 </div>

 <h2 className="font-serif text-2xl text-gray-900 mt-8">Come scegliere la taglia giusta</h2>
 <p>I <Link href="/prodotti/leggings-anticellulite-3d/" className="text-rose-500 underline">leggings BellaCura</Link> sono disponibili in 9 taglie (XS–5XL). Per scegliere correttamente misura la circonferenza dei fianchi e consulta la guida alle taglie nella pagina prodotto. Se sei tra due taglie, scegli sempre la più grande per garantire comfort e circolazione ottimale.</p>

 <h2 className="font-serif text-2xl text-gray-900 mt-8">Quanto spesso indossarli?</h2>
 <p>Per risultati ottimali, indossali <strong>almeno 6 ore al giorno</strong> — in palestra, a lavoro o durante le attività quotidiane. Il tessuto traspirante li rende confortevoli per uso prolungato. Lavali ogni 2–3 utilizzi a 30°C su programma delicati.</p>
 </div>

 <div className="mt-12 p-6 bg-gray-900 text-white rounded-2xl">
 <div className="flex gap-1 mb-3">
 {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
 </div>
 <p className="font-serif text-xl mb-2">"Dopo 3 settimane le mie gambe sembrano già diverse. Li indosso ogni giorno."</p>
 <p className="text-gray-400 text-sm mb-4">— Carla M., Roma</p>
 <Link href="/prodotti/leggings-anticellulite-3d/" className="inline-flex items-center justify-center px-6 py-3 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-600 transition-colors text-sm">
 Scopri i Leggings 3D BellaCura →
 </Link>
 </div>

 <div className="mt-8 pt-8 border-t border-gray-100">
 <p className="font-semibold text-gray-900 mb-4">Leggi anche:</p>
 <div className="space-y-2">
 <Link href="/blog/massaggio-anticellulite-benefici/" className="block text-rose-500 hover:text-rose-600 text-sm">→ I benefici del massaggio anticellulite: cosa succede alla tua pelle</Link>
 <Link href="/blog/come-eliminare-cellulite-casa/" className="block text-rose-500 hover:text-rose-600 text-sm">→ Come eliminare la cellulite a casa: guida completa</Link>
 <Link href="/faq/" className="block text-rose-500 hover:text-rose-600 text-sm">→ Domande frequenti sui prodotti BellaCura</Link>
 </div>
 </div>
 </article>
 )
}
