/**
 * PROBLEM STATEMENT
 * -----------------
 * Develop a high-performance, single-file React Functional Component named `SearchBox`
 * that implements a debounced filtering mechanism for a static list of strings.
 *
 * The component must integrate the following state management and optimization hooks:
 *
 * 1. **User Input (`useState`):** Capture the raw, immediate value typed by the user.
 * 2. **Debounced State (`useState` & `useEffect`):** Create a separate state variable, `debouncedQuery`,
 * which is only updated to the value of the raw input 500 milliseconds after the user stops typing.
 * The `useEffect` hook must handle the debounce timer and include a **cleanup function** to clear
 * the timeout if the user types again, preventing unnecessary state updates.
 * 3. **Memoization (`useMemo`):** Implement the filtering logic within a `useMemo` call. This function
 * must only execute the potentially expensive filtering operation when the **`debouncedQuery`** changes,
 * not on every raw input keystroke.
 * 4. **Rendering:** Display an input field bound to the raw state and show the memoized,
 * filtered results in an unordered list.
 *
 * This task highlights the practical application of React Hooks for optimizing user experience
 * (by debouncing) and performance (by memoizing expensive computations).
 */

import React, { useState, useEffect, useMemo } from "react";

const items = [
  "apple",
  "banana",
  "grape",
  "orange",
  "mango",
  "blueberry",
  "strawberry",
];
