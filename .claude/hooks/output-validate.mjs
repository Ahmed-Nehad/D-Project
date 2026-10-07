#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const input = JSON.parse(readFileSync(0, "utf8"));
const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
const target = input.tool_input?.file_path;
if (!target) process.exit(0);

const rel = path.relative(root, path.resolve(root, target)).replaceAll("\\", "/");
if (!(rel.startsWith("docs/"))) process.exit(0);

const content = (() => {
  try {
    return readFileSync(path.resolve(root, target), "utf8");
  } catch {
    return null; // file may come from Write tool payload instead of disk
  }
})();
const text = content ?? JSON.stringify(input.tool_input?.content ?? "");

const deny = (msg) => {
  console.error(`output-validate: ${msg}`);
  process.exit(2);
};

const requiredHeadingsByDoc = [
  { match: /^01-/, need: ["# Requirements", "## Open questions"] },
  { match: /^02-/, need: ["# Brainstorm", "## Suggested, not requested"] },
  { match: /^03-/, need: ["# Scope", "## MVP", "## Out of scope"] },
  { match: /^04-/, need: ["# Boundaries", "## Enforcement"] },
  { match: /^05-/, need: ["# Tech Stack", "## Rejected alternatives"] },
  { match: /^06-/, need: ["# Architecture", "## Diagram"] },
  { match: /^07-/, need: ["# Database", "## ER diagram"] },
  { match: /^08-/, need: ["# API", "## Conventions"] },
  { match: /^09-/, need: ["# UX", "## Design tokens"] },
  { match: /^10-/, need: ["# Guidelines", "## Enforcement"] },
  { match: /^11-/, need: ["# Security", "## Data protection matrix", "## REQUIRES HUMAN REVIEW"] },
  { match: /^12-/, need: ["# Testing", "## Definition of done", "## Coverage mapping"] },
  { match: /^13-/, need: ["# DevOps & Release", "## Environments", "## Store submission checklist"] },
  { match: /^14-/, need: ["# Plan", "## Milestones", "## Tasks"] },
  { match: /^15-/, need: ["# Risks", "## Consistency sweep findings"] },
  { match: /^16-/, need: ["# Handoff", "## Document index", "## Gate status"] },
];

const rule = requiredHeadingsByDoc.find((r) => r.match.test(path.basename(rel)));
if (rule) {
  const missing = rule.need.filter((h) => !text.includes(h));
  if (missing.length) deny(`${rel} missing required headings: ${missing.join(", ")}`);
}

if (text.includes("TODO") || text.includes("TBD"))
  deny(`${rel} contains unresolved TODO/TBD.`);

if (/\.json$/.test(rel)) {
  try {
    JSON.parse(text);
  } catch (e) {
    deny(`${rel} is invalid JSON: ${String(e).slice(0, 120)}`);
  }
}

process.exit(0);
