---
name: testing-strategy
description: Defines what gets tested and how — unit/integration/e2e tooling, coverage targets, device matrix, definition of done; writes docs/12-testing.md. Trigger after security step. Every acceptance criterion in docs/03-scope.md maps to a test type.
---

# Testing Strategy

## Purpose
Produce docs/12-testing.md: the testing plan that the build phase will implement. Tools and versions must match docs/05-tech-stack.md.

## Inputs
- docs/03-scope.md (required)
- docs/05-tech-stack.md (required)
- docs/06-architecture.md (required)
- docs/STATE.json (required)

## Steps
1. Read scope + stack + architecture.
2. Define:
   - Tooling: unit (jest/vitest per stack), component (React Native Testing Library), e2e (e.g., Maestro or Detox per stack choice — justify), API tests
   - Test pyramid split: what belongs at each level for this app
   - Coverage targets: realistic per layer (e.g., domain logic high, UI smoke); exact numbers
   - Device matrix: iOS/Android versions and physical vs simulator mix (per target users in docs/01-requirements.md)
   - Offline/sync test scenarios if offline R-IDs exist (conflict cases from docs/07-database.md)
   - Definition of done: tests pass, lint clean, acceptance criteria demonstrably met, run on device matrix
3. Coverage check: every MVP acceptance criterion maps to ≥1 test type. Build the table.
4. Write docs/12-testing.md.
5. Update STATE.json: testing-strategy complete.

## Output template
```markdown
# Testing

## Tooling (with versions from stack)
## Test pyramid split
## Coverage targets per layer
## Device matrix
## Offline/sync scenarios (if applicable)
## Definition of done
## Coverage mapping
- <acceptance criterion (F-ID)> → <test type> — <where it will live>
```

## Quality checks
- [ ] Every acceptance criterion maps to a test type
- [ ] Tools/versions match docs/05-tech-stack.md
- [ ] Offline scenarios included when offline R-IDs exist
- [ ] Definition of done includes device matrix run

## Done when
docs/12-testing.md exists, passes checks, STATE.json marks testing-strategy "complete".
