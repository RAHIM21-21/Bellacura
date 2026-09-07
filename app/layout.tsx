import type { Metadata } from 'next'
import { Cormorant_Garamond, Raleway, Pinyon_Script } from 'next/font/google'
import dynamic from 'next/dynamic'
import '@/styles/globals.css'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, buildMetadata, organizationSchema } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

// Only the weights actually used in the design; italic only for Cormorant (all headings are italic)
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

// Pinyon Script — logo wordmark only; not critical-path, no eager preload
const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  variable: '--font-pinyon',
  display: 'swap',
  preload: false,
  weight: ['400'],
})

// Raleway — body text; display:swap means system font shows first, no eager preload needed
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  preload: false,
  weight: ['400', '500', '600', '700'],
})

// Lazy-load non-critical interactive overlays — JS deferred to after hydration
const SocialProofToast = dynamic(() => import('@/components/home/SocialProofToast'), { ssr: false })
const ExitIntentPopup  = dynamic(() => import('@/components/ExitIntentPopup'), { ssr: false })

export const metadata: Metadata = buildMetadata({
  title: 'BellaCura – Benessere e Cura del Corpo per la Donna',
  description: SITE_DESCRIPTION,
  path: '/',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${raleway.variable} ${pinyonScript.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#CF6685" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <SocialProofToast />
        <ExitIntentPopup />
        <WhatsAppButton />
      </body>
    </html>
  )
}
