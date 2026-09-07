import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const OWNER_EMAIL = 'rahimeladnani21@outlook.com'

export async function POST(req: NextRequest) {
  try {
    const { email, source = 'exit_popup' } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'BellaCura Lead <onboarding@resend.dev>',
      to: OWNER_EMAIL,
      subject: `📧 Nuova Lead — ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
          <div style="background: #BE185D; padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">📧 Nuova Lead BellaCura</h1>
            <p style="color: #fce7f3; margin: 4px 0 0; font-size: 14px;">Popup sconto 10%</p>
          </div>
          <div style="background: #fff; border: 1px solid #fce7f3; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr style="background: #fdf2f8;">
                <td style="padding: 10px 12px; font-weight: bold; color: #6b7280; width: 40%;">Email</td>
                <td style="padding: 10px 12px; color: #111;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #6b7280;">Fonte</td>
                <td style="padding: 10px 12px; color: #111;">${source}</td>
              </tr>
              <tr style="background: #fdf2f8;">
                <td style="padding: 10px 12px; font-weight: bold; color: #6b7280;">Data</td>
                <td style="padding: 10px 12px; color: #111;">${new Date().toLocaleString('it-IT')}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('capture-email error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
