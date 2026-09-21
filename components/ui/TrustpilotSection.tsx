'use client'

import React from 'react'

const StarIcon = ({ size = 14, fill = 'white' }: { size?: number; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
)

const TrustpilotBadge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102" width="14" height="14">
    <polygon points="51,0 61.69,33.54 97.05,33.54 68.68,54.22 79.37,87.76 51,67.08 22.63,87.76 33.32,54.22 4.95,33.54 40.31,33.54" fill="#219653" />
    <polygon points="51,67.08 68.68,54.22 72,64" fill="#0D5E30" />
  </svg>
)

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#219653" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const FullStars = () => (
  <div style={{ display: 'flex', gap: '2.57px' }}>
    {[...Array(5)].map((_, i) => (
      <span key={i} style={{ width: 24, height: 24, background: '#219653', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2 }}>
        <StarIcon size={14} />
      </span>
    ))}
  </div>
)

interface ReviewCardProps {
  initials: string
  avatarColor: string
  name: string
  date: string
  title: string
  body: string
}

const ReviewCard = ({ initials, avatarColor, name, date, title, body }: ReviewCardProps) => (
  <div style={{
    background: '#FFFFFF',
    border: '1px solid #EBECEF',
    borderRadius: 16,
    padding: 24,
    boxShadow: '0px 2px 12px rgba(0,0,0,0.18)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    flex: '0 0 300px',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
  }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
      <div style={{ position: 'relative', width: 62, height: 65, flexShrink: 0 }}>
        <div style={{
          width: 62, height: 62, borderRadius: '50%',
          background: avatarColor, color: '#fff',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 22, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{initials}</div>
        <div style={{
          position: 'absolute', left: 36, top: 39,
          width: 26, height: 26,
          background: '#FFFFFF', border: '1px solid #EBECEF',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <TrustpilotBadge />
        </div>
      </div>
      <div style={{ flex: 1, paddingTop: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 16, fontWeight: 600, color: '#000' }}>{name}</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            border: '1px solid #219653', borderRadius: 4, padding: '2px 6px',
            fontFamily: 'Inter, system-ui, sans-serif', fontSize: 11, fontWeight: 500, color: '#219653',
            whiteSpace: 'nowrap',
          }}>
            <CheckIcon /> Su invito
          </span>
        </div>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 13, color: 'rgba(0,0,0,0.5)' }}>{date}</div>
      </div>
    </div>
    <FullStars />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 15, fontWeight: 700, color: 'rgba(0,0,0,0.75)', margin: 0, lineHeight: 1.4 }}>{title}</p>
      <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 14, fontWeight: 400, color: 'rgba(0,0,0,0.6)', lineHeight: 1.65, margin: 0 }}>{body}</p>
    </div>
  </div>
)

const reviews: ReviewCardProps[] = [
  { initials: 'FR', avatarColor: '#FF3722', name: 'Francesca', date: '12 mar 2026', title: 'Non ho mai visto le mie gambe così lisce!', body: 'Sinceramente ero un po\' scettica all\'inizio, ma dopo averlo usato con regolarità ho notato davvero una bella differenza. La pelle è molto più liscia e uniforme e anche l\'aspetto della cellulite è migliorato tantissimo 😍' },
  { initials: 'VA', avatarColor: '#8E44AD', name: 'Valentina', date: '18 feb 2026', title: 'Finalmente qualcosa che funziona davvero!', body: 'Ho 38 anni e combatto la cellulite da quando ne ho 22. Ho provato di tutto, creme costose, fanghi, persino sedute in cabina estetica. Dopo tre settimane di uso quotidiano, le cosce sono già visibilmente diverse.' },
  { initials: 'GI', avatarColor: '#2980B9', name: 'Giulia', date: '4 gen 2026', title: 'Il mio rituale serale preferito 🥰', body: 'Lo uso ogni sera per circa 15 minuti prima di dormire, è diventato quasi meditativo! La pelle delle gambe è diventata molto più liscia e tonica. Non pensavo che un dispositivo domestico potesse dare questi risultati.' },
  { initials: 'MA', avatarColor: '#FF3722', name: 'Martina', date: '22 mar 2026', title: 'Scettica all\'inizio, convinta adesso', body: 'Quando l\'ho comprato non mi aspettavo grandi cose. Invece dopo 5 settimane devo ricredermi, le gambe sono visibilmente più lisce e soprattutto la pelle è più elastica al tatto. Mia sorella me lo ha già rubato 😂' },
  { initials: 'AL', avatarColor: '#16A085', name: 'Alessia', date: '8 dic 2025', title: 'Ottima qualità, risultati reali', body: 'Si capisce subito che è un prodotto serio. Lo uso da sei settimane e i risultati si vedono soprattutto sulle cosce dove avevo la cellulite più concentrata. La batteria dura tantissimo. Soddisfatta al 100%!' },
  { initials: 'EL', avatarColor: '#D35400', name: 'Elena', date: '30 ott 2025', title: 'Meglio dei trattamenti in cabina estetica', body: 'Ho speso una fortuna in cabina estetica negli ultimi anni. Questo dispositivo, usato a casa con regolarità, mi ha dato risultati superiori a qualsiasi trattamento professionale che abbia mai fatto. Sono senza parole.' },
  { initials: 'MO', avatarColor: '#C0392B', name: 'Monica', date: '23 feb 2026', title: 'Dopo due gravidanze mi riapproprio del mio corpo', body: 'Dopo due gravidanze la cellulite aveva preso il sopravvento. BellaCura mi ha aiutata tantissimo, non solo per i risultati estetici, ma anche per la sensazione quotidiana di prendermi cura di me stessa 🙏' },
  { initials: 'CL', avatarColor: '#16A085', name: 'Claudia', date: '8 mar 2026', title: 'Pelle trasformata in quattro settimane', body: 'Quattro settimane fa ho iniziato con BellaCura e oggi posso dire con certezza che la mia pelle non è più quella di prima. Le gambe sono lisce, la cellulite si vede pochissimo e mi sento molto più sicura di me ❤️' },
]

export default function TrustpilotSection() {
  return (
    <section style={{ margin: '48px 0 0', padding: '40px 0 0', borderTop: '1px solid #e5e7eb' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginBottom: 28, paddingInline: 20 }}>
        <h2 style={{
          fontFamily: '\'Playfair Display\', Georgia, serif',
          fontSize: 'clamp(19px, 4vw, 24px)',
          fontWeight: 700,
          color: 'inherit',
          margin: 0,
          textAlign: 'center',
        }}>Cosa dicono le clienti su Trustpilot</h2>

        {/* Trustpilot logo SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 102" style={{ height: 48, width: 'auto', maxWidth: '100%', display: 'block' }} role="img" aria-label="Trustpilot">
          <polygon points="53.67,0 65.12,35.24 102.18,35.24 72.20,57.02 83.65,92.26 53.67,70.48 23.69,92.26 35.14,57.02 5.16,35.24 42.22,35.24" fill="#00B67A" />
          <polygon points="53.67,70.48 72.20,57.02 76,68" fill="#005128" />
          <text x="120" y="76" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontSize="70" fontWeight="700" fill="#191919" letterSpacing="-1.5">Trustpilot</text>
        </svg>

        {/* Aggregate */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Inter, system-ui, sans-serif', fontSize: 14, color: '#555' }}>
          <div style={{ display: 'flex', gap: 2 }}>
            {[...Array(4)].map((_, i) => (
              <span key={i} style={{ width: 20, height: 20, background: '#00b67a', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2 }}>
                <StarIcon size={11} />
              </span>
            ))}
            <span style={{ width: 20, height: 20, background: 'linear-gradient(90deg,#00b67a 80%,#dcdce6 80%)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2 }}>
              <StarIcon size={11} />
            </span>
          </div>
          <strong>4,8 su 5</strong>&nbsp;·&nbsp;Recensioni verificate
        </div>
      </div>

      {/* Cards carousel */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        paddingBottom: 8,
        marginLeft: -20,
        marginRight: -20,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </section>
  )
}
