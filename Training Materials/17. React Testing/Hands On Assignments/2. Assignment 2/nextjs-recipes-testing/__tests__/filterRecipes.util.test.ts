/**
 * Problem Statement: formatPrice Utility Function — Formatting & Edge Cases
 *
 * The `formatPrice` utility function takes a number and returns a currency-formatted string. It must:
 *   1) Format a standard positive number to two decimal places with a currency symbol (e.g., "$12.50").
 *   2) Handle zero correctly (e.g., "$0.00").
 *   3) Handle large numbers, ensuring correct locale-specific thousands grouping (e.g., "$1,234.56" in US locale).
 *   4) Return a default error string (e.g., "N/A") for invalid inputs (null, undefined, non-numeric strings).
 *
 * Guidelines:
 *   - Test output strings directly using `toEqual`.
 *   - Focus on the user-visible formatting result.
 *   - Ensure localization/currency symbols are handled correctly (assuming a default currency like USD).
 *
 * Notes:
 *   - Utility under test: `src/utils/formatPrice.ts`
 *   - Uncomment typical imports when you implement:
 *       import { formatPrice } from '../src/utils/formatPrice';
 */

// import { formatPrice } from '../src/utils/formatPrice';

describe("formatPrice", () => {
  it("formats a standard number to USD currency string", () => {
    // TODO: Arrange & Act — Call formatPrice with a standard number (e.g., 12.5) and a number with more than two decimals (e.g., 99.999).
    // TODO: Assert — Verify the output matches the expected formatted string, including the currency symbol and two decimal places (e.g., "$12.50" and "$100.00").
  });

  it("handles large numbers with correct thousands grouping", () => {
    // TODO: Arrange & Act — Call formatPrice with a large number (e.g., 1234567.89).
    // TODO: Assert — Verify the output includes the thousands separator (e.g., "$1,234,567.89").
  });

  it("handles edge case: zero", () => {
    // TODO: Arrange & Act — Call formatPrice with 0.
    // TODO: Assert — Verify the output is formatted as "$0.00".
  });

  it('returns "N/A" for invalid or null inputs', () => {
    // TODO: Arrange & Act — Call formatPrice with null, undefined, and a non-numeric string (e.g., 'abc').
    // TODO: Assert — Verify that all these invalid inputs return the default error string "N/A".
  });
});
