#!/usr/bin/env node
// PostToolUse (all): count failures per tool/step; after 3 consecutive failures, tell Claude to stop and escalate.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

try {
  const input = JSON.parse(readFileSync(0, "utf8"));
  const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
  const stateDir = path.join(root, ".claude/state");
  mkdirSync(stateDir, { recursive: true });
  const counterPath = path.join(stateDir, "failures.json");

  const key = input.tool_name ?? "unknown";
  const failed = input.tool_response?.success === false ||
    (typeof input.tool_response === "string" && /error|failed/i.test(input.tool_response.slice(0, 200)));

  let counts = {};
  try {
    counts = JSON.parse(readFileSync(counterPath, "utf8"));
  } catch {}
  counts[key] = failed ? (counts[key] ?? 0) + 1 : 0;
  writeFileSync(counterPath, JSON.stringify(counts));

  if (counts[key] >= 3) {
    console.error(
      `error-handler: tool "${key}" failed ${counts[key]} times in a row. ` +
        "Stop retrying. Report the failure, what you tried, and escalate to the human with a concrete question."
    );
    counts[key] = 0; // reset after escalation
    writeFileSync(counterPath, JSON.stringify(counts));
    process.exit(2);
  }
} catch {
  // never fail the turn because of the failure counter
}
process.exit(0);
