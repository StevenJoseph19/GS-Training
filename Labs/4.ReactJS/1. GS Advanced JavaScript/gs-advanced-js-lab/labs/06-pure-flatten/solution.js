// Problem Statement
// Write a function flatten(obj) that takes a deeply nested object and returns a new object
// where all nested keys are flattened into dot-notation strings.

// The Goldman Twist: If a key contains an array, do not flatten the array indices (keep the array as a value).
// If it contains a function, ignore it for now (we will handle functions in Lab 15).

/**
 * Returns a NEW flattened object.
 * @param {Object} obj - The source object.
 * @param {string} prefix - Internal prefix for recursion.
 * @returns {Object} - The flattened result.
 */
export const flatten = (obj, prefix = "") => {
  // TODO: Initialize a brand new empty object for the results.
  // Note: Unlike Lab 01, we MUST NOT modify the input 'obj'.

  // TODO: Iterate through the keys of the input object.
  // Hint: Use hasOwnProperty to ensure you aren't grabbing prototype methods.

  // TODO: Determine the 'newKey' name based on whether a prefix exists.

  // TODO: Implement the recursion logic:
  // 1. If the value is a "true" object (not null, not an array):
  //    a. Call flatten recursively for this value.
  //    b. Merge the returned flattened object into your local result object.
  // 2. If it is a leaf node (primitive or array):
  //    a. Assign the value directly to result[newKey].

  // TODO: Return the newly created result object.
  throw new Error("Not implemented");
};
