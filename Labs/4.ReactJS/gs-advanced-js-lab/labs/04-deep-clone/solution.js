// Problem Statement
// Implement a function deepClone(obj) that creates a full copy of an object.
// It must handle nested objects and arrays.

// The Goldman Challenge: Most developers use JSON.parse(JSON.stringify(obj)).
// However, this fails if the object contains:
// - Functions (they disappear).
// - Date objects (they turn into strings).
// - Undefined (they disappear).

// Your solution must use recursion to clone these correctly.

/**
 * Recursively clones an object or array.
 * Handles Functions, Dates, and nested structures.
 * @param {*} obj - The value to clone.
 * @returns {*} - The deep copy.
 */
export const deepClone = (obj) => {
  // TODO: Base Case - Handle primitives (string, number, boolean) and null.
  // If it's not an object, it doesn't need cloning; just return it.

  // TODO: Special Case - Handle Date objects.
  // Hint: Create a 'new Date()' using the original date's time.

  // TODO: Initialize the clone container.
  // Check if the input 'obj' is an Array or a standard Object.

  // TODO: Recursive Step - Iterate through all own properties of the object.
  // 1. Ensure the key belongs to the object itself (not the prototype).
  // 2. Set the clone's key to a recursive call of deepClone(obj[key]).

  // TODO: Return the completed clone.
  throw new Error("Not implemented");
};
