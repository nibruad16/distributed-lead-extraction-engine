import React from 'react'
import { Database, Settings, Radio, FileText } from 'lucide-react'

export default function Sidebar() {
  const navItems = [
    { icon: Database, label: 'Mission Control', active: true },
    { icon: Settings, label: 'Target Config', active: false },
    { icon: Radio, label: 'Proxy Network', active: false },
    { icon: FileText, label: 'Logs', active: false },
  ]

  return (
    <div className="w-16 bg-zinc-950 border-r border-zinc-800 flex flex-col items-center py-6 space-y-8">
      {navItems.map((item, idx) => (
        <button
          key={idx}
          className={`p-3 rounded transition-all duration-200 ${
            item.active
              ? 'text-emerald-500 glow-pulse'
              : 'text-zinc-600 hover:text-emerald-500'
          }`}
          title={item.label}
        >
          <item.icon size={24} />
        </button>
      ))}
    </div>
  )
}
