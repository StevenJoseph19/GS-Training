// Problem Statement
// Implement a function reverseFlatten(paths, values) that reconstructs a deeply nested object
// from two arrays: one containing dot-notation paths and another containing their corresponding values.

// Example:
// paths = ["user.id", "user.profile.name", "settings.theme"]
// values = [1, "Gaurav", "dark"]
// Result: { user: { id: 1, profile: { name: "Gaurav" } }, settings: { theme: "dark" } }

// Why this matters to Goldman Sachs:
// GS systems often deal with high-throughput flat data streams (like CSVs or SQL rows)
// that must be transformed into complex, nested JSON structures for modern UI frameworks
// like React. Efficiency is key here; you must avoid re-traversing the object unnecessarily
// while ensuring that existing branches of the object tree aren't overwritten.

/**
 * Reconstructs a nested object from flat paths and values.
 * @param {string[]} paths - Array of dot-notation strings.
 * @param {any[]} values - Array of values corresponding to the paths.
 * @returns {Object} - The reconstructed nested object.
 */
export const reverseFlatten = (paths, values) => {
  const result = {};

  // TODO: Iterate through the 'paths' array.
  // Hint: You will need the index to grab the matching item from 'values'.

  // TODO: For each path:
  // 1. Split the path by the dot separator to get the individual keys.
  // 2. Initialize a 'current' pointer starting at the 'result' object.

  // TODO: Iterate through the keys:
  // 1. If it is the last key in the path, assign the value to the 'current' object.
  // 2. If it is NOT the last key:
  //    a. Ensure a nested object exists at that key (don't overwrite if it already exists!).
  //    b. Move the 'current' pointer deeper into that nested object.

  // TODO: Return the final reconstructed object.
  throw new Error("Not implemented");
};
