---
name: tech-stack
description: Locks the tech stack with exact versions and justifications; writes docs/05-tech-stack.md. Trigger when orchestrator advances after boundaries. Defaults to React Native + Expo + TypeScript unless requirements force otherwise. Ends at GATE 2 (manager approval).
---

# Tech Stack

## Purpose
Produce docs/05-tech-stack.md: the locked stack. Every later design doc (architecture, database, API, testing, devops) uses exactly these versions. Ends at GATE 2.

## Inputs
- docs/03-scope.md (required)
- docs/04-boundaries.md (required)
- docs/STATE.json (required)

## Steps
1. Read scope + boundaries. Verify boundaries/policy allows this skill's output paths.
2. Decide each layer; for each record: choice, exact version, why (tied to R-IDs/constraints), rejected alternatives with reasons.
   - Mobile framework: default React Native + Expo (EAS for builds/submission). Justify or deviate explicitly against R-IDs.
   - Navigation: default expo-router
   - State: pick per app size (e.g., Zustand for light, Redux Toolkit if complex; justify)
   - Backend/API: TypeScript end to end (NestJS or Supabase with generated types) unless scope says otherwise
   - Auth, local storage/cache (e.g., SQLite/MMKV/AsyncStorage per data need)
   - Lint/format/test tooling versions
   - Config management: versions in code (package.json + docs), note EAS profiles referenced later
3. Any choice that doesn't trace to a requirement or constraint: mark "assumed" with the reason it was still needed.
4. Write docs/05-tech-stack.md per template.
5. Update STATE.json: tech-stack "awaiting-approval".
6. Stop. Tell the human: GATE 2 — manager adds approval record (label "tech-stack") to docs/approvals.json.

## Output template
```markdown
# Tech Stack

| Layer | Choice | Version | Why (traces to) |
|---|---|---|---|
## Rejected alternatives
- <alt>: reason
## Assumptions
- <choice>: assumed because <reason>
## Version sources
- lockfile policy, where versions live
```

## Quality checks
- [ ] Every choice maps to an R-ID or constraint, or is marked "assumed"
- [ ] Versions exact (no "latest")
- [ ] Rejected alternatives listed for major choices
- [ ] GATE 2 not crossed without "tech-stack" approval

## Done when
docs/05-tech-stack.md exists, "tech-stack" approval recorded, STATE.json marks tech-stack "complete".
