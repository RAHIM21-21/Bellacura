import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Pixel injection removed — new pixel will be added via layout when ready
export function middleware(_request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
}
