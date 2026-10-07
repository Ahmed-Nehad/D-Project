#!/usr/bin/env node
// PostToolUse (all tools): append tool, path, time to .claude/state/audit.log. Never blocks.
import { readFileSync, appendFileSync, mkdirSync } from "node:fs";
import path from "node:path";

try {
  const input = JSON.parse(readFileSync(0, "utf8"));
  const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
  const logDir = path.join(root, ".claude/state");
  mkdirSync(logDir, { recursive: true });
  const entry = {
    time: new Date().toISOString(),
    tool: input.tool_name ?? "unknown",
    path: input.tool_input?.file_path ?? input.tool_input?.command ?? null,
    success: input.tool_response?.success ?? null,
  };
  appendFileSync(path.join(logDir, "audit.log"), JSON.stringify(entry) + "\n");
} catch {
  // auditing must never fail the tool call
}
process.exit(0);
