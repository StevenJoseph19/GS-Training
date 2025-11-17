// Problem: Given a BST root and two nodes p and q, return their lowest common ancestor.
// Hints: Use BST property: move left/right based on p and q relative to current node.
// Examples:
// Input: root=[6,2,8,0,4,7,9], p=2, q=8
// Output: 6

class TreeNode { constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }
function insertBST(root, val){ if(!root) return new TreeNode(val); if(val < root.val) root.left = insertBST(root.left, val); else root.right = insertBST(root.right, val); return root; }
function findNode(root, val){ let cur=root; while(cur){ if(val===cur.val) return cur; cur = val < cur.val ? cur.left : cur.right; } return null; }

function lowestCommonAncestor(root, p, q) {
  // TODO: implement
}

// Test cases
let root = null; [6,2,8,0,4,7,9].forEach(v => root = insertBST(root, v));
const p = findNode(root, 2); const q = findNode(root, 8);
console.log(lowestCommonAncestor(root, p, q).val); // 6
