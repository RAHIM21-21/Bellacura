import Script from 'next/script'

const PIXEL_ID = '969043089557792'

// Strategy: split into two scripts
// 1. beforeInteractive — sets up window.fbq as a queue stub BEFORE React hydrates
//    so any fbq() call (e.g. AddToCart) is queued even before fbevents.js loads
// 2. afterInteractive — calls fbq('init') + 'PageView' then loads fbevents.js
//    which processes the queue

export default function MetaPixel() {
  return (
    <>
      {/* Stub — runs before hydration, makes window.fbq available immediately */}
      <Script
        id="meta-pixel-stub"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[]}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          `,
        }}
      />

      {/* Init + loader — runs after hydration */}
      <Script
        id="meta-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
            (function(){
              var t=document.createElement('script');t.async=!0;
              t.src='https://connect.facebook.net/en_US/fbevents.js';
              var s=document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(t,s);
            })();
          `,
        }}
      />

      <noscript>
        <img
          height="1" width="1" style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
