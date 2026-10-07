#!/usr/bin/env node
// SessionStart: inject docs/STATE.json + policy + approval status into context.
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
const statePath = path.join(root, "docs/STATE.json");

const lines = [];
try {
  if (existsSync(statePath)) {
    const state = JSON.parse(readFileSync(statePath, "utf8"));
    lines.push(`Phase: ${state.phase}`);
    lines.push(`Step order: ${(state.order ?? []).join(" -> ")}`);
    const statuses = Object.entries(state.steps ?? {})
      .map(([k, v]) => `${k}=${v}`)
      .join(", ");
    lines.push(`Step statuses: ${statuses || "none yet"}`);
    lines.push("Gates (from STATE.json):");
    for (const [step, g] of Object.entries(state.gates ?? {})) {
      lines.push(`  - after ${step}: human approval label "${g.label}" required in docs/approvals.json`);
    }
    lines.push(
      "Reminder: docs/approvals.json is human-only. AI never writes it. Next step = first not-complete step in order."
    );
  } else {
    lines.push("No docs/STATE.json yet. Initialize it before running any structure-phase skill.");
  }
} catch (e) {
  lines.push(`STATE.json unreadable (${String(e).slice(0, 80)}) — fix docs/STATE.json first.`);
}

process.stdout.write(lines.join("\n") + "\n");
process.exit(0);
