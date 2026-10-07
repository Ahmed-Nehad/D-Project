---
name: skill-name
description: One sentence on what this skill does and when Claude should use it. Be specific; Claude decides whether to load the skill based on this line.
---

# Skill Name

## Purpose
What artifact this skill produces and why it matters for the phase.

## Inputs
- docs/XX-previous.md (required) — what it needs and why.
- docs/STATE.json (required) — current phase and step status.

## Steps
1. Read the inputs. If any are missing, stop and report exactly which files.
2. Read docs/STATE.json and confirm this step is not already "complete" or "locked". If complete, report and do nothing.
3. Do the work per the task definition.
4. Write the output to docs/NN-name.md using the Output template below.
5. Update docs/STATE.json: mark this step "complete", record output path.
6. Report the result: artifact path, open questions, whether a gate follows.

## Output template
(headings the output-validate hook expects — list them exactly)

## Quality checks
- [ ] Every item traces to a requirement ID (R-###)
- [ ] No unresolved TODOs or invented requirements (mark inferences "assumed")
- [ ] Open questions listed explicitly, not guessed

## Done when
File exists, passes checks, STATE.json marks step "complete". If a gate applies, stop and tell the human which approval is needed in docs/approvals.json.
