#!/usr/bin/env node
// UserPromptSubmit: warn/block when prompt asks for out-of-phase work (e.g., coding during structure).
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

let prompt = "";
try {
  const input = JSON.parse(readFileSync(0, "utf8"));
  prompt = input.prompt ?? "";
} catch {
  process.exit(0);
}

const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
let phase = "structure";
try {
  const statePath = path.join(root, "docs/STATE.json");
  if (existsSync(statePath)) {
    phase = JSON.parse(readFileSync(statePath, "utf8")).phase ?? "structure";
  }
} catch {}

const buildIntents = [
  /\b(implémente|implement|code|écris le code|write the code|crée? (le|un) composant|create (a )?component|refactor|ajoute (une|le) fonctionnalité|add (a )?feature)\b/i,
  /\bnpm (run|install|test)\b/i,
];

const structureIntents = [
  /\b(requirements?|scope|brainstorm|architecture|stack|intake|cahier des charges|périmètre|périmetre)\b/i,
];

if (phase !== "structure") process.exit(0);

const looksLikeBuild = buildIntents.some((re) => re.test(prompt));
const mentionsStructure = structureIntents.some((re) => re.test(prompt));

if (looksLikeBuild && !mentionsStructure) {
  console.error(
    "input-check: phase is 'structure'. Coding belongs to the build phase after docs are approved. " +
      "If the user really wants code, they must explicitly say so (e.g., 'ignore phase') or change phase; otherwise steer back to the current structure step."
  );
  process.exit(2); // blocks this prompt from reaching Claude silently; user sees the message
}

process.exit(0);
