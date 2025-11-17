// Problem: Given head, determine if the linked list has a cycle.
// Hints: Use Floyd's Tortoise and Hare pointers.
// Examples:
// Input: [3,2,0,-4], pos=1
// Output: true
// Input: [1,2], pos=0
// Output: true
// Input: [1], pos=-1
// Output: false

// Singly-linked list node
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Build a linked list from an array and create a cycle at position pos (0-indexed), or -1 for no cycle
function buildCyclicList(arr, pos) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let cycleNode = null;
  arr.forEach((v, i) => {
    curr.next = new ListNode(v);
    curr = curr.next;
    if (i === pos) cycleNode = curr;
  });
  if (pos !== -1) curr.next = cycleNode;
  return dummy.next;
}

function hasCycle(head) {
  // TODO: implement
}

// Test cases
const head1 = buildCyclicList([3,2,0,-4], 1); console.log(hasCycle(head1)); // true
const head2 = buildCyclicList([1,2], 0); console.log(hasCycle(head2)); // true
const head3 = buildCyclicList([1], -1); console.log(hasCycle(head3)); // false
