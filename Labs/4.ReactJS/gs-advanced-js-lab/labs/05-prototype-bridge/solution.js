// Problem Statement
// Implement a function bridgeObjects(child, parent) that establishes a prototype relationship between two
// existing objects without using the class keyword or __proto__.

// The Goal: After calling the function, child should be able to access properties of parent via the prototype chain,
// and child instanceof ParentConstructor logic should be simulated or verified via isPrototypeOf.

// The Goldman Twist: They often ask: "How do you give an object access to another object's methods without
// copying them?" This lab proves you understand that the prototype is a live link, not a one-time copy.

/**
 * Links child object to parent object via prototype chain.
 * @param {Object} child - The object that will inherit.
 * @param {Object} parent - The object to inherit from.
 */
export const bridgeObjects = (child, parent) => {
  // TODO: Add a guard clause to ensure both arguments are valid objects.

  // TODO: Link the 'child' object's internal prototype to the 'parent' object.
  // Requirement: Avoid using the deprecated '__proto__' property.
  // Hint: Look into the modern 'Object.setPrototypeOf' method.

  // TODO: Return the child object to allow for method chaining.

  throw new Error("Not implemented");
};
