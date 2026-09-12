import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | BellaCura',
  description: 'Informativa sulla privacy di BellaCura. Come raccogliamo, usiamo e proteggiamo i tuoi dati personali.',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#1D3557]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Ultimo aggiornamento: Settembre 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Titolare del trattamento</h2>
            <p className="text-gray-700 leading-relaxed">
              Il Titolare del trattamento dei dati personali è <strong>BellaCura S.r.l.</strong>, con sede legale in Italia. Puoi contattarci in qualsiasi momento all&apos;indirizzo: <a href="mailto:privacy@bellacura.it" className="text-[#1D3557] hover:underline">privacy@bellacura.it</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Dati raccolti</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Raccogliamo le seguenti categorie di dati personali:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Dati di contatto:</strong> nome, cognome, indirizzo email, numero di telefono</li>
              <li><strong>Dati di spedizione:</strong> indirizzo di consegna, città, CAP, provincia</li>
              <li><strong>Dati d&apos;ordine:</strong> prodotti acquistati, importi, metodo di pagamento (no dati carta)</li>
              <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate (tramite cookie)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Finalità del trattamento</h2>
            <p className="text-gray-700 leading-relaxed mb-3">I tuoi dati sono trattati per:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Elaborare ed evadere i tuoi ordini (base legale: esecuzione del contratto)</li>
              <li>Gestire il servizio clienti e le richieste di reso (base legale: esecuzione del contratto)</li>
              <li>Inviare comunicazioni promozionali, solo previo consenso (base legale: consenso)</li>
              <li>Adempiere a obblighi fiscali e legali (base legale: obbligo legale)</li>
              <li>Analizzare il comportamento degli utenti per migliorare il sito (base legale: interesse legittimo)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Conservazione dei dati</h2>
            <p className="text-gray-700 leading-relaxed">
              I dati relativi agli ordini sono conservati per 10 anni in ottemperanza agli obblighi fiscali italiani. I dati di navigazione sono conservati per un massimo di 26 mesi. I dati di marketing sono conservati fino alla revoca del consenso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Condivisione con terzi</h2>
            <p className="text-gray-700 leading-relaxed mb-3">I tuoi dati possono essere condivisi con:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Corrieri:</strong> SDA, BRT, GLS — per la consegna degli ordini</li>
              <li><strong>Processori di pagamento:</strong> Stripe — per i pagamenti con carta</li>
              <li><strong>Servizi cloud:</strong> Vercel — per l&apos;hosting del sito</li>
              <li><strong>Analisi:</strong> Google Analytics — per statistiche di navigazione anonimizzate</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">Non vendiamo mai i tuoi dati a terzi.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. I tuoi diritti (GDPR)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Ai sensi del Regolamento UE 2016/679 (GDPR), hai il diritto di:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Accedere ai tuoi dati personali</li>
              <li>Rettificare dati inesatti</li>
              <li>Richiedere la cancellazione («diritto all&apos;oblio»)</li>
              <li>Limitare o opporti al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Per esercitare i tuoi diritti, scrivi a <a href="mailto:privacy@bellacura.it" className="text-[#1D3557] hover:underline">privacy@bellacura.it</a>. Risponderemo entro 14 giorni.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Trasferimenti internazionali</h2>
            <p className="text-gray-700 leading-relaxed">
              Alcuni fornitori (es. Vercel, Stripe) possono trattare dati fuori dall&apos;UE. In tali casi ci assicuriamo che siano adottate adeguate garanzie (clausole contrattuali standard UE o decisioni di adeguatezza).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Cookie</h2>
            <p className="text-gray-700 leading-relaxed">
              Per informazioni dettagliate sull&apos;uso dei cookie, consulta la nostra <Link href="/cookie-policy/" className="text-[#1D3557] hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Reclami</h2>
            <p className="text-gray-700 leading-relaxed">
              Hai il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (GPDP), Piazza Venezia 11, 00187 Roma — <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#1D3557] hover:underline">www.garanteprivacy.it</a>
            </p>
          </section>

        </div>

        <div className="mt-12 p-6 bg-[#EBF4F8] rounded-2xl border border-[#D6EAF0] text-center">
          <p className="text-gray-700 mb-4">Hai domande sulla tua privacy?</p>
          <Link href="/contatti/" className="inline-block bg-[#1D3557] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#152840] transition-colors">
            Contattaci
          </Link>
        </div>
      </div>
    </main>
  )
}
