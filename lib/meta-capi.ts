const PIXEL_ID = process.env.META_PIXEL_ID || ''
const CAPI_URL = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`

interface CAPIEvent {
  event_name: string
  event_id: string
  event_source_url?: string
  user_data?: {
    client_ip_address?: string
    client_user_agent?: string
    em?: string[] // hashed email array
  }
  custom_data?: {
    value?: number
    currency?: string
    content_name?: string
    content_ids?: string[]
    content_type?: string
  }
}

export async function sendCAPIEvent(event: CAPIEvent) {
  const token = process.env.META_CAPI_TOKEN
  if (!token) {
    console.warn('META_CAPI_TOKEN not set — skipping CAPI')
    return
  }

  const payload = {
    data: [
      {
        ...event,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
      },
    ],
  }

  try {
    const res = await fetch(`${CAPI_URL}?access_token=${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const json = await res.json()
    if (!res.ok) console.error('CAPI error full:', JSON.stringify(json))
    else console.log('CAPI sent:', event.event_name, event.event_id)
  } catch (err) {
    console.error('CAPI fetch failed:', err)
  }
}
