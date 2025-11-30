// app/components/ReferentialEqualityChallenge.tsx

"use client";

import React, { useState, useEffect, useMemo } from "react";

// Mock function to simulate data fetching (DO NOT MODIFY)
const mockFetch = (userId: string, config: object) => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      console.log(
        `[Fetch] Data fetched for user ${userId} with config:`,
        config
      );
      resolve({ data: `User Profile Data for ${userId}` });
    }, 500);
  });
};

interface UserProfileProps {
  userId: string;
}

// ----------------------------------------------------------------------
// 1. THE SUBTLE BUG (Referential Equality Issue) - DO NOT MODIFY
// ----------------------------------------------------------------------
function BuggyUserProfile({ userId }: UserProfileProps) {
  const [renderCount, setRenderCount] = useState(0);

  // PROBLEM: This object is created FRESH on *every single render*.
  const config = {
    method: "GET",
    headers: { "auth-token": "token" },
  };

  useEffect(() => {
    setRenderCount((prev) => prev + 1);

    // This effect runs too often because 'config' is not stable.
    mockFetch(userId, config);
  }, [userId, config]); // 'config' is the problem dependency (DO NOT CHANGE DEPENDENCY ARRAY)

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #e74c3c",
        backgroundColor: "#fdeeed",
        marginBottom: "15px",
      }}
    >
      <h4 style={{ color: "#c0392b" }}>
        Demo 1: Subtle Bug (Referential Equality)
      </h4>
      <p>
        Dependency: <code>[userId, config]</code>
      </p>
      <p>Config Object: **NOT Memoized**</p>
      <p style={{ fontWeight: "bold" }}>
        Effect Run Count:{" "}
        <span style={{ color: "#c0392b" }}>{renderCount}</span>
      </p>
      <p style={{ fontSize: "0.8rem", color: "#c0392b" }}>
        Result: **Effect runs on every parent re-render**, as
        <code>config</code>'s reference constantly changes.
      </p>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. THE FIXED COMPONENT (Fix: Use useMemo) - IMPLEMENT THE FIX HERE
// ----------------------------------------------------------------------
function FixedUserProfile({ userId }: UserProfileProps) {
  const [renderCount, setRenderCount] = useState(0);

  // TODO 1: Fix the referential instability of the 'config' object.
  // HINT: Use the 'useMemo' hook to ensure the object reference is stable.
  // The object definition is: { method: "GET", headers: { "auth-token": "token" } }
  // The useMemo dependency array should be empty ([]).
  const config = {}; // Replace this empty object with the useMemo solution

  useEffect(() => {
    // TODO 2: Reimplement the effect logic:
    // 1. Increment the renderCount state using setRenderCount.
    // 2. Call the mockFetch function with userId and config.
  }, [userId, config]); // 'config' dependency MUST be included here (DO NOT CHANGE DEPENDENCY ARRAY)

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #27ae60",
        backgroundColor: "#e8f8f2",
      }}
    >
      <h4 style={{ color: "#1e8449" }}>✅ Demo 2: Fixed (useMemo)</h4>
      <p>
        Dependency: <code>[userId, config]</code>
      </p>
      <p>
        Config Object: **Memoized** using <code>useMemo([], ...)</code>
      </p>
      <p style={{ fontWeight: "bold" }}>
        Effect Run Count:{" "}
        <span style={{ color: "#1e8449" }}>{renderCount}</span>
      </p>
      <p style={{ fontSize: "0.8rem", color: "#1e8449" }}>
        Result: **Fixed.** Effect only runs on mount and when
        <code>userId</code> changes.
      </p>
    </div>
  );
}

// ----------------------------------------------------------------------
// 3. MAIN DEMO COMPONENT (DO NOT MODIFY)
// ----------------------------------------------------------------------
export default function ReferentialEqualityChallenge() {
  const [userId, setUserId] = useState("user-123");
  const [parentRenders, setParentRenders] = useState(0);

  // Simulate a frequent re-render from a parent component (e.g., global state change)
  const handleSimulateRender = () => {
    setParentRenders((prev) => prev + 1);
  };

  const handleIdChange = () => {
    setUserId(userId === "user-123" ? "user-456" : "user-123");
    setParentRenders(0); // Reset render count for clarity
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #3498db",
        borderRadius: "8px",
        maxWidth: "700px",
        margin: "20px auto",
        backgroundColor: "#ecf0f1",
      }}
    >
      <h2>Debugging Challenge: Referential Equality in useEffect</h2>
      <p style={{ marginBottom: "20px", color: "#2c3e50", fontWeight: 500 }}>
        This challenge requires you to fix the unnecessary re-runs in
        <code>FixedUserProfile</code>. The issue arises when a non-primitive
        dependency (an object or array) is created fresh on every render,
        forcing <code>useEffect</code> to run even if the contents haven't
        changed. The fix requires stabilizing the object's reference.
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "25px",
          padding: "10px",
          border: "1px solid #bdc3c7",
          borderRadius: "4px",
          justifyContent: "space-around",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>
          Parent Render Counter: {parentRenders}
        </p>
        <button
          onClick={handleSimulateRender}
          style={{
            padding: "8px 15px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Simulate Parent Re-render
        </button>
        <button
          onClick={handleIdChange}
          style={{
            padding: "8px 15px",
            backgroundColor: "#f39c12",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Change User ID
        </button>
      </div>

      <BuggyUserProfile userId={userId} />

      <FixedUserProfile userId={userId} />

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#ffffff",
          borderRadius: "4px",
          border: "1px solid #bdc3c7",
        }}
      >
        <p style={{ fontWeight: "bold", color: "#2c3e50" }}>💡 Explanation:</p>
        <p style={{ fontSize: "0.95rem" }}>
          In Demo 1, every time the parent re-renders, a **new**{" "}
          <code>config</code> object is created. Since objects are compared by
          reference, <code>useEffect</code> sees a "new" dependency on every
          render and runs the effect, even though the contents are identical.
        </p>
        <p style={{ fontSize: "0.95rem" }}>
          In Demo 2, you must use <code>useMemo</code> (or{" "}
          <code>useCallback</code> for functions) to cache the{" "}
          <code>config</code> object. This ensures that when the parent
          re-renders, the hook returns the same object reference, preventing the
          effect from re-running unnecessarily.
        </p>
      </div>
    </div>
  );
}
