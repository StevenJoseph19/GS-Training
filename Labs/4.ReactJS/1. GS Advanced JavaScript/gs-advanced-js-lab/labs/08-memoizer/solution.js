// Problem Statement
// Create a higher-order function memoize(fn) that returns a new version of the function.
// This new function should cache its results. If it is called with the same arguments again,
// it should return the cached result instead of re-executing the original function.

// The Goldman Twist:
// 1. It must support multiple arguments (e.g., add(1, 2, 3)).
// 2. The cache should be private (hidden from the outside world) using a Closure.
// 3. You must decide how to generate a "Cache Key" for multiple arguments.

// Why this matters: This tests the "Efficiency" part of Prabhakar's feedback—avoiding redundant computations.

/**
 * A higher-order function for memoization.
 * @param {Function} fn - The function to memoize.
 * @returns {Function} - The memoized version of the function.
 */
export const memoize = (fn) => {
  // TODO: Initialize a 'cache' storage.
  // Requirement: This must stay private to the returned function via Closure.
  // Hint: A Map() or a plain Object works well here.

  return function (...args) {
    // TODO: Create a unique 'key' based on the incoming arguments.
    // Hint: How can you turn an array of arguments into a single string key?

    // TODO: Check if the key already exists in the cache.
    // If yes: Return the cached value immediately.

    // TODO: If the key is new:
    // 1. Execute the original function 'fn' with the provided arguments.
    // 2. Store the result in the cache using your generated key.
    // 3. Return the result.

    throw new Error("Not implemented");
  };
};
