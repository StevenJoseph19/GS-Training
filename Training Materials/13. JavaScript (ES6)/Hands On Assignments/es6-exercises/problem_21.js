// Topic: Callbacks (control flow)
// Concept: Use callbacks to ensure sequence after async completion.
// Problem: Modify a,b,c to accept callback and ensure a→b→c.
// Hints: Nest calls or chain properly.
// Examples:
// Input: runWithCallbacks()
// Output: a done → b done → c done


function aCb(next)
function bCb(next)
function cCb(next)
function runWithCallbacks() {
  // TODO: implement
}

// Test cases (uncomment to run after implementation)
// // runWithCallbacks();
