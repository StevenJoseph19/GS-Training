/**
 * The Recursive Shadow Clone (Stub)
 * Goal: Create a total copy of an object, including all nested levels.
 * Constraint: No references to the original object should remain.
 */
function deepClone(val) {
  // 1. BASE CASE: If it's a primitive or null, return it as-is
  // This avoids the "null trap" Red Flag
  // TODO: Implement safety check for primitives and null

  // 2. INITIALIZE: Create a new block of memory (Array or Object)
  // This ensures Reference Equality (clone === original) is false
  // TODO: Allocate a new house (hint: check if val is an Array or Object)
  let clone;

  // 3. RECURSIVE STEP: Iterate and call self for nested data
  for (let key in val) {
    /**
     * DEEP DIVE: Object.prototype.hasOwnProperty.call(val, key)
     * 1. Protection: Works even if val was created with Object.create(null).
     * 2. Prototype Filter: Prevents cloning inherited methods from the
     * "Prototype Bridge" (Lab R-05).
     * 3. Safety: Ensures we only copy "Owned" data, not "Shared" logic.
     */
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      // TODO: Recursively call deepClone for the nested value
      // Assign the result to the corresponding key in the clone
    }
  }

  return clone;
}

module.exports = { deepClone };
