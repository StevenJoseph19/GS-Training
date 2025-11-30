// app/components/PromiseAllChallenge.tsx

"use client";

import React, { useState, useEffect } from "react";
import { myPromiseAll } from "@/app/lib/promise-utils";

export default function PromiseAllChallenge() {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const results: string[] = [];

    // --- Define Test Promises ---
    const p1 = Promise.resolve(1);
    const p2 = new Promise((r) => setTimeout(() => r(2), 500));
    const p3_reject = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("P3 failed")), 200)
    );
    const p4_slow = new Promise((r) => setTimeout(() => r(4), 1000));

    // --- Test 1: All Resolve Successfully ---
    myPromiseAll([p1, p2, 3]) // 3 is a non-promise value, should still work
      .then((res) => {
        results.push(`✅ Test 1 (All Resolve): Result: [${res.join(", ")}]`); // Expected: [1, 2, 3]
      })
      .catch((err) => {
        results.push(
          `Test 1 (All Resolve): Failed unexpectedly: ${err.message}`
        );
      });

    // --- Test 2: Fail Fast (p3_reject should stop p4_slow) ---
    myPromiseAll([p4_slow, p3_reject, p1])
      .then((res) => {
        results.push(
          `Test 2 (Fail Fast): Resolved unexpectedly: [${res.join(", ")}]`
        );
      })
      .catch((err) => {
        results.push(`✅ Test 2 (Fail Fast): Rejected with: ${err.message}`); // Expected: P3 failed
      });

    // --- Test 3: Empty Array ---
    myPromiseAll([])
      .then((res) => {
        results.push(
          `✅ Test 3 (Empty Array): Resolved with: [${res.join(", ")}]`
        ); // Expected: []
      })
      .catch((err) => {
        results.push(
          `Test 3 (Empty Array): Failed unexpectedly: ${err.message}`
        );
      });

    // Wait for all tests to finish before updating state
    Promise.allSettled([
      myPromiseAll([p1, p2, 3]).catch(() => {}),
      myPromiseAll([p4_slow, p3_reject, p1]).catch(() => {}),
      myPromiseAll([]).catch(() => {}),
    ]).finally(() => {
      setTestResults(results);
      setLoading(false);
    });
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #9b59b6",
        backgroundColor: "#f4f0f6",
      }}
    >
      <h2>💻 My Promise.all Implementation Test</h2>
      <p>The core logic is implemented in **`app/lib/promise-utils.ts`**.</p>

      {loading ? (
        <p>Running asynchronous tests...</p>
      ) : (
        <div style={{ marginTop: "15px" }}>
          <h3>Test Results:</h3>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            {testResults.map((result, index) => (
              <li
                key={index}
                style={{
                  fontFamily: "monospace",
                  color: result.startsWith("✅") ? "#27ae60" : "#c0392b",
                  marginBottom: "8px",
                  whiteSpace: "pre-wrap",
                }}
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
