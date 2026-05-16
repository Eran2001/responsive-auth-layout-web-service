# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:5173
npm run build    # Type-check and production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Stack**: React 19, Vite 6, TypeScript, Tailwind CSS v4 (via `@tailwindcss/vite`), shadcn/ui (new-york style), `react-router-dom` v6, `next-themes` for dark/light mode.

**Routing** (`src/App.tsx`): React Router v6 with three routes — `/`, `/login`, `/register`. The `ThemeProvider` wraps the router at the top level.

**Routing pattern**: Pages live in `src/pages/`. `LoginPage` and `RegisterPage` each render `AuthLayout` with a form component as children. The `AuthLayout` component (`src/components/auth/auth-layout.tsx`) owns the full-page shell (two-column grid on `lg+`, single column on mobile).

**Path alias**: `@/` resolves to `src/`. Configured in both `vite.config.ts` and `tsconfig.app.json`.

**CSS architecture** (`src/index.css` — canonical file, also referenced in `components.json`):
- Custom Tailwind v4 breakpoints via `@theme`: `xs` (480px) through `8xl` (10000px)
- Fluid typography utilities: `.text-fluid-xs` through `.text-fluid-4xl` — use these (not Tailwind's fixed `text-*`) for headings and body copy
- Fluid spacing utilities: `.p-fluid`, `.px-fluid`, `.py-fluid`, `.gap-fluid`
- Two container classes: `.container-responsive` (max 1400px) and `.container-ultra` (max 2400px) — prefer these over Tailwind's default `container`
- Fonts: `@fontsource/geist` and `@fontsource/geist-mono` imported in `src/main.tsx`

**shadcn/ui**: Components live in `src/components/ui/`. Add new components with `npx shadcn@latest add <component>`.

**`ResponsiveDebugIndicator`** (`src/components/responsive-debug-indicator.tsx`): Fixed overlay showing viewport dimensions and active breakpoint. Included on every page.

**Links**: Uses React Router's `<Link to="...">` — not `href`.
