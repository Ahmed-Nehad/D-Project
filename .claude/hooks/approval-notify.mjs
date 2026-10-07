#!/usr/bin/env node
// Notification hook: append a visible marker when Claude is waiting on a human approval.
import { readFileSync, appendFileSync, mkdirSync } from "node:fs";
import path from "node:path";

try {
  const input = JSON.parse(readFileSync(0, "utf8"));
  const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
  mkdirSync(path.join(root, ".claude/state"), { recursive: true });
  const entry = `${new Date().toISOString()} notification: ${input.message ?? "(no message)"}\n`;
  appendFileSync(path.join(root, ".claude/state/approval-notify.log"), entry);
} catch {}
process.exit(0);
