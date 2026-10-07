---
name: devops-release
description: DevOps and release design — environments, CI/CD, EAS build profiles, secret management, store submission checklist, versioning; writes docs/13-devops.md. Trigger after testing step.
---

# DevOps & Release

## Purpose
Produce docs/13-devops.md: how builds, distribution, and releases happen. Stack version truth stays in docs/05-tech-stack.md.

## Inputs
- docs/05-tech-stack.md (required)
- docs/11-security.md (required — secrets handling)
- docs/03-scope.md (required)
- docs/STATE.json (required)

## Steps
1. Read stack + security + scope.
2. Define:
   - Environments: dev, staging, prod — variables per environment (API base URLs, keys refs), where they live
   - CI/CD: pipeline per repo host (lint, typecheck, test, build); which jobs gate a PR vs deploy
   - EAS build profiles: development, preview, production (concise YAML sketch), distribution channels
   - Secrets: what flows through EAS secrets/env, aligned with docs/11-security.md rules
   - Store submission checklist: assets list, privacy declarations, permissions justification carry-over, review notes
   - Versioning: app version + build number policy (where incremented, when)
   - Over-the-air updates: whether used (expo-updates), rules for what may ship OTA vs. store
3. Write docs/13-devops.md.
4. Update STATE.json: devops-release complete.

## Output template
```markdown
# DevOps & Release

## Environments
## CI/CD pipeline
## EAS build profiles
## Secrets flow
## Store submission checklist
## Versioning policy
## OTA updates policy
```

## Quality checks
- [ ] Secrets flow matches docs/11-security.md (no keys in repo/app code)
- [ ] Store checklist covers privacy declarations + account deletion if user accounts exist
- [ ] Versioning policy explicit
- [ ] OTA policy present (even if rejected, with reason)

## Done when
docs/13-devops.md exists, passes checks, STATE.json marks devops-release "complete".
