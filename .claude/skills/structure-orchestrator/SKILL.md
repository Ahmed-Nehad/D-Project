---
name: structure-orchestrator
description: Runs the structure phase in order. Trigger on session start or "start/continue structure phase". Reads docs/STATE.json, picks the next pending skill, stops at approval gates. Never skips steps.
---

# Structure Orchestrator

## Purpose
Single entry point for the structure phase. Knows the order of skills, tracks state, enforces gates. Other skills never decide order; this one does.

## Inputs
- docs/STATE.json (required) — phase, step statuses, gate config.

## Steps
1. Read docs/STATE.json. If missing, initialize it (create with phase "structure", empty steps) and report that you did.
2. Find the first step whose status is not "complete". If every step is complete, report that structure phase is done and point to docs/16-handoff.md.
3. Load the next step's skill. Its SKILL.md defines the work.
4. Before advancing past a step that has a gate (see Gates below), check docs/approvals.json for an approval record whose label matches the gate. If no approval, stop and tell the human to add one. Never proceed on your own judgment.
5. After each step completes, re-read STATE.json to confirm status was written, then advance.
6. If a step fails, report the failure; do not silently skip to the next step.

## Gates (labels in docs/approvals.json)
- After scope-definition → label "scope", approver "client"
- After tech-stack → label "tech-stack", approver "manager"
- After api-design (covers architecture + database + API) → label "architecture-db-api", approver "manager"
- After workflow-planning → label "plan-timeline", approver "client"

## Order
client-intake → brainstorm → scope-definition → boundaries → tech-stack → architecture → database-design → api-design → ux-planning + guidelines (parallel ok) → security-compliance → testing-strategy → devops-release → workflow-planning → risk-register → docs-handoff.

## Quality checks
- [ ] Upcoming artifact exists before advancing
- [ ] Gate approvals verified in docs/approvals.json before crossing
- [ ] STATE.json statuses accurate after every step
- [ ] Never marked complete without the artifact on disk

## Done when
All 16 steps complete or blocked (with explicit reason reported).
