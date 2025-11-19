
# Conditional Rendering & Shared State — Lab (Next.js + TypeScript)

## Objectives
Implement the TODOs to practice:
- **Conditional rendering** (toggle list vs details).
- **Passing functions as props** to lift state updates.
- **Custom hooks** to isolate data fetching + loading status.
- **Mount/Unmount** behavior (list unmounts when details show; remounts on back).

## Tasks
1. **Data + hooks**
   - `lib/data/houses.ts`: provide a `LIST` array of 3 houses (one with a `photo` filename).
   - `lib/hooks/get.ts`: implement `useGetRequest(url)` returning a memoized `get()` (via `useCallback([url])`) that resolves to `LIST`.
   - `lib/hooks/useHouses.ts`: implement a custom hook with `{ houses, setHouses, loading }` and an effect that sets `loading` → `'loading'` → `'loaded'` after fetching; `'error'` on failure.
   - `lib/hooks/defaultPhoto.ts`: export a base64 fallback image string.
2. **HouseRow** (`app/components/HouseRow.tsx`)
   - Render a clickable `<tr data-testid="row-{id}">` with address/city/price; `onClick={() => onSelect(house)}`.
3. **HouseList** (`app/components/HouseList.tsx`)
   - Use `useHouses()`; if `loading !== 'loaded'` return `<div data-testid="loading">{loading}</div>`.
   - Otherwise render `<table data-testid="list">` and map houses to `HouseRow` with **keys**.
4. **HouseDetails** (`app/components/HouseDetails.tsx`)
   - Show `address`, `city`, `price` and an image: use `/houseImages/{photo}.jpg` if `photo` exists else `defaultPhoto`.
   - Render a **Back** button to call `onBack()`.
5. **Page** (`app/page.tsx`)
   - Keep `selected` state (`House | null`).
   - Pass a **wrapper** `selectHouse(h)` to `HouseList` to validate `h` then call `setSelected(h)`.
   - Conditionally render **list** when `selected` is `null` else **details** with `onBack={() => setSelected(null)}`.

## Run
```bash
npm install
npm test         # tests will fail until you complete the TODOs
npm run dev      # http://localhost:3000
```
