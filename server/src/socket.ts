import { Server, type Socket } from 'socket.io';
import type { Server as HttpServer } from 'node:http';
import { startEmitters } from './emitters.js';
import { AGENTS } from './fixtures.js';

export function attachSocket(httpServer: HttpServer): Server {
  const io = new Server(httpServer, {
    cors: { origin: true },
  });

  io.on('connection', (socket: Socket) => {
    // eslint-disable-next-line no-console
    console.log(`[socket] connected: ${socket.id}`);

    socket.on('agent:summon', (agentId: string) => {
      const exists = AGENTS.some((a) => a.id === agentId);
      // eslint-disable-next-line no-console
      console.log(`[socket] summon ${agentId} (exists=${exists})`);
    });

    socket.on('disconnect', () => {
      // eslint-disable-next-line no-console
      console.log(`[socket] disconnected: ${socket.id}`);
    });
  });

  startEmitters(io);
  return io;
}
