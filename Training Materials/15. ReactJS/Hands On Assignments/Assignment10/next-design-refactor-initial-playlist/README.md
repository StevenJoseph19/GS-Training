
# PlayListr — Initial Project (Before Refactoring)

This is a **complete, working Next.js app** with deliberate design smells so your trainees can practice
**refactoring for better application design** on a **new scenario** (music playlists & tracks).

## What the app does
- Shows a **playlist list**; click a playlist to view its tracks.
- The **playlist details** page renders an **unrefactored `Tracks` component** that both lists tracks **and**
  contains a form to add a new track.
- An **Add Playlist** button is placed inside `PlaylistList` (listing + adding in one component).

## Refactoring Objectives (to be done by trainees)
1. **Split responsibilities in Tracks**
   - Extract `<TrackList/>` for the tracks table.
   - Extract `<AddTrack/>` for the track form.
   - **Lift `tracks` state up** from `Tracks` into `Playlist` so `Playlist` becomes the shared state owner.
   - Support **inverse data flow**: `<AddTrack/>` calls a parent function (e.g., `addTrack`) to mutate `Playlist` state.

2. **Fix SRP in PlaylistList**
   - Remove the **Add Playlist** button from `PlaylistList`.
   - Create a dedicated `<AddPlaylist/>` component and render it at an appropriate level.

3. **Consider file structure improvements**
   - Discuss if feature‑based folders (e.g., `/playlist`, `/track`) would improve discoverability.
   - Keep directory nesting reasonable (≤ 3–4 levels).

4. **State placement checklist**
   - Only use state for data that changes over time and can’t be computed or isn’t passed via props.
   - Place state **as low as possible**; **lift** when multiple siblings need it.

## Where to look (with inline comments/TODOs)
- `components/Tracks.tsx` — **centerpiece** to split and lift state.
- `components/PlaylistList.tsx` — SRP violation; TODO mentions extracting `AddPlaylist`.
- `components/Playlist.tsx` — intended future owner of `tracks` state after refactor.
- `app/page.tsx` — current root composition toggler (list/details).

## Tests
- `tests/components/Tracks.test.tsx` — verifies adding a track works (combined component pre‑refactor).
- `tests/components/PlaylistList.test.tsx` — confirms **Add Playlist** button exists.

## Run
```bash
pnpm i        # or npm i / yarn
pnpm dev      # start Next dev server
pnpm test     # run Jest tests
```

## Notes
- Jest config uses **CommonJS** (`jest.config.cjs`) with `next/jest` for stability.
- `jest.setup.ts` mocks `next/image` to `<img>` for jsdom tests.

Happy refactoring!
