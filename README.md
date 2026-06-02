# zhuiye-ui

High-quality React + TypeScript UI component library built on a unified design token system.

## Packages

| Package                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/tokens` (`@zhuiye/tokens`) | Design tokens -- colors, spacing, typography, radii, shadows. Outputs CSS custom properties and a JSON manifest.                                                                                                                                                                                                                                                                                                                   |
| `packages/ui` (`@zhuiye/ui`)         | React component library. Ships `Button`, `Label`, `Input`, `Textarea`, `Badge`, `Checkbox`, `Switch`, `Radio`, `RadioGroup`, `VisuallyHidden`, `Spinner`, `Separator`, `IconSlot`, `FormMessage`, `Field`, `Fieldset`, `Select`, `Dialog`, `Popover`, `Tooltip`, `DropdownMenu`, `Tabs`, `Accordion`, `Collapsible`, `Alert`, `Progress`, `Avatar`, `Breadcrumb`, and `NavigationMenu` components with full accessibility support. |
| `apps/docs` (`@zhuiye/docs`)         | Storybook documentation site and Playwright E2E tests.                                                                                                                                                                                                                                                                                                                                                                             |

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
- **VisuallyHidden** -- renders a `span` with screen-reader-only text via the standard clipping technique.
- **Spinner** -- accessible loading indicator with `sm | md | lg` sizes. Exposes `role="status"` with a hidden label by default; set `decorative` to hide from assistive technology.
- **Separator** -- visual divider (`hr` for horizontal, `div` for vertical). Decorative by default; set `decorative={false}` for semantic `role="separator"` with `aria-orientation`.
- **IconSlot** -- utility wrapper for icons with `sm | md | lg` sizes. Decorative by default; set `decorative={false}` with a `label` for `role="img"` accessibility.
- **FormMessage** -- paragraph-based message with `neutral | danger | success | warning` tones. Supports `role="alert"` for error announcements.
- **Field** -- wraps a single form control with `Label`, optional `description`, and `errorMessage`. Auto-generates stable ids, merges `aria-describedby`, and injects `disabled` / `invalid` when the child does not define them.
- **Fieldset** -- groups related controls with `legend`, optional `description`, and `errorMessage`. Supports `vertical | horizontal` orientation, native `disabled`, and `aria-invalid`.
- **Select** -- accessible select built on `@radix-ui/react-select`. Supports `sm | md | lg` sizes, `invalid` / `disabled` states, `fullWidth` mode, flat or grouped options, controlled/uncontrolled (`value` / `defaultValue` / `onValueChange`), placeholder, and full `Field` integration.
- **Dialog** -- accessible modal/non-modal dialog built on `@radix-ui/react-dialog`. Supports `sm | md | lg` sizes, controlled/uncontrolled (`open` / `onOpenChange` / `defaultOpen`), `showCloseButton` toggle, overlay + content portal, focus trap, Escape-to-close, and composable `DialogHeader` / `DialogFooter` / `DialogTitle` / `DialogDescription` layout helpers.
- **Popover** -- accessible popover built on `@radix-ui/react-popover`. Supports `sm | md | lg` sizes, controlled/uncontrolled (`open` / `onOpenChange` / `defaultOpen`), `showArrow` toggle, portal rendering, side/align/offset/collision positioning, and composable `PopoverHeader` / `PopoverFooter` / `PopoverTitle` / `PopoverDescription` layout helpers.
- **Tooltip** -- accessible tooltip built on `@radix-ui/react-tooltip`. Supports `neutral | inverse` tones, `showArrow` toggle, portal rendering, side/align/offset/collision positioning, provider-level delay settings, and opens on hover or focus.
- **DropdownMenu** -- accessible dropdown menu built on `@radix-ui/react-dropdown-menu`. Compound component pattern with `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuCheckboxItem`, `DropdownMenuRadioItem`, `DropdownMenuSub`, `DropdownMenuSubTrigger`, `DropdownMenuSubContent`, and more. Supports portal rendering, `showArrow`, keyboard navigation, submenu, checkmark/radio indicators via CSS pseudo-elements, and full dark mode.
- **Tabs** -- accessible tabs built on `@radix-ui/react-tabs`. Supports `underline | pills | contained` variants, `sm | md | lg` sizes, `horizontal | vertical` orientation, `automatic | manual` activation mode, controlled/uncontrolled (`value` / `defaultValue` / `onValueChange`), disabled triggers, and full dark mode.
- **Accordion** -- accessible accordion built on `@radix-ui/react-accordion`. Supports `line | card | contained` variants, `sm | md | lg` sizes, `single | multiple` expand mode, `collapsible`, `horizontal | vertical` orientation, controlled/uncontrolled (`value` / `defaultValue` / `onValueChange`), disabled items, CSS-drawn chevron, and full dark mode.
- **Collapsible** -- accessible disclosure panel built on `@radix-ui/react-collapsible`. Supports controlled/uncontrolled (`open` / `defaultOpen` / `onOpenChange`), disabled state, `forceMount`, CSS-drawn chevron, layout helpers (`CollapsibleHeader`, `CollapsibleTitle`, `CollapsibleDescription`), and full dark mode.
- **Alert** -- semantic status/alert block with `neutral | info | success | warning | danger` variants, `sm | md | lg` sizes, role override, accent rail, and composable title/description/actions helpers.
- **Progress** -- accessible progress indicator built on `@radix-ui/react-progress`. Supports `primary | success | warning | danger | neutral` variants, `sm | md | lg` sizes, custom `max`, clamped determinate values, indeterminate animation, and composable `ProgressIndicator`.
- **Avatar** -- accessible avatar primitive built on `@radix-ui/react-avatar`. Supports `xs | sm | md | lg | xl` sizes, `circle | square` shapes, image/fallback composition, fallback delay, and `AvatarGroup` overflow display.
- **Breadcrumb** -- semantic breadcrumb navigation with `nav` / `ol` structure, `sm | md | lg` sizes, composable list/item/link/page/separator parts, current-page `aria-current`, CSS-drawn separators, and accessible ellipsis.
- **NavigationMenu** -- accessible site navigation built on `@radix-ui/react-navigation-menu`. Supports `plain | subtle | framed` variants, `sm | md | lg` sizes, `horizontal | vertical` orientation, controlled/uncontrolled values, trigger/content panels, `active` links, indicator, viewport animation, submenu passthrough, and full dark mode.
- Design tokens are generated from `packages/tokens/scripts/build.ts` and produce `dist/tokens.css` + `dist/tokens.json`.
- Storybook is configured with autodocs, a11y addon, and interaction testing.
- Dark mode is supported through `data-theme="dark"` on any ancestor element. Semantic CSS variables (`--zy-background`, `--zy-foreground`, etc.) automatically switch. Use the Storybook toolbar to toggle themes.
