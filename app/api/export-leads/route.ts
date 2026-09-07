import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'bellacura2024'

export async function GET(req: NextRequest) {
  const pw = req.nextUrl.searchParams.get('pw') ?? ''
  if (pw !== ADMIN_PASSWORD) {
    return new NextResponse('Non autorizzato', { status: 401 })
  }
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const rows = await sql`SELECT email, source, created_at FROM leads ORDER BY created_at DESC`
    const csv = [
      'Email,Fonte,Data',
      ...rows.map((l: any) =>
        `${l.email},${l.source},${new Date(l.created_at).toLocaleString('it-IT')}`
      ),
    ].join('\n')
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="bellacura-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    })
  } catch (err) {
    console.error('export-leads error:', err)
    return new NextResponse('Server error', { status: 500 })
  }
}
