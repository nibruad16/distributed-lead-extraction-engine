import { useEffect, useState } from 'react';
import { useWebSocket } from '@/components/websocket-provider';

interface Metrics {
    activeJobs: number;
    totalLeads: number;
    successRate: number;
    avgProcessingTime: number;
}

export function useRealtimeMetrics() {
    const { socket } = useWebSocket();
    const [metrics, setMetrics] = useState<Metrics>({
        activeJobs: 0,
        totalLeads: 0,
        successRate: 0,
        avgProcessingTime: 0,
    });

    useEffect(() => {
        if (!socket) return;

        socket.on('metrics:update', (data) => {
            setMetrics((prev) => ({
                ...prev,
                ...data,
            }));
        });

        return () => {
            socket.off('metrics:update');
        };
    }, [socket]);

    return metrics;
}
