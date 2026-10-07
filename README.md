# D-Project

Structure-phase workspace for a single-client mobile app (React Native + Expo + TypeScript assumed until GATE 2 locks the stack).

Managed by Claude Code project-local skills and hooks. The `docs/` folder is the project's single source of truth; AI writes docs, humans write approvals.

## Layout

```
project-root/
├── client/brief.md        raw client material (input)
├── docs/
│   ├── STATE.json         current phase, step statuses, gates (AI-written)
│   ├── approvals.json     human-only, AI is blocked from writing it
│   └── 01-requirements.md … 16-handoff.md   phase artifacts
├── .claude/
│   ├── settings.json      hook wiring
│   ├── skills/            17 project-specific skills + _template
│   ├── hooks/             scope-guard, command-guard, output-validate, gate-check, …
│   └── state/             policy.json (AI boundaries), audit.log, snapshots
└── CLAUDE.md              generated later by the guidelines skill
```

## How to use

1. Put/update the client brief in `client/brief.md`.
2. Open Claude Code here and say: **start structure phase** (or `continue structure phase`).
3. The orchestrator (`structure-orchestrator` skill) runs steps in order:
   intake → brainstorm → scope → **GATE 1 (client)** → boundaries → stack → **GATE 2 (manager)** →
   architecture → database → api → **GATE 3 (manager)** → UX + guidelines → security → testing → devops →
   plan → **GATE 4 (client)** → risks → handoff
4. At each gate, the AI stops. A human edits `docs/approvals.json`, adding a record with the required
   `label` (`scope`, `tech-stack`, `architecture-db-api`, `plan-timeline`) and approver. The AI never
   writes this file — a hook blocks it.
5. Hooks enforce boundaries while you work:
   - out-of-phase work blocked (no coding during structure phase)
   - writes outside allowed paths blocked
   - destructive commands / secret leaks / unapproved network calls blocked
   - docs validated for required headings, no TODOs, valid JSON
   - audit log + failure escalation + compaction snapshots happen automatically

## Skill order

`client-intake` → `brainstorm` → `scope-definition` → `boundaries` → `tech-stack` → `architecture` →
`database-design` → `api-design` → (`ux-planning` + `guidelines`) → `security-compliance` →
`testing-strategy` → `devops-release` → `workflow-planning` → `risk-register` → `docs-handoff`

Each skill reads its predecessor's artifact and stops at its gate. STATE.json tracks statuses.
