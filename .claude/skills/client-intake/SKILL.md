---
name: client-intake
description: Turns the raw client brief (client/brief.md) into structured requirements in docs/01-requirements.md. Trigger when starting the structure phase after a brief exists, or when brief material is added. Extracts goals, users, features, constraints; lists unknowns as questions, never guesses.
---

# Client Intake

## Purpose
Produce docs/01-requirements.md: the canonical, ID-addressable requirements list every later step reads. Everything downstream traces to R-IDs created here.

## Inputs
- client/brief.md (required unless client provided nothing yet — then report what's missing)
- docs/STATE.json (required)

## Steps
1. Read client/brief.md. If it exists but is thin, still extract what's there and put gaps in Open Questions.
2. Read docs/STATE.json; confirm client-intake is pending.
3. Extract and organize:
   - Project goals (business + user)
   - Target users / personas
   - Feature list (as stated by client, labeled verbatim where possible)
   - Constraints: budget, deadline, platforms (iOS/Android), existing systems, language(s)
   - Non-goals the client explicitly excluded
   - Open Questions for the client — every unknown becomes a question. Never invent an answer.
   - Inferences: any requirement you deduced rather than read must be marked "assumed".
4. Write docs/01-requirements.md per template. Give every requirement an ID: R-001, R-002, ... (never reuse, never renumber).
5. If Open Questions are blocking (can't define MVP without answers), list which ones block which requirement.
6. Update STATE.json: mark client-intake complete.
7. Tell the orchestrator: artifact path, number of open questions, whether any are blocking.

## Output template
```markdown
# Requirements — <project name>

## Goals
## Target users
## Features
- R-001: <requirement> (source: brief §x / assumed)
## Constraints
## Non-goals
## Open questions
- Q-001: <question> — blocks R-00x (or: informational)
## Inferences
- <what was assumed and why>
```

## Quality checks
- [ ] Every requirement has unique R-## ID
- [ ] Nothing invented: inferences marked "assumed", unknowns in Open Questions
- [ ] Every constraint (budget/deadline) captured verbatim if stated
- [ ] Feature list matches brief; extras flagged separately

## Done when
docs/01-requirements.md exists, passes checks, STATE.json marks client-intake "complete".
