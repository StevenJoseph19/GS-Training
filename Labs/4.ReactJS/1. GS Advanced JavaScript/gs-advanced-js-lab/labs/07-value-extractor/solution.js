// Problem Statement
// Write a function extractValues(obj) that traverses a deeply nested object and returns a comma-separated string
// of all primitive values.

// The Goldman Twist:
// - If a value is a function, it must be invoked, and its return value should be included in the output.
// - If that function returns another object, you must recursively flatten that too.
// - The final output must be a single string of values separated by ", ".

// Why this matters: This tests if you know how to differentiate between types (typeof value === 'function')
// and handle the return values of those functions dynamically.

/**
 * Helper: Recursively extracts values from an object or the results of executed functions.
 * @param {Object} obj - The source object.
 * @returns {Array} - Flat array of values.
 */
const getValuesRecursive = (obj) => {
  // TODO: Initialize an array to collect values.

  // TODO: Iterate through the keys of the object.

  // TODO: Handle Functions:
  // If the value is a function, execute it to get the "real" underlying value.

  // TODO: Handle Objects:
  // If the value (or the result of the function) is an object (not null):
  // Recursively call getValuesRecursive and combine the results.

  // TODO: Handle Primitives:
  // If it's a leaf node (string, number, etc.), push it to the collection.

  // TODO: Return the collected array of values.
  throw new Error("Not implemented");
};

/**
 * Main function: Converts the extracted values into a formatted string.
 */
export const extractValues = (obj) => {
  // TODO: Call getValuesRecursive to get the flat array of values.
  // TODO: Join the array into a string separated by ", ".
  throw new Error("Not implemented");
};
