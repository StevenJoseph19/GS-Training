// app/lib/promise-utils.ts

/**
 * PROBLEM STATEMENT: Implement Promise.all
 *
 * Implement a custom function named 'myPromiseAll' that mimics the behavior of
 * the native Promise.all method.
 *
 * REQUIREMENTS:
 * 1. Must take an array of promises (or simple values) as input.
 * 2. Must return a single Promise that resolves when ALL input promises have resolved.
 * 3. The resolved value must be an array of results, maintaining the order of the input array.
 * 4. Must "fail fast": If ANY input promise rejects, the returned Promise must reject immediately with that error.
 * 5. Must handle non-Promise values in the input array (by treating them as already resolved).
 *
 * @param promises - An array of promises.
 * @returns A single Promise.
 */
export function myPromiseAll<T>(promises: Array<T | Promise<T>>): Promise<T[]> {
  // TODO 1: Implement checks for edge cases (e.g., non-array input, empty array).
  // HINT: Handle empty array with Promise.resolve([]).
  // HINT: Handle non-array with Promise.reject(new TypeError(...)).

  // TODO 2: Return a new Promise that controls the entire operation.
  return new Promise((resolve, reject) => {
    // TODO 3: Initialize tracking variables:
    // - results: An array to store resolved values (T[]).
    // - resolvedCount: A counter for successfully resolved promises (number).
    // - totalPromises: The length of the input array (number).

    // TODO 4: Iterate over the input 'promises' array using forEach or a loop.
    promises.forEach((promise, index) => {
      // TODO 5: Use Promise.resolve(promise) to ensure non-promise values are handled correctly.
      Promise.resolve(promise)
        .then((value) => {
          // --- Success Path ---
          // TODO 6: Store the resolved 'value' in the 'results' array at the correct 'index'.
          // TODO 7: Increment the 'resolvedCount'.
          // TODO 8: Check if resolvedCount equals totalPromises. If true, resolve the main Promise with the results array.
        })
        .catch((error) => {
          // --- Failure Path ---
          // TODO 9: Reject the main Promise immediately with the 'error' (Fail-Fast).
        });
    });
  });
}
