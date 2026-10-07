---
name: workflow-planning
description: Builds the delivery plan — milestones, task breakdown with IDs and dependencies, estimates, client demo dates; writes docs/14-plan.md. Trigger after devops step. Ends GATE 4 (client approval of timeline). Every in-scope feature must appear in ≥1 task.
---

# Workflow Planning

## Purpose
Produce docs/14-plan.md: the schedule everyone bills and ships against. Ends GATE 4.

## Inputs
- docs/03-scope.md (required)
- docs/12-testing.md (required)
- docs/13-devops.md (required)
- docs/STATE.json (required)

## Steps
1. Read scope + testing + devops.
2. Produce:
   - Milestones (e.g., M1 walking skeleton, M2 MVP feature-complete, M3 tested, M4 store submission)
   - Task breakdown: each task has T-ID, feature refs (F-IDs), dependency list, estimate, phase owner
   - Estimates: mark confidence (low/med/high); list what drives uncertainty (open questions still open?)
   - Client demo dates per milestone; what each demo shows
   - Buffer policy and how change requests re-enter the plan (per docs/03-scope.md change-request process)
3. Coverage check: every in-scope feature appears in ≥1 task. Build the check.
4. Write docs/14-plan.md.
5. Update STATE.json: workflow-planning "awaiting-approval".
6. Stop. Tell the human: GATE 4 — client approves timeline (label "plan-timeline") in docs/approvals.json.

## Output template
```markdown
# Plan

## Milestones
- M1 <name> — <date/offset> — demo: <what>
## Tasks
- T-001 <task> | features: F-00x | depends: T-00y | est: #d (conf: medium)
## Client checkpoints
## Buffer & change requests
## Coverage
- F-001 → T-00x
```

## Quality checks
- [ ] Every in-scope feature in ≥1 task
- [ ] Dependencies form no cycles
- [ ] Estimates carry confidence + uncertainty sources
- [ ] GATE 4 not crossed without "plan-timeline" approval

## Done when
docs/14-plan.md exists, "plan-timeline" approval recorded, STATE.json marks workflow-planning "complete".
