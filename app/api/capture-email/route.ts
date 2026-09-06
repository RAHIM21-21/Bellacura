import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json')

function readLeads(): Lead[] {
  try {
    if (!fs.existsSync(LEADS_FILE)) return []
    return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'))
  } catch {
    return []
  }
}

type Lead = {
  email: string
  source: string
  date: string
}

export async function POST(req: NextRequest) {
  try {
    const { email, source = 'exit_popup' } = await req.json()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
    }

    const leads = readLeads()

    // Avoid duplicate emails
    if (leads.some((l) => l.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({ ok: true, duplicate: true })
    }

    leads.push({ email, source, date: new Date().toISOString() })
    fs.mkdirSync(path.dirname(LEADS_FILE), { recursive: true })
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('capture-email error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
