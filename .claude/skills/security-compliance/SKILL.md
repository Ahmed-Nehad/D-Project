---
name: security-compliance
description: Security and compliance design — auth model, secrets, data storage, privacy, App Store/Google Play requirements, permissions; writes docs/11-security.md. Trigger after UX/guidelines step. Every data type gets a protection rule; anything regulated flagged for human legal review.
---

# Security & Compliance

## Purpose
Produce docs/11-security.md: how auth, data, and platform policy requirements are satisfied. Human legal/privacy review required for anything regulated (health, payments, minors, GDPR-sensitive data).

## Inputs
- docs/08-api.md (required)
- docs/07-database.md (required)
- docs/06-architecture.md (required)
- docs/03-scope.md (required)
- docs/STATE.json (required)

## Steps
1. Read API + DB + architecture + scope.
2. Define:
   - Auth model: token lifecycle, refresh flow, storage on device (per stack choice), per-role scope
   - Secrets: what must never live in app code/repo (.env excluded, EAS secrets), how they're injected
   - Data protection matrix: every data type → classification → protection (at-rest, in-transit, on-device, retention)
   - Local cache security: what gets persisted locally, encryption when needed, cleared how
   - Transport: TLS policy, cert pinning decision (justify on/off)
   - Privacy: data collected, privacy policy needs, tracking disclosure
   - Permissions list: iOS/Android permissions with justification per R-ID (camera, location, notifications, etc.)
   - Platform policy checklist: App Store + Google Play requirements relevant to this app (privacy declarations, account deletion if account feature exists, sign-in rules)
3. Flag all regulated-data items as REQUIRES HUMAN REVIEW with what/reason.
4. Write docs/11-security.md.
5. Update STATE.json: security-compliance complete.
6. Report: flagged-for-human-review count.

## Output template
```markdown
# Security & Compliance

## Auth model
## Secrets handling
## Data protection matrix
- <data type> | classification | protection rule
## Local cache security
## Transport
## Privacy policy needs
## Permissions
- <permission> | platform | why (R-00x)
## Store policy checklist
## REQUIRES HUMAN REVIEW
```

## Quality checks
- [ ] Every data type in the DB has a protection rule
- [ ] Every requested permission traces to an R-ID
- [ ] Regulated items flagged for human review, not self-approved
- [ ] No secret or key value appears in the doc

## Done when
docs/11-security.md exists, passes checks, STATE.json marks security-compliance "complete".
