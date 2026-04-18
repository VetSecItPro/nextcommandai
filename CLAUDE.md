# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: Next.js 16 + React 19 + Tailwind v4

This project runs on versions that post-date most training data. **Before writing Next.js, React, or Tailwind code, consult the shipped docs** — they are the source of truth, not memory:

- Next.js 16 docs: `node_modules/next/dist/docs/` (see `AGENTS.md` — scaffolder-installed warning)
- Tailwind v4 uses `@tailwindcss/postcss` and CSS-first config (not `tailwind.config.js`). Theme tokens live in `src/app/globals.css` — check there before assuming v3 patterns
- ESLint uses flat config (`eslint.config.mjs` with `defineConfig` from `eslint/config`), not `.eslintrc`

If an API or convention feels familiar but you haven't verified it in `node_modules/next/dist/docs/` for this release, verify before writing.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (flat config)
npx tsc --noEmit # typecheck (no script alias; strict mode is on)
```

No test framework is installed yet. If you add one, wire up a `test` script and update this file.

## Architecture

- **App Router** under `src/app/` with `src/` layout and `@/*` → `src/*` alias (`tsconfig.json`)
- **Server Components by default.** Add `"use client"` only when a component needs browser APIs, state, or effects
- **Styling**: Tailwind v4 via PostCSS; global styles and theme tokens in `src/app/globals.css`
- **Fonts**: `next/font/google` (Geist + Geist Mono) loaded in `src/app/layout.tsx` as CSS variables (`--font-geist-sans`, `--font-geist-mono`)
- **TS strict mode** is on — fix the types, don't weaken `tsconfig.json` to silence errors

## Conventions (inherits from global `~/.claude/CLAUDE.md`)

Component-first architecture applies from day one:
- Page files (`src/app/**/page.tsx`) are orchestrators only — state, data fetching, layout. Max 400 lines
- UI sections → `src/components/{page-name}/` with barrel `index.ts`
- Shared primitives (Card, Badge, Button, Modal) → `src/components/ui/` — never redefine
- Domain types → `src/types/{domain}.ts` — never inline in pages
- API routes (`src/app/api/*/route.ts`) use shared data-layer helpers; validate inputs with Zod
