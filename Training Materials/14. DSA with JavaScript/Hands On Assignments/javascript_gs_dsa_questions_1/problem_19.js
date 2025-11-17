// Problem: Merge two sorted linked lists and return it as a sorted list.
// Hints: Use an iterative dummy head (or recursion).
// Examples:
// Input: l1=[1,2,4], l2=[1,3,4]
// Output: [1,1,2,3,4,4]

class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}
function buildList(arr) {
  let dummy = new ListNode(0), curr = dummy;
  for (const v of arr) { curr.next = new ListNode(v); curr = curr.next; }
  return dummy.next;
}
function toArray(head) {
  const out = []; let curr = head; while (curr) { out.push(curr.val); curr = curr.next; } return out;
}

function mergeTwoLists(l1, l2) {
  // TODO: implement
}

// Test cases
const l1 = buildList([1,2,4]); const l2 = buildList([1,3,4]);
console.log(toArray(mergeTwoLists(l1, l2))); // [1,1,2,3,4,4]
