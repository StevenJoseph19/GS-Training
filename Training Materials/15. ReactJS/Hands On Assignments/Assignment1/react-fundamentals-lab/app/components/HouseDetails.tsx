"use client";
import React, { useState } from "react";
import type { House } from "@/lib/data/houses";

type Props = {
  house: House;
  onBack: () => void;
};

/**
 * HouseDetails
 * - Shows address/city/price for the selected house.
 * - Local "Favorite" button increments a counter in component state.
 */
export function HouseDetails({ house, onBack }: Props) {
  // TODO: initialize local state favorites = 0, increment on "Favorite"
  // TODO: "Back" button should call onBack()

  return (
    <section>
      <button /* onClick */>Back</button>
      <h2>House Details</h2>

      {/* TODO: display the real values */}
      <p>
        <strong>Address:</strong> {"TODO address"}
      </p>
      <p>
        <strong>City:</strong> {"TODO city"}
      </p>
      <p>
        <strong>Price:</strong> {"TODO price"}
      </p>

      <button
        data-testid="favorite-btn"
        /* onClick to increment favorites */
      >
        Favorite
      </button>
      <p>
        Favorites: <span data-testid="fav-count">{/* TODO favorites */}0</span>
      </p>
    </section>
  );
}
