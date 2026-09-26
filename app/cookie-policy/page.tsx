import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy | BellaCura',
  description: 'Informativa sui cookie di BellaCura. Quali cookie usiamo, come gestirli e come cambiare le tue preferenze.',
  robots: { index: true, follow: true },
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#1D3557]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Cookie Policy</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Ultimo aggiornamento: Settembre 2026</p>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Cosa sono i cookie?</h2>
            <p className="text-gray-700 leading-relaxed">
              I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web.
              Ci permettono di riconoscere il tuo browser alle visite successive e di memorizzare alcune preferenze
              per migliorare la tua esperienza.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Cookie tecnici (necessari)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questi cookie sono indispensabili per il funzionamento del sito e non possono essere disattivati.
              Non richiedono il tuo consenso ai sensi dell&apos;art. 122 del Codice Privacy e delle Linee guida
              del Garante del 10 giugno 2021.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-700">Nome</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Scopo</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Durata</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 text-gray-700 font-mono">bc_consent</td>
                    <td className="p-3 text-gray-600">Memorizza le tue preferenze cookie (localStorage)</td>
                    <td className="p-3 text-gray-600">6 mesi</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700 font-mono">bc_order</td>
                    <td className="p-3 text-gray-600">Dati temporanei dell&apos;ordine per la pagina di conferma (sessionStorage)</td>
                    <td className="p-3 text-gray-600">Sessione</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700 font-mono">crisp-*</td>
                    <td className="p-3 text-gray-600">Chat di assistenza clienti (Crisp)</td>
                    <td className="p-3 text-gray-600">6 mesi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Cookie di marketing e statistica (con consenso)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questi cookie vengono installati <strong>solo dopo il tuo esplicito consenso</strong>.
              Se rifiuti o non esprimi preferenze, nessun cookie di questa categoria viene creato e
              nessun dato viene inviato a terze parti a fini pubblicitari.
            </p>

            <h3 className="text-base font-semibold text-gray-800 mb-2 mt-6">Meta Pixel (Facebook / Instagram)</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Utilizziamo il Meta Pixel di Meta Platforms Ireland Ltd (4 Grand Canal Square, Grand Canal Harbour,
              Dublino 2, Irlanda) per misurare l&apos;efficacia dei nostri annunci pubblicitari su Facebook e Instagram
              e per mostrarti annunci più pertinenti basati sui tuoi interessi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il Pixel funziona tramite due componenti: un codice nel browser (che imposta i cookie{' '}
              <code className="bg-gray-100 px-1 rounded text-sm">_fbp</code> e{' '}
              <code className="bg-gray-100 px-1 rounded text-sm">_fbc</code>) e una chiamata server-to-server
              (Conversions API) che invia i dati dell&apos;ordine direttamente a Meta senza passare per il browser.
              I dati personali (nome, telefono, indirizzo) vengono cifrati con SHA-256 prima di essere trasmessi.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-700">Nome</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Scopo</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Durata</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Titolare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 text-gray-700 font-mono">_fbp</td>
                    <td className="p-3 text-gray-600">
                      Identifica il browser per misurare le conversioni e mostrare annunci pertinenti
                    </td>
                    <td className="p-3 text-gray-600">3 mesi</td>
                    <td className="p-3 text-gray-600">Meta Platforms Ireland Ltd</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700 font-mono">_fbc</td>
                    <td className="p-3 text-gray-600">
                      Collega il click su un annuncio Facebook/Instagram all&apos;acquisto sul sito
                    </td>
                    <td className="p-3 text-gray-600">3 mesi</td>
                    <td className="p-3 text-gray-600">Meta Platforms Ireland Ltd</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              I dati raccolti tramite il Meta Pixel vengono condivisi con Meta Platforms Ireland Ltd e possono
              essere trasferiti negli Stati Uniti sulla base delle clausole contrattuali standard approvate
              dalla Commissione Europea. Per maggiori informazioni sull&apos;uso dei dati da parte di Meta,
              consulta la{' '}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D3557] underline"
              >
                Privacy Policy di Meta
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Come gestire le tue preferenze</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Puoi cambiare le tue preferenze in qualsiasi momento cliccando sul link{' '}
              <strong>&ldquo;Preferenze cookie&rdquo;</strong> presente nel footer del sito.
              Il banner si riaprirà e potrai modificare o revocare il tuo consenso.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Le preferenze vengono memorizzate per 6 mesi. Trascorso tale periodo, il banner verrà mostrato
              nuovamente per rinnovare il tuo consenso.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Puoi inoltre disattivare i cookie direttamente dalle impostazioni del tuo browser o tramite
              il tool{' '}
              <a
                href="https://www.youronlinechoices.com/it/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D3557] underline"
              >
                Your Online Choices
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Titolare del trattamento</h2>
            <p className="text-gray-700 leading-relaxed">
              Il titolare del trattamento dei dati personali raccolti tramite questo sito è:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 space-y-1">
              <p><strong>BellaCura</strong></p>
              <p>Email: <a href="mailto:info@bellacura.it" className="text-[#1D3557] underline">info@bellacura.it</a></p>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              Per esercitare i tuoi diritti (accesso, rettifica, cancellazione, opposizione al trattamento)
              puoi contattarci all&apos;indirizzo email indicato sopra.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Modifiche alla Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Questa Cookie Policy può essere aggiornata periodicamente. In caso di modifiche sostanziali
              al banner o alle categorie di cookie utilizzati, verrà richiesto un nuovo consenso.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
