
'use client';
// TODO: Import React + useState
// TODO: Define a `values` state object: { name: '', email: '', password: '', confirm: '', accept: false }
// TODO: Define an `errors` state object: Record<string, string>
// TODO: Define optional `submitted` state: null | { name: string; email: string }

/**
 * SignupForm (ASSIGNMENT SKELETON)
 * --------------------------------
 * Requirements:
 * - Controlled inputs with labels: Name, Email, Password, Confirm Password, Terms (checkbox)
 * - Client-side validation rules:
 *   • Name required
 *   • Email must match a simple regex (e.g., /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
 *   • Password min length 8
 *   • Confirm must match Password (show error only when they differ)
 *   • Terms must be checked
 * - Show errors as <p role="alert" data-testid="error-<field>">...
 * - Disable the submit button while there are validation errors
 * - On success, render a <div data-testid="success"> with a welcome message
 * - Use `preventDefault()` in onSubmit
 */
export default function SignupForm() {
  // TODO: Implement controlled form + validation per above
  // Notes:
  // • The tests look for a submit button by accessible name "Create Account"
  //   so do NOT override it with aria-label; rely on visible text.
  // • The tests target exact labels (e.g., /^Password$/i), keep label text
  //   exactly as: Name, Email, Password, Confirm Password, I accept the Terms.
  // • Provide data-testid="error-name", "error-email", "error-password",
  //   "error-confirm" (only when mismatch), and "error-accept".
  // • Provide <form aria-label="signup-form"> with noValidate.
  return null;
}
