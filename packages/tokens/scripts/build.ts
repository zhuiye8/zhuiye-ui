import {
  colors,
  spacing,
  radii,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  transitions,
  lightTheme,
  darkTheme,
} from '../src/index.js';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');

mkdirSync(distDir, { recursive: true });

function toVar(name: string): string {
  return `--zy-${name}`;
}

function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function flattenObj(obj: Record<string, unknown>, prefix = ''): [string, string][] {
  const entries: [string, string][] = [];
  for (const [key, value] of Object.entries(obj)) {
    const name = prefix ? `${prefix}-${key}` : key;
    if (typeof value === 'object' && value !== null) {
      entries.push(...flattenObj(value as Record<string, unknown>, name));
    } else {
      entries.push([name, String(value)]);
    }
  }
  return entries;
}

function themeToVars(theme: Record<string, string>): string[] {
  return Object.entries(theme).map(([k, v]) => `  ${toVar(camelToKebab(k))}: ${v};`);
}

const scaleVars: string[] = [
  ...flattenObj(colors, 'color').map(([k, v]) => `  ${toVar(k)}: ${v};`),
  ...Object.entries(spacing).map(([k, v]) => `  ${toVar(`spacing-${k}`)}: ${v};`),
  ...Object.entries(radii).map(([k, v]) => `  ${toVar(`radius-${k}`)}: ${v};`),
  ...Object.entries(fontSizes).map(([k, v]) => `  ${toVar(`font-size-${k}`)}: ${v};`),
  ...Object.entries(fontWeights).map(([k, v]) => `  ${toVar(`font-weight-${k}`)}: ${v};`),
  ...Object.entries(lineHeights).map(([k, v]) => `  ${toVar(`line-height-${k}`)}: ${v};`),
  ...Object.entries(shadows).map(([k, v]) => `  ${toVar(`shadow-${k}`)}: ${v};`),
  ...Object.entries(transitions).map(([k, v]) => `  ${toVar(`transition-${k}`)}: ${v};`),
];

const cssContent = [
  ':root {',
  ...scaleVars,
  ...themeToVars(lightTheme),
  '  color-scheme: light;',
  '}',
  '',
  "[data-theme='light'] {",
  ...themeToVars(lightTheme),
  '  color-scheme: light;',
  '}',
  '',
  "[data-theme='dark'] {",
  ...themeToVars(darkTheme),
  '  color-scheme: dark;',
  '}',
  '',
].join('\n');

writeFileSync(resolve(distDir, 'tokens.css'), cssContent);

const tokens = {
  colors,
  spacing,
  radii,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  transitions,
  lightTheme,
  darkTheme,
};
writeFileSync(resolve(distDir, 'tokens.json'), JSON.stringify(tokens, null, 2) + '\n');

console.log('✓ Tokens built: dist/tokens.css, dist/tokens.json');
