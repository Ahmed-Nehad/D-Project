---
name: architecture
description: Designs app architecture — layers, folder layout, navigation, state, offline strategy, error handling; writes docs/06-architecture.md with a Mermaid diagram. Trigger when orchestrator advances after GATE 2. Must cover every MVP feature from docs/03-scope.md with a component.
---

# Architecture

## Purpose
Produce docs/06-architecture.md: the app's structural design. Consistent with the locked stack versions in docs/05-tech-stack.md.

## Inputs
- docs/03-scope.md (required — MVP feature list)
- docs/05-tech-stack.md (required — locked stack)
- docs/STATE.json (required)

## Steps
1. Read scope + stack. Verify GATE 2 approval exists before designing (label "tech-stack").
2. Design and document:
   - Layer model (presentation / domain / data) — what lives where
   - Folder layout for the RN/Expo project (src/ or app/ routes, components, features, services, hooks, types)
   - Navigation structure (stack/tab modal map; deep links if required by R-IDs)
   - State management map (which state is server-state vs UI-state vs persisted)
   - Offline strategy: what works offline (R-IDs), what must be online, sync/conflict approach at an architectural level (details defer to database-design)
   - Error handling strategy: error boundaries, API failure UX, retry policy
   - Push notifications architecture if any R-ID requires it
   - Mermaid diagram of layers and data flow
3. Coverage check: every MVP feature from scope maps to ≥1 component/module. Build the mapping table explicitly.
4. Write docs/06-architecture.md.
5. Update STATE.json: architecture complete.
6. Report coverage summary; orchestrator handles GATE 3 after database-design and api-design.

## Output template
```markdown
# Architecture

## Layers
## Folder layout
## Navigation map
## State management
## Offline strategy
## Error handling
## Push (if applicable)
## Diagram (Mermaid)
## Feature-to-component coverage
- F-001 (R-00x) → <component/module>
```

## Quality checks
- [ ] Every MVP feature (F-ID) covered by a named component
- [ ] Stack versions match docs/05-tech-stack.md exactly
- [ ] Mermaid diagram syntactically valid
- [ ] Offline + error strategies present (even if "none required" is justified)

## Done when
docs/06-architecture.md exists, passes checks, STATE.json marks architecture "complete".
