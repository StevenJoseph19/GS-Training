// Problem: Implement a queue using two stacks.
// Hints: Use two stacks to reverse the order of elements when dequeuing.
// Examples:
// Input: enqueue(1), enqueue(2), dequeue(), enqueue(3), dequeue()
// Output: 1, then 2

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    // TODO: implement
  }

  dequeue() {
    // TODO: implement
  }

  peek() {
    // TODO: implement
  }

  empty() {
    // TODO: implement
  }
}

const queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
queue.enqueue(3);
console.log(queue.dequeue()); // 2
console.log(queue.peek()); // 3
console.log(queue.empty()); // false
