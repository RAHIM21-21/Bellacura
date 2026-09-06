import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

const blogPosts = [
  { slug: 'come-eliminare-cellulite-casa', lastModified: '2024-09-01' },
  { slug: 'massaggio-anticellulite-benefici', lastModified: '2024-09-01' },
  { slug: 'leggings-anticellulite-come-funzionano', lastModified: '2024-09-15' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/prodotti/massaggio-anticellulite-4in1/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/prodotti/leggings-anticellulite-3d/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/faq/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${SITE_URL}/garanzia/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/come-ordinare/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/chi-siamo/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contatti/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/traccia-ordine/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/checkout/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/diritto-recesso/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/termini-condizioni/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticRoutes, ...blogRoutes]
}
