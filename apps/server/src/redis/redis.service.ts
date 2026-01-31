import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import { EventsGateway } from '../events/events.gateway';

@Injectable()
export class RedisService implements OnModuleInit {
    private client: RedisClientType;
    private subscriber: RedisClientType;
    private logger = new Logger('RedisService');

    constructor(private eventsGateway: EventsGateway) { }

    async onModuleInit() {
        this.client = createClient({
            url: process.env.REDIS_URL || 'redis://localhost:6379',
        });
        this.subscriber = this.client.duplicate();

        await this.client.connect();
        await this.subscriber.connect();

        // Subscribe to worker events
        await this.subscriber.subscribe('scraping:events', (message) => {
            const event = JSON.parse(message);
            this.logger.log(`Received event: ${event.type} for job ${event.jobId}`);

            // Broadcast to WebSocket clients
            this.eventsGateway.broadcastJobUpdate(event.jobId, event);
            this.eventsGateway.broadcastMetricsUpdate(event);
        });

        this.logger.log('✅ Redis connected and subscribed to events');
    }

    async pushToQueue(queue: string, data: any) {
        await this.client.lPush(queue, JSON.stringify(data));
    }

    async getFromQueue(queue: string) {
        const data = await this.client.rPop(queue);
        return data ? JSON.parse(data) : null;
    }

    getClient() {
        return this.client;
    }
}
