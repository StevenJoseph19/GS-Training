// Problem Statement
// Write a function validate(schema, data) that checks if a nested data object conforms to a defined schema.
// The schema defines the expected types and whether a field is required.

// Example Schema:
// const userSchema = {
//   name: { type: 'string', required: true },
//   address: {
//     type: 'object',
//     required: true,
//     schema: {
//       city: { type: 'string', required: true }
//     }
//   }
// };

// The Goldman Twist:
// 1. You must handle nested objects recursively.
// 2. You must return an array of error messages (e.g., ["Field 'address.city' is required"]).
//    If the data is valid, return an empty array.
// 3. This tests your ability to traverse two objects (schema and data) in parallel.

// Why this matters to Goldman Sachs:
// This lab combines Recursion, Advanced Object Manipulation, and Defensive Programming.
// It proves you can write code that prevents the UI from crashing or displaying
// "undefined" when backend data is malformed—a critical requirement for financial dashboards.

/**
 * Recursively validates data against a schema.
 * @param {Object} schema - The validation rules.
 * @param {Object} data - The data to validate.
 * @param {string} prefix - Path tracker for error messages (e.g., "user.address").
 * @returns {string[]} - Array of error strings.
 */
export const validate = (schema, data = {}, prefix = "") => {
  let errors = [];

  // TODO: Iterate through every key defined in the 'schema'.

  // TODO: For each key:
  // 1. Identify the validation 'rules' from the schema.
  // 2. Identify the actual 'value' from the data.
  // 3. Construct the 'path' (current prefix + key) for clear error reporting.

  // TODO: Requirement 1 - Check for missing required fields.
  // If rules.required is true and the value is null/undefined, add an error message.

  // TODO: Requirement 2 - Type Validation.
  // If the value exists, compare its 'actualType' against 'rules.type'.
  // Note: Remember that typeof [] is "object", so handle arrays specifically if needed.

  // TODO: Requirement 3 - Deep Validation (Recursion).
  // If the type is 'object' and a nested 'rules.schema' exists:
  // 1. Recursively call validate() on the nested data.
  // 2. Spread the returned errors into your main errors array.

  // TODO: Return the final list of errors.
  throw new Error("Not implemented");
};
