# Invenstory

Marketing site and login UI for Invenstory, built with Next.js 16, Tailwind CSS v4
and shadcn/ui.

This is frontend only — there is no authentication or form backend. The login and
contact forms validate locally and then state that nothing was sent.

## Run locally

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Routes

- `/` — landing page (hero, about, quote, pricing, contact, footer)
- `/login` — sign-in screen

## Structure

- `src/app` — routes, layout, theme tokens (`globals.css`)
- `components` — landing sections and shadcn primitives (`components/ui`)
- `lib/utils.ts` — `cn` helper

Brand tokens (`primary`, `border`, `muted`, custom `brand`/`ink`/`cyan` colors)
live in `src/app/globals.css`.

## Prisma scaffold

The repository still contains the Prisma 8 / Composer starter files
(`src/prisma`, `module.ts`, `service.ts`), but the pages do not use them.

```bash
bun run dev:composer
```

## Build

```bash
bun run build
bun run start
```
# test-KeDa-Tech
