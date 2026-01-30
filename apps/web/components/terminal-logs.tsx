'use client';

import React, { useEffect, useState } from 'react'
import { Terminal } from 'lucide-react'

export default function TerminalLogs() {
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    const initialLogs = [
      '[10:42] Proxy rotated (192.168.x.x)',
      '[10:43] Found 5 leads from primary source',
      '[10:44] Validating email addresses...',
      '[10:44] Proxy rotation scheduled',
      '[10:45] Rate limit check passed',
      '[10:45] Extraction pipeline initiated',
    ]
    setLogs(initialLogs)

    const interval = setInterval(() => {
      const newLog =
        Math.random() > 0.5
          ? `[${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}] Found ${Math.floor(Math.random() * 15) + 1} new leads`
          : `[${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}] Proxy rotated (${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.x.x)`

      setLogs((prev) => [newLog, ...prev.slice(0, 10)])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded overflow-hidden flex flex-col glitch-border">
      <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
        <Terminal size={16} className="text-emerald-500" />
        <h2 className="text-sm font-mono font-bold text-zinc-300 uppercase tracking-widest">
          Terminal Logs
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-1 font-mono text-sm relative">
        <div className="scan-line absolute inset-0 pointer-events-none opacity-10 bg-emerald-500" />
        {logs.map((log, idx) => (
          <div key={idx} className="text-emerald-500 text-xs leading-relaxed">
            <span className="text-zinc-600">{'> '}</span>
            {log}
          </div>
        ))}
      </div>
    </div>
  )
}
