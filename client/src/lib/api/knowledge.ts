import type { KnowledgeHit } from '@/types';
import { API_MODE, delay, jsonFetch } from './client';

// TODO: wire to LightRAG endpoint (POST /knowledge/search { query }) once available.
export async function searchKnowledge(query: string): Promise<KnowledgeHit[]> {
  if (API_MODE === 'mock') {
    const q = query.trim().toLowerCase();
    const corpus: KnowledgeHit[] = [
      {
        id: 'kb-001',
        title: 'Agent handoff protocol v2',
        snippet: 'Orchestrator routes by capability tag, falls back to Liaison on ambiguous intent…',
        score: 0.94,
        source: 'docs/handoff.md',
      },
      {
        id: 'kb-002',
        title: 'Security review checklist',
        snippet: 'Sentinel runs on every PR; flags secrets, unsafe eval, and outdated deps with CVE…',
        score: 0.88,
        source: 'docs/security.md',
      },
      {
        id: 'kb-003',
        title: 'Deploy pipeline',
        snippet: 'Courier handles preview deploys per branch and promotes on green CI…',
        score: 0.81,
        source: 'docs/deploy.md',
      },
    ];
    const filtered = q
      ? corpus.filter(
          (h) => h.title.toLowerCase().includes(q) || h.snippet.toLowerCase().includes(q),
        )
      : corpus;
    return delay(filtered, 200);
  }
  return jsonFetch<KnowledgeHit[]>('/knowledge/search', {
    method: 'POST',
    body: JSON.stringify({ query }),
  });
}
