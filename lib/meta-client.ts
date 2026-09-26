'use client';
/* BellaCura · eventi Meta lato browser (da importare nei componenti client) */
import { buildUserData, normalizeEmail, type MetaUser } from './checkout-utils';

declare global {
  interface Window { fbq?: (...args: unknown[]) => void; bcGrantConsent?: () => void }
}

export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID as string;
const PRODUCT_ID = 'bellacura-4in1';

const fbq = (...args: unknown[]) => { if (typeof window !== 'undefined' && window.fbq) window.fbq(...args); };
const eventId = (p: string) => `${p}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

function cookie(name: string): string | null {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}
function fbc(): string | null {
  const c = cookie('_fbc');
  if (c) return c;
  const id = new URLSearchParams(location.search).get('fbclid');
  if (id) return `fb.1.${Date.now()}.${id}`;
  try { return sessionStorage.getItem('bc_fbc'); } catch { return null; }
}
// Da chiamare una volta al caricamento (lo fa già MetaPixel.tsx): conserva fbclid tra le pagine
export function rememberFbclid() {
  const id = new URLSearchParams(location.search).get('fbclid');
  if (id) try { sessionStorage.setItem('bc_fbc', `fb.1.${Date.now()}.${id}`); } catch {}
}

/* Invia al server SOLO se il consenso marketing è stato dato */
function hasMarketingConsent(): boolean {
  try {
    const raw = localStorage.getItem('bc_consent');
    if (!raw) return false;
    const c = JSON.parse(raw);
    return c?.marketing === true;
  } catch { return false; }
}

function sendServer(payload: Record<string, unknown>) {
  if (!hasMarketingConsent()) return;   // ← rifiuto blocca anche il server
  try {
    fetch('/api/meta-capi', {
      method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fbp: cookie('_fbp'), fbc: fbc(), url: location.href, ...payload }),
    });
  } catch {}
}

/* PDP: al caricamento della pagina prodotto */
export function trackViewContent(value: number) {
  const id = eventId('vc');
  const cd = { content_ids: [PRODUCT_ID], content_type: 'product', value, currency: 'EUR' };
  fbq('track', 'ViewContent', cd, { eventID: id });
  sendServer({ event_name: 'ViewContent', event_id: id, custom_data: cd });
}

/* Click su "Ordina ora" */
export function trackInitiateCheckout(value: number, qty: number) {
  const id = eventId('ic');
  const cd = { content_ids: [PRODUCT_ID], value, currency: 'EUR', num_items: qty };
  fbq('track', 'InitiateCheckout', cd, { eventID: id });
  sendServer({ event_name: 'InitiateCheckout', event_id: id, custom_data: cd });
}

/* Checkout: al click su "Conferma ordine", PRIMA di inviare l'ordine.
   Restituisce l'eventID: passarlo al backend insieme all'ordine. */
export function onCheckoutSubmit(f: { name: string; phone: string; address: string; value: number; qty: number }): string {
  const user = buildUserData(f);
  const id = eventId('pur');
  try { sessionStorage.setItem('bc_order', JSON.stringify({ user, value: f.value, qty: f.qty, eventID: id })); } catch {}
  return id;
}

type StoredOrder = { user: MetaUser; value: number; qty: number; eventID: string };
function readOrder(): StoredOrder | null {
  try { return JSON.parse(sessionStorage.getItem('bc_order') || 'null'); } catch { return null; }
}

/* Pagina di grazie: una volta al caricamento */
export function trackPurchase(orderId?: string) {
  const o = readOrder();
  if (!o || sessionStorage.getItem('bc_purchase_sent') === o.eventID) return;
  fbq('init', PIXEL_ID, { external_id: orderId || o.eventID, ...o.user });
  const cd = { value: o.value, currency: 'EUR', content_ids: [PRODUCT_ID], content_type: 'product', num_items: o.qty };
  fbq('track', 'Purchase', cd, { eventID: o.eventID });
  sendServer({ event_name: 'Purchase', event_id: o.eventID, order_id: orderId, user: o.user, custom_data: cd });
  sessionStorage.setItem('bc_purchase_sent', o.eventID);
}

/* Pagina di grazie: email per il tracking della spedizione. */
export function onTrackingEmail(email: string, orderId?: string) {
  const em = normalizeEmail(email);
  if (!em) return;
  const o = readOrder();
  const user = { ...(o?.user || {}), em };
  const id = eventId('em');
  fbq('init', PIXEL_ID, { external_id: orderId || o?.eventID, ...user });
  fbq('trackCustom', 'EmailTracking', {}, { eventID: id });
  sendServer({ event_name: 'EmailTracking', event_id: id, order_id: orderId, user, custom_data: {} });
}

/* Banner cookie: chiamare al click su "Accetta" */
export function grantConsent() { fbq('consent', 'grant'); }
