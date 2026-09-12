import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy | BellaCura',
  description: 'Informativa sui cookie di BellaCura. Quali cookie usiamo e come gestirli.',
  robots: { index: false, follow: false },
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-cream-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#1D3557]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Cookie Policy</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Ultimo aggiornamento: Settembre 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Cosa sono i cookie?</h2>
            <p className="text-gray-700 leading-relaxed">
              I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Ci permettono di riconoscere il tuo browser alle visite successive e di memorizzare alcune preferenze per migliorare la tua esperienza.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookie tecnici (necessari)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questi cookie sono indispensabili per il funzionamento del sito e non possono essere disattivati. Non richiedono il tuo consenso.
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
                    <td className="p-3 text-gray-700 font-mono">bellacura_session</td>
                    <td className="p-3 text-gray-600">Gestione sessione utente e carrello</td>
                    <td className="p-3 text-gray-600">Sessione</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 text-gray-700 font-mono">bellacura_countdown</td>
                    <td className="p-3 text-gray-600">Memorizza il timer offerta per la sessione corrente</td>
                    <td className="p-3 text-gray-600">Sessione</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700 font-mono">csrf_token</td>
                    <td className="p-3 text-gray-600">Protezione sicurezza del sito (CSRF)</td>
                    <td className="p-3 text-gray-600">Sessione</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookie analitici</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizziamo Google Analytics per comprendere come i visitatori utilizzano il sito. I dati raccolti sono anonimizzati e aggregati.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-700">Nome</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Fornitore</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Scopo</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Durata</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 text-gray-700 font-mono">_ga</td>
                    <td className="p-3 text-gray-600">Google Analytics</td>
                    <td className="p-3 text-gray-600">Distingue gli utenti unici</td>
                    <td className="p-3 text-gray-600">2 anni</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 text-gray-700 font-mono">_ga_*</td>
                    <td className="p-3 text-gray-600">Google Analytics</td>
                    <td className="p-3 text-gray-600">Mantiene lo stato della sessione</td>
                    <td className="p-3 text-gray-600">2 anni</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookie di marketing</h2>
            <p className="text-gray-700 leading-relaxed">
              Potremmo utilizzare cookie di remarketing (es. Meta Pixel, Google Ads) per mostrarti pubblicità pertinente sui social media e su altri siti. Questi cookie vengono attivati solo previo tuo consenso esplicito tramite il banner cookie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Come gestire i cookie</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Puoi gestire le tue preferenze cookie in qualsiasi momento attraverso le impostazioni del tuo browser:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#1D3557] hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-[#1D3557] hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#1D3557] hover:underline">Safari (Mac)</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#1D3557] hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Tieni presente che la disabilitazione di alcuni cookie potrebbe influire sulla funzionalità del sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Ulteriori informazioni</h2>
            <p className="text-gray-700 leading-relaxed">
              Per maggiori dettagli su come trattiamo i tuoi dati, consulta la nostra <Link href="/privacy-policy/" className="text-[#1D3557] hover:underline">Privacy Policy</Link>. Per qualsiasi domanda, contattaci a <a href="mailto:privacy@bellacura.it" className="text-[#1D3557] hover:underline">privacy@bellacura.it</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
