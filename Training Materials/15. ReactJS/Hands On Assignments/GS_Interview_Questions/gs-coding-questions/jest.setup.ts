// This file runs immediately after the testing framework is installed in the environment
// and before your test files.

// Importing '@testing-library/jest-dom/extend-expect' gives us access to helpful
// DOM matchers like .toBeInTheDocument(), .toHaveTextContent(), etc.,
// and correctly initializes the RTL environment, making 'screen' available globally.
import "@testing-library/jest-dom";
