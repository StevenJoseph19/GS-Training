// Problem: Given a string containing just the characters (, ), {, }, [ and ], determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and in the correct order.
// Hints: Use a stack. Push opening brackets, pop when matching closing brackets are found.
// Examples:
// Input: "()[]{}"
// Output: true
// Input: "(]"
// Output: false
// Input: "{[]}"
// Output: true

function isValidParentheses(s) {
  // TODO: implement
}

console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("{[]}")); // true
