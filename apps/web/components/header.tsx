import React from 'react'

export default function Header() {
  return (
    <header className="bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-mono font-bold text-emerald-500 glow-pulse">
        LEAD HUNTER v1.0
      </h1>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full glow-pulse" />
          <span className="text-sm text-zinc-400 font-mono">
            System Status: <span className="text-emerald-500">ONLINE</span>
          </span>
        </div>
        <div className="text-sm text-zinc-400 font-mono">
          Credits: <span className="text-emerald-500">850</span>
        </div>
      </div>
    </header>
  )
}
