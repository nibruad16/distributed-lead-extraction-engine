'use client';

import { useEffect, useState, useRef } from 'react';
import { useWebSocket } from '@/components/websocket-provider';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

interface ActivityEvent {
    id: string;
    jobId: string;
    type: string;
    message: string;
    timestamp: string;
}

export default function LiveActivityFeed() {
    const { socket } = useWebSocket();
    const [events, setEvents] = useState<ActivityEvent[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!socket) return;

        socket.on('job:update', (event) => {
            setEvents((prev) => [
                { ...event, id: Date.now().toString() },
                ...prev,
            ].slice(0, 100));
        });

        return () => {
            socket.off('job:update');
        };
    }, [socket]);

    const getEventColor = (type: string) => {
        switch (type) {
            case 'STARTED':
                return 'bg-blue-500';
            case 'PROGRESS':
                return 'bg-yellow-500';
            case 'LEAD_FOUND':
                return 'bg-green-500';
            case 'COMPLETED':
                return 'bg-emerald-500';
            case 'ERROR':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <Card className="p-4">
            <h3 className="text-lg font-semibold mb-4">Live Activity</h3>
            <ScrollArea className="h-[400px]" ref={scrollRef}>
                <div className="space-y-2">
                    {events.length === 0 ? (
                        <p className="text-sm text-muted-foreground text-center py-8">
                            No activity yet. Start a scraping job to see live updates!
                        </p>
                    ) : (
                        events.map((event) => (
                            <div
                                key={event.id}
                                className="p-3 bg-muted rounded-lg animate-in fade-in slide-in-from-top-2"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Badge className={getEventColor(event.type)} variant="default">
                                                {event.type}
                                            </Badge>
                                            <span className="text-xs text-muted-foreground">
                                                Job: {event.jobId.slice(0, 8)}...
                                            </span>
                                        </div>
                                        <p className="text-sm">{event.message}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                                        {new Date(event.timestamp).toLocaleTimeString()}
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </ScrollArea>
        </Card>
    );
}
