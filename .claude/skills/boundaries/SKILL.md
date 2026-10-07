---
name: boundaries
description: Defines project and AI boundaries; writes docs/04-boundaries.md and .claude/state/policy.json (machine-readable, read by hooks). Trigger when orchestrator advances after GATE 1. This skill converts prose limits into enforceable policy — treat the JSON as load-bearing.
---

# Boundaries

## Purpose
Two outputs:
1. docs/04-boundaries.md — human-readable project + AI limits.
2. .claude/state/policy.json — machine-readable policy that scope-guard, command-guard, and input-check hooks read from here on.

## Inputs
- docs/03-scope.md (required — gates on approved scope)
- docs/approvals.json (read-only — verify GATE 1 record "scope" exists first)
- docs/STATE.json (required)

## Steps
1. Verify GATE 1 approval exists (label "scope"). If not, stop — this skill must not run pre-approval.
2. Project boundaries: budget ceiling, deadline, platforms, systems we don't touch, third-party services allowed/forbidden.
3. AI boundaries:
   - Allowed paths per phase (structure phase: docs/, .claude/state/, client/; build phase later: src/, app/, tests/, docs/)
   - Never-writable: docs/approvals.json, .claude/settings.json, .claude/hooks/, .env
   - Forbidden commands (destructive ops, secret leaks, unapproved network)
   - Actions requiring human confirmation (git push, store submission, dependency adds beyond allowlist)
4. Merge the phase-path map above with the existing .claude/state/policy.json — keep the schema (phase, allowedPaths, forbiddenPaths, forbiddenCommands, networkAllowed, requiresHuman).
5. Write .claude/state/policy.json. Validate JSON parses before declaring done.
6. Write docs/04-boundaries.md per template.
7. Update STATE.json: add this step's allowed paths; mark boundaries complete.

## Output template
```markdown
# Boundaries

## Project limits (budget, deadline, platforms)
## Systems we don't touch
## AI: allowed paths by phase
## AI: never-writable
## AI: forbidden commands
## AI: requires human sign-off
## Enforcement
- Hooks read .claude/state/policy.json (scope-guard, command-guard, input-check)
```

## Quality checks
- [ ] policy.json parses as valid JSON and preserves schema
- [ ] Every out-of-scope item from docs/03-scope.md reflected in forbidden paths/commands where relevant
- [ ] docs/approvals.json listed never-writable
- [ ] Human sign-off list includes git push and store submission

## Done when
Both artifacts exist, policy.json validated, STATE.json marks boundaries "complete".
