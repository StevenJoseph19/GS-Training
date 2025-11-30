// app/components/StarRating.tsx

/**
 * PROBLEM STATEMENT: Interactive Star Rating Component
 *
 * Implement a star rating component that allows a user to select a rating (1 to 5 stars)
 * and provides visual feedback during hover.
 *
 * REQUIREMENTS:
 * 1. Use React's 'useState' hook to manage two states:
 * a) 'rating': The committed rating (from a click, persists after hover).
 * b) 'hoverRating': The transient rating (from mouse hover, controls visual fill).
 * 2. Implement 'handleClick', 'handleMouseEnter', and 'handleMouseLeave' to update these states correctly.
 * 3. Calculate 'displayRating' (use 'hoverRating' if active, otherwise use 'rating').
 * 4. Use 'displayRating' to conditionally determine which stars are 'filled' during the mapping loop.
 */

"use client";

import React, { useState } from "react"; // useState hook imported for use

// Helper component for star rendering
const StarText = ({ filled }: { filled: boolean }) => (
  <span
    style={{
      fontSize: "2rem",
      cursor: "pointer",
      // Opacity should depend on the 'filled' prop
      opacity: filled ? 1 : 0.3,
    }}
  >
    ⭐
  </span>
);

export default function StarRating({ totalStars = 5 }) {
  // TODO: State 1: Committed rating (from click). Default to 0.
  const [rating, setRating] = useState(0);

  // TODO: State 2: Transient rating (from hover). Default to 0.
  const [hoverRating, setHoverRating] = useState(0);

  // TODO: Determine which state value to use for visual display (hover takes precedence over committed rating).
  const displayRating = hoverRating || rating;

  // Handlers (Function bodies must be implemented)
  const handleClick = (clickedIndex: number) => {
    // TODO: Implement logic to update the committed rating state.
  };
  const handleMouseEnter = (enteredIndex: number) => {
    // TODO: Implement logic to update the transient hover rating state.
  };
  const handleMouseLeave = () => {
    // TODO: Implement logic to reset the transient hover rating state (back to 0).
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #34495e",
        maxWidth: "350px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h3>Star Rating Assignment</h3>

      <div
        // TODO: Wire up the handleMouseLeave handler to the container.
        onMouseLeave={handleMouseLeave}
        style={{ display: "inline-flex", margin: "10px 0" }}
      >
        {/* Loop through the total number of stars */}
        {[...Array(totalStars)].map((_, index) => {
          const starIndex = index + 1;

          return (
            <div
              key={starIndex}
              // TODO: Wire up the handleClick handler, passing the starIndex.
              onClick={() => handleClick(starIndex)}
              // TODO: Wire up the handleMouseEnter handler, passing the starIndex.
              onMouseEnter={() => handleMouseEnter(starIndex)}
              title={`Rate ${starIndex}`}
            >
              {/* TODO: Core Logic: Pass 'filled' prop to StarText. 
                A star is 'filled' if its index is LESS THAN or EQUAL TO the 'displayRating'.
              */}
              <StarText filled={false} />
            </div>
          );
        })}
      </div>

      <p style={{ margin: "0", fontSize: "1rem" }}>
        Current: <span style={{ fontWeight: "bold" }}>{rating}</span> /{" "}
        {totalStars}
      </p>
    </div>
  );
}
