---
name: api-design
description: Designs the app/backend contract — endpoints, auth, error format, pagination, versioning; writes docs/08-api.md plus shared TypeScript types. Trigger when orchestrator advances to api-design. Ends GATE 3 (manager approval covering architecture + database + API). Every screen's data need must map to an endpoint.
---

# API Design

## Purpose
Produce docs/08-api.md: the contract between the RN app and backend. Ends GATE 3, which covers architecture + database + API together.

## Inputs
- docs/07-database.md (required)
- docs/06-architecture.md (required)
- docs/05-tech-stack.md (required)
- docs/03-scope.md (required)
- docs/STATE.json (required)

## Steps
1. Read inputs. Verify GATE 2 approval exists.
2. Design and document:
   - Endpoint list per feature: method, path, request, response (types), auth level
   - Auth flow: token shape, refresh, storage location (cross-check security-compliance later)
   - Error format: one app-wide shape (code, message, field errors), HTTP status mapping
   - Pagination convention; sorting/filtering conventions
   - Versioning policy (URL or header; when to bump)
   - Realtime/push endpoints if R-IDs need them
   - OpenAPI file or shared types module (per stack's choice in docs/05-tech-stack.md); path where it lives in the build phase
3. Coverage check: every screen's/feature's data need maps to ≥1 endpoint. Build the mapping table.
4. Validate the OpenAPI/types against docs/07-database.md entities (field names, nullability).
5. Write docs/08-api.md + types artifact.
6. Update STATE.json: api-design "awaiting-approval".
7. Stop. Tell the human: GATE 3 — manager approval (label "architecture-db-api") for architecture + database + API together.

## Output template
```markdown
# API

## Conventions (auth, errors, pagination, versioning)
## Endpoints
### <Feature> <R-ID>
- METHOD /path — auth: none|user|admin
- Request type
- Response type (incl. error cases)
## Coverage
- F-001 (R-00x) → <endpoint(s)>
## Types artifact
- <path to OpenAPI or shared types file>
```

## Quality checks
- [ ] Every MVP feature's data need maps to named endpoint(s)
- [ ] Single error format, applied to all endpoints
- [ ] Types consistent with docs/07-database.md schema
- [ ] GATE 3 not crossed without "architecture-db-api" approval

## Done when
docs/08-api.md + types artifact exist, "architecture-db-api" approval recorded, STATE.json marks api-design "complete".
