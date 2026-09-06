import type { Metadata } from 'next'
import { Cormorant_Garamond, Raleway, Pinyon_Script } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, buildMetadata, organizationSchema } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SocialProofToast from '@/components/home/SocialProofToast'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import WhatsAppButton from '@/components/WhatsAppButton'

// Cormorant Garamond — ultra-luxury serif for all headings and logo
// Used by Bottega Veneta, De Beers, high fashion. Distinctively Italian.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

// Pinyon Script — refined pen-nib calligraphy for the logo
const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  variable: '--font-pinyon',
  display: 'swap',
  preload: true,
  weight: ['400'],
})

// Raleway — Art Deco geometric sans for body text
// Fashion/beauty industry standard. Elegant, not tech-associated.
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
})

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#CF6685" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        {/* Crisp live chat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="cbd677a8-aa17-4506-8794-ca6af0cc8e7c";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
          }}
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
