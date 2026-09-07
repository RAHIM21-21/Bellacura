import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

async function getDb() {
  const sql = neon(process.env.DATABASE_URL!)
  return sql
}

async function initTable(sql: ReturnType<typeof neon>) {
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      source TEXT NOT NULL DEFAULT 'exit_popup',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
}

export async function POST(req: NextRequest) {
  try {
    const { email, source = 'exit_popup' } = await req.json()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
    }
    const sql = await getDb()
    await initTable(sql)
    const existing = await sql`SELECT id FROM leads WHERE LOWER(email) = LOWER(${email})`
    if (existing.length > 0) {
      return NextResponse.json({ ok: true, duplicate: true })
    }
    await sql`INSERT INTO leads (email, source) VALUES (${email}, ${source})`
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('capture-email error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
