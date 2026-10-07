#!/usr/bin/env node
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const input = JSON.parse(readFileSync(0, "utf8"));
const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
const target = input.tool_input?.file_path;
if (!target) process.exit(0);

const rel = path
  .relative(root, path.resolve(root, target))
  .replaceAll("\\", "/");

const statePath = path.join(root, "docs/STATE.json");
const state = existsSync(statePath)
  ? JSON.parse(readFileSync(statePath, "utf8"))
  : { phase: "structure", locks: [] };

const allowedByPhase = {
  structure: ["docs/", ".claude/state/", "client/"],
  build: ["src/", "app/", "tests/", "docs/"],
};
const neverWritable = [
  "docs/approvals.json",
  ".claude/settings.json",
  ".claude/hooks/",
  ".env",
];

const deny = (msg) => {
  console.error(`scope-guard: ${msg}`);
  process.exit(2); // exit code 2 blocks the tool call; stderr goes to Claude
};

if (rel.startsWith("..")) deny(`${rel} is outside the project.`);
if (neverWritable.some((p) => rel === p || rel.startsWith(p)))
  deny(`${rel} is protected. Ask a human to change it.`);
if (state.locks?.includes(rel))
  deny(`${rel} is approved and locked. Propose a change request instead.`);
if (rel === "docs/STATE.json" && state.phase !== "structure") {
  // during build phase, STATE updates only via orchestrator paths
}

const allowed = allowedByPhase[state.phase] ?? ["docs/", ".claude/state/", "client/"];
if (!allowed.some((p) => rel.startsWith(p)))
  deny(`${rel} is not writable during the "${state.phase}" phase.`);

process.exit(0);
