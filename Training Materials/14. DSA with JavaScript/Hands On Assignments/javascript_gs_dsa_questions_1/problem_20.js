// Problem: Invert a binary tree: swap left and right children of all nodes.
// Hints: DFS or BFS; swap at each node.
// Examples:
// Input: [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}
function printInOrder(root) {
  const res = [];
  (function dfs(node){ if(!node) return; dfs(node.left); res.push(node.val); dfs(node.right); })(root);
  console.log(res);
}

function invertTree(root) {
  // TODO: implement
}

// Test cases
const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
invertTree(root);
printInOrder(root); // [9,7,6,4,3,2,1] (in-order of inverted tree)
