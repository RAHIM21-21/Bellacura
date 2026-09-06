import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json')
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'bellacura2024'

type Lead = { email: string; source: string; date: string }

export async function GET(req: NextRequest) {
  const pw = req.nextUrl.searchParams.get('pw') ?? ''
  if (pw !== ADMIN_PASSWORD) {
    return new NextResponse('Non autorizzato', { status: 401 })
  }

  let leads: Lead[] = []
  try {
    if (fs.existsSync(LEADS_FILE)) {
      leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'))
    }
  } catch {}

  const csv = [
    'Email,Fonte,Data',
    ...leads.map((l) => `${l.email},${l.source},${new Date(l.date).toLocaleString('it-IT')}`),
  ].join('\n')

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="bellacura-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  })
}
