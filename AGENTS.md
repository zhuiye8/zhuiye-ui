# zhuiye-ui

## Operating Memory: Read First

This project exists primarily to put the user's Xiaomi MiMo MAX / Token Plan credits to meaningful, high-quality use before they expire. The goal is not to save tokens or minimize model usage. The goal is to turn that capacity into a polished, maintainable React UI component library with excellent UI/UX, documentation, and long-term iteration potential.

### Collaboration Contract

- OpenCode + Xiaomi MiMo are the primary implementation workflow.
- MiMo should do the main coding work whenever practical.
- The supervising assistant's default role is project manager, reviewer, and QA: define tasks, choose the model, review diffs, run checks, request revisions, and decide when work is ready to commit or push.
- The supervising assistant must not silently switch into primary implementer mode. Direct code edits by the supervising assistant require an explicit user request or an urgent narrowly scoped repair approved by the user.
- Quality, UI/UX, accessibility, maintainability, and documentation are higher priority than credit conservation.
- The long-term product should grow toward an Ant Design-like experience: component overview, live examples, copyable usage, documentation, and package publishing.

### MiMo Model Routing

- Use `mimo-v2.5-pro` for architecture, implementation, refactoring, debugging, long-context code review, and high-stakes coding tasks.
- Use `mimo-v2.5` for multimodal UI/UX review, screenshot critique, visual inspection, and tasks requiring image understanding.
- Prefer the V2.5 series. Avoid legacy model IDs unless the user explicitly asks.

### Required Workflow

1. Write a clear task prompt for OpenCode + MiMo.
2. Assign the right MiMo model for the task.
3. Let MiMo implement in the repository.
4. Review the resulting diff before accepting it.
5. Run the relevant checks (`lint`, `typecheck`, `test`, `build`, Storybook checks when UI changes).
6. Send revision prompts to MiMo until quality is acceptable.
7. Commit and push only after verification.

High-quality React + TypeScript UI component library. Prioritizes maintainability, accessibility, and design consistency.

## Project Goals

- Build production-grade, reusable, accessible React UI components
- Unified visual language via design tokens (`@zhuiye/tokens`)
- Every component must be tested and documented
- Support dark mode, responsive layouts, keyboard navigation

## Component API Conventions

### Props Design

- Use `variant` union types instead of multiple boolean props when 3+ mutually exclusive visual variants exist
- Prefer clear `variant` / `size` APIs:
  ```tsx
  // Good
  <Button variant="primary" size="lg" />
  // Bad
  <Button primary large rounded outlined />
  ```
- Complex components should use compound component patterns
- Controlled/uncontrolled: provide `defaultValue` / `value` + `onChange` pairs

### Required Component Qualities

- All components must use `forwardRef` and expose a ref
- All components must accept `className` and `style` pass-through
- Compound components must export child component types
- No `any` types -- strict TypeScript only
- No hard-coded color values -- use CSS variables from `@zhuiye/tokens`
- Component files must stay under 300 lines
- No `console.log` in committed code
- No `!important` in CSS

### State Coverage

Every interactive component must handle: `disabled`, `focus-visible`, `error`/`invalid`, `loading`, and dark mode.

## Accessibility Requirements

- Follow [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- All interactive elements must be keyboard-reachable
- Use semantic HTML (`<button>` not `<div onClick>`)
- Form controls must associate with `<label>`
- Modals/popups must implement focus trap
- Use `aria-live` for dynamic content updates
- Color contrast: WCAG AA minimum (4.5:1 body text, 3:1 large text)

## Storybook Requirements

Each component story file must include:

1. Default state with common props
2. One story per variant
3. One story per size
4. Interactive states (loading, disabled, error)
5. Composition examples with other components
6. Autodocs enabled
7. Controls for all props
8. A11y addon checks

## Testing

### Unit Tests (Vitest + Testing Library)

Each component needs at least 5 test cases:

1. Renders correctly
2. Props (variant, size, disabled, etc.)
3. Interaction (click, keyboard events)
4. Accessibility (ARIA attributes, roles)
5. Ref forwarding

Prefer `screen.getByRole` over `getByTestId`. Prefer `userEvent` over `fireEvent`.

### E2E Tests (Playwright)

Core component interactions should have E2E coverage across Chromium, Firefox, and WebKit.

## Model Usage Convention

- `mimo-v2.5-pro` -- code generation, refactoring, implementation tasks
- `mimo-v2.5` -- screenshot review, visual critique, design feedback

## Development Commands

```bash
pnpm install              # Install dependencies
pnpm run build            # Build all packages
pnpm run storybook        # Storybook dev server (port 6006)
pnpm run test             # Unit tests (Vitest)
pnpm run test:coverage    # Unit tests with coverage
pnpm run typecheck        # Type-check all packages
pnpm run lint             # ESLint
pnpm run format           # Prettier (write)
pnpm run format:check     # Prettier (check only)
```

## Monorepo Structure

```
zhuiye-ui/
|-- packages/
|   |-- tokens/           # Design tokens (colors, spacing, typography)
|   +-- ui/               # React component library
|-- apps/
|   +-- docs/             # Storybook docs + E2E tests
|-- AGENTS.md             # This file
+-- package.json          # Root config
```
