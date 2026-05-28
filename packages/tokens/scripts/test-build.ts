import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { strict as assert } from 'node:assert';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cssPath = resolve(__dirname, '..', 'dist', 'tokens.css');
const css = readFileSync(cssPath, 'utf-8');

const expectedKebabVars = [
  '--zy-surface-elevated',
  '--zy-muted-foreground',
  '--zy-focus-ring',
  '--zy-primary-foreground',
  '--zy-danger-foreground',
];

const forbiddenCamelCaseVars = [
  '--zy-surfaceElevated',
  '--zy-mutedForeground',
  '--zy-focusRing',
  '--zy-primaryForeground',
  '--zy-dangerForeground',
];

for (const v of expectedKebabVars) {
  assert.ok(css.includes(`${v}:`), `Expected CSS to contain ${v}`);
}

for (const v of forbiddenCamelCaseVars) {
  assert.ok(!css.includes(`${v}:`), `CSS must not contain camelCase variable ${v}`);
}

const themeBlocks = [':root', "[data-theme='light']", "[data-theme='dark']"];
for (const block of themeBlocks) {
  assert.ok(css.includes(block), `Expected CSS to contain ${block} block`);
}

console.log(
  '[PASS] Token build output verified: kebab-case semantic variables present, camelCase absent',
);
