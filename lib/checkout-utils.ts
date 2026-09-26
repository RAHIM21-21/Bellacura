/* BellaCura · normalizzazione dati checkout per Meta (pixel + Conversions API)
   Funzioni pure: usabili sia lato client sia lato server. */

export type MetaUser = {
  fn?: string; ln?: string; ph?: string; zp?: string; ct?: string; country?: string; em?: string;
};

// Telefono italiano → formato Meta: solo cifre, con prefisso 39, senza "+"
export function normalizePhoneIT(raw?: string | null): string | null {
  if (!raw) return null;
  let d = String(raw).replace(/[^\d+]/g, '');
  if (d.startsWith('+')) d = d.slice(1);
  else if (d.startsWith('0039')) d = d.slice(2);
  d = d.replace(/\D/g, '');
  if (d.startsWith('39') && d.length >= 11) return d;
  if (/^3\d{8,9}$/.test(d) || /^0\d{5,10}$/.test(d)) return '39' + d;
  return d.length >= 8 ? d : null;
}

// Per mostrare il numero: "+39 333 123 4567"
export function displayPhoneIT(raw: string): string {
  const n = normalizePhoneIT(raw);
  if (!n) return raw;
  return '+39 ' + n.slice(2).replace(/^(\d{3})(\d{3})(\d+)$/, '$1 $2 $3');
}

// "Maria Grazia Rossi" → { fn: "maria", ln: "grazia rossi" }
export function splitName(raw?: string | null): { fn: string | null; ln: string | null } {
  const clean = String(raw || '').trim().replace(/\s+/g, ' ');
  if (!clean) return { fn: null, ln: null };
  const parts = clean.split(' ');
  const norm = (s: string) => s.toLowerCase().replace(/[.,''\-]/g, '').trim() || null;
  return { fn: norm(parts[0]), ln: parts.length > 1 ? norm(parts.slice(1).join(' ')) : null };
}

// "Via Roma 1, 20100 Milano (MI)" → { zp: "20100", ct: "milano" }
export function parseAddressIT(raw?: string | null): { zp: string | null; ct: string | null } {
  const a = String(raw || '').replace(/\s+/g, ' ').trim();
  const m = a.match(/\b(\d{5})\b\s*,?\s*([A-Za-zÀ-ÿ''\s\-]+?)?\s*(?:\(?\b[A-Z]{2}\b\)?)?\s*(?:,|$)/);
  if (!m) return { zp: null, ct: null };
  let ct = (m[2] || '').trim().replace(/\s+[A-Za-z]{2}$/, '');
  ct = ct.toLowerCase().replace(/[^a-zà-ÿ]/g, '');
  return { zp: m[1], ct: ct || null };
}

export function normalizeEmail(raw?: string | null): string | null {
  const e = String(raw || '').trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? e : null;
}

// Dati utente per Meta, in chiaro (il pixel li cifra da solo; la CAPI li cifra sul server)
export function buildUserData(input: { name?: string; phone?: string; address?: string; email?: string }): MetaUser {
  const { fn, ln } = splitName(input.name);
  const { zp, ct } = parseAddressIT(input.address);
  const out: Record<string, string | null> = {
    fn, ln, ph: normalizePhoneIT(input.phone), zp, ct, country: 'it', em: normalizeEmail(input.email),
  };
  Object.keys(out).forEach(k => out[k] == null && delete out[k]);
  return out as MetaUser;
}
