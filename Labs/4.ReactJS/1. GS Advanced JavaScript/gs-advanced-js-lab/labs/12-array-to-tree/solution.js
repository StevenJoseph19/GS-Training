// Problem Statement
// Write a function convertToTree(data) that takes a flat array of objects—
// where each object has an id and a parentId—and returns a nested tree structure.

// Example Input:
// [
//   { id: 1, name: "Root", parentId: null },
//   { id: 2, name: "Child A", parentId: 1 },
//   { id: 3, name: "Grandchild A1", parentId: 2 }
// ]

// The Goldman Twist:
// You must solve this with O(n) time complexity. A naive recursive search
// for children inside a loop will be O(n^2), which fails the "Optimization"
// criteria mentioned in the feedback. Handle the "Root" node being either null or 0.

// Why this matters to Goldman Sachs:
// This lab tests "Complex Data Reconstruction" and "Optimization on large datasets."
// In high-frequency trading or massive organizational databases, data is stored
// flat for speed. Converting it to a UI-friendly tree efficiently is a
// non-negotiable skill for their engineers.

/**
 * Converts a flat array to a tree structure in O(n) time.
 * @param {Array} data - Array of objects with id and parentId.
 */
export const convertToTree = (data) => {
  // TODO: Create a Map to store references to each node by its ID.
  // TODO: Create an array to hold the root-level nodes.

  // TODO: Step 1: Initialize the Map.
  // Iterate through the data and store a copy of each item in the map.
  // Important: Ensure every item has an empty 'children' array initialized.

  // TODO: Step 2: Build the hierarchy using object references.
  // Iterate through the data again:
  // 1. Get the current node from your Map.
  // 2. If 'parentId' is null or 0, push the node into your 'roots' array.
  // 3. Otherwise, find the parent in the Map and push the current node
  //    into the parent's 'children' array.

  // TODO: Return the array of root nodes.
  throw new Error("Not implemented");
};
