import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { searchKnowledge } from '@/lib/api/knowledge';
import { GlassCard } from '@/components/common/GlassCard';

export function KnowledgeSearch() {
  const [q, setQ] = useState('');
  const { data, isFetching } = useQuery({
    queryKey: ['knowledge', q],
    queryFn: () => searchKnowledge(q),
    staleTime: 10_000,
  });

  return (
    <div className="flex h-full flex-col gap-3">
      <label className="relative block">
        <span className="sr-only">Search knowledge base</span>
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-dim"
          aria-hidden
        />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search LightRAG…"
          className="w-full rounded-md border border-border-subtle bg-bg-raised/60 py-2 pl-9 pr-3 text-sm outline-none placeholder:text-text-dim focus:border-accent-cyan"
        />
      </label>
      {isFetching ? (
        <div className="text-xs text-text-dim">Searching…</div>
      ) : data && data.length > 0 ? (
        <ul className="flex flex-col gap-2 overflow-auto scrollbar-thin">
          {data.map((hit) => (
            <li key={hit.id}>
              <GlassCard className="p-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-text-primary">{hit.title}</h4>
                  <span className="font-mono text-[11px] text-accent-cyan">
                    {Math.round(hit.score * 100)}%
                  </span>
                </div>
                <p className="mt-1 text-xs text-text-muted">{hit.snippet}</p>
                <p className="mt-1 font-mono text-[10px] text-text-dim">{hit.source}</p>
              </GlassCard>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-xs text-text-dim italic">
          No matches yet. Try “security”, “deploy”, or “handoff”.
        </div>
      )}
    </div>
  );
}
