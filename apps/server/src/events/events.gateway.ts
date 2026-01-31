import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class EventsGateway
    implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    private logger = new Logger('EventsGateway');

    handleConnection(client: Socket) {
        this.logger.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('join:job')
    handleJoinJob(client: Socket, jobId: string) {
        client.join(`job:${jobId}`);
        this.logger.log(`Client ${client.id} joined job room: ${jobId}`);
    }

    @SubscribeMessage('leave:job')
    handleLeaveJob(client: Socket, jobId: string) {
        client.leave(`job:${jobId}`);
        this.logger.log(`Client ${client.id} left job room: ${jobId}`);
    }

    // Broadcast methods to be called by services
    broadcastJobUpdate(jobId: string, data: any) {
        this.server.to(`job:${jobId}`).emit('job:update', data);
    }

    broadcastMetricsUpdate(data: any) {
        this.server.emit('metrics:update', data);
    }
}
