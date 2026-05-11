# Meredian

> A 9-agent virtual digital agency. Strategy, design, code, security, and growth — orchestrated by one Strategy/CTO agent through a single Mission Control dashboard.

This is the unified Meredian monorepo: blueprint + dashboard code in one place.

---

## Repo Layout

```
Meredian/
├── README.md
├── docs/
│   ├── AGENCY-BLUEPRINT.md       The 9-agent team: roles, skills, collaboration flows
│   ├── SERVICES-CATALOG.md       Full saleable service list
│   ├── DASHBOARD-SPEC.md         Mission Control layout + tech stack + roadmap
│   └── dashboard-reference.jpg   Visual design target
│
├── prompts/
│   └── marketplace-audit.md      Senior-architect audit rubric (load as system prompt)
│
└── apps/
    └── mission-control/          Real-time command center
        ├── client/               Vite + React 18 + TS + Tailwind + shadcn/ui
        ├── server/               Node + Express + Socket.io
        └── README.md             App-specific quick start
```

---

## Mission Control Quick Start

```bash
cd apps/mission-control
nvm use            # Node 20.x LTS
npm install
npm run dev        # client http://localhost:5173, server http://localhost:4000
```

See [`apps/mission-control/README.md`](./apps/mission-control/README.md) for the full app docs.

| Script (in `apps/mission-control/`) | What it does |
|---|---|
| `npm run dev` | Run client + server in parallel |
| `npm run build` | Typecheck + Vite build, then `tsc` server |
| `npm run lint` | ESLint on the client |
| `npm run test` | Vitest unit tests |
| `npm run e2e` | Playwright end-to-end |

---

## The 9-Agent Team

1. **Design & UX** — UI generation, design systems, visual quality
2. **Marketing & Growth** — SEO, copywriting, CRO, ASO, launches
3. **Core Development** — Main coding engine, TDD, clean architecture
4. **Mobile Development** — React Native / Flutter / native iOS+Android
5. **Security & Quality** — Vulnerability scans, security reviews, testing
6. **Meta & Skill Management** — Creates new skills, maintains the system
7. **Strategy & Orchestration** — CTO/PM, task delegation, project planning
8. **Knowledge & Research** — RAG/memory layer, research, intelligent search
9. **Discovery & Plugin Hub** — Catalog of new skills + plugins

See [`docs/AGENCY-BLUEPRINT.md`](./docs/AGENCY-BLUEPRINT.md) for the full breakdown.

---

## Status

| Item | State |
|---|---|
| Monorepo consolidated | ✅ 2026-05-11 |
| Blueprint docs committed | ✅ |
| Mission Control scaffolded (mock data) | ✅ v0.1 |
| Mission Control wired to OpenClaw gateway | ⏳ v0.5 next |
| Agent skill registry vetted & installed | ⏳ Pending security review |
| LightRAG knowledge layer | ⏳ Future |

---

_Maintained by the Power Money Machine engine room. 💰⚡_
