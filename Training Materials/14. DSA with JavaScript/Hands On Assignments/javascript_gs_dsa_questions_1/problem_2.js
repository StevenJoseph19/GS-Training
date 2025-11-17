function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
function reverseLinkedList(head) {
  // TODO: implement
}
// Helper to print list
function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}
// Example list: 1 -> 2 -> 3 -> 4 -> 5
let n5 = new ListNode(5),
  n4 = new ListNode(4, n5),
  n3 = new ListNode(3, n4),
  n2 = new ListNode(2, n3),
  n1 = new ListNode(1, n2);
let rev = reverseLinkedList(n1);
printList(rev); // 5 -> 4 -> 3 -> 2 -> 1
