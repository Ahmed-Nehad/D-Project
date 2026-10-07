---
name: guidelines
description: Writes code style, naming, git, and PR rules into docs/10-guidelines.md and generates CLAUDE.md (read every session). Trigger when orchestrator advances to guidelines step (can run parallel with ux-planning).
---

# Guidelines

## Purpose
Two outputs:
1. docs/10-guidelines.md — the engineering conventions doc.
2. CLAUDE.md — project-root file Claude Code reads every session: conventions digest + AI boundaries pointer to .claude/state/policy.json.

## Inputs
- docs/05-tech-stack.md (required)
- docs/04-boundaries.md (required)
- docs/07-database.md (optional — naming conventions alignment)
- docs/STATE.json (required)

## Steps
1. Read stack + boundaries. Verify GATE 2 approval exists.
2. Define:
   - TypeScript strictness (config flags, no-explicit-any policy)
   - Lint/format: ESLint (+ typescript-eslint, react-native plugins), Prettier config snippets
   - Naming: files, components, hooks, DB entities/fields (must match docs/07-database.md if already written; if not, the DB's convention here becomes authoritative and database-design defers)
   - Folder rules consistent with architecture's layout
   - Commit convention (conventional commits type list), branch naming, PR checklist
   - Which rules are hook-enforceable vs reviewer-enforced (list both)
3. Generate CLAUDE.md: short — conventions digest, commands (lint/test/run), phase pointer, boundaries pointer to .claude/state/policy.json, "AI never writes docs/approvals.json".
4. Write both files.
5. Update STATE.json: guidelines complete.
6. Report both paths.

## Output template
```markdown
# Guidelines

## TypeScript rules
## Lint & format
## Naming
## Folder rules
## Git: commits, branches, PR checklist
## Enforcement matrix
- rule → hook | reviewer
## DB naming alignment
```

CLAUDE.md headings: `# <Project>`, `## Stack`, `## Commands`, `## Conventions digest`, `## AI boundaries` (pointer to policy.json), `## Approvals are human-only`.

## Quality checks
- [ ] Rules enforceable by linter/hook flagged as such
- [ ] DB naming aligned (or authority explicitly declared)
- [ ] CLAUDE.md generated and matches guidelines
- [ ] No rule contradicts docs/04-boundaries.md

## Done when
docs/10-guidelines.md + CLAUDE.md exist, pass checks, STATE.json marks guidelines "complete".
