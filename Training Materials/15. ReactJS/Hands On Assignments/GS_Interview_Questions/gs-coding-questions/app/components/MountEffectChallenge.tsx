// app/components/MountEffectChallenge.tsx

/**
 * PROBLEM STATEMENT: The Mount-Only Effect with Cleanup
 *
 * This challenge requires implementing the canonical React pattern for performing
 * side effects (like data fetching or setting up subscriptions) exactly once when
 * the component mounts, and cleaning up any necessary resources when it unmounts.
 *
 * REQUIREMENTS:
 * 1. Initialize state for 'status' (string) and 'data' (string or null).
 * 2. Implement the 'useEffect' hook with the correct dependency array to ensure it runs only on mount.
 * 3. Inside the effect, use a flag ('isMounted') and the cleanup function to prevent
 * calling state setters (setData/setStatus) if the component unmounts while the
 * asynchronous 'mockInitialFetch' is still pending. (This prevents the "Can't perform a React state update" warning.)
 * 4. Implement the logic to call 'mockInitialFetch' and update the state upon successful completion,
 * respecting the 'isMounted' flag.
 */

"use client";

import React, { useState, useEffect } from "react";

// Mock function to simulate a one-time API call that takes time
const mockInitialFetch = () => {
  return new Promise<{ message: string }>((resolve) => {
    setTimeout(() => {
      resolve({ message: "Initial configuration data loaded successfully!" });
    }, 1500); // 1.5 second delay
  });
};

export default function MountEffectChallenge() {
  // TODO 1: Initialize state for status (string) and data (string or null).
  const [status, setStatus] = useState("Idle: Ready to mount.");
  const [data, setData] = useState<string | null>(null);

  // This useEffect represents the "Mount Only" pattern
  useEffect(() => {
    // TODO 2: Start by setting the status to indicate the fetch has begun.
    // HINT: setStatus("Running: Effect started initial data fetch...");

    // 1. Setup Flag for Cleanup/Safety: Essential for async operations
    // TODO 3: Initialize the isMounted flag to true.
    let isMounted = true;

    // 2. Side Effect (Async Fetch)
    mockInitialFetch()
      .then((result) => {
        // 3. Cleanup Check: Only update state if the component is still mounted
        // TODO 4: Implement the check (if isMounted is true) and update both setData and setStatus on success.
        // HINT: Use setData(result.message) and setStatus("Complete: Data loaded...");
      })
      .catch((error) => {
        // TODO 5: Implement error handling, respecting the isMounted flag.
        // HINT: Use setStatus(`Error: Failed to fetch data. ${error.message}`);
      });

    // 4. Cleanup Function (runs when component unmounts)
    return () => {
      // TODO 6: Implement the cleanup logic here.
      // - Set isMounted flag to false.
      isMounted = false;
    };
  }, []); // TODO 7: Ensure the dependency array is correct to run ONLY ONCE on mount. (HINT: [])

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #1abc9c",
        borderRadius: "8px",
        maxWidth: "650px",
        margin: "20px auto",
        backgroundColor: "#e8f8f2",
      }}
    >
      <h2>Mount Effect Challenge</h2>
      <p style={{ marginBottom: "20px", color: "#34495e", fontWeight: 500 }}>
        This challenge focuses on the *run-once* <code>useEffect</code> pattern
        and the essential cleanup needed for asynchronous operations to prevent
        updating unmounted components.
      </p>

      <div
        style={{
          padding: "15px",
          border: "1px solid #16a085",
          backgroundColor: "#f0fdf9",
          borderRadius: "4px",
        }}
      >
        <p>
          <strong>Status:</strong>{" "}
          <span
            style={{ color: data ? "#16a085" : "#e67e22", fontWeight: "bold" }}
          >
            {status}
          </span>
        </p>
        <p>
          <strong>Data:</strong> {data || "Awaiting data..."}
        </p>

        <div style={{ marginTop: "15px" }}>
          <p
            style={{
              fontWeight: "bold",
              borderLeft: "3px solid #3498db",
              paddingLeft: "10px",
            }}
          >
            Key Pattern:
          </p>
          <code
            style={{
              display: "block",
              backgroundColor: "#ecf0f1",
              padding: "10px",
              borderRadius: "4px",
              whiteSpace: "pre-wrap",
              fontSize: "0.9rem",
            }}
          >
            {`
useEffect(() => {
  // 1. Set up fetch/subscription
  
  return () => {
    // 2. CLEANUP: Cancel pending work or remove listeners
  };
}, []); // <--- Dependency array must be empty!
            `}
          </code>
        </div>
      </div>
    </div>
  );
}
