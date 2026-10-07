---
name: ux-planning
description: Plans UX — screen list, navigation map, user flows, design tokens, loading/empty/error states; writes docs/09-ux.md. Trigger when orchestrator advances to UX step (can run parallel with guidelines). Each MVP feature needs a flow.
---

# UX Planning

## Purpose
Produce docs/09-ux.md: screens and flows for the MVP. Client-flooding deliverable; keep it reviewable. This skill defines the output format and quality bars — if a design-quality skill is installed and vetted, it may be used for the design quality layer inside this format.

## Inputs
- docs/03-scope.md (required)
- docs/06-architecture.md (required — navigation structure)
- docs/08-api.md (required — data per screen)
- docs/STATE.json (required)

## Steps
1. Read scope + architecture + api. Verify GATE 3 approval exists.
2. Produce:
   - Screen list (every MVP screen, purpose, which GraphQL/REST/data it shows)
   - Navigation map (Mermaid flowchart)
   - Per-feature user flows: happy path + edge paths for each acceptance criterion
   - Design tokens: colors, type scale, spacing, touch target sizes (platform: React Native)
   - State matrix: loading / empty / error per screen
   - Accessibility notes: contrast, screen-reader labels, RTL if needed
3. Third-party vetting rule: any design skill sourced from outside this repo must be reviewed and version-pinned in .claude/skills/third-party/ first; adapt web-oriented guidance to React Native.
4. Write docs/09-ux.md.
5. Update STATE.json: ux-planning complete.
6. Report: screen count, features missing flows (should be zero).

## Output template
```markdown
# UX

## Screen list
- <Screen name> — <purpose> — <data shown> (R-00x)
## Navigation map (Mermaid flowchart)
## User flows
### <Feature> (F-ID)
1. <step>
## Design tokens
## State matrix (loading/empty/error per screen)
## Accessibility notes
```

## Quality checks
- [ ] Every MVP feature has at least one flow
- [ ] Every screen has loading/empty/error state defined (or explicit "not applicable" reason)
- [ ] Navigation map matches architecture's map
- [ ] Tokens cover touch targets for RN

## Done when
docs/09-ux.md exists, passes checks, STATE.json marks ux-planning "complete".
