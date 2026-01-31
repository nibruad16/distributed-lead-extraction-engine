'use client';

import { useRealtimeMetrics } from '@/hooks/use-realtime-metrics';
import { Activity, Database, TrendingUp, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function RealtimeMetrics() {
    const metrics = useRealtimeMetrics();

    const cards = [
        {
            title: 'Active Jobs',
            value: metrics.activeJobs,
            icon: Activity,
            color: 'text-emerald-500',
        },
        {
            title: 'Total Leads',
            value: metrics.totalLeads,
            icon: Database,
            color: 'text-blue-500',
        },
        {
            title: 'Success Rate',
            value: `${metrics.successRate}%`,
            icon: TrendingUp,
            color: 'text-green-500',
        },
        {
            title: 'Avg Time',
            value: `${metrics.avgProcessingTime}s`,
            icon: Clock,
            color: 'text-purple-500',
        },
    ];

    return (
        <div className="grid grid-cols-4 gap-4">
            {cards.map((card) => (
                <Card key={card.title} className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">{card.title}</p>
                            <p className="text-3xl font-bold mt-2">{card.value}</p>
                        </div>
                        <card.icon className={`w-8 h-8 ${card.color}`} />
                    </div>
                </Card>
            ))}
        </div>
    );
}
