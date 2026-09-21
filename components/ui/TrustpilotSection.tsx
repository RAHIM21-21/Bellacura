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
  { initials: 'FR', avatarColor: '#FF3722', name: 'Francesca', date: '12 mar 2026', title: 'Non ho mai visto le mie gambe così lisce!', body: 'Sinceramente ero un po\' scettica all\'inizio, ma dopo averlo usato con costanza ho notato davvero una bella differenza. La pelle è molto più liscia e uniforme e anche l\'aspetto della cellulite è migliorato tantissimo 😍 Sono davvero soddisfatta dell\'acquisto!' },
  { initials: 'VA', avatarColor: '#8E44AD', name: 'Valentina', date: '18 feb 2026', title: 'Finalmente qualcosa che funziona davvero!', body: 'Ho 38 anni e combatto la cellulite da quando ne ho 22. Ho provato di tutto, creme costose, fanghi, persino qualche seduta in cabina estetica, ma niente ha mai fatto quello che fa questo dispositivo. Dopo tre settimane di uso quotidiano, le cosce sono già visibilmente diverse, la pelle è più soda e la buccia d\'arancia si vede molto meno. Continuerò ad usarlo!' },
  { initials: 'GI', avatarColor: '#2980B9', name: 'Giulia', date: '4 gen 2026', title: 'Il mio rituale serale preferito 🥰', body: 'L\'ho preso su consiglio di un\'amica che lo usa da mesi e devo dire che avevo ragione a fidarmi. Lo uso ogni sera per circa 15 minuti prima di dormire, è diventato quasi meditativo! La pelle delle gambe è diventata molto più liscia e tonica. Non pensavo che un dispositivo domestico potesse dare questi risultati onestamente.' },
  { initials: 'MA', avatarColor: '#FF3722', name: 'Martina', date: '22 mar 2026', title: 'Scettica all\'inizio, convinta adesso', body: 'Quando l\'ho comprato non mi aspettavo grandi cose, avevo già perso fiducia in tutti questi gadget. Invece dopo 5 settimane devo ricredermi, le gambe sono visibilmente più lisce e soprattutto la pelle è più elastica al tatto. Mia sorella me lo ha già rubato 😂 dovrò ordinarne un altro.' },
  { initials: 'AL', avatarColor: '#16A085', name: 'Alessia', date: '8 dic 2025', title: 'Ottima qualità, risultati reali', body: 'Si capisce subito che è un prodotto serio. Lo uso da sei settimane e i risultati si vedono soprattutto sulle cosce dove avevo la cellulite più concentrata. La batteria dura tantissimo, il dispositivo è comodo da tenere in mano e non fa rumore eccessivo. Soddisfatta al 100%!' },
  { initials: 'CH', avatarColor: '#D35400', name: 'Chiara', date: '14 feb 2026', title: 'Il regalo a me stessa che vale ogni centesimo', body: 'Me lo sono regalata per San Valentino e mi ha già ripagata abbondantemente! Uso la funzione di calore e quella delle microcorrenti in combinazione e la differenza sulla pelle è notevole. Faccio sport regolarmente ma la cellulite ce l\'avevo comunque, adesso finalmente si nota molto meno. Molto soddisfatta 💪' },
  { initials: 'SA', avatarColor: '#27AE60', name: 'Sara', date: '2 nov 2025', title: 'Ci vuole costanza ma i risultati arrivano', body: 'Attenzione: non aspettatevi miracoli in una settimana. Bisogna usarlo con regolarità. Io lo uso a giorni alterni da quasi due mesi e adesso vedo davvero una bella differenza. La pelle è più compatta e la cellulite sulle natiche è migliorata tantissimo. Serve pazienza ma funziona, questo è certo!' },
  { initials: 'IL', avatarColor: '#8E44AD', name: 'Ilaria', date: '19 mar 2026', title: 'Prodotto professionale per uso casalingo', body: 'Faccio l\'estetista e so riconoscere un buon dispositivo quando lo vedo. Questo ha una qualità che raramente trovo nei prodotti consumer. I quattro meccanismi d\'azione combinati fanno davvero la differenza rispetto ai massaggiatori singoli. Lo consiglio alle mie clienti come mantenimento tra un trattamento e l\'altro in cabina.' },
  { initials: 'LA', avatarColor: '#C0392B', name: 'Laura', date: '27 gen 2026', title: 'Non riesco a immaginarmi la beauty routine senza', body: 'Ormai è diventato indispensabile. Lo uso ogni sera e mi rilasso mentre mi prendo cura delle gambe. I risultati sono arrivati gradualmente ma in modo davvero evidente, dopo sei settimane ho fatto una foto comparativa e la differenza è impressionante. Consiglio vivamente a tutte!' },
  { initials: 'RO', avatarColor: '#2980B9', name: 'Roberta', date: '5 feb 2026', title: 'Finalmente mi rimetto il costume con meno ansia', body: 'Ho sempre vissuto il mare con un po\' di disagio per via della cellulite. Quest\'anno ho iniziato ad usare BellaCura con largo anticipo e devo dire che mi sento molto più a mio agio. Le gambe sono più lisce e la pelle ha un aspetto completamente diverso rispetto all\'anno scorso. Grazie! 🌊' },
  { initials: 'FE', avatarColor: '#F39C12', name: 'Federica', date: '11 dic 2025', title: 'Il regalo di Natale perfetto per le amiche', body: 'L\'ho comprato per me e poi ne ho presi altri tre come regali di Natale per le mie amiche. Tutte entusiaste! È un prodotto che si vede che è di qualità, la confezione è bella e il dispositivo è solido. I risultati parlano da soli. Lo consiglio senza riserve a chiunque.' },
  { initials: 'CL', avatarColor: '#16A085', name: 'Claudia', date: '8 mar 2026', title: 'Pelle trasformata in quattro settimane', body: 'Quattro settimane fa ho iniziato il mio percorso con BellaCura e oggi posso dire con certezza che la mia pelle non è più quella di prima. Le gambe sono lisce, la cellulite si vede pochissimo e mi sento molto più sicura di me stessa. È diventato il mio momento di cura personale preferito della giornata ❤️' },
  { initials: 'EL', avatarColor: '#D35400', name: 'Elena', date: '30 ott 2025', title: 'Meglio dei trattamenti in cabina estetica', body: 'Ho speso una fortuna in cabina estetica negli ultimi anni per trattamenti anticellulite. Questo dispositivo, usato a casa con costanza, mi ha dato risultati superiori a qualsiasi trattamento professionale che abbia mai fatto. Sono senza parole. Qualità davvero eccezionale, non me lo aspettavo.' },
  { initials: 'PA', avatarColor: '#8E44AD', name: 'Paola', date: '15 gen 2026', title: 'Ottimo anche per il recupero muscolare', body: 'Lo uso principalmente sulle gambe e sulle braccia. Per la cellulite funziona benissimo, ma voglio segnalare anche che è ottimo per allentare la tensione muscolare dopo l\'allenamento in palestra. Due benefici in uno solo! Un acquisto davvero intelligente che consiglio a tutte le sportive.' },
  { initials: 'MO', avatarColor: '#C0392B', name: 'Monica', date: '23 feb 2026', title: 'Dopo due gravidanze mi riapproprio del mio corpo', body: 'Dopo due gravidanze la cellulite aveva preso il sopravvento e facevo fatica a ritrovare la mia forma. BellaCura mi ha aiutata tantissimo, non solo per i risultati estetici, ma anche per la sensazione quotidiana di prendermi cura di me stessa. Sono davvero molto grata 🙏' },
  { initials: 'CR', avatarColor: '#27AE60', name: 'Cristina', date: '1 mar 2026', title: 'Un acquisto che rifarei mille volte', body: 'Ho aspettato prima di scrivere la recensione perché volevo essere sicura dei risultati. Eccomi qui dopo due mesi: la cellulite è notevolmente ridotta, la pelle è più soda e mi sento bene. Nessun rimpianto, solo tanta soddisfazione. Grazie mille BellaCura, continuate così!' },
  { initials: 'SI', avatarColor: '#F39C12', name: 'Silvia', date: '20 nov 2025', title: 'Funziona davvero, parola di scettica', body: "Sono una che non crede ai miracoli e tantomeno ai dispositivi 'rivoluzionari' che si trovano online. Ma questa volta mi sbagliavo di grosso. I risultati sono reali, visibili e persistenti. La cellulite sulle cosce è dimezzata in due mesi di uso regolare. Sono genuinamente stupita." },
  { initials: 'DA', avatarColor: '#2980B9', name: 'Daniela', date: '7 dic 2025', title: 'Il miglior investimento beauty degli ultimi anni', body: 'Ho 45 anni e la mia pelle aveva bisogno di qualcosa di serio. BellaCura è stata una vera rivelazione: la pelle è più elastica, più giovane, e la cellulite che avevo da anni si è ridotta in modo significativo. Spendo meno in trattamenti estetici e ho risultati nettamente migliori. Consigliatissimo!' },
  { initials: 'AN', avatarColor: '#16A085', name: 'Annalisa', date: '12 feb 2026', title: 'Non ho altro da aggiungere se non: perfetto', body: 'Semplice da usare, efficace, di ottima qualità. Ho visto i primi miglioramenti già in 3 settimane e dopo 2 mesi la pelle delle gambe è completamente trasformata. Non avrei potuto chiedere di meglio. Sono felicissima di questo acquisto e lo consiglio a tutte senza esitazione 😊' },
  { initials: 'TE', avatarColor: '#D35400', name: 'Teresa', date: '10 gen 2026', title: 'Mio marito mi ha chiesto cosa stava succedendo alle mie gambe 😂', body: 'Questa è la miglior recensione che posso fare: mio marito, che non nota MAI niente, mi ha chiesto spontaneamente se avessi fatto qualcosa alle gambe perché sembrano diverse. Questo dice tutto. BellaCura funziona e i risultati si vedono anche agli occhi di chi non ti sta nemmeno guardando apposta!' },
  { initials: 'NO', avatarColor: '#8E44AD', name: 'Noemi', date: '15 mar 2026', title: 'Meglio di qualsiasi crema anticellulite abbia mai provato', body: 'Ho speso cifre ridicole in creme anticellulite negli anni, alcune davvero costosissime. Nessuna mi ha mai dato quello che mi ha dato questo dispositivo in sei settimane. La pelle è davvero cambiata, non solo superficialmente. Continuate così, avete fatto qualcosa di veramente eccezionale.' },
]

export default function TrustpilotSection() {
  return (
    <section style={{ margin: 0, padding: 0 }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 16, paddingInline: 16 }}>
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
