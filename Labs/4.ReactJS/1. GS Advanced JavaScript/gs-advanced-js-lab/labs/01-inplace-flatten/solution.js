// Problem Statement
// Implement a function inplaceFlatten(obj) that flattens a nested object without creating a new object.
// The function should modify the original object by reference.
// Nested keys should be converted to dot-notation strings (e.g., a: { b: 1 } becomes "a.b": 1),
// and the original parent keys must be removed.

// Why this matters: Goldman Sachs often tests "Memory Management" and "Pass-by-Reference."
// Creating a new object is easy; mutating the existing one while iterating over it requires careful handling
// of the object's keys to avoid infinite loops or missing data.

/**
 * Flattens an object in-place using recursion.
 * @param {Object} obj - The object to be flattened.
 * @param {string} prefix - Internal use for recursion.
 */
export const inplaceFlatten = (obj, prefix = "") => {
  // TODO: Get keys before we start mutating the object to avoid iteration issues

  // TODO: Iterate through the keys

  // TODO: Determine the new key name (handle the dot notation prefix)

  // TODO: Check if the value is a nested object (exclude null and arrays)

  // TODO: If nested:
  // 1. Recursively call inplaceFlatten
  // 2. Merge the results back into the root object
  // 3. Delete the original parent key

  // TODO: If we are in a recursive call and reached a leaf node:
  // 1. Assign value to the new prefixed key
  // 2. Delete the old unprefixed key

  throw new Error(
    "Not implemented: Complete the inplaceFlatten logic to pass the tests.",
  );
};
