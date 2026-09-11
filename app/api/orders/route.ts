import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const OWNER_EMAIL = 'rahimeladnani21@outlook.com'

function generateOrderRef(): string {
  return `BC-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
}

const PRODUCTS: Record<string, { name: string; price: number }> = {
  'massaggio-4in1': {
    name: 'BellaCura Massaggiatore Anticellulite 4 in 1',
    price: 59.90,
  },
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await req.json()
    const { nome, telefono, indirizzo, prodotto } = body

    if (!nome || !telefono || !indirizzo) {
      return NextResponse.json({ success: false, error: 'Dati mancanti' }, { status: 400 })
    }

    const product = PRODUCTS[prodotto] || PRODUCTS['massaggio-4in1']
    const orderRef = generateOrderRef()

    await resend.emails.send({
      from: 'BellaCura Ordini <offerte@bellacura-shop.it>',
      to: OWNER_EMAIL,
      subject: `🛍️ NUOVO ORDINE COD — ${nome} — €${product.price.toFixed(2)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #BE185D; padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">🛍️ Nuovo Ordine BellaCura</h1>
            <p style="color: #fce7f3; margin: 4px 0 0; font-size: 14px;">Pagamento alla consegna (COD) · Ref: ${orderRef}</p>
          </div>
          <div style="background: #fff; border: 1px solid #fce7f3; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr style="background: #fdf2f8;">
                <td style="padding: 10px 12px; font-weight: bold; color: #6b7280; width: 40%;">Cliente</td>
                <td style="padding: 10px 12px; color: #111;">${nome}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #6b7280;">Telefono</td>
                <td style="padding: 10px 12px; color: #111;">${telefono}</td>
              </tr>
              <tr style="background: #fdf2f8;">
                <td style="padding: 10px 12px; font-weight: bold; color: #6b7280;">Indirizzo</td>
                <td style="padding: 10px 12px; color: #111;">${indirizzo}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #6b7280;">Prodotto</td>
                <td style="padding: 10px 12px; color: #111;">${product.name}</td>
              </tr>
              <tr style="background: #fdf2f8;">
                <td style="padding: 10px 12px; font-weight: bold; color: #6b7280;">Importo COD</td>
                <td style="padding: 10px 12px; font-size: 18px; font-weight: bold; color: #BE185D;">€${product.price.toFixed(2)}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 14px; background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">
              <p style="margin: 0; font-size: 13px; color: #166534;">✅ Ordine ricevuto — procedi con la spedizione su CodFacile</p>
            </div>
            <div style="margin-top: 20px; text-align: center;">
              <p style="margin: 0 0 10px; font-size: 13px; color: #6b7280;">Invia conferma WhatsApp al cliente:</p>
              <a href="https://wa.me/${telefono.replace(/\D/g, '')}?text=${encodeURIComponent(`Ciao ${nome}! 👋

Abbiamo ricevuto il tuo ordine per il Massaggiatore Anticellulite 4 in 1 — €${product.price.toFixed(2)} pagamento alla consegna.

Spediamo entro oggi/domani e riceverai il pacco in 24–48 ore all'indirizzo: ${indirizzo}.

Puoi confermarci che l'indirizzo è corretto? Rispondici con un semplice "Confermo" e partiamo subito! 📦

Il team BellaCura Italia`)}"
                 style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; font-family: sans-serif; font-weight: bold; font-size: 16px; padding: 14px 32px; border-radius: 50px;">
                💬 Invia WhatsApp al cliente
              </a>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true, order_ref: orderRef })
  } catch (err) {
    console.error('Order API error:', err)
    return NextResponse.json({ success: false, error: 'Errore del server. Riprova.' }, { status: 500 })
  }
}
