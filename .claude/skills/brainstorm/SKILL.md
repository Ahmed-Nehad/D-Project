---
name: brainstorm
description: Explores features and approach alternatives before scope is fixed. Reads docs/01-requirements.md, writes docs/02-brainstorm.md. Trigger when orchestrator advances to brainstorm. Ideas beyond the brief are labeled "suggested, not requested" — the skill must not silently widen scope.
---

# Brainstorm

## Purpose
Produce docs/02-brainstorm.md: options and trade-offs for each requirement, so scope-definition can pick with eyes open. This is divergent thinking; commitment happens in scope-definition.

## Inputs
- docs/01-requirements.md (required)
- docs/STATE.json (required)

## Steps
1. Read docs/01-requirements.md. If missing, stop and say so.
2. Read STATE.json; confirm brainstorm pending.
3. For each major requirement (R-ID):
   - 2–4 implementation approaches (with trade-offs: cost, risk, timeline, UX)
   - Nearby features clients in this domain commonly want but that aren't in the brief — label every one "suggested, not requested"
   - Mobile-specific angles worth considering (offline behavior, push, notifications fatigue, deep links)
4. Group ideas: core (maps to R-ID), suggested (extra), reject-fast (with reason).
5. Note explicit trade-off decisions that scope-definition will need to make.
6. Write docs/02-brainstorm.md per template.
7. Update STATE.json: brainstorm complete.
8. Report: artifact path, count of suggested-not-requested ideas.

## Output template
```markdown
# Brainstorm

## Approach options
### R-001 <requirement title>
- Option A: <desc> — trade-offs
- Option B: ...
## Suggested, not requested
- <idea> — why it might matter; NOT in brief
## Rejected early
- <idea> — reason
## Decisions needed for scoping
- <trade-off choice scope-definition must settle>
```

## Quality checks
- [ ] Every core idea cites R-IDs it serves
- [ ] Extras labeled "suggested, not requested"
- [ ] Trade-offs concrete (effort/risk/UX), not adjectives
- [ ] No scope widening presented as client intent

## Done when
docs/02-brainstorm.md exists, passes checks, STATE.json marks brainstorm "complete".
