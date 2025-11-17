// Problem: Determine if a binary tree is height-balanced.
// Hints: Check recursively if left and right subtree heights differ by more than 1.
// Examples:
// Input: [3, 9, 20, null, null, 15, 7]
// Output: true
// Input: [1, 2, 2, 3, 3, null, null, 4, 4]
// Output: false
// Input: []
// Output: true

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
function isBalanced(root) {
  // TODO: implement
}

// Helper to build tree from array
function buildTree(arr) {
  if (!arr.length) return null;
  let nodes = arr.map((v) => (v === null ? null : new TreeNode(v)));
  let kids = nodes.slice(1);
  for (let i = 0, j = 0; i < nodes.length && kids.length; i++) {
    if (nodes[i]) {
      nodes[i].left = kids.shift() || null;
      nodes[i].right = kids.shift() || null;
    }
  }
  return nodes[0];
}
console.log(isBalanced(buildTree([3, 9, 20, null, null, 15, 7]))); // true
console.log(isBalanced(buildTree([1, 2, 2, 3, 3, null, null, 4, 4]))); // false
console.log(isBalanced(buildTree([]))); // true
