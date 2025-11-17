// Problem: Given a m x n matrix, if an element is 0, set its entire row and column to 0 in-place.
// Hints: Use first row/column as markers to achieve O(1) extra space.
// Examples:
// Input: [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Helper to pretty print a matrix
function printMatrix(m) {
  console.log(m.map((row) => "[" + row.join(",") + "]").join(""));
}

function setZeroes(matrix) {
  // TODO: implement
}

// Test cases
const m = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(m);
printMatrix(m); // [1,0,1]
// [0,0,0]
// [1,0,1]
