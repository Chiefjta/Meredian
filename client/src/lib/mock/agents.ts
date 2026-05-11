import type { Agent } from '@/types';

// The canonical 9. DO NOT reorder — UI relies on Orchestrator first.
export const AGENT_SEED: Agent[] = [
  {
    id: 'agent-orchestrator',
    name: 'Orchestrator',
    role: 'Routes work, owns handoffs',
    status: 'working',
    lastActiveAt: new Date().toISOString(),
    currentTaskId: 'task-001',
  },
  {
    id: 'agent-architect',
    name: 'Architect',
    role: 'System design, tech decisions',
    status: 'thinking',
    lastActiveAt: new Date().toISOString(),
  },
  {
    id: 'agent-builder',
    name: 'Builder',
    role: 'Code generation, scaffolding',
    status: 'working',
    lastActiveAt: new Date().toISOString(),
    currentTaskId: 'task-002',
  },
  {
    id: 'agent-inspector',
    name: 'Inspector',
    role: 'Code review, QA',
    status: 'idle',
    lastActiveAt: new Date().toISOString(),
  },
  {
    id: 'agent-sentinel',
    name: 'Sentinel',
    role: 'Security scanning, secrets, deps',
    status: 'working',
    lastActiveAt: new Date().toISOString(),
    currentTaskId: 'task-003',
  },
  {
    id: 'agent-scribe',
    name: 'Scribe',
    role: 'Documentation, knowledge capture',
    status: 'idle',
    lastActiveAt: new Date().toISOString(),
  },
  {
    id: 'agent-courier',
    name: 'Courier',
    role: 'Deployments, CI/CD',
    status: 'blocked',
    lastActiveAt: new Date().toISOString(),
  },
  {
    id: 'agent-analyst',
    name: 'Analyst',
    role: 'Metrics, telemetry, insights',
    status: 'thinking',
    lastActiveAt: new Date().toISOString(),
  },
  {
    id: 'agent-liaison',
    name: 'Liaison',
    role: 'Client comms, status reports',
    status: 'offline',
    lastActiveAt: new Date(Date.now() - 1000 * 60 * 42).toISOString(),
  },
];
