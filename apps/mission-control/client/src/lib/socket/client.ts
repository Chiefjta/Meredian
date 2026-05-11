import { io, type Socket } from 'socket.io-client';
import { API_MODE, SOCKET_URL } from '@/lib/api/client';
import { makeEvent } from '@/lib/mock/events';
import { AGENT_SEED } from '@/lib/mock/agents';
import { PROJECT_SEED } from '@/lib/mock/projects';
import type { Agent, AgentStatus, OrchestrationEvent, Project } from '@/types';

export interface ServerToClientEvents {
  'agent:status': (a: Agent) => void;
  'orchestration:event': (e: OrchestrationEvent) => void;
  'project:update': (p: Project) => void;
}

export interface ClientToServerEvents {
  'agent:summon': (agentId: string) => void;
}

export type AppSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

let socket: AppSocket | null = null;

interface MockSocketTimers {
  events: ReturnType<typeof setInterval>;
  agents: ReturnType<typeof setInterval>;
  projects: ReturnType<typeof setInterval>;
}
const mockTimers = new Map<AppSocket, MockSocketTimers>();

const STATUSES: AgentStatus[] = ['idle', 'thinking', 'working', 'blocked', 'offline'];

interface MockEmitter {
  on(event: string, cb: (...args: unknown[]) => void): unknown;
  off(event: string, cb: (...args: unknown[]) => void): unknown;
  emit(event: string, ...args: unknown[]): unknown;
  connect(): unknown;
  disconnect(): unknown;
  connected: boolean;
}

function buildMockSocket(): AppSocket {
  // Minimal EventEmitter-shaped stub satisfying the Socket surface we use.
  const listeners = new Map<string, Set<(...args: unknown[]) => void>>();
  const stub: MockEmitter = {
    on: (event, cb) => {
      if (!listeners.has(event)) listeners.set(event, new Set());
      listeners.get(event)!.add(cb);
      return stub;
    },
    off: (event, cb) => {
      listeners.get(event)?.delete(cb);
      return stub;
    },
    emit: (event, ...args) => {
      listeners.get(event)?.forEach((cb) => cb(...args));
      return true;
    },
    connect: () => stub,
    disconnect: () => {
      const timers = mockTimers.get(stub as unknown as AppSocket);
      if (timers) {
        clearInterval(timers.events);
        clearInterval(timers.agents);
        clearInterval(timers.projects);
        mockTimers.delete(stub as unknown as AppSocket);
      }
      return stub;
    },
    connected: true,
  };

  // Start emitters AFTER caller has had a tick to bind listeners.
  queueMicrotask(() => {
    const events = setInterval(() => {
      stub.emit('orchestration:event', makeEvent());
    }, 2200);
    const agents = setInterval(() => {
      const base = AGENT_SEED[Math.floor(Math.random() * AGENT_SEED.length)];
      if (!base) return;
      const nextStatus = STATUSES[Math.floor(Math.random() * STATUSES.length)] as AgentStatus;
      const next: Agent = {
        ...base,
        status: nextStatus,
        lastActiveAt: new Date().toISOString(),
      };
      stub.emit('agent:status', next);
    }, 3500);
    const projects = setInterval(() => {
      const base = PROJECT_SEED[Math.floor(Math.random() * PROJECT_SEED.length)];
      if (!base) return;
      const drift = Math.max(0, Math.min(100, base.healthScore + (Math.random() * 6 - 3)));
      const next: Project = { ...base, healthScore: Math.round(drift) };
      stub.emit('project:update', next);
    }, 5000);
    mockTimers.set(stub as unknown as AppSocket, { events, agents, projects });
  });

  return stub as unknown as AppSocket;
}

export function getSocket(): AppSocket {
  if (socket) return socket;
  if (API_MODE === 'mock') {
    socket = buildMockSocket();
    return socket;
  }
  socket = io(SOCKET_URL || undefined, {
    autoConnect: true,
    transports: ['websocket'],
  }) as AppSocket;
  return socket;
}

export function disposeSocket(): void {
  if (!socket) return;
  socket.disconnect();
  socket = null;
}
