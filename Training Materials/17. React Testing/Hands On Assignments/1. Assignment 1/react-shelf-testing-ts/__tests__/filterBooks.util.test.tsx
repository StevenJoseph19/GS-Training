/**
 * Problem Statement: filterBooks Utility — Case-Insensitive Substring Filtering
 *
 * The `filterBooks(query, items)` utility returns items whose names include the query (case-insensitive).
 *
 * Your tasks:
 *   1) Verify that an empty query returns the original list.
 *   2) Verify that a query matches items regardless of letter case.
 *   3) Verify that a query which matches nothing returns an empty list.
 *
 * Guidelines:
 *   - Keep tests focused on pure logic (no UI).
 *   - Cover positive matches, negative matches, and edge cases.
 *   - Ensure consistent handling of undefined/empty queries.
 *
 * Notes:
 *   - Function under test: `src/utils/filterBooks.ts`
 *   - Uncomment imports when implementing:
 *       import { describe, it, expect } from 'vitest';
 *       import { filterBooks } from '../src/utils/filterBooks.ts';
 */

import { describe, it } from "vitest";
// import { expect } from 'vitest';
// import { filterBooks } from '../src/utils/filterBooks.ts';

const ITEMS = ["Dune", "Foundation", "Snow Crash"];

describe("filterBooks utility (TS)", () => {
  it("returns the full list when the query is empty", () => {
    // TODO: Arrange — define an empty query.
    // TODO: Act — call the utility with the empty query and ITEMS.
    // TODO: Assert — verify the output equals the original list.
  });

  it("matches items in a case-insensitive manner", () => {
    // TODO: Arrange — define queries that differ in case.
    // TODO: Act — call the utility with each query and ITEMS.
    // TODO: Assert — verify the matched items are correct for each query.
  });

  it("returns an empty list when there are no matches", () => {
    // TODO: Arrange — define a query that does not occur in any item name.
    // TODO: Act — call the utility with that query and ITEMS.
    // TODO: Assert — verify the output is an empty array.
  });
});
