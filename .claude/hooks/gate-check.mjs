#!/usr/bin/env node
// Stop hook: refuse to end a step if required artifacts are missing or a needed gate approval is absent.
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
const statePath = path.join(root, "docs/STATE.json");
if (!existsSync(statePath)) process.exit(0);

const deny = (msg) => {
  console.error(msg);
  process.exit(2); // blocks Stop; Claude sees stderr
};

let state, approvals;
try {
  state = JSON.parse(readFileSync(statePath, "utf8"));
} catch {
  deny("Stop blocked: docs/STATE.json is not valid JSON. Fix it before ending the turn.");
}
try {
  approvals = JSON.parse(readFileSync(path.join(root, "docs/approvals.json"), "utf8"));
} catch {
  deny("Stop blocked: docs/approvals.json unreadable. Ask the human, never edit it yourself.");
}

const artifacts = {
  "client-intake": "docs/01-requirements.md",
  "brainstorm": "docs/02-brainstorm.md",
  "scope-definition": "docs/03-scope.md",
  "boundaries": "docs/04-boundaries.md",
  "tech-stack": "docs/05-tech-stack.md",
  "architecture": "docs/06-architecture.md",
  "database-design": "docs/07-database.md",
  "api-design": "docs/08-api.md",
  "ux-planning": "docs/09-ux.md",
  "guidelines": "docs/10-guidelines.md",
  "security-compliance": "docs/11-security.md",
  "testing-strategy": "docs/12-testing.md",
  "devops-release": "docs/13-devops.md",
  "workflow-planning": "docs/14-plan.md",
  "risk-register": "docs/15-risks.md",
  "docs-handoff": "docs/16-handoff.md",
};

// any step marked complete must have its artifact on disk
for (const [step, artifact] of Object.entries(artifacts)) {
  if (state.steps?.[step] === "complete" && !existsSync(path.join(root, artifact))) {
    deny(`Stop blocked: step "${step}" is "complete" but ${artifact} is missing.`);
  }
}

// any gate whose step is awaiting-approval must have a matching approval record
const gates = state.gates ?? {};
for (const [step, gate] of Object.entries(gates)) {
  if (state.steps?.[step] === "awaiting-approval") {
    const found = (approvals.approvals ?? []).some(
      (a) => a.label === gate.label && a.approver === gate.approver
    );
    if (!found) {
      deny(
        `Stop blocked: step "${step}" is awaiting approval. Human must add record to docs/approvals.json with label "${gate.label}" (approver: ${gate.approver}).`
      );
    }
  }
}

process.exit(0);
