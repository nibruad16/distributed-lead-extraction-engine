import React from 'react'

export default function MetricsGrid() {
  const metrics = [
    {
      label: 'Leads Extracted',
      value: '1,240',
      unit: '',
    },
    {
      label: 'Active Workers',
      value: '12',
      unit: '/20',
    },
    {
      label: 'Success Rate',
      value: '99.8',
      unit: '%',
    },
    {
      label: 'Est. Time Remaining',
      value: '00:04:20',
      unit: '',
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className="bg-zinc-900 border border-zinc-800 rounded p-4 space-y-2 hover:border-emerald-500/50 transition-colors duration-200"
        >
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
            {metric.label}
          </p>
          <div className="flex items-baseline gap-1">
            <p className="text-3xl font-mono font-bold text-emerald-500">
              {metric.value}
            </p>
            {metric.unit && (
              <span className="text-sm text-zinc-600 font-mono">
                {metric.unit}
              </span>
            )}
          </div>
          <div className="h-1 bg-zinc-800 rounded overflow-hidden mt-3">
            <div
              className="h-full bg-emerald-500"
              style={{
                width: `${Math.random() * 40 + 60}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
