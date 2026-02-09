// Problem Statement
// Implement a function setDeep(obj, path, value) that sets a value at a deeply nested path.
// If the path (or parts of it) does not exist, the function should create the necessary objects along the way.

// Example: setDeep({}, "user.profile.name", "Gaurav") results in { user: { profile: { name: "Gaurav" } } }.

// The Goldman Twist: How do you handle cases where the path already exists but is a primitive?
// For this lab, the solution should overwrite primitives with objects to fulfill the path.
// This tests the ability to navigate and mutate a tree using a pointer reference.

/**
 * Sets a value at a nested path, creating objects as needed.
 * @param {Object} obj - The target object.
 * @param {string} path - Dot-separated path (e.g., "a.b.c").
 * @param {*} value - The value to set at the end of the path.
 * @returns {Object} - Returns the modified object.
 */
export const setDeep = (obj, path, value) => {
  // TODO: Add a guard clause to ensure 'obj' is a valid object

  // TODO: Split the path string into an array of keys

  // TODO: Initialize a 'current' pointer to the start of the object

  // TODO: Iterate through the keys:
  // 1. If it's the last key, assign the 'value' to the current pointer's key.
  // 2. If it's not the last key:
  //    a. Check if the key exists and is an object.
  //    b. If not (it's undefined or a primitive), create an empty object at that key.
  //    c. Move the 'current' pointer deeper into that key.

  // TODO: Return the original (now modified) object
  throw new Error("Not implemented");
};
