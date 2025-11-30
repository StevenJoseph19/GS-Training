// app/components/Stopwatch.tsx

/**
 * PROBLEM STATEMENT: Functional Stopwatch Component
 *
 * Implement a working digital stopwatch that can start, stop, and reset.
 * This component specifically tests the use of hooks for managing state and side effects.
 *
 * REQUIREMENTS:
 * 1. Use 'useState' to manage the time (in milliseconds) and the running status (boolean).
 * 2. Use 'useRef' to store the persistent interval ID, ensuring it doesn't cause re-renders.
 * 3. Implement 'handleStart', 'handleStop', and 'handleReset' functions.
 * 4. Use 'setInterval' in 'handleStart' to update the time state every 1000ms (1 second).
 * 5. Implement cleanup logic in 'handleStop' and 'handleReset' using 'clearInterval'.
 * 6. Use 'useCallback' to memoize the handler functions to prevent unnecessary re-creations.
 * 7. Disable the Start/Stop/Reset buttons based on the current running state and time.
 */

"use client";

import React, { useState, useRef, useCallback } from "react";

// Helper for quick time formatting (Minimal) - KEEP THIS
const formatTime = (ms: number): string => {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / (1000 * 60));
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

export default function Stopwatch() {
  // TODO: Initialize state for time (in milliseconds) and running status (boolean).
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // TODO: Initialize a useRef to store the persistent interval ID.
  // HINT: It should be initialized with 'null'.
  const intervalRef = useRef<number | null>(null);

  // TODO: Implement stopTimer using useCallback to ensure stability.
  const stopTimer = useCallback(() => {
    // 1. Check if intervalRef.current is not null.
    // 2. Clear the interval using clearInterval.
    // 3. Reset intervalRef.current to null.
    // 4. Set isRunning to false.
  }, []); // TODO: Add correct dependencies

  // TODO: Implement handleStart using useCallback.
  const handleStart = useCallback(() => {
    // 1. If isRunning is true, return immediately.
    // 2. Set isRunning to true.
    // 3. Set a new interval that updates time using setTime (functional update recommended).
    // 4. Store the interval ID in intervalRef.current.
  }, []); // TODO: Add correct dependencies

  // TODO: Implement handleStop using useCallback.
  const handleStop = useCallback(() => {
    // Simply call stopTimer.
  }, []); // TODO: Add correct dependencies

  // TODO: Implement handleReset using useCallback.
  const handleReset = useCallback(() => {
    // 1. Call stopTimer.
    // 2. Reset time state to 0.
  }, []); // TODO: Add correct dependencies

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #2ecc71",
        borderRadius: "5px",
        maxWidth: "400px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h2>Stopwatch Assignment</h2>
      <div
        style={{ fontSize: "3em", margin: "10px 0", fontFamily: "monospace" }}
      >
        {/* Display formatted time */}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={handleStart}
          // TODO: Disable start button if the stopwatch is currently running.
          disabled={true}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2ecc71",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Start
        </button>
        <button
          onClick={handleStop}
          // TODO: Disable stop button if the stopwatch is currently stopped.
          disabled={true}
          style={{
            padding: "10px 20px",
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          // TODO: Disable reset button if time is 0 AND the stopwatch is stopped.
          disabled={true}
          style={{
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
