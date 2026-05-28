# zhuiye-ui

High-quality React + TypeScript UI component library built on a unified design token system.

## Packages

| Package                              | Description                                                                                                                                                                 |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/tokens` (`@zhuiye/tokens`) | Design tokens -- colors, spacing, typography, radii, shadows. Outputs CSS custom properties and a JSON manifest.                                                            |
| `packages/ui` (`@zhuiye/ui`)         | React component library. Ships `Button`, `Label`, `Input`, `Textarea`, `Badge`, `Checkbox`, `Switch`, `Radio`, and `RadioGroup` components with full accessibility support. |
| `apps/docs` (`@zhuiye/docs`)         | Storybook documentation site and Playwright E2E tests.                                                                                                                      |

## Common Commands

```bash
pnpm install              # Install all dependencies
pnpm run build            # Build @zhuiye/tokens then @zhuiye/ui
pnpm run storybook        # Start Storybook dev server (port 6006)
pnpm run test             # Run unit tests (Vitest)
pnpm run test:coverage    # Run unit tests with coverage
pnpm run test:e2e         # Run Playwright E2E tests
pnpm run typecheck        # Type-check all packages
pnpm run lint             # ESLint
pnpm run format           # Prettier (write)
pnpm run format:check     # Prettier (check only)
```

## Current Status

- **Button** -- supports `primary | secondary | outline | ghost | danger` variants, `sm | md | lg` sizes, loading state, icons, and full-width mode.
- **Label** -- accessible label with `required` marker, `description`, and `error` state support.
- **Input** -- text input with `sm | md | lg` sizes, `invalid` / `error` state, `disabled` / `readOnly`, `leftAdornment` / `rightAdornment` slots, and `fullWidth` mode.
- **Textarea** -- multi-line input with `resize` control (`none | vertical | horizontal | both`), `invalid` / `error` state, `disabled` / `readOnly`, and `fullWidth` mode.
- **Badge** -- inline status indicator with `neutral | primary | success | warning | danger` variants and `sm | md` sizes.
- **Checkbox** -- accessible checkbox with `label`, `description`, `errorMessage`, `invalid`, `disabled`, `indeterminate`, and `fullWidth` support. Auto-generates stable ids.
- **Switch** -- toggle switch with `checked` / `defaultChecked` / `onCheckedChange` controlled/uncontrolled API, `label`, `description`, `errorMessage`, `invalid`, `disabled`, and `fullWidth` support. Uses `role="switch"` for screen reader compatibility.
- **RadioGroup** + **Radio** -- accessible radio group with `label`, `description`, `errorMessage`, `invalid`, `disabled`, `orientation` (`horizontal | vertical`), `name`, `value` / `defaultValue` / `onValueChange` controlled/uncontrolled API. Radio supports `value`, `label`, `description`, and `disabled`.
- Design tokens are generated from `packages/tokens/scripts/build.ts` and produce `dist/tokens.css` + `dist/tokens.json`.
- Storybook is configured with autodocs, a11y addon, and interaction testing.
- Dark mode is supported through `data-theme="dark"` on any ancestor element. Semantic CSS variables (`--zy-background`, `--zy-foreground`, etc.) automatically switch. Use the Storybook toolbar to toggle themes.
