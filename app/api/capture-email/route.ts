import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const OWNER_EMAIL = 'rahimeladnani21@outlook.com'
const FROM_SENDER = 'BellaCura <offerte@bellacura-shop.it>'

export async function POST(req: NextRequest) {
  try {
    const { email, source = 'exit_popup' } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // 1. Notify owner
    await resend.emails.send({
      from: FROM_SENDER,
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

    // 2. Send discount email to customer
    await resend.emails.send({
      from: FROM_SENDER,
      to: email,
      subject: '🎁 Il tuo codice sconto BellaCura è qui (valido per 2 ore)',
      html: `
        <!DOCTYPE html>
        <html lang="it">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="margin:0; padding:0; background:#fdf2f8; font-family: Georgia, 'Times New Roman', serif;">
          <div style="max-width: 560px; margin: 0 auto; padding: 32px 16px;">

            <!-- Urgency Banner -->
            <div style="background:#fff3cd;border:1px solid #ffc107;border-radius:10px;padding:12px 16px;text-align:center;margin-bottom:16px;">
              <p style="margin:0;color:#856404;font-family:sans-serif;font-size:14px;font-weight:600;">⏰ Questa offerta è valida solo per le prossime <strong>2 ore</strong> — approfitta ora!</p>
            </div>

            <!-- Header -->
            <div style="background: linear-gradient(135deg, #BE185D, #9d174d); border-radius: 16px 16px 0 0; padding: 36px 32px; text-align: center;">
              <p style="margin: 0 0 8px; color: #fce7f3; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; font-family: sans-serif;">Offerta Esclusiva</p>
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">🎁 Il tuo -10%</h1>
              <p style="margin: 10px 0 0; color: #fce7f3; font-size: 15px; font-family: sans-serif;">è pronto per te</p>
            </div>

            <!-- Body -->
            <div style="background: #ffffff; border: 1px solid #fce7f3; border-top: none; border-radius: 0 0 16px 16px; padding: 36px 32px;">

              <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.7;">
                Ciao! 💖<br><br>
                Hai fatto la scelta giusta — BellaCura è già amato da centinaia di donne italiane e non vediamo l'ora che tu provi la differenza sulla tua pelle. 🌸<br><br>
                Per ringraziarti, abbiamo preparato qualcosa di speciale solo per te:
              </p>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 28px 0;">
                <a href="https://bellacura-shop.myshopify.com/cart/48232541651102:1?checkout"
                   style="display: inline-block; background: linear-gradient(135deg, #BE185D, #9d174d); color: #ffffff; text-decoration: none; font-family: sans-serif; font-weight: bold; font-size: 17px; padding: 16px 36px; border-radius: 50px;">
                  → Riscatta il tuo 10% di sconto
                </a>
                <p style="margin: 10px 0 0; color: #9ca3af; font-size: 12px; font-family: sans-serif;">Il codice <strong style="color:#BE185D;">BELLA10</strong> è già applicato automaticamente ✨</p>
              </div>

              <!-- Divider -->
              <div style="border-top: 1px solid #fce7f3; margin: 28px 0;"></div>

              <!-- COD option -->
              <div style="text-align: center; margin: 0 0 12px;">
                <p style="margin: 0 0 12px; color: #374151; font-size: 15px; line-height: 1.7; font-family: sans-serif;">
                  💵 <strong>Preferisci pagare alla consegna?</strong><br>
                  <span style="color: #6b7280; font-size: 14px;">Il corriere passa a casa tua e paghi in contanti alla ricezione.</span>
                </p>
                <a href="https://www.bellacura-shop.it/checkout-email"
                   style="display: inline-block; background: #16a34a; color: #ffffff; text-decoration: none; font-family: sans-serif; font-weight: bold; font-size: 17px; padding: 16px 36px; border-radius: 50px;">
                  → Paga alla Consegna — €54,00
                </a>
                <p style="margin: 10px 0 0; color: #9ca3af; font-size: 12px; font-family: sans-serif;">Nessun rischio · Paghi solo quando ricevi il pacco ✓</p>
              </div>

              <!-- Divider -->
              <div style="border-top: 1px solid #fce7f3; margin: 28px 0;"></div>

              <p style="margin: 0; color: #9ca3af; font-size: 13px; font-family: sans-serif; text-align: center;">
                ⚠️ Questa offerta scade entro <strong>2 ore</strong> dall'invio di questa email.<br><br>
                Con affetto,<br>
                <strong style="color: #BE185D;">Il Team BellaCura 🌺</strong>
              </p>

            </div>

            <!-- Footer -->
            <p style="text-align: center; color: #d1d5db; font-size: 11px; font-family: sans-serif; margin: 20px 0 0;">
              BellaCura · bellacura-shop.it<br>
              Hai ricevuto questa email perché hai lasciato il tuo indirizzo sul nostro sito.
            </p>

          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('capture-email error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
