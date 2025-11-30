// app/components/MemoizationChallenge.tsx

"use client";

import React, { useState, useCallback, memo } from "react";

// --- A. Child Components ---

// Memoized Child: This is the component we are trying to protect from unnecessary renders.
const MemoizedChild = memo(
  ({ name, onClick }: { name: string; onClick: () => void }) => {
    // Use console to track unnecessary renders
    console.log(`[ MEMOIZED CHILD] ${name} re-rendered`);
    return (
      <button
        onClick={onClick}
        style={{
          padding: "10px",
          margin: "10px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {name}: Click Me! (Count is{" "}
        {name === "Fixed Child" ? "Fixed" : "Problem"})
      </button>
    );
  }
);

// Unmemoized Child: Will always re-render when the parent does.
const UnmemoizedChild = ({ data }: { data: number }) => {
  console.log(`[UNMEMOIZED CHILD] Always re-rendered. Data: ${data}`);
  return <p style={{ color: "#e74c3c" }}>Unmemoized Child Data: {data}</p>;
};

// --- B. The Parent Component Demonstrating the Problem ---

function ParentComponentProblem() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  // PROBLEM: This function is unstable (re-created on every render)

  return (
    <div
      style={{
        border: "2px solid #e74c3c",
        padding: "15px",
        margin: "20px",
        backgroundColor: "#f9eaea",
      }}
    >
      <h3>Problematic Parent</h3>
      <p>Count (State that changes): </p>
      <button>Force Re-render (Data: {data})</button>

      {/*  ISSUE: Breaks memoization because handleClickProblem is a new reference. */}
      <MemoizedChild
        name="Problem Child"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <UnmemoizedChild data={data} />
    </div>
  );
}

// --- C. The Parent Component Demonstrating the Fix ---

function ParentComponentFixed() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  // FIX: Stable function reference using useCallback
  // <--- Empty dependency array ensures stability.

  return (
    <div
      style={{
        border: "2px solid #2ecc71",
        padding: "15px",
        margin: "20px",
        backgroundColor: "#e9f7ee",
      }}
    >
      <h3>Fixed Parent</h3>
      <p>Count (State that changes): {count}</p>
      <button>Force Re-render (Data: {data})</button>

      {/*  FIXED: MemoizedChild only re-renders when count changes. */}
      <MemoizedChild
        name="Fixed Child"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <UnmemoizedChild data={data} />
    </div>
  );
}

export default function MemoizationChallenge() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h2>Unnecessary Re-render Challenge</h2>
      <p>Open your **browser console** and observe the logs:</p>
      <ol>
        <li>
          Click the "Force Re-render" button in the **Problematic Parent**.
        </li>
        <li>Click the "Force Re-render" button in the **Fixed Parent**.</li>
      </ol>
      <hr />
      <ParentComponentProblem />
      <ParentComponentFixed />
    </div>
  );
}
