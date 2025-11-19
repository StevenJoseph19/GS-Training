
# Hooks, Props, and State — Lab (Next.js + TypeScript)

## Objectives
Implement the TODOs to practice:
- Passing data via **props** and via the **children** prop.
- Using **fragments** to return a single parent without extra DOM wrappers.
- Mapping arrays to JSX with **keys**.
- Managing **local state** with `useState` to re-render the UI.

## Tasks
1. **Banner** (`app/components/Banner.tsx`)
   - Support `headerText` prop **or** render from `children`.
   - Render a `<header data-testid="banner">` and an `<h1>` with the text.
2. **HouseRow** (`app/components/HouseRow.tsx`)
   - Render one table row with `data-testid="row-{id}"` for the house.
3. **HouseList** (`app/components/HouseList.tsx`)
   - Use `useState` to keep an array of two starter houses.
   - Show `Count: {houses.length}` in an element with `data-testid="count"`.
   - Map houses to `HouseRow` components (remember **keys**).
   - Wire an **Add House** button (`data-testid="add"`) that appends a new house
     with id=3 and updates count to 3.
4. **Page** (`app/page.tsx`)
   - Render two `Banner`s: first via `headerText` with the word **Globomantics**,
     second via `children` with text **Alternate Title via Children**.
   - Render `HouseList` below the banners.

## Run
```bash
npm install
npm test         # tests will fail until you complete the TODOs
npm run dev      # http://localhost:3000
```
