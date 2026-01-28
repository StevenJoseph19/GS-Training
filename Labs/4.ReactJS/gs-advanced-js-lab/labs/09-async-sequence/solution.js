// Problem Statement
// Implement a function runInSequence(tasks) that takes an array of functions,
// where each function returns a Promise. The tasks must be executed one after the other.
// Each task should receive the result of the previous task as its input argument.

// The Goldman Twist:
// 1. You cannot use async/await for the core logic; you must demonstrate you understand
//    how to chain .then() manually or use Array.prototype.reduce.
// 2. If any task in the sequence fails, the entire sequence should reject immediately.

// Why this matters: This tests "Efficient state management" and "Data flows."
// Managing dependent API calls without "Callback Hell" or "Race Conditions" is a core engineering skill.

/**
 * Runs an array of async tasks in sequence.
 * @param {Array<Function>} tasks - Functions that return promises.
 * @param {*} initialValue - The value passed to the first task.
 * @returns {Promise} - Resolves with the final task's result.
 */
export const runInSequence = (tasks, initialValue) => {
  // TODO: Use Array.prototype.reduce to accumulate a Promise chain.

  // TODO: Start the chain with a Promise that resolves to the 'initialValue'.
  // Hint: Promise.resolve(initialValue) is the perfect starting point.

  // TODO: In each step of the reduction:
  // 1. Attach a .then() handler to the accumulated promise (the 'chain').
  // 2. Inside that .then(), execute the 'currentTask' with the previous result.
  // 3. Return this new promise to be used in the next iteration.

  // TODO: Return the resulting promise from the reduce operation.
  throw new Error("Not implemented");
};
