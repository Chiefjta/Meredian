# Meredian

> Project root for the Meredian virtual digital agency — a 9-agent system orchestrated under one Mission Control dashboard, designed to deliver web, mobile, SaaS, security, and growth services end-to-end.

This repo is the **strategic / planning layer** for Meredian. The actual code lives in sibling repos:

| Repo | Purpose |
|---|---|
| [`ARSYNEL/mission-control`](https://github.com/ARSYNEL/mission-control) | The dashboard itself — React + Vite + TS + Tailwind + Express + Socket.io |
| `ARSYNEL/meredian` *(this repo)* | Blueprints, docs, prompts, design references, agent registry |

---

## What's in this repo

```
docs/
  AGENCY-BLUEPRINT.md       — Full 9-agent team structure, roles, collaboration flows
  SERVICES-CATALOG.md       — What this stack can deliver (websites, SaaS, mobile, etc.)
  DASHBOARD-SPEC.md         — Mission Control dashboard layout + tech stack
  dashboard-reference.jpg   — Visual reference image (design target for v1)

prompts/
  marketplace-audit.md      — Senior-architect audit rubric for marketplace platforms
```

## The 9-Agent Team (summary)

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

## Status

| Item | State |
|---|---|
| Org / repo created | ✅ 2026-05-11 |
| Blueprint docs committed | ✅ Initial commit |
| Mission Control scaffold (`ARSYNEL/mission-control`) | ✅ Scaffolded, mock data |
| Mission Control wired to gateway | ⏳ v0.5 next |
| Agent skill registry vetted & installed | ⏳ Pending security review |
| LightRAG knowledge layer | ⏳ Future |

---

_Maintained by the Power Money Machine engine room. 💰⚡_
