// CodFacile API integration
// Docs: https://codfacile.com/api
// Set CODFACILE_API_KEY in your .env.local

const CODFACILE_BASE = 'https://app.codfacile.com/api/v1'

export interface CodFacileOrder {
  // Recipient
  recipient_name: string
  recipient_phone: string
  recipient_address: string
  recipient_city: string
  recipient_zip: string
  recipient_province: string  // 2-letter Italian province code e.g. "MI"

  // Order
  order_reference: string     // your internal order ID
  cod_amount: number          // amount to collect in EUR (cents or float — check docs)
  weight: number              // kg
  notes?: string
}

export interface CodFacileResponse {
  success: boolean
  order_id?: string
  tracking_code?: string
  error?: string
}

export async function createCodFacileOrder(
  order: CodFacileOrder
): Promise<CodFacileResponse> {
  const apiKey = process.env.CODFACILE_API_KEY

  if (!apiKey) {
    console.error('CODFACILE_API_KEY not set')
    return { success: false, error: 'API key missing' }
  }

  try {
    const res = await fetch(`${CODFACILE_BASE}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(order),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('CodFacile error:', text)
      return { success: false, error: text }
    }

    const data = await res.json()
    return {
      success: true,
      order_id: data.id,
      tracking_code: data.tracking_code,
    }
  } catch (err) {
    console.error('CodFacile fetch failed:', err)
    return { success: false, error: 'Network error' }
  }
}
