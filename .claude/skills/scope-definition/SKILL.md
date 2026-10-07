---
name: scope-definition
description: Fixes MVP vs. later vs. out-of-scope from requirements and brainstorm; writes docs/03-scope.md. Trigger when orchestrator advances to scope-definition. Ends at GATE 1 (client approval) — no artifact is final and no later skill may run before the approval is recorded.
---

# Scope Definition

## Purpose
Produce docs/03-scope.md: the fixed MVP list with acceptance criteria. This kills freelance scope creep; every later artifact defends this document. Ends at GATE 1.

## Inputs
- docs/01-requirements.md (required)
- docs/02-brainstorm.md (required)
- docs/STATE.json (required)

## Steps
1. Read both inputs. Stop if either is missing.
2. For each requirement, classify exactly one of:
   - **MVP** — ships in v1
   - **Later** — explicit backlog after v1
   - **Out of scope** — will not be built (with reason)
3. "Suggested, not requested" ideas from brainstorm default to Later or Out of scope. Never auto-include them in MVP.
4. For every MVP feature write acceptance criteria: testable statements ("user can X, given Y") with the R-ID preserved.
5. List assumptions the scope rests on; each assumption names an open question from intake if related.
6. Change-request process: how a client "could you also add…" becomes a priced scope change instead of silent extra work (new R-ID, re-estimate, updated approvals gate if material).
7. Write docs/03-scope.md per template.
8. Update STATE.json: scope-definition "awaiting-approval".
9. Stop. Tell the human: GATE 1 — client must add an approval record (label "scope") to docs/approvals.json. Orchestrator resumes after that.

## Output template
```markdown
# Scope

## MVP
- F-001 <feature> (R-00x): <one-line> 
  - Acceptance: <testable criteria>
## Later
- <feature> (R-00x): reason deferred
## Out of scope
- <item>: reason
## Assumptions
## Change-request process
```

## Quality checks
- [ ] Every R-ID classified exactly once
- [ ] Nothing in MVP without acceptance criteria
- [ ] No "suggested" idea silently promoted to MVP
- [ ] Change-request process present
- [ ] GATE 1 not crossed without approval in docs/approvals.json

## Done when
docs/03-scope.md exists, passes checks, client approval recorded under label "scope". STATE.json marks scope-definition "complete".
