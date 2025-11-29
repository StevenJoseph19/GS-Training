
# AutoMart (Next.js) — Assignment Stub

This is the same project setup as the working demo, but **components and hooks are stubbed** with TODOs.
Your job is to complete the TODOs so that all tests pass.

## Goals
- Conditional rendering: swap list/details; early-returns for loading.
- Shared state via function props (wrapper using `useCallback`).
- Custom hooks: generic `useGetRequest(url)` + domain-specific `useCars()`.
- Loading/Error state management.
- Tests: Vitest + Testing Library.

## Scripts
```bash
pnpm i
pnpm dev
pnpm test
```

## Where to implement
- `components/` — Banner, CarList, CarRow, CarDetails
- `hooks/` — useGetRequest, useCars

## Do NOT modify
- `tests/` — tests must pass with your implementation.
- `helpers/` — defaultPhoto and loadingStatus.
- `app/api/cars/route.ts` — mock API.
```
