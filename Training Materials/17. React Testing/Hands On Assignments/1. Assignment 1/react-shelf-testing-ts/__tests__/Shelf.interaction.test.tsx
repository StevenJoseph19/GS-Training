/**
 * Problem Statement: Shelf Component — Integrated Interaction & State Transitions
 *
 * The `Shelf` component composes multiple child components and manages state
 * (search query, favorites). It must:
 *   1) Filter the displayed items when the query changes.
 *   2) Toggle an item's favorite state when clicked.
 *   3) Reflect the filtered count in the status badge.
 *
 * Your tasks:
 *   1) Render with a known list of items and no favorites.
 *   2) Simulate typing a query that should filter down to a subset.
 *   3) Verify the list shows only the expected items and the badge count matches.
 *   4) Simulate clicking an item to toggle its favorite state and verify the UI reflects the change.
 *
 * Guidelines:
 *   - Use user-centric queries for the input, list, and items.
 *   - Scope queries to containers to avoid false positives.
 *   - Assert on visible outcomes (filtered items, badge count, favorite styling).
 *
 * Notes:
 *   - Component under test: `src/components/Shelf.tsx`
 *   - Uncomment imports when implementing:
 *       import React from 'react';
 *       import { render, screen, within } from '@testing-library/react';
 *       import userEvent from '@testing-library/user-event';
 *       import Shelf from '../src/components/Shelf.tsx';
 */

import { describe, it } from "vitest";
// import React from 'react';
// import { render, screen, within } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Shelf from '../src/components/Shelf.tsx';

const BOOKS = ["Dune", "Foundation", "Snow Crash", "Hyperion"];

describe("Shelf interactions & state transitions (TS)", () => {
  it("filters the displayed items when the query changes", () => {
    // TODO: Arrange — mount the component with BOOKS and no favorites.
    // TODO: Act — simulate typing a query that matches only a subset of items.
    // TODO: Assert — verify only the expected items are displayed; confirm the count in the badge.
  });

  it("toggles an item’s favorite state when clicked", () => {
    // TODO: Arrange — mount the component with BOOKS and no favorites.
    // TODO: Act — click a specific item to toggle its favorite state.
    // TODO: Assert — verify the item reflects the favorite styling; clicking again removes it.
  });
});
