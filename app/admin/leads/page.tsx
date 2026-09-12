import { neon } from '@neondatabase/serverless'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'bellacura2024'

type Lead = { email: string; source: string; created_at: string }

async function readLeads(): Promise<Lead[]> {
  try {
    const sql = neon(process.env.POSTGRES_URL as string)
    const rows = await sql`SELECT email, source, created_at FROM leads ORDER BY created_at DESC`
    return rows as Lead[]
  } catch {
    return []
  }
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: { pw?: string }
}) {
  const pw = searchParams?.pw ?? ''
  if (pw !== ADMIN_PASSWORD) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9E5E9]">
        <form className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-sm space-y-4 text-center">
          <h1 className="text-2xl font-black text-gray-800">Admin · BellaCura</h1>
          <p className="text-sm text-gray-500">Inserisci la password per accedere alle lead</p>
          <input
            name="pw"
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
          />
          <button
            formAction="/admin/leads"
            className="w-full bg-[#1D3557] text-white font-bold py-3 rounded-2xl hover:bg-[#152840] transition"
          >
            Accedi
          </button>
        </form>
      </div>
    )
  }

  const leads = await readLeads()

  return (
    <div className="min-h-screen bg-[#F9E5E9] py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Lead BellaCura</h1>
            <p className="text-gray-500 text-sm mt-1">{leads.length} email raccolte</p>
          </div>
          <a
            href={`/api/export-leads?pw=${pw}`}
            className="bg-[#1D3557] text-white font-bold px-6 py-3 rounded-2xl hover:bg-[#152840] transition text-sm"
          >
            ⬇ Esporta CSV
          </a>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {leads.length === 0 ? (
            <div className="py-20 text-center text-gray-400">
              <div className="text-5xl mb-4">📭</div>
              <p>Nessuna lead ancora. Il popup è attivo!</p>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4 text-left">#</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-left">Fonte</th>
                  <th className="px-6 py-4 text-left">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.map((lead, i) => (
                  <tr key={i} className="hover:bg-[#EBF4F8] transition">
                    <td className="px-6 py-4 text-gray-400">{leads.length - i}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">{lead.email}</td>
                    <td className="px-6 py-4">
                      <span className="bg-[#D6EAF0] text-[#152840] text-xs px-2 py-0.5 rounded-full font-medium">
                        {lead.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(lead.created_at).toLocaleString('it-IT', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
