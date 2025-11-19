
# Component Rendering & Side Effects — Lab (Next.js + TypeScript)

## Objectives
Implement TODOs to practice:
- Distinguishing **render** vs **re-render** and how state triggers re-renders.
- **Memoizing** components (`React.memo`) to avoid unnecessary re-renders.
- Using **`useEffect`** with a **dependency array** to perform side effects once.
- Using **`useMemo`** for expensive derived computations.

## Tasks
1. **Data + hooks**
   - `lib/data/houses.ts`: provide an `API_DATA` array with 3 houses.
   - `lib/hooks/get.ts`: implement `useGetRequest(url)` that returns a memoized `get` function (using `useCallback([url])`) resolving to `API_DATA`.
2. **MemoRow** (`app/components/MemoRow.tsx`)
   - Create `RowInner({ house })` that renders `<li data-testid="row-{id}">` with address, price, and an `<em data-testid="renders-{id}">` showing a render count from a small custom `useRenderCount()` hook.
   - Export `export const MemoRow = React.memo(RowInner)`.
3. **HouseList** (`app/components/HouseList.tsx`)
   - Keep local `houses` state, start empty `[]`.
   - In `useEffect([get])`, call `get()` and `setHouses(data)`.
   - Compute a `useMemo` total of price to display in `<h2 data-testid="total">$TOTAL</h2>`.
   - Add **Add** button (`data-testid="add"`) to append a new house; existing rows’ render counts should stay at **1** if memoization works.
4. **Page** (`app/page.tsx`)
   - Render a title and the `HouseList`.

## Run
```bash
npm install
npm test         # tests will fail until you complete the TODOs
npm run dev      # http://localhost:3000
```
