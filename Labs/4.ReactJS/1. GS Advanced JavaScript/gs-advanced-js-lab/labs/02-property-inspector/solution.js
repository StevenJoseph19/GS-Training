// Problem Statement
// Implement two functions to inspect an object’s keys:

// getOwnKeys(obj): Returns an array of keys that exist directly on the object (ignoring the prototype chain).

// getAllKeys(obj): Returns an array of all string-based keys, including those inherited from the prototype chain.

// The Goldman Twist: In the interview, they asked why Object.values doesn't include prototype properties.
// To answer this deeply, you must understand Property Descriptors (enumerable vs. non-enumerable).
// Your solution should use modern methods like Object.getPrototypeOf rather than the deprecated __proto__.

/**
 * Returns only properties defined directly on the object.
 * Similar to Object.keys(), but ensures we understand the mechanism.
 */
export const getOwnKeys = (obj) => {
  // TODO: Return only the keys that belong to this specific instance.
  // Hint: Think about what built-in Object method ignores the prototype chain.
  throw new Error("Not implemented");
};

/**
 * Returns all keys, including those inherited from the prototype chain.
 * It traverses up the chain until it hits Object.prototype.
 */
export const getAllKeys = (obj) => {
  // TODO: Initialize a storage for keys and a pointer for the current object in the chain.

  // TODO: Create a loop that traverses up the prototype chain.
  // Requirement: Stop when you reach Object.prototype or null.

  // TODO: At each level, collect the keys.
  // Hint: Object.getPrototypeOf(target) is your friend here.

  // TODO: Return a unique list of keys (handle property shadowing).
  throw new Error("Not implemented");
};
