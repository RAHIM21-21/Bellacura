const rows = [
  { metric: 'Costo',          bc: '€59,90 una tantum',      clinic: '€80–200 a seduta' },
  { metric: 'Tempo',          bc: '10 min a casa tua',       clinic: '60 min + spostamenti' },
  { metric: 'Frequenza',      bc: 'Ogni giorno, quando vuoi', clinic: '1–2 volte a settimana' },
  { metric: 'Privacy',        bc: '100% privato',             clinic: 'In salone con estetista' },
  { metric: 'Costo annuale',  bc: '€59,90',                  clinic: '€2.000–4.000+' },
  { metric: 'Appuntamento',   bc: 'Non necessario',           clinic: 'Obbligatorio' },
  { metric: 'Tecnologia',     bc: 'Luce rossa + calore + cupping', clinic: 'Varia per salone' },
]

export default function ComparisonVS() {
  return (
    <section className="bc-comparison" style={{ background: '#FBF8F4', padding: '64px 0' }}>
      <style>{`
        @media (max-width: 767px) {
          .bc-comparison { padding: 36px 0 !important; }
          .bc-comparison-header { margin-bottom: 20px !important; }
        }
      `}</style>
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '0 20px' }}>

        {/* Header */}
        <div className="bc-comparison-header" style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'white', border: '1px solid #f3d4dd',
            color: '#A8355A', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 99, marginBottom: 16,
            boxShadow: '0 1px 4px rgba(168,53,90,0.10)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#A8355A', display: 'inline-block' }} />
            Confronta
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic', fontWeight: 600,
            fontSize: 36, lineHeight: 1.15,
            color: '#111', margin: '0 0 10px',
          }}>
            BellaCura vs.<br />Centro Estetico
          </h2>
          <p style={{ color: '#9ca3af', fontSize: 14, margin: 0 }}>
            Stessa efficacia. Una frazione del costo.
          </p>
        </div>


        {/* Table card */}
        <div style={{
          background: 'white', borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(168,53,90,0.08), 0 1px 4px rgba(0,0,0,0.05)',
        }}>

          {/* Column headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid #f3f4f6' }}>
            <div style={{ padding: '12px 10px' }} />
            <div style={{
              padding: '12px 10px', textAlign: 'center',
              background: 'linear-gradient(135deg, #A8355A 0%, #c2546f 100%)',
            }}>
              <span style={{
                color: 'white', fontSize: 11, fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>BellaCura®</span>
            </div>
            <div style={{ padding: '12px 10px', textAlign: 'center', background: '#f9fafb' }}>
              <span style={{
                color: '#9ca3af', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>Centro Est.</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.metric}
              style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: i < rows.length - 1 ? '1px solid #f3f4f6' : 'none',
                background: i % 2 === 0 ? 'white' : '#fdfbfc',
              }}
            >
              {/* Metric */}
              <div style={{ padding: '13px 10px 13px 14px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', letterSpacing: '0.02em' }}>
                  {row.metric}
                </span>
              </div>
              {/* BellaCura */}
              <div style={{
                padding: '13px 10px', textAlign: 'center',
                borderLeft: '1px solid rgba(168,53,90,0.10)',
                borderRight: '1px solid rgba(168,53,90,0.10)',
                background: 'rgba(168,53,90,0.03)',
              }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: '#A8355A', lineHeight: 1.35,
                  display: 'block',
                }}>
                  {row.bc}
                </span>
              </div>
              {/* Clinic */}
              <div style={{ padding: '13px 10px', textAlign: 'center' }}>
                <span style={{ fontSize: 11, color: '#9ca3af', lineHeight: 1.35, display: 'block' }}>
                  {row.clinic}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer callout */}
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 13, marginTop: 20 }}>
          Con BellaCura risparmi fino a{' '}
          <strong style={{ color: '#A8355A' }}>€3.960 l&apos;anno</strong>
          {' '}rispetto alle sedute in salone.
        </p>

      </div>
    </section>
  )
}
