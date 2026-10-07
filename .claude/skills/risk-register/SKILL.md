---
name: risk-register
description: Surfaces project risks early — likelihood, impact, mitigation, owner; writes docs/15-risks.md. Trigger after plan approval. Also re-checks earlier docs for contradictions (scope vs timeline, stack vs requirements).
---

# Risk Register

## Purpose
Produce docs/15-risks.md: risk list with mitigations, plus a consistency sweep across all docs produced so far.

## Inputs
- docs/14-plan.md (required)
- docs/03-scope.md, docs/01-requirements.md, docs/05-tech-stack.md, docs/12-testing.md (all required for consistency sweep)
- docs/STATE.json (required)

## Steps
1. Read plan + all prior docs. Verify GATE 4 approval first.
2. Risk sweep, each risk: description, likelihood (low/med/high), impact (low/med/high), mitigation, owner (client/dev/both). Sources of risk:
   - Open questions from intake still unanswered
   - Assumptions ("assumed" markers) from intake/stack/scope
   - Timeline vs estimate confidence
   - Third-party dependencies (SDK changes, store policy shifts)
   - Client-side risks (content/decision latency)
   - Sync/offline complexity if applicable
3. Consistency sweep:
   - Scope items vs plan tasks (drift?)
   - Stack versions vs testing/devops tooling
   - Terminology + IDs consistent (R-/F-/T- same meaning everywhere)
   - Any contradiction listed as a finding, not silently "fixed" — propose resolution, human decides material ones
4. Write docs/15-risks.md.
5. Update STATE.json: risk-register complete.

## Output template
```markdown
# Risks

## Register
- RK-001 <risk> | L: med | I: high | mitigation: <action> | owner: dev
## Consistency sweep findings
- <doc A> vs <doc B>: <contradiction>, proposed resolution
## Open question status
```

## Quality checks
- [ ] Every open assumption appears as a risk or gets a note on why it closed
- [ ] Every finding cites both contradicting docs
- [ ] No risk without owner or mitigation (or explicit "accepted")

## Done when
docs/15-risks.md exists, passes checks, STATE.json marks risk-register "complete".
