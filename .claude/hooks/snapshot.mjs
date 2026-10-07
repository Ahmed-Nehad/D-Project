#!/usr/bin/env node
// PreCompact: snapshot STATE.json + policy + gate status so compaction cannot lose the phase.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

try {
  const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
  mkdirSync(path.join(root, ".claude/state"), { recursive: true });
  const snap = { time: new Date().toISOString() };
  for (const f of [
    "docs/STATE.json",
    ".claude/state/policy.json",
    "docs/approvals.json",
  ]) {
    const p = path.join(root, f);
    if (existsSync(p)) snap[f.split("/").slice(-1)[0]] = readFileSync(p, "utf8");
  }
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  writeFileSync(
    path.join(root, ".claude/state", `snapshot-${stamp}.json`),
    JSON.stringify(snap, null, 2)
  );
  process.stdout.write(
    "Snapshot saved to .claude/state/. After compaction, re-read docs/STATE.json (and load-state context) before continuing."
  );
} catch {}
process.exit(0);
