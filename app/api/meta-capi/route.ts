/* BellaCura · Conversions API. Percorso: app/api/meta-capi/route.ts
   Variabili d'ambiente (Vercel): META_PIXEL_ID, META_CAPI_TOKEN. Il token non va mai nel codice client.
   Opzionale per i test: META_TEST_EVENT_CODE (da Events Manager → Eventi di prova). */
import { createHash } from 'crypto';
import { normalizePhoneIT, normalizeEmail } from '@/lib/checkout-utils';

export const runtime = 'nodejs';

const sha256 = (v: string) => createHash('sha256').update(v.trim().toLowerCase()).digest('hex');
const ALLOWED = new Set(['ViewContent', 'InitiateCheckout', 'Purchase', 'EmailTracking']);

type Body = {
  event_name: string; event_id: string; order_id?: string; url?: string;
  fbp?: string | null; fbc?: string | null;
  user?: { fn?: string; ln?: string; ph?: string; zp?: string; ct?: string; em?: string };
  custom_data?: Record<string, unknown>;
};

export async function POST(req: Request) {
  let b: Body;
  try { b = await req.json(); } catch { return Response.json({ error: 'json non valido' }, { status: 400 }); }
  if (!ALLOWED.has(b.event_name) || !b.event_id) return Response.json({ error: 'evento non valido' }, { status: 400 });

  const u = b.user || {};
  const user_data: Record<string, unknown> = {
    client_ip_address: (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || undefined,
    client_user_agent: req.headers.get('user-agent') || undefined,
    fbp: b.fbp || undefined,
    fbc: b.fbc || undefined,
    country: [sha256('it')],
    external_id: [sha256(String(b.order_id || b.event_id))],
  };
  const ph = normalizePhoneIT(u.ph); if (ph) user_data.ph = [sha256(ph)];
  const em = normalizeEmail(u.em);   if (em) user_data.em = [sha256(em)];
  if (u.fn) user_data.fn = [sha256(u.fn)];
  if (u.ln) user_data.ln = [sha256(u.ln)];
  if (u.ct) user_data.ct = [sha256(u.ct)];
  if (u.zp) user_data.zp = [sha256(u.zp)];

  const custom_data: Record<string, unknown> = { ...(b.custom_data || {}) };
  if (b.order_id && b.event_name === 'Purchase') custom_data.order_id = String(b.order_id);

  const payload: Record<string, unknown> = {
    data: [{
      event_name: b.event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_id: b.event_id,
      action_source: 'website',
      event_source_url: b.url,
      user_data,
      custom_data,
    }],
  };
  if (process.env.META_TEST_EVENT_CODE) payload.test_event_code = process.env.META_TEST_EVENT_CODE;

  const r = await fetch(
    `https://graph.facebook.com/v21.0/${process.env.META_PIXEL_ID}/events?access_token=${process.env.META_CAPI_TOKEN}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) },
  );
  const out = await r.json().catch(() => ({}));
  return Response.json(out, { status: r.ok ? 200 : 502 });
}
