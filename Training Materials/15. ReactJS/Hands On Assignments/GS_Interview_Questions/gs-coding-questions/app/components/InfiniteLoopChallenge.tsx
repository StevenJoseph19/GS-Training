// app/components/InfiniteLoopChallenge.tsx

"use client";

import React, { useState, useEffect } from "react";

// ----------------------------------------------------------------------
// 1. THE BUGGY COMPONENT (Infinite Loop)
// ----------------------------------------------------------------------
function BuggyComponent() {
  const [count, setCount] = useState(0);

  // WARNING: This useEffect will cause an infinite loop!

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #e74c3c",
        backgroundColor: "#fdeeed",
        marginBottom: "15px",
      }}
    >
      <h4 style={{ color: "#c0392b" }}>Demo 1: Core Infinite Loop Bug</h4>

      <p style={{ fontSize: "0.8rem", color: "#c0392b" }}>
        Result: **Infinite Loop** (state update triggers effect, which triggers
        update).
      </p>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. THE FIXED COMPONENT (Fix A: Run Once on Mount)
// ----------------------------------------------------------------------
function FixedComponentRunOnce() {
  const [count, setCount] = useState(0);

  // FIX A: Change the dependency array to []
  // Intent: Initialize the count once after the first render.

  // We use functional update form here for best practice, though it's not strictly
  // necessary when dependencies are guaranteed to be stale (but it doesn't hurt).

  // Empty dependency array ensures it runs ONLY ONCE.

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #27ae60",
        backgroundColor: "#e8f8f2",
        marginBottom: "15px",
      }}
    >
      <h4 style={{ color: "#1e8449" }}>Demo 2: Fix A (Run Once Intent)</h4>

      {/* FIX: Escaped the arrow function in the code display text */}

      <p style={{ fontSize: "0.8rem", color: "#1e8449" }}>
        Result: **Fixed.** Loop broken by removing the dependency.
      </p>
    </div>
  );
}

// ----------------------------------------------------------------------
// 3. FUNCTIONAL UPDATE (The Nuance)
// ----------------------------------------------------------------------
function FunctionalUpdateBuggyComponent() {
  const [count, setCount] = useState(0);

  // WARNING: This still causes an infinite loop!

  // Functional update ensures state integrity (prevCount is always correct).

  // Still dependent on 'count'

  return (
    <div
      style={{
        padding: "15px",
        border: "2px dashed #f39c12",
        backgroundColor: "#fdf3e2",
      }}
    >
      <h4 style={{ color: "#d35400" }}>
        Demo 3: Functional Update (The Nuance)
      </h4>
      <p>
        {/* FIX: Escaped the arrow function in the code display text */}
        Code: <code>setCount(prev =&gt; prev + 1)</code> in{" "}
        <code>useEffect([count])</code>
      </p>
      <p>
        Count: <span style={{ fontWeight: "bold" }}>{count}</span>
      </p>
      <p style={{ fontSize: "0.8rem", color: "#d35400", fontWeight: "bold" }}>
        Result: **Still an Infinite Loop.** Functional update only ensures
        **correctness**, not **lifecycle control**.
      </p>
    </div>
  );
}

// ----------------------------------------------------------------------
// 4. MAIN DEMO COMPONENT
// ----------------------------------------------------------------------
export default function InfiniteLoopChallenge() {
  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #9b59b6",
        borderRadius: "8px",
        maxWidth: "650px",
        margin: "20px auto",
        backgroundColor: "#f4f0f6",
      }}
    >
      <h2>Debugging Challenge: useEffect Infinite Loop</h2>
      <p style={{ marginBottom: "20px", color: "#34495e", fontWeight: 500 }}>
        The key takeaway is that the **dependency array** controls when the
        effect runs, while the **functional update form** controls the
        correctness of the state value.
      </p>

      <BuggyComponent />

      <FixedComponentRunOnce />

      <FunctionalUpdateBuggyComponent />

      <div
        style={{
          margin: "30px 0",
          padding: "15px",
          backgroundColor: "#ecf0f1",
          borderRadius: "4px",
        }}
      >
        <p style={{ fontWeight: "bold", color: "#2c3e50" }}>
          Interview Summary:
        </p>
        <ul style={{ paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>
            <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
              Bug (Demo 1):
            </span>{" "}
            Updating a state variable and listing it in <code>useEffect</code>{" "}
            dependencies creates a **feedback loop**.
          </li>
          <li>
            <span style={{ color: "#27ae60", fontWeight: "bold" }}>
              Fix (Demo 2):
            </span>{" "}
            If the intent is to run only on mount (initialization), use{" "}
            <code>[]</code> as the dependency array.
          </li>
          <li>
            <span style={{ color: "#f39c12", fontWeight: "bold" }}>
              Nuance (Demo 3):
            </span>{" "}
            The functional update form (<code>setCount(prev =&gt; ...)</code>)
            is always recommended for calculating new state based on old state,
            but it **DOES NOT** break the infinite loop if the dependency array
            still forces the effect to re-run.
          </li>
        </ul>
      </div>
    </div>
  );
}
