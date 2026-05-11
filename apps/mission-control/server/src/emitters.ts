import type { Server } from 'socket.io';
import { makeEvent, mutateAgent, mutateProject } from './fixtures.js';

export function startEmitters(io: Server): () => void {
  const eventTick = setInterval(() => {
    io.emit('orchestration:event', makeEvent());
  }, 2200);

  const agentTick = setInterval(() => {
    io.emit('agent:status', mutateAgent());
  }, 3500);

  const projectTick = setInterval(() => {
    io.emit('project:update', mutateProject());
  }, 5000);

  return () => {
    clearInterval(eventTick);
    clearInterval(agentTick);
    clearInterval(projectTick);
  };
}
