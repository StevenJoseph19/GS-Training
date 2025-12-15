/**
 * Problem Statement: BookList Component — Rendering & Behavior
 *
 * The `BookList` component renders a list of book titles inside
 * a `<ul aria-label="Books">`. It must:
 *   1) Render all items passed via the `items` prop as `<li>` elements.
 *   2) Apply the CSS class `"favorite"` to items listed in the `favorites` prop.
 *   3) Emit `onItemToggle(name)` when a list item is clicked.
 *
 * Guidelines:
 *   - Prefer user-centric queries (role, accessible name, visible text).
 *   - Scope DOM queries to the list container to avoid false positives.
 *   - Use readable assertions; focus on outcomes the user perceives.
 *   - Avoid relying on internal implementation details (e.g., IDs or structure).
 *
 * Notes:
 *   - Component under test: `src/components/BookList.tsx`
 *   - Uncomment typical imports when you implement:
 *       import { render, screen, within } from '@testing-library/react';
 *       import userEvent from '@testing-library/user-event';
 *       import BookList from '../src/components/BookList.tsx';
 */

import { describe, it } from "vitest";
// import { render, screen, within } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import BookList from '../src/components/BookList.tsx';

const BOOKS = ["Dune", "Foundation", "Snow Crash", "Hyperion"];

describe("BookList rendering (TS)", () => {
  it("renders all items", () => {
    // TODO: Arrange — mount the component with BOOKS and no favorites.
    // TODO: Act — obtain a reference to the list and its items using accessibility-first queries.
    // TODO: Assert — verify all provided titles are present and the count matches.
  });

  it('marks favorites with the "favorite" class', () => {
    // TODO: Arrange — mount the component with a subset marked as favorites.
    // TODO: Act — reference specific items by their visible text.
    // TODO: Assert — favorite items have the expected visual indicator; non-favorites do not.
  });

  it("emits onItemToggle(name) when a list item is clicked", () => {
    // TODO: Arrange — create a mock handler and mount the component with items and no favorites.
    // TODO: Act — simulate a user click on one of the items.
    // TODO: Assert — the handler was called with the correct item name and the expected number of times.
  });
});
