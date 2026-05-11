import type { Agent } from '@/types';
import { AGENT_SEED } from '@/lib/mock/agents';
import { API_MODE, delay, jsonFetch } from './client';

export async function fetchAgents(): Promise<Agent[]> {
  if (API_MODE === 'mock') return delay(AGENT_SEED);
  return jsonFetch<Agent[]>('/agents');
}

export async function summonAgent(agentId: string): Promise<{ ok: true }> {
  if (API_MODE === 'mock') return delay({ ok: true as const }, 150);
  return jsonFetch(`/agents/${encodeURIComponent(agentId)}/summon`, { method: 'POST' });
}
