/**
 * LAB R-09: Array-to-Tree Converter
 * Goal: Transform flat desk hierarchy into a nested tree in O(n).
 * Consumes: Org-Chart API
 */

function arrayToTree(flatArray) {
  const map = {};
  const tree = [];

  // 1. FIRST PASS: Index everything by ID
  // We create a 'lookup' so we can find any desk in O(1) time.

  // 2. SECOND PASS: Link Children to Parents

  // If no parent, this is a 'Root' node (e.g., "Global Markets")

  // If there is a parent, find it in our map and push this node into its children
  // Because 'node' is a reference, this builds the tree automatically!
}
