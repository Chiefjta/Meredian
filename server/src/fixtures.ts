// Server-side fixtures mirror the client mock data. Kept here to keep server self-contained.

export type AgentStatus = 'idle' | 'thinking' | 'working' | 'blocked' | 'offline';

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  lastActiveAt: string;
  currentTaskId?: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  phase: 'discovery' | 'build' | 'qa' | 'delivery' | 'live';
  healthScore: number;
  assignedAgents: string[];
}

export interface ServiceItem {
  id: string;
  type: 'website' | 'saas' | 'mobile' | 'integration' | 'audit';
  projectId: string;
  progress: number;
  status: 'queued' | 'in_progress' | 'review' | 'done';
  title?: string;
}

export interface OrchestrationEvent {
  id: string;
  ts: string;
  from: string;
  to?: string;
  type: 'handoff' | 'message' | 'tool_call' | 'completion';
  payload: Record<string, unknown>;
}

export const AGENTS: Agent[] = [
  { id: 'agent-orchestrator', name: 'Orchestrator', role: 'Routes work, owns handoffs', status: 'working', lastActiveAt: new Date().toISOString(), currentTaskId: 'task-001' },
  { id: 'agent-architect',    name: 'Architect',    role: 'System design, tech decisions', status: 'thinking', lastActiveAt: new Date().toISOString() },
  { id: 'agent-builder',      name: 'Builder',      role: 'Code generation, scaffolding',  status: 'working',  lastActiveAt: new Date().toISOString(), currentTaskId: 'task-002' },
  { id: 'agent-inspector',    name: 'Inspector',    role: 'Code review, QA',               status: 'idle',     lastActiveAt: new Date().toISOString() },
  { id: 'agent-sentinel',     name: 'Sentinel',     role: 'Security scanning, secrets, deps', status: 'working', lastActiveAt: new Date().toISOString(), currentTaskId: 'task-003' },
  { id: 'agent-scribe',       name: 'Scribe',       role: 'Documentation, knowledge capture', status: 'idle', lastActiveAt: new Date().toISOString() },
  { id: 'agent-courier',      name: 'Courier',      role: 'Deployments, CI/CD',            status: 'blocked',  lastActiveAt: new Date().toISOString() },
  { id: 'agent-analyst',      name: 'Analyst',      role: 'Metrics, telemetry, insights',  status: 'thinking', lastActiveAt: new Date().toISOString() },
  { id: 'agent-liaison',      name: 'Liaison',      role: 'Client comms, status reports',  status: 'offline',  lastActiveAt: new Date(Date.now() - 60 * 60 * 1000).toISOString() },
];

export const PROJECTS: Project[] = [
  { id: 'proj-arysnel-portal',    name: 'Arysnel Client Portal',   client: 'Arysnel Internal',  phase: 'build',     healthScore: 92, assignedAgents: ['agent-orchestrator', 'agent-builder', 'agent-inspector'] },
  { id: 'proj-meridian-saas',     name: 'Meridian SaaS Platform',  client: 'Meridian Labs',     phase: 'qa',        healthScore: 78, assignedAgents: ['agent-architect', 'agent-builder', 'agent-sentinel'] },
  { id: 'proj-northwind-audit',   name: 'Northwind Security Audit', client: 'Northwind Ltd.',   phase: 'discovery', healthScore: 64, assignedAgents: ['agent-sentinel', 'agent-analyst', 'agent-scribe'] },
  { id: 'proj-helix-mobile',      name: 'Helix Mobile App',        client: 'Helix Health',      phase: 'delivery',  healthScore: 88, assignedAgents: ['agent-builder', 'agent-courier', 'agent-liaison'] },
  { id: 'proj-atlas-integration', name: 'Atlas Integration Bus',   client: 'Atlas Logistics',   phase: 'live',      healthScore: 96, assignedAgents: ['agent-orchestrator', 'agent-analyst'] },
];

export const SERVICES: ServiceItem[] = [
  { id: 'svc-001', type: 'website',     projectId: 'proj-arysnel-portal',    progress: 65,  status: 'in_progress', title: 'Marketing site' },
  { id: 'svc-002', type: 'saas',        projectId: 'proj-arysnel-portal',    progress: 40,  status: 'in_progress', title: 'Billing module' },
  { id: 'svc-003', type: 'integration', projectId: 'proj-arysnel-portal',    progress: 100, status: 'done',        title: 'Stripe webhooks' },
  { id: 'svc-004', type: 'saas',        projectId: 'proj-meridian-saas',     progress: 85,  status: 'review',      title: 'Dashboard v2' },
  { id: 'svc-005', type: 'mobile',      projectId: 'proj-meridian-saas',     progress: 30,  status: 'in_progress', title: 'iOS companion' },
  { id: 'svc-006', type: 'audit',       projectId: 'proj-northwind-audit',   progress: 15,  status: 'in_progress', title: 'OWASP top 10 review' },
  { id: 'svc-007', type: 'audit',       projectId: 'proj-northwind-audit',   progress: 0,   status: 'queued',      title: 'Dependency scan' },
  { id: 'svc-008', type: 'mobile',      projectId: 'proj-helix-mobile',      progress: 95,  status: 'review',      title: 'App Store submission' },
  { id: 'svc-009', type: 'integration', projectId: 'proj-helix-mobile',      progress: 100, status: 'done',        title: 'HealthKit sync' },
  { id: 'svc-010', type: 'integration', projectId: 'proj-atlas-integration', progress: 100, status: 'done',        title: 'EDI gateway' },
  { id: 'svc-011', type: 'website',     projectId: 'proj-atlas-integration', progress: 50,  status: 'in_progress', title: 'Partner docs portal' },
  { id: 'svc-012', type: 'saas',        projectId: 'proj-meridian-saas',     progress: 0,   status: 'queued',      title: 'Multi-tenant migration' },
];

const STATUSES: AgentStatus[] = ['idle', 'thinking', 'working', 'blocked', 'offline'];
const EVENT_TYPES: OrchestrationEvent['type'][] = ['handoff', 'message', 'tool_call', 'completion'];
const MESSAGES = [
  'spinning up sandbox',
  'requesting design review',
  'lint passed, zero warnings',
  'flagged 2 deps with known CVEs',
  'docs synced to knowledge base',
  'preview deploy is live',
  'metrics ingestion at 4.2k events/s',
  'client awaiting signoff',
];

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)] as T;
}

export function makeEvent(): OrchestrationEvent {
  const from = pick(AGENTS).id;
  const type = pick(EVENT_TYPES);
  const needsTo = type === 'handoff' || type === 'message';
  const to = needsTo ? pick(AGENTS.filter((a) => a.id !== from)).id : undefined;
  return {
    id: `evt-${Date.now()}-${Math.floor(Math.random() * 1e6).toString(36)}`,
    ts: new Date().toISOString(),
    from,
    type,
    payload: { note: pick(MESSAGES) },
    ...(to ? { to } : {}),
  };
}

export function mutateAgent(): Agent {
  const a = pick(AGENTS);
  const nextStatus = pick(STATUSES);
  const updated: Agent = { ...a, status: nextStatus, lastActiveAt: new Date().toISOString() };
  // Mutate in place so REST responses stay consistent with socket emissions.
  const i = AGENTS.findIndex((x) => x.id === a.id);
  if (i !== -1) AGENTS[i] = updated;
  return updated;
}

export function mutateProject(): Project {
  const p = pick(PROJECTS);
  const drift = Math.max(0, Math.min(100, p.healthScore + (Math.random() * 6 - 3)));
  const updated: Project = { ...p, healthScore: Math.round(drift) };
  const i = PROJECTS.findIndex((x) => x.id === p.id);
  if (i !== -1) PROJECTS[i] = updated;
  return updated;
}
