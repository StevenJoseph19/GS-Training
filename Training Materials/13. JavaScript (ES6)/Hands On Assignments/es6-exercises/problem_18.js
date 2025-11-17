// Topic: Classes (inheritance)
// Concept: `extends` enables subclassing; `super()` calls parent constructor.
// Problem: Create `Administrator` that extends `User`.
// Hints: Call `super(name)` then set `role`.
// Examples:
// Input: new Administrator('Sara','admin').role
// Output: 'admin'


class User {
  constructor(name) { this.name = name; } }
class Administrator extends User {
  // TODO: implement
}

// Test cases (uncomment to run after implementation)
// // const admin = new Administrator('Sara', "admin"); console.log(admin.role);
