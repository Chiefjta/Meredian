import type { OrchestrationEvent, OrchestrationEventType } from '@/types';

const AGENTS = [
  'agent-orchestrator',
  'agent-architect',
  'agent-builder',
  'agent-inspector',
  'agent-sentinel',
  'agent-scribe',
  'agent-courier',
  'agent-analyst',
  'agent-liaison',
];

const TYPES: OrchestrationEventType[] = ['handoff', 'message', 'tool_call', 'completion'];

function pick<T>(arr: readonly T[]): T {
  // Safe because callers pass non-empty arrays.
  return arr[Math.floor(Math.random() * arr.length)] as T;
}

const MESSAGE_SAMPLES = [
  'spinning up sandbox',
  'requesting design review',
  'lint passed, zero warnings',
  'flagged 2 deps with known CVEs',
  'docs synced to knowledge base',
  'preview deploy is live',
  'metrics ingestion at 4.2k events/s',
  'client awaiting signoff',
  'handoff package prepared',
];

export function makeEvent(): OrchestrationEvent {
  const from = pick(AGENTS);
  const type = pick(TYPES);
  const needsTo = type === 'handoff' || type === 'message';
  let to: string | undefined;
  if (needsTo) {
    to = pick(AGENTS.filter((a) => a !== from));
  }
  return {
    id: `evt-${Date.now()}-${Math.floor(Math.random() * 1e6).toString(36)}`,
    ts: new Date().toISOString(),
    from,
    to,
    type,
    payload: { note: pick(MESSAGE_SAMPLES) },
  };
}

// Seed a small rolling buffer so the UI never renders empty on first paint.
export const EVENT_SEED: OrchestrationEvent[] = Array.from({ length: 24 }, () => makeEvent());
