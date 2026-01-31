'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import SearchTarget from '@/components/search-target'
import MetricsGrid from '@/components/metrics-grid'
import TerminalLogs from '@/components/terminal-logs'
import LeadsTable from '@/components/leads-table'
import { WebSocketProvider } from '@/components/websocket-provider'
import RealtimeMetrics from '@/components/realtime-metrics'
import LiveActivityFeed from '@/components/live-activity-feed'

export default function DashboardPage() {
    const [isScanning, setIsScanning] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleInitiateScrape = () => {
        setIsScanning(true)
        setProgress(0)

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setIsScanning(false)
                    return 100
                }
                return prev + Math.random() * 15
            })
        }, 300)
    }

    return (
        <WebSocketProvider>
            <div className="flex h-screen bg-background text-foreground overflow-hidden">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-auto">
                        <div className="p-6 space-y-6">
                            <SearchTarget
                                isScanning={isScanning}
                                progress={progress}
                                onInitiateScrape={handleInitiateScrape}
                            />
                            <RealtimeMetrics />
                            <div className="grid grid-cols-2 gap-6">
                                <LiveActivityFeed />
                                <LeadsTable />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </WebSocketProvider>
    )
}
