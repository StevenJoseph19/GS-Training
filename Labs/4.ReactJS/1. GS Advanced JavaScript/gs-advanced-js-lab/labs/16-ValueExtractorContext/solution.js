// Problem Statement
// In complex financial objects, "Pricing Functions" often need to access other properties within the same object to compute a result
// (e.g., a totalValue function that multiplies price by quantity).

// Standard function execution (fn()) loses the connection to the parent object's data. Your task is to build a recursive extractor
// that:
// 1. Executes functions found in the object.
// 2. Preserves the execution context (this) so functions can access sibling properties.
// 3. Recurses through nested objects.
// 4. Returns a flattened array of all primitive values.

// This is a classic "JavaScript context" trap that interviewers love, especially at firms where object-oriented patterns
// or "Asset" prototypes are common.

// The "small change" they introduced is the use of the this keyword. In your previous lab version, the functions were likely
// arrow functions (which don't have their own this) or simple returns. By using a standard function() { ... },
// the interviewer is testing your understanding of Execution Context.

// The Technical Gap: this Binding
// In the input:
// {
//   a: "X",
//   b: "Y",
//   c: function() { return this.a + this.b; }
// }
// If you just call value(), this becomes undefined (in strict mode) or the window object.
// You must explicitly bind the function to the object it lives in so this.a knows to look at "X".

// When an interviewer asks for a "Value Extractor" or "Traverser," they are looking for three specific things:
// 1. Context (this): Always check if the functions inside the object need access to other properties in that same object.
//    If they do, use .call(obj) or .apply(obj).
// 2. Recursion: Most "real-world" financial objects (like a Trade containing an Instrument containing a Currency) are nested.
//    The extractor should handle depth.
// 3. Safety: Use hasOwnProperty to avoid pulling in properties from the global Object prototype.

/**
 * Lab R-16: Refined Value Extractor (Context-Aware)
 * Goal: Recursively extract all primitive values.
 * Key Challenge: If a property is a function, execute it.
 * If that function uses 'this', ensure 'this' points to the parent object.
 */
export const extractValues = (obj) => {
  const result = [];

  // TODO: Iterate over the object properties
  for (const key in obj) {
    // Standard defensive check: Only process properties defined on the object itself
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // TODO: Retrieve the value for the current key
      // TODO: Handle the "INTERVIEW TRAP"
      // Check if the value is a function.
      // If it is, execute it while manually binding 'this' to the current object.
      // TODO: Handle RECURSION
      // If the value is a nested object (and not null), dive deeper.
      // Ensure the returned array from the recursive call is flattened into the result.
      // TODO: Handle BASE CASE
      // If it's a primitive (string, number, boolean, etc.), add it directly to the result.
    }
  }

  return result;
};
