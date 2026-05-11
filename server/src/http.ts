import express, { type Express } from 'express';
import cors from 'cors';
import { AGENTS, PROJECTS, SERVICES } from './fixtures.js';

export function buildApp(): Express {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, ts: new Date().toISOString() });
  });

  app.get('/api/agents', (_req, res) => res.json(AGENTS));
  app.get('/api/projects', (_req, res) => res.json(PROJECTS));
  app.get('/api/services', (_req, res) => res.json(SERVICES));

  app.post('/api/agents/:id/summon', (req, res) => {
    const exists = AGENTS.some((a) => a.id === req.params.id);
    if (!exists) {
      res.status(404).json({ ok: false, error: 'agent_not_found' });
      return;
    }
    res.json({ ok: true });
  });

  app.post('/api/knowledge/search', (req, res) => {
    const { query } = req.body as { query?: string };
    res.json([
      {
        id: 'kb-001',
        title: `Echo: ${query ?? ''}`,
        snippet: 'Stubbed LightRAG response from server. TODO: wire real backend.',
        score: 0.5,
        source: 'server/stub',
      },
    ]);
  });

  return app;
}
