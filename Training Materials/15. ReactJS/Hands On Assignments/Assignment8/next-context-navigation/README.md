
# AutoMart (Next.js) — Context Navigation Stub (Jest + RTL)

This is the **assignment stub**. Helpers, context provider, API route, and tests are **kept**.
**Components and hooks are skeletons with clear TODOs** so trainees implement them to make tests pass.

## What trainees must implement
- `components/Banner.tsx` — header UI + Home button using `navigate('home')`.
- `components/CarList.tsx` — load cars via `useCars()`, show loading, render table + rows.
- `components/CarRow.tsx` — row UI, conditional price highlight, `navigate('details', car)` on click.
- `components/CarDetails.tsx` — read selected car from context, image fallback, Back button.
- `hooks/useGetRequest.ts` — memoized `get()` + status management.
- `hooks/useCars.ts` — fetch on mount (effect) + expose `{ cars, status }`.
- `app/page.tsx` — render <Banner/> and conditionally list/details based on `current`.

## Do NOT modify
- `contexts/navigation.tsx`, `providers/Providers.tsx`
- `app/api/cars/route.ts`, `helpers/*`, `lib/types.ts`
- Tests in `tests/` (already wrap with Providers and target the TODO behavior)

## Scripts
```bash
pnpm i
pnpm dev
pnpm test
```

## Notes
- Jest config uses **CommonJS (`jest.config.cjs`)** to avoid ESM import quirks.
- `jest.setup.ts` mocks `next/image` for jsdom.
- Tests rely on consistent aria labels and data-testids from your implementation.
