/**
 * Problem Statement: Badge Component — Conditional Rendering & Props
 *
 * The `Badge` component displays a numerical count inside
 * a `<div role="status">` element. It must:
 *   1) Render the count and a label (e.g., "Recipes: 3") when count > 0.
 *   2) Ensure the count is accessible via a status role with a dynamic accessible name (e.g., containing the label).
 *   3) Render nothing (or null) when the `count` prop is 0.
 *
 * Guidelines:
 *   - Prefer user-centric queries (role, accessible name, visible text).
 *   - Focus on outcomes the user perceives (e.g., presence or absence of the element).
 *   - Use readable assertions.
 *
 * Notes:
 *   - Component under test: `src/components/Badge.tsx`
 *   - Uncomment typical imports when you implement:
 *       import { render, screen } from '@testing-library/react';
 *       import Badge from '../src/components/Badge';
 */

// import { render, screen } from '@testing-library/react';
// import Badge from '../src/components/Badge';

describe("Badge rendering", () => {
  it("renders count in a status element", () => {
    // TODO: Arrange — mount the component with a positive count (e.g., 5).
    // TODO: Act — query for the status element using its role and accessible name.
    // TODO: Assert — verify the element is in the document and displays the correct count and label.
  });

  it("does not render when count is zero", () => {
    // TODO: Arrange — mount the component with count={0}.
    // TODO: Act — attempt to query the status element by role/name.
    // TODO: Assert — verify the element is NOT in the document (e.g., using queryByRole or asserting the element is null).
  });
});
