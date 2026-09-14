import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const OWNER_EMAIL = 'rahimeladnani21@outlook.com'
const FROM_SENDER = 'BellaCura <offerte@bellacura-shop.it>'

export async function POST(req: NextRequest) {
  try {
    const { email, order_ref = '' } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // 1. Notify owner
    await resend.emails.send({
      from: FROM_SENDER,
      to: OWNER_EMAIL,
      subject: `📦 Richiesta Tracking — ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
          <div style="background: #1D3557; padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">📦 Richiesta Tracking BellaCura</h1>
            <p style="color: #DCEAF2; margin: 4px 0 0; font-size: 14px;">Cliente post-acquisto</p>
          </div>
          <div style="background: #fff; border: 1px solid #DCEAF2; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr style="background: #EEF6FB;">
                <td style="padding: 10px 12px; font-weight: bold; color: #6b7280; width: 40%;">Email</td>
                <td style="padding: 10px 12px; color: #111;">${email}</td>
              </tr>
              ${order_ref ? `<tr><td style="padding: 10px 12px; font-weight: bold; color: #6b7280;">Ordine</td><td style="padding: 10px 12px; color: #111;">${order_ref}</td></tr>` : ''}
              <tr style="background: #EEF6FB;">
                <td style="padding: 10px 12px; font-weight: bold; color: #6b7280;">Data</td>
                <td style="padding: 10px 12px; color: #111;">${new Date().toLocaleString('it-IT')}</td>
              </tr>
            </table>
            <p style="margin: 16px 0 0; color: #457B9D; font-size: 14px;">⚡ Ricorda di inviare il numero di tracking entro 24h.</p>
          </div>
        </div>
      `,
    })

    // 2. Send confirmation to customer
    await resend.emails.send({
      from: FROM_SENDER,
      to: email,
      subject: '📦 BellaCura — Riceverai il tuo numero di tracking a breve',
      html: `
        <!DOCTYPE html>
        <html lang="it">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="margin:0; padding:0; background:#EEF6FB; font-family: sans-serif;">
          <div style="max-width: 560px; margin: 0 auto; padding: 32px 16px;">
            <div style="background: linear-gradient(135deg, #1D3557, #152840); border-radius: 16px 16px 0 0; padding: 36px 32px; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 12px;">📦</div>
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: bold;">Il tuo ordine è in preparazione</h1>
              <p style="margin: 10px 0 0; color: #DCEAF2; font-size: 15px;">Ti aggiorniamo noi — non devi fare nulla</p>
            </div>
            <div style="background: #ffffff; border: 1px solid #DCEAF2; border-top: none; border-radius: 0 0 16px 16px; padding: 36px 32px;">
              <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.7;">
                Ciao! 💙<br><br>
                Grazie per il tuo ordine BellaCura. Il tuo pacco viene preparato e spedito entro <strong>24 ore</strong>.
              </p>
              <div style="background: #EEF6FB; border-radius: 12px; padding: 20px 24px; margin: 0 0 24px;">
                <p style="margin: 0; color: #1D3557; font-size: 15px; font-weight: 600;">📍 Cosa succede ora:</p>
                <ol style="margin: 12px 0 0; padding-left: 20px; color: #374151; font-size: 14px; line-height: 2;">
                  <li>Il tuo pacco viene preparato entro oggi</li>
                  <li>Ricevi il <strong>numero di tracking personale</strong> entro 24 ore</li>
                  <li>Il corriere ti consegna in <strong>2-4 giorni lavorativi</strong></li>
                  <li>Paghi in contanti alla consegna — nessun rischio</li>
                </ol>
              </div>
              <p style="margin: 0; color: #9ca3af; font-size: 13px; text-align: center;">
                Hai domande? Scrivici a <a href="mailto:info@bellacura.it" style="color: #457B9D;">info@bellacura.it</a><br><br>
                Con affetto,<br>
                <strong style="color: #1D3557;">Il Team BellaCura 🌿</strong>
              </p>
            </div>
            <p style="text-align: center; color: #d1d5db; font-size: 11px; margin: 20px 0 0;">
              BellaCura · bellacura-shop.it
            </p>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('capture-tracking-email error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
