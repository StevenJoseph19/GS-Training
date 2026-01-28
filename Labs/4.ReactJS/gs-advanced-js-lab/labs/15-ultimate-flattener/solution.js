// Problem Statement
// Create a function ultimateFlatten(obj) that processes a deeply nested structure.
// This is the "Final Boss" of the lab series, combining logic from every previous module.

// Requirements:
// 1. If a value is a primitive, keep it.
// 2. If a value is a function, execute it. If that function returns an object or array,
//    process that return value recursively.
// 3. If a value is an array, flatten its elements.
// 4. Final Output: A single string of all values found, separated by a pipe (|).

// Example:
// Input: { a: 1, b: () => ({ c: 2, d: [3, 4] }) }
// Output: "1 | 2 | 3 | 4"

// Why this matters to Goldman Sachs:
// This lab tests "Execution Context" and "Type Polymorphism." In real-world data
// engineering, data isn't always static; sometimes it's "lazy-loaded" via functions.
// Being able to traverse structures that change shape as you read them is a
// hallmark of a senior-level engineer.

/**
 * Helper: Recursively extracts and executes values to create a flat array.
 * @param {*} input - The nested object, array, function, or primitive.
 * @returns {Array} - A flat list of primitives.
 */
const deepCollect = (input) => {
  // TODO: Initialize an array to hold findings.

  // TODO: Case 1 - Functions (The "Dynamic" value).
  // If input is a function, execute it and pass the result BACK into deepCollect.

  // TODO: Case 2 - Arrays.
  // If input is an array, iterate through it and recursively collect from each item.

  // TODO: Case 3 - Objects.
  // If input is a "true" object (not null, not an array), iterate through its
  // values and recursively collect.

  // TODO: Case 4 - Primitives (The "Leaf" nodes).
  // If it's a primitive (string, number, etc.) and not null/undefined,
  // push it to your results.

  // TODO: Return the collected array.
  throw new Error("Not implemented");
};

/**
 * Main function: Joins the collected values into the final pipe-separated string.
 */
export const ultimateFlatten = (obj) => {
  // TODO: Call deepCollect on the input object.
  // TODO: Join the resulting array with " | ".
  throw new Error("Not implemented");
};
