import { NextRequest, NextResponse } from 'next/server'
import { createCodFacileOrder } from '@/lib/codfacile'
import { z } from 'zod'

// Validation schema
const OrderSchema = z.object({
  // Customer
  nome: z.string().min(2, 'Nome richiesto'),
  cognome: z.string().min(2, 'Cognome richiesto'),
  email: z.string().email('Email non valida'),
  telefono: z.string().min(9, 'Telefono non valido').max(15),

  // Shipping address
  indirizzo: z.string().min(5, 'Indirizzo richiesto'),
  civico: z.string().min(1, 'Numero civico richiesto'),
  citta: z.string().min(2, 'Città richiesta'),
  cap: z.string().length(5, 'CAP deve essere 5 cifre'),
  provincia: z.string().length(2, 'Provincia non valida'),

  // Product
  prodotto: z.string(),
  quantita: z.number().min(1).max(10).default(1),

  // Privacy consent (required by GDPR)
  privacy: z.boolean().refine((v) => v === true, 'Devi accettare la privacy policy'),
})

// Simple order reference generator
function generateOrderRef(): string {
  return `BC-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
}

// Product catalog (expand as you add products)
const PRODUCTS: Record<string, { name: string; price: number; weight: number }> = {
  'massaggio-4in1': {
    name: 'BellaCura Massaggiatore Anticellulite 4 in 1',
    price: 59.90,
    weight: 0.5,
  },
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = OrderSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data = parsed.data
    const product = PRODUCTS[data.prodotto]

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Prodotto non trovato' },
        { status: 400 }
      )
    }

    const orderRef = generateOrderRef()
    const totalAmount = product.price * data.quantita

    // Create COD order on CodFacile
    const codResult = await createCodFacileOrder({
      recipient_name: `${data.nome} ${data.cognome}`,
      recipient_phone: data.telefono,
      recipient_address: `${data.indirizzo} ${data.civico}`,
      recipient_city: data.citta,
      recipient_zip: data.cap,
      recipient_province: data.provincia.toUpperCase(),
      order_reference: orderRef,
      cod_amount: totalAmount,
      weight: product.weight * data.quantita,
      notes: `Prodotto: ${product.name} x${data.quantita}`,
    })

    if (!codResult.success) {
      console.error('CodFacile order failed:', codResult.error)
      // Don't expose internal errors to client
      return NextResponse.json(
        { success: false, error: 'Errore durante la creazione dell\'ordine. Riprova.' },
        { status: 500 }
      )
    }

    // TODO: Send order confirmation email to customer (use Resend / SendGrid)
    // TODO: Save order to your database

    return NextResponse.json({
      success: true,
      order_ref: orderRef,
      tracking_code: codResult.tracking_code,
      message: 'Ordine ricevuto! Ti contatteremo entro 24 ore per la conferma.',
    })
  } catch (err) {
    console.error('Order API error:', err)
    return NextResponse.json(
      { success: false, error: 'Errore del server. Riprova più tardi.' },
      { status: 500 }
    )
  }
}
