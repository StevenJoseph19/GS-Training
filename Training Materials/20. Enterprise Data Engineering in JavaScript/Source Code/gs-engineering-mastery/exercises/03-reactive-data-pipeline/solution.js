/**
 * Lab R-03: setDeep Utility
 * * Objective: Update a nested property in a state object while maintaining 100% Immutability.
 * * In financial dashboards (like those using AG Grid), we must avoid direct mutation.
 * This function uses "Structural Sharing": only the modified branch is cloned,
 * while untouched branches retain their original references.
 * * @param {Object} obj - The source object (e.g., a User Profile or Trade Object).
 * @param {string} path - Dot-notation string (e.g., "metadata.pricing.strikePrice").
 * @param {any} value - The new value to inject at the end of the path.
 * @returns {Object} A new object with the updated value and cloned parent path.
 */
function setDeep(obj, path, value) {
  // Split the path into an array of keys to facilitate step-by-step traversal
  /**
   * BASE CASE:
   * When we are at the last key in the path, we perform the actual update.
   * We use the Spread Operator (...) to clone the current level of the object
   * and overwrite only the specific key with the new value.
   */
  // RECURSIVE STRATEGY:
  // 1. Extract the first key from the current path (e.g., "metadata")
  // 2. Re-assemble the remaining path for the next recursive call (e.g., "pricing.strikePrice")
  /**
   * RECURSIVE STEP:
   * We return a new version of the current object level.
   * Logic:
   * - Spread the existing object to preserve sibling properties (Immutability).
   * - Update 'currentKey' by calling setDeep again on the child object.
   * - (obj[currentKey] || {}) ensures the path is created even if it doesn't exist yet.
   */
}
