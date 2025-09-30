// src/setupTests.ts
import "@testing-library/jest-dom/vitest"; // extends Vitest's expect

// Optional but recommended: clean up DOM between tests
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});
