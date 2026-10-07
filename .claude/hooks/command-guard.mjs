#!/usr/bin/env node
// PreToolUse (Bash): blocks destructive commands, secret leaks, unapproved network.
import { readFileSync } from "node:fs";
import path from "node:path";

const input = JSON.parse(readFileSync(0, "utf8"));
const cmd = input.tool_input?.command ?? "";
if (!cmd) process.exit(0);

const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
let policy = { forbiddenCommands: [], networkAllowed: [] };
try {
  policy = JSON.parse(readFileSync(path.join(root, ".claude/state/policy.json"), "utf8"));
} catch {}

const deny = (msg) => {
  console.error(`command-guard: ${msg}`);
  process.exit(2);
};

const forbidden = [
  ...(policy.forbiddenCommands ?? []),
  "rm -rf",
  "Remove-Item -Recurse -Force",
  "git push --force",
  "npm publish",
  "dropdb",
  "format ",
  "del /s /q",
];
for (const f of forbidden) {
  if (cmd.toLowerCase().includes(f.toLowerCase()))
    deny(`Blocked (forbidden command): ${f}`);
}

const secretPatterns = [
  /\.env\b/i,
  /BEGIN (RSA |EC )?PRIVATE KEY/,
  /(api[_-]?key|secret|password|token)\s*=\s*['"][^'"]{8,}/i,
];
for (const re of secretPatterns) {
  if (re.test(cmd)) deny("Blocked: possible secret access or leak in command.");
}

const networkUrls = cmd.match(/https?:\/\/[^\s'"]+/g) ?? [];
const allowedHosts = new Set(["registry.npmjs.org", "expo.dev", "github.com"]);
for (const url of networkUrls) {
  let host;
  try {
    host = new URL(url).hostname;
  } catch {
    continue;
  }
  const ok = (policy.networkAllowed ?? []).some((h) => host === h || host.endsWith("." + h));
  if (!ok && !allowedHosts.has(host))
    deny(`Blocked network call to ${host}. Not in policy networkAllowed.`);
}

process.exit(0);
