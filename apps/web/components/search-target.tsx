'use client';

import React, { useState } from 'react'
import { Play } from 'lucide-react'

interface SearchTargetProps {
  isScanning: boolean
  progress: number
  onInitiateScrape: () => void
}

export default function SearchTarget({
  isScanning,
  progress,
  onInitiateScrape,
}: SearchTargetProps) {
  const [searchValue, setSearchValue] = useState(
    'Real Estate Agents in Dubai'
  )

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="block text-xs text-zinc-500 font-mono mb-2 uppercase tracking-widest">
            Enter Search Target
          </label>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            disabled={isScanning}
            placeholder="e.g. Real Estate Agents in Dubai"
            className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-emerald-500 font-mono text-sm placeholder-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:opacity-50"
          />
        </div>
        <button
          onClick={onInitiateScrape}
          disabled={isScanning}
          className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-zinc-950 font-mono font-bold px-6 py-3 rounded flex items-center gap-2 transition-all duration-200 glow-pulse disabled:glow-pulse"
        >
          <Play size={16} />
          {isScanning ? 'Scanning...' : 'INITIATE SCRAPE'}
        </button>
      </div>

      {isScanning && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-mono">
              Progress
            </span>
            <span className="text-xs text-emerald-500 font-mono">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-zinc-900 border border-zinc-800 rounded h-2 overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-200 glow-pulse"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
