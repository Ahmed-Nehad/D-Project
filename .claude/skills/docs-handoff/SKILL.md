---
name: docs-handoff
description: Final consistency check + delivery index; writes docs/16-handoff.md. Trigger at end of structure phase, after risk-register. Verifies no document contradicts another and produces the handoff package index for the client.
---

# Docs Handoff

## Purpose
Produce docs/16-handoff.md: the index that makes docs/ the project's single source of truth, plus the final cross-document consistency check. Client-facing files get clean formatting here.

## Inputs
- docs/01 through docs/15 (all required)
- docs/STATE.json (required)

## Steps
1. Confirm every prior step's artifact exists on disk. List any missing and stop.
2. Cross-document check:
   - Stack identical everywhere (versions included)
   - Scope MVP == architecture coverage == plan task coverage == UX flows == API endpoints
   - Naming and ID conventions (R-/F-/T-) used consistently
   - Boundaries/policy consistent with guidelines' enforcement matrix
   - All four gates recorded in docs/approvals.json matching labels in STATE.json
3. Write docs/16-handoff.md: index of every doc with a 2-line summary each, gate status table, list of open questions still answered, and what the build phase reads first.
4. Fix trivial contradictions (typos, drifted headings) directly; report material ones for human decision instead of editing approved/locked files.
5. Update STATE.json: docs-handoff complete, phase-ready flag for orchestrator.

## Output template
```markdown
# Handoff

## Document index
- 01-requirements.md — <one-liner>
- ...
## Gate status
- G1 scope: approved <date>
- ...
## Open questions
## Build-phase entry points
- reads first: 05, 08, 10 + policy.json
## Findings
```

## Quality checks
- [ ] All 15 prior artifacts exist
- [ ] Stack/scope/IDs cross-checked, contradictions either fixed (trivial) or reported (material)
- [ ] All 4 gate labels found in docs/approvals.json
- [ ] No approved file silently modified

## Done when
docs/16-handoff.md exists, checks pass, STATE.json marks docs-handoff "complete" and structure phase ready-to-exit.
