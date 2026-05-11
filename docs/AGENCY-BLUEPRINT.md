# Meredian — Agency Blueprint

> Virtual digital agency built as a 9-agent specialist team orchestrated by a single Strategy/CTO agent. Designed for end-to-end delivery of web, mobile, SaaS, and AI-powered products with minimal human intervention after a project brief is given.

---

## Agent Team Structure

### 1. Design & UX Agent (Visual & Interface Specialist)

**Source skills:**
- `nextlevelbuilder/ui-ux-pro-max-skill`
- `pbakaus/impeccable`
- `amaancoderx/npxskillui`
- `VoltAgent/awesome-design-md`
- `secondsky/claude-skills` *(performance side of UI)*

**Role:** Creates design systems, generates polished UIs, ensures visual excellence and performance.

---

### 2. Marketing & Growth Agent (Customer Acquisition Specialist)

**Source skills:**
- `coreyhaines31/marketingskills`
- `alirezarezvani/claude-code-aso-skill`

**Role:** Handles SEO, copywriting, CRO, landing pages, App Store Optimization, and launch strategies.

---

### 3. Core Development Agent (Builder & Coder)

**Source skills:**
- `obra/superpowers`
- `gsd-build/get-shit-done`
- `affaan-m/everything-claude-code`
- `alirezarezvani/claude-code-mastery`
- `Jeffallan/claude-skills`

**Role:** Main coding engine. Enforces clean architecture, TDD, and high-quality implementation.

---

### 4. Mobile Development Agent (App Store Specialist)

**Source skills:**
- `tomdwipo/mobile-apps-with-ai-production-flow`
- `canergulgec/mobile-dev-skills`
- `devkashifilyas-ui/Claude-Code-developer-for-a-mobile-app`
- `louis-wieshofer/claude-agent-app`

**Role:** Builds and optimizes React Native / Flutter / native apps for iOS and Android.

---

### 5. Security & Quality Agent (Guardian)

**Source skills:**
- `Axisfrommall/r02-alirezarezvani-claude-skills-security`
- `CardinalEstate/r04-alirezarezvani-claude-code-skill-factory-security`
- `barnburner121/claude-plugin-marketplace` *(security plugins)*
- `microsoft/playwright-cli` *(testing)*

**Role:** Runs vulnerability scans, security reviews, linting, and bug detection.

---

### 6. Meta & Skill Management Agent (System Extender)

**Source skills:**
- `alirezarezvani/claude-code-skill-factory`
- `metaskills/skill-builder`
- `YYH211/Claude-meta-skill`
- `alirezarezvani/ClaudeForge`

**Role:** Creates new skills, maintains the agent system, and adapts tools as needed.

---

### 7. Strategy & Orchestration Agent (CTO / Project Manager)

**Source skills:**
- `alirezarezvani/claude-cto-team`
- `msitarzewski/agency-agents`
- `anthropics/skills`

**Role:** High-level planning, task delegation, project architecture, and team coordination.

---

### 8. Knowledge & Research Agent (Memory Layer)

**Source skills:**
- `HKUDS/LightRAG`
- `kepano/obsidian-skills`

**Role:** Stores project knowledge, does research, powers intelligent search.

---

### 9. Discovery & Plugin Hub

**Source skills:**
- `ComposioHQ/awesome-claude-skills`
- `travisvn/awesome-claude-skills`
- `VoltAgent/awesome-agent-skills`
- `hesreallyhim/awesome-claude-code`

**Role:** Quick access to new skills and plugins when needed.

---

## How to Activate This Team

1. Use `claude-cto-team` + `msitarzewski/agency-agents` as the **top-level orchestrator**.
2. Load the relevant agent skills when starting a project (e.g., activate Design + Marketing for a website, or Mobile + Security for an app).
3. Use `superpowers` or `get-shit-done` as the default workflow harness for all coding tasks.
4. Keep `skill-factory` and `meta-skills` always active in the background for system maintenance.

---

## Full-Stack Usage Guide

### Initial Setup

1. Clone all repositories into a central `~/ai-agency` folder.
2. Symlink or install skills into your Claude/Code editor workspace.
3. Run LightRAG in Docker for persistent knowledge.
4. Install global tools (`npxskillui`, `playwright-cli`).

### Project Kickoff

1. Start every project by activating the **Strategy & Orchestration Agent** (`claude-cto-team` + `agency-agents`).
2. Provide project brief and let it create a full plan and task breakdown.

### Daily Workflow

- Strategy Agent delegates to relevant specialists (Design, Marketing, Core Dev, Mobile, etc.).
- Core Development Agent handles all coding using `superpowers` / `get-shit-done`.
- Security & Quality Agent reviews every major change.
- Meta Agent creates any missing skills on the fly.
- Knowledge Agent maintains context and documentation.

### Output Process

`Design Agent → Marketing Agent → Development Agent → Security Agent (review loop)`

Final delivery package includes code, docs (Obsidian), and marketing assets.

---

## Best Practices

- Keep only necessary agents active per session to save context.
- Always run Security + Quality checks before deployment.
- Use `skill-factory` regularly to customize the team for new business types.
- Test on small projects first to tune the orchestration.

---

## Practical Collaboration Flows

### Example 1: Website Project
Strategy Agent → Design & UX Agent (creates design system) → Marketing Agent (writes copy) → Core Development Agent (builds code) → Security & Quality Agent (reviews + tests with Playwright) → Strategy Agent (final approval).

### Example 2: Mobile App
Strategy Agent → Mobile Development Agent (core app) → Design & UX Agent (mobile UI) → Marketing Agent (ASO assets) → Security & Quality Agent (security + testing) → Meta Agent (creates any missing mobile skills on the fly).

### Example 3: Custom Requirement
Meta & Skill Management Agent creates a new skill → Discovery Hub imports supporting tools → all other agents immediately start using the new skill.

---

## Technical Integration Points

- **Mission Control Dashboard** serves as the shared interface where agents post status, hand off files, and show outputs.
- **playwright-cli** enables cross-agent testing (Design Agent's UI tested by Quality Agent).
- **Skill Factory** ensures new capabilities are instantly available to the whole team.

---

## Limitations to Be Aware Of

- **Context window size:** Too many agents active at once can reduce quality. Best practice is to keep 3–5 agents active per session and let the Strategy Agent summon others as needed.
- **Resource contention** is possible during heavy parallel runs. The dashboard's resource monitor helps manage this.
- **Skill conflicts:** Rare, but possible with overlapping forks. The Meta Agent resolves these.

---

## ⚠️ Security Note (PMM)

Many of the listed source skills are **individual user repos / forks**, not vetted orgs (`Axisfrommall/…`, `affaan-m/…`, etc.). Cloning unvetted skills directly into `~/.openclaw/skills/` is a security event — these can hook into the gateway's filesystem, invoke shell commands, and exfil data.

**Process before installing any skill in this blueprint:**
1. Read its `SKILL.md` end-to-end.
2. Grep the repo for `exec`, `child_process`, `fetch`, suspicious env reads.
3. Pin to a specific commit SHA, not `main`.
4. Install into a quarantined skills dir first; only promote to live after a session of trial use.

The Meta Agent + Security Agent must run this audit before any new skill goes live.
