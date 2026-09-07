import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const META_PIXEL = `<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1055883607362457');fbq('track','PageView');</script>`

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static assets, API routes and sub-requests from this middleware
  if (
    request.headers.get('x-mw-skip') === '1' ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    /\.(ico|png|jpg|jpeg|gif|svg|css|js|woff2?|ttf|map|json|txt|xml)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  try {
    const fetchHeaders = new Headers(request.headers)
    fetchHeaders.set('x-mw-skip', '1')

    const response = await fetch(request.url, {
      headers: fetchHeaders,
      redirect: 'manual',
    })

    const contentType = response.headers.get('content-type') || ''
    if (!contentType.includes('text/html')) {
      return new NextResponse(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      })
    }

    const html = await response.text()
    const injected = html.replace('</head>', META_PIXEL + '</head>')

    const headers = new Headers(response.headers)
    headers.delete('content-encoding')
    headers.delete('content-length')

    return new NextResponse(injected, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  } catch {
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
}
