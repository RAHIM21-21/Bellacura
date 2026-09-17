import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const OWNER_EMAIL = 'rahimeladnani21@outlook.com'
const FROM_SENDER = 'BellaCura <offerte@bellacura-shop.it>'

export async function POST(req: NextRequest) {
  try {
    const { email, order_ref = '', nome = '', indirizzo = '' } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const firstName = nome ? nome.trim().split(' ')[0] : ''

    // 1. Notify owner
    await resend.emails.send({
      from: FROM_SENDER,
      to: OWNER_EMAIL,
      subject: `📦 Richiesta Tracking — ${nome || email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
          <div style="background: #1D3557; padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">📦 Richiesta Tracking BellaCura</h1>
          </div>
          <div style="background: #fff; border: 1px solid #DCEAF2; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              ${nome ? `<tr style="background:#EEF6FB;"><td style="padding:10px 12px;font-weight:bold;color:#6b7280;width:40%;">Cliente</td><td style="padding:10px 12px;color:#111;">${nome}</td></tr>` : ''}
              <tr><td style="padding:10px 12px;font-weight:bold;color:#6b7280;">Email</td><td style="padding:10px 12px;color:#111;">${email}</td></tr>
              ${indirizzo ? `<tr style="background:#EEF6FB;"><td style="padding:10px 12px;font-weight:bold;color:#6b7280;">Indirizzo</td><td style="padding:10px 12px;color:#111;">${indirizzo}</td></tr>` : ''}
              ${order_ref ? `<tr><td style="padding:10px 12px;font-weight:bold;color:#6b7280;">Ordine</td><td style="padding:10px 12px;color:#111;">${order_ref}</td></tr>` : ''}
              <tr style="background:#EEF6FB;"><td style="padding:10px 12px;font-weight:bold;color:#6b7280;">Data</td><td style="padding:10px 12px;color:#111;">${new Date().toLocaleString('it-IT')}</td></tr>
            </table>
            <p style="margin:16px 0 0;color:#457B9D;font-size:14px;">⚡ Ricorda di inviare il numero di tracking entro 24h.</p>
          </div>
        </div>
      `,
    })

    // 2. Send confirmation + address verification to customer
    await resend.emails.send({
      from: FROM_SENDER,
      to: email,
      reply_to: OWNER_EMAIL,
      subject: `${firstName ? `Ciao ${firstName}` : 'Ciao'} 👋 — Conferma il tuo indirizzo BellaCura`,
      html: `
        <!DOCTYPE html>
        <html lang="it">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="margin:0;padding:0;background:#F0F6FB;font-family:sans-serif;">
          <div style="max-width:560px;margin:0 auto;padding:32px 16px;">

            <div style="background:#1D3557;border-radius:16px 16px 0 0;padding:32px;text-align:center;">
              <div style="font-size:44px;margin-bottom:10px;">📦</div>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:bold;">
                ${firstName ? `Ciao ${firstName}! 👋` : 'Ciao! 👋'}
              </h1>
              <p style="margin:8px 0 0;color:#DCEAF2;font-size:14px;">Grazie per il tuo ordine BellaCura</p>
            </div>

            <div style="background:#ffffff;border:1px solid #DCEAF2;border-top:none;border-radius:0 0 16px 16px;padding:32px;">

              <p style="margin:0 0 20px;color:#374151;font-size:15px;line-height:1.7;">
                Abbiamo ricevuto il tuo ordine per il <strong>BellaCura Massaggiatore Anticellulite</strong> — <strong>€59,90 pagamento alla consegna</strong>.
              </p>

              <p style="margin:0 0 20px;color:#374151;font-size:15px;line-height:1.7;">
                Spediamo entro oggi/domani e riceverai il pacco in <strong>24–48 ore</strong> all'indirizzo indicato:
              </p>

              ${indirizzo ? `
              <div style="background:#EEF6FB;border-left:4px solid #457B9D;border-radius:8px;padding:14px 18px;margin:0 0 24px;">
                <p style="margin:0;color:#1D3557;font-size:14px;font-weight:600;">📍 ${indirizzo}</p>
              </div>
              ` : ''}

              <div style="background:#FFF8E7;border:1px solid #FDE68A;border-radius:12px;padding:20px 24px;margin:0 0 24px;text-align:center;">
                <p style="margin:0;color:#92400E;font-size:15px;font-weight:600;">
                  Puoi confermarci che l'indirizzo è corretto?
                </p>
                <p style="margin:8px 0 0;color:#78350F;font-size:14px;">
                  Rispondi a questa email con un semplice <strong>"Confermo"</strong> e partiamo subito con la spedizione! 📦
                </p>
              </div>

              <p style="margin:0 0 8px;color:#6b7280;font-size:14px;line-height:1.7;">
                Per qualsiasi domanda siamo qui! 🙂
              </p>

              <p style="margin:0;color:#1D3557;font-size:14px;font-weight:600;">
                Il team BellaCura Italia
              </p>

              <hr style="border:none;border-top:1px solid #EEF6FB;margin:24px 0;" />

              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">
                <a href="mailto:info@bellacura.it" style="color:#457B9D;">info@bellacura.it</a> · bellacura-shop.it
              </p>
            </div>
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
