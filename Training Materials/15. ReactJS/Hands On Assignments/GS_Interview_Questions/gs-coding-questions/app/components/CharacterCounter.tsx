// app/components/CharacterCounter.tsx

/**
 * PROBLEM STATEMENT: Character Counter Component
 *
 * Implement a dynamic character counter component that takes an optional 'limit' prop
 * (defaulting to 50). The component must track the text input, calculate the current
 * length, and display the remaining characters.
 *
 * REQUIREMENTS:
 * 1. Use the 'useState' hook to manage the text content.
 * 2. Implement the 'handleChange' function to update the state on input.
 * 3. Calculate and display: current length, characters remaining, and whether the limit is exceeded.
 * 4. Conditionally change the counter text/color and border when the limit is exceeded.
 */

"use client";

import React, { useState } from "react";

interface CharacterCounterProps {
  limit?: number; // Optional prop for the character limit
}

export default function CharacterCounter({
  limit = 50,
}: CharacterCounterProps) {
  // TODO: Initialize state to track the text input (should start as an empty string).
  const [text, setText] = useState("");

  // TODO: Implement the necessary calculations based on 'text' and 'limit'.
  // 1. Calculate the current length of the text.
  const currentLength = 0; // TODO: calculate the current length (Hint: use text.length)
  // 2. Calculate the number of characters remaining/exceeded.
  const charsRemaining = limit; // TODO: calculate characters remaining
  // 3. Determine if the limit is exceeded (boolean).
  const isOverLimit = false; // TODO: determine if limit is exceeded

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // TODO: Implement logic to update the 'text' state based on the input event value.
    // HINT: Use setText with event.target.value.
  };

  // Minimal styles for the counter message
  // TODO: Ensure the color logic correctly reflects the 'isOverLimit' state.
  const counterStyle: React.CSSProperties = {
    color: isOverLimit ? "red" : "green",
    fontWeight: "bold",
    marginTop: "5px",
    fontSize: "0.9rem",
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #3498db",
        borderRadius: "5px",
        maxWidth: "400px",
        margin: "20px auto",
        textAlign: "left",
      }}
    >
      <h2>Character Counter Assignment</h2>
      <p style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
        Type below. Limit is {limit} characters.
      </p>

      {/* Textarea Input */}
      <textarea
        // TODO: Wire up 'value' to the 'text' state.
        value={text}
        // TODO: Wire up 'onChange' to the 'handleChange' function.
        onChange={handleChange}
        placeholder="Start typing here..."
        rows={4}
        style={{
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
          // TODO: Conditionally style the border based on 'isOverLimit'.
          border: isOverLimit ? "2px solid red" : "1px solid #ccc",
          borderRadius: "4px",
          resize: "vertical",
          fontSize: "1rem",
        }}
      />

      {/* Dynamic Counter Display */}
      <div style={counterStyle}>
        {/* TODO: Implement conditional text based on 'isOverLimit' and display characters remaining/exceeded. */}
        {isOverLimit
          ? `Exceeded by ${Math.abs(charsRemaining)} characters!`
          : `${charsRemaining} characters remaining.`}
      </div>
    </div>
  );
}
