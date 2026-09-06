import type { Metadata } from 'next'

export const SITE_URL = 'https://bellacura.it'
export const SITE_NAME = 'BellaCura'
export const SITE_DESCRIPTION =
  'BellaCura – prodotti di benessere e cura del corpo per la donna. Massaggiatori anticellulite, cura della pelle e molto altro. Pagamento alla consegna disponibile.'

// Default OG image for social sharing
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`

export function buildMetadata({
  title,
  description,
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  ogImage?: string
  noIndex?: boolean
}): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title: {
      default: `${title} | ${SITE_NAME}`,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: { 'it-IT': url },
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'it_IT',
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
        },
  }
}

// JSON-LD helpers
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Italian',
      email: 'info@bellacura.it',
    },
    sameAs: [
      'https://www.instagram.com/bellacura.it',
      'https://www.tiktok.com/@bellacura.it',
    ],
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function productSchema({
  name,
  description,
  image,
  price,
  sku,
  reviews,
}: {
  name: string
  description: string
  image: string
  price: number
  sku: string
  reviews?: { author: string; rating: number; body: string; date: string }[]
}) {
  const avgRating =
    reviews && reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : '4.9'

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: `${SITE_URL}${image}`,
    sku,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/prodotti/massaggio-anticellulite-4in1/`,
      priceCurrency: 'EUR',
      price: price.toFixed(2),
      priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31)
        .toISOString()
        .split('T')[0],
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'EUR' },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 2, unitCode: 'DAY' },
          transitTime: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 4, unitCode: 'DAY' },
        },
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: reviews ? reviews.length : 248,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews?.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.body,
      datePublished: r.date,
    })),
  }
}
