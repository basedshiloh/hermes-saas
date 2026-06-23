# Hermes Agent SaaS — Managed AI Agent Platform

A subscription platform that gives non-technical professionals their own **Hermes Agent** (the open-source self-improving AI agent by [Nous Research](https://hermes-agent.nousresearch.com/)) — deployed in one click, with zero server or terminal knowledge.

Users pick a **Pack** (a pre-configured agent setup for their profession), hit deploy, and land in a chat dashboard where their agent is ready to work. No Docker, no SSH, no config files.

## How It Works

1. **Pick your role** — Choose a Pack (SEO, Social Media, Engineer, Student, or General) that pre-configures your agent with the right tools and skills.
2. **Deploy in one click** — We provision an isolated Hermes instance for you on managed infrastructure.
3. **Start chatting** — Your agent is live in a dashboard with a chat interface and role-specific tool tabs.
4. **Automate everything** — Set up cron jobs, workflows, and integrations through natural language.

## Packs

| Pack | For | What it does |
|------|-----|-------------|
| SEO Automation | SEO managers & content marketers | Keyword research, content writing, auto-publish to WordPress |
| Social Media | Social media managers & creators | Content ideas, post writing, scheduling |
| Engineer & Analyst | Engineers & data analysts | Code execution, data crunching, automations |
| Student & Researcher | Students & academics | Paper summaries, study notes, citation tracking |
| General Assistant | Power users | Open-ended chat agent for anything |

## Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Animations:** GSAP, Lenis smooth scroll
- **Auth (Phase 0B):** Clerk
- **Billing (Phase 0B):** Stripe
- **Database (Phase 0B):** Neon (serverless Postgres) + Prisma
- **Agent runtime (Phase 1):** Docker containers on Hetzner, managed via dockerode
- **Chat proxy (Phase 2):** WebSocket on Hetzner worker service

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are needed for Phase 0A (demo UI). The app deploys to Vercel as-is.

## Build Phases

- **Phase 0A** (current) — Complete clickable UI with mock data. Demo-ready.
- **Phase 0B** — Wire up Clerk auth, Stripe billing, Neon database.
- **Phase 1** — Hetzner worker service + Docker provisioning.
- **Phase 2** — WebSocket chat proxy to real Hermes agents.
- **Phase 3–5** — BYOK injection, pack system, idle-sleep, billing lifecycle.

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     # Landing, pricing, about, blog, services, login, signup
│   ├── (dashboard)/     # Dashboard shell, chat, setup, provisioning, settings
│   └── globals.css
├── components/
│   ├── dashboard/       # Sidebar, topbar, chat, provisioning, setup
│   ├── home/            # Hero, features, process, pricing, FAQ, etc.
│   └── shared/          # Buttons, cards, badges, navbar, footer
├── data/
│   └── mock-dashboard.ts  # Mock data for Phase 0A demo
├── packs/               # Pack YAML configs (SEO, social, engineer, student, general)
└── styles/              # Design tokens, typography, icon fonts
```
