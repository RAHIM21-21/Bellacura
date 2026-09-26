'use client';
/* BellaCura · base del Meta Pixel. Inserire <MetaPixel /> in app/layout.tsx, dentro <body>. */
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { PIXEL_ID, rememberFbclid } from '@/lib/meta-client';

export default function MetaPixel() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => { rememberFbclid(); }, []);
  // PageView anche nei cambi pagina interni di Next.js (dopo il primo, inviato dallo script)
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    if (window.fbq) window.fbq('track', 'PageView');
  }, [pathname]);

  if (!PIXEL_ID) return null;
  return (
    <Script id="meta-pixel" strategy="afterInteractive">{`
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('consent','revoke');
      window.bcGrantConsent=function(){fbq('consent','grant');};
      fbq('init','${PIXEL_ID}');
      fbq('track','PageView');
    `}</Script>
  );
}
