import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
 title: 'Blog Benessere Donna – Consigli e Guide',
 description:
 'Articoli e guide su benessere femminile, cura del corpo, anticellulite e beauty routine. Scopri i consigli degli esperti di BellaCura.',
 path: '/blog/',
})

const posts = [
 {
 slug: 'come-eliminare-cellulite-casa',
 title: 'Come Eliminare la Cellulite a Casa: 7 Metodi che Funzionano Davvero',
 excerpt:
 "La cellulite colpisce oltre l'80% delle donne. In questa guida completa scopri i metodi più efficaci per ridurla a casa, senza spendere centinaia di euro in trattamenti estetici.",
 category: 'Anticellulite',
 readTime: '8 min',
 date: '2024-09-01',
 image: '‍',
 },
 {
 slug: 'massaggio-anticellulite-benefici',
 title: 'Massaggio Anticellulite: Benefici, Tecniche e Frequenza Ideale',
 excerpt:
 "Il massaggio anticellulite è uno dei trattamenti più efficaci per ridurre la pelle a buccia d'arancia. Scopri come eseguirlo correttamente e quante volte alla settimana.",
 category: 'Massaggi',
 readTime: '6 min',
 date: '2024-09-01',
 image: '',
 },
]

export default function BlogPage() {
 return (
 <div className="section">
 <div className="container-tight">
 <div className="text-center mb-12">
 <span className="badge mb-3">Blog BellaCura</span>
 <h1 className="font-sans text-gray-900 mb-4">Consigli per il tuo Benessere</h1>
 <p className="text-gray-600 max-w-xl mx-auto">
 Guide, consigli e routine di bellezza per la donna moderna. Contenuti creati con cura dai nostri esperti.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {posts.map((post) => (
 <article key={post.slug} className="card hover:shadow-md transition-shadow">
 <div className="aspect-video rounded-xl bg-[#EBF4F8] flex items-center justify-center text-6xl mb-5">
 {post.image}
 </div>
 <div className="flex items-center gap-3 mb-3 flex-wrap">
 <span className="badge text-xs">{post.category}</span>
 <span className="text-gray-400 text-xs">{post.readTime} di lettura</span>
 <time className="text-gray-400 text-xs" dateTime={post.date}>
 {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
 </time>
 </div>
 <h2 className="font-sans text-xl text-gray-900 mb-3 leading-snug">
 <Link href={`/blog/${post.slug}/`} className="hover:text-[#1D3557] transition-colors">
 {post.title}
 </Link>
 </h2>
 <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
 <Link href={`/blog/${post.slug}/`} className="text-[#457B9D] font-medium text-sm hover:text-[#1D3557] transition-colors">
 Leggi l&apos;articolo →
 </Link>
 </article>
 ))}
 </div>
 </div>
 </div>
 )
}
