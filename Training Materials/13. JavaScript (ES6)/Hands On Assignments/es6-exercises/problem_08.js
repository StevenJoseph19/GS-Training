// Topic: Arrow functions & `this` (fix)
// Concept: Arrow callbacks keep `this` of enclosing method.
// Problem: Switch setTimeout callback to arrow.
// Hints: Use arrow in setTimeout.
// Examples:
// Input: animalPrinter2.print()
// Output: logs object name

const animalPrinter2 = {
  name: "Lion",
  print() {
    // TODO: implement
  },
};
// Test cases (uncomment to run after implementation)
// animalPrinter2.print();
