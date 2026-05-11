// Domain contracts — frozen shapes. Backend MUST match these once wired.

export type AgentStatus = 'idle' | 'thinking' | 'working' | 'blocked' | 'offline';

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  lastActiveAt: string; // ISO-8601
  currentTaskId?: string;
}

export type ProjectPhase = 'discovery' | 'build' | 'qa' | 'delivery' | 'live';

export interface Project {
  id: string;
  name: string;
  client: string;
  phase: ProjectPhase;
  healthScore: number; // 0..100
  assignedAgents: string[]; // Agent.id[]
}

export type ServiceType = 'website' | 'saas' | 'mobile' | 'integration' | 'audit';
export type ServiceStatus = 'queued' | 'in_progress' | 'review' | 'done';

export interface ServiceItem {
  id: string;
  type: ServiceType;
  projectId: string;
  progress: number; // 0..100
  status: ServiceStatus;
  title?: string;
}

export type OrchestrationEventType = 'handoff' | 'message' | 'tool_call' | 'completion';

export interface OrchestrationEvent {
  id: string;
  ts: string; // ISO-8601
  from: string; // Agent.id
  to?: string; // Agent.id
  type: OrchestrationEventType;
  payload: Record<string, unknown>;
}

export interface KnowledgeHit {
  id: string;
  title: string;
  snippet: string;
  score: number; // 0..1
  source: string;
}

export interface GlobalStats {
  agentsOnline: number;
  securityScore: number; // 0..100
  qualityScore: number; // 0..100
}
