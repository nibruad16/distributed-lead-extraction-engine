import React from 'react'
import { Table } from 'lucide-react'

export default function LeadsTable() {
  const leads = [
    {
      name: 'Ahmed Al-Mansouri',
      phone: '+971 50 123 4567',
      rating: 4.8,
      email: 'ahmed@realestate.ae',
    },
    {
      name: 'Fatima Al-Maktoum',
      phone: '+971 55 987 6543',
      rating: 4.9,
      email: 'fatima@properties.ae',
    },
    {
      name: 'Mohammed Al-Zarooni',
      phone: '+971 52 456 7890',
      rating: 4.7,
      email: 'mohammed@dubaireal.ae',
    },
    {
      name: 'Layla Al-Qasimi',
      phone: '+971 58 234 5678',
      rating: 4.6,
      email: 'layla@emiratesagent.ae',
    },
    {
      name: 'Khalid Al-Dhaheri',
      phone: '+971 54 765 4321',
      rating: 4.8,
      email: 'khalid@dubairealty.ae',
    },
  ]

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded overflow-hidden flex flex-col glitch-border">
      <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
        <Table size={16} className="text-emerald-500" />
        <h2 className="text-sm font-mono font-bold text-zinc-300 uppercase tracking-widest">
          Latest Leads
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <table className="w-full font-mono text-xs">
          <thead className="bg-zinc-900 border-b border-zinc-800 sticky top-0">
            <tr>
              <th className="px-4 py-2 text-left text-zinc-400">Name</th>
              <th className="px-4 py-2 text-left text-zinc-400">Phone</th>
              <th className="px-4 py-2 text-left text-zinc-400">Rating</th>
              <th className="px-4 py-2 text-left text-zinc-400">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {leads.map((lead, idx) => (
              <tr
                key={idx}
                className="hover:bg-zinc-900 transition-colors duration-150 border-zinc-800"
              >
                <td className="px-4 py-3 text-emerald-400">{lead.name}</td>
                <td className="px-4 py-3 text-zinc-400">{lead.phone}</td>
                <td className="px-4 py-3">
                  <span className="text-emerald-500 font-bold">
                    ★ {lead.rating}
                  </span>
                </td>
                <td className="px-4 py-3 text-cyan-400 break-all">
                  {lead.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
