---
name: database-design
description: Designs data model — entities, relations, indexes, ER diagram, migration and local-cache/sync strategy; writes docs/07-database.md. Trigger when orchestrator advances to database-design (after architecture). Naming conventions defer to docs/10-guidelines.md if it exists.
---

# Database Design

## Purpose
Produce docs/07-database.md: the data model for backend + local cache. Consistent with docs/05-tech-stack.md (Supabase/Postgres vs. other) and docs/06-architecture.md offline strategy.

## Inputs
- docs/06-architecture.md (required)
- docs/05-tech-stack.md (required)
- docs/03-scope.md (required)
- docs/STATE.json (required)
- docs/10-guidelines.md (optional — naming conventions)

## Steps
1. Read architecture, stack, scope. Verify GATE 2 approval exists.
2. Design and document:
   - Entities with fields, types, nullability, defaults
   - Relations (1:1, 1:N, N:M with join tables)
   - Indexes (query-driven: name the screens/queries that need the index)
   - ER diagram (Mermaid erDiagram)
   - Migration approach: where migrations live, how they run on backend; versioning
   - Local cache schema if offline required by R-IDs: local tables, sync direction, conflict rules ("last write wins" only if justified), what never syncs
   - Row-level security / access rules summary (details defer to security-compliance)
3. Coverage check: every MVP feature's data needs map to named entities/queries.
4. Naming must follow docs/10-guidelines.md if it exists; otherwise record the chosen convention here and ensure guidelines adopt it.
5. Write docs/07-database.md.
6. Update STATE.json: database-design complete.

## Output template
```markdown
# Database

## Entities
## Relations
## Indexes (with driving queries)
## ER diagram (Mermaid erDiagram)
## Migrations
## Local cache & sync
## Access rules summary
## Feature data coverage
- F-001 (R-00x) → <entity/query>
```

## Quality checks
- [ ] Every feature's data need covered by named entities/queries
- [ ] Naming consistent (with guideline or documented convention)
- [ ] Mermaid erDiagram valid
- [ ] Sync/conflict rules explicit if offline R-IDs exist

## Done when
docs/07-database.md exists, passes checks, STATE.json marks database-design "complete".
