// Topic: Arrow functions (no own `this`)
// Concept: Arrows don’t bind `this`; they inherit from lexical scope.
// Problem: Demonstrate in a class with arrow callback.
// Hints: Use setTimeout arrow inside class.
// Examples:
// Input: new Counter().incLater()
// Output: increments count then logs

class Counter {
  constructor() {
    this.count = 0;
  }
  incLater() {
    // TODO: implement
  }
}
// Test cases (uncomment to run after implementation)
// new Counter().incLater();
