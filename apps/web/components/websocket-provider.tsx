'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface WebSocketContextType {
    socket: Socket | null;
    isConnected: boolean;
}

const WebSocketContext = createContext<WebSocketContextType>({
    socket: null,
    isConnected: false,
});

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // Connect to NestJS WebSocket server
        const socketInstance = io(
            process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
            {
                reconnection: true,
                reconnectionDelay: 1000,
                reconnectionAttempts: 5,
            }
        );

        socketInstance.on('connect', () => {
            console.log('✅ WebSocket connected to NestJS');
            setIsConnected(true);
        });

        socketInstance.on('disconnect', () => {
            console.log('❌ WebSocket disconnected');
            setIsConnected(false);
        });

        setSocket(socketInstance);

        return () => {
            socketInstance.disconnect();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ socket, isConnected }}>
            {children}
        </WebSocketContext.Provider>
    );
}

export const useWebSocket = () => useContext(WebSocketContext);
