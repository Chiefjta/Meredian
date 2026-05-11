# Mission Control Dashboard — Spec

> Single web-based control center for managing the 9-agent Meredian team. Built by the Design & UX Agent + Core Development Agent, hosted locally or via Docker.
>
> Live scaffold: [`Meredian-Inc/Meredian/apps/mission-control`](https://github.com/Meredian-Inc/Meredian/tree/main/apps/mission-control)

## Visual Reference

See [`dashboard-reference.jpg`](./dashboard-reference.jpg) for the design target.

**Style:** Dark navy / near-black background, electric blue + mint green accents, rounded cards, large bold numerals for KPIs, circular progress rings, kanban-style task board, line/bar charts for trends. Command-center / SaaS analytics feel.

## Layout

### Top Navigation Bar

- Project Selector
- Active Agents Status (online/offline + current task)
- Global Security & Quality Score
- Quick Skill Factory Access

### Left Sidebar — Agent Team Panel

- List of all 9 agents with toggle switches to activate/deactivate
- Current workload and last output preview for each
- One-click "Summon Agent" buttons

### Central Command Area

- Project Brief Input
- Live Task Queue & Timeline (Gantt-style or Kanban)
- Real-time Chat / Orchestration Log (managed by Strategy Agent)
- Output Preview Pane (code, designs, documents)

### Right Sidebar — Knowledge & Insights

- LightRAG Search Bar
- Obsidian Vault Quick View
- Performance Metrics (code size, load times, security findings)

### Bottom Status Bar

- Resource Monitor (CPU / RAM / Disk)
- Playwright Test Results Summary
- Export / Deliver Package Button

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend framework | React 18 + Vite + TypeScript | Modern, fast, component-based, excellent for dashboards |
| Styling | Tailwind CSS + shadcn/ui | Design-system friendly, dark-mode native |
| Data fetching | TanStack Query | Cache + revalidate live agent status |
| Backend | Node.js + Express | Lightweight API + serves the dashboard |
| Realtime | WebSocket (native) or Socket.io | Live agent status, log tail, task queue updates |
| Database / state | SQLite (`~/.openclaw/mission-control/db.sqlite`) | Project data, brief history |
| Knowledge | HKUDS/LightRAG (Docker) | Vector recall over project artifacts |
| Testing | Playwright | E2E + visual regression |
| Deployment | Local web app (Vite dev or built + Express) or Docker Compose | Stays under low resource use |
| Optional desktop | Tauri | Native windowed app instead of browser tab |

## Auth

- Loopback only on day one (`http://127.0.0.1:18790/`)
- Reuse the OpenClaw gateway operator token + same allowlisted origins
- No new login layer required

## Roadmap

| Phase | Scope | ETA |
|---|---|---|
| **v0.1** *(✅ done)* | Static React shell with mock data, looks like the reference image | Initial scaffold (May 11) |
| **v0.5** | Wire to OpenClaw gateway — real agent status, real `sessions_spawn`, real log tail | Next |
| **v1.0** | LightRAG integration, Playwright visual regression CI, full 9-agent registry | Later |

## Build Process (PMM-Mem ritual handoff)

1. Design Agent → mockup + Figma → component library
2. Core Dev Agent → React+Vite scaffold (✅ done)
3. Security Agent → audit dependencies, CSP, allowed origins
4. Quality Agent → Playwright tests, Lighthouse targets (already at 97/85/100)
5. Meta Agent → wire to gateway APIs, create missing skills
6. Strategy Agent → orchestrate the above, gate releases
