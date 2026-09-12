import type { Metadata } from 'next'
import { Montserrat, Pinyon_Script } from 'next/font/google'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import '@/styles/globals.css'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, buildMetadata, organizationSchema } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CrispChat from '@/components/CrispChat'
import MicrosoftClarity from '@/components/MicrosoftClarity'
import AddToCartTracker from '@/components/AddToCartTracker'

// Montserrat — primary typeface for all UI, headings and body
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
  weight: ['400', '700', '800'],
  style: ['normal'],
})

// Pinyon Script — logo wordmark only
const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  variable: '--font-pinyon',
  display: 'swap',
  preload: false,
  weight: ['400'],
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
    <html lang="it" className={`${montserrat.variable} ${pinyonScript.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1D3557" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream">
        {/* Meta Pixel — beforeInteractive injects into the initial server HTML so Meta's crawler detects it */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1055883607362457');fbq('track','PageView');" }}
        />
        <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=1055883607362457&ev=PageView&noscript=1" alt="" /></noscript>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <SocialProofToast />
        <ExitIntentPopup />
        <CrispChat />
        <MicrosoftClarity />
        <AddToCartTracker />
      </body>
    </html>
  )
}
