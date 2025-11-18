
'use client';
import React from 'react';
import type { House } from '@/lib/data/houses';

type Props = {
  houses?: House[];
  onSelect: (house: House) => void;
};

/**
 * HouseList
 * - Renders a clickable list of houses.
 * - Calls onSelect(house) when an item is clicked.
 */
export function HouseList({ houses, onSelect }: Props) {
  // Defensive: if houses is missing or empty, show a friendly message.
  if (!houses || houses.length === 0) {
    // TODO: add data-testid="empty"
    return <p>No houses</p>; // TODO: add test id
  }

  return (
    <section>
      <h2>Available Houses</h2>
      <ul>
        {/* TODO: map houses to <li> with data-testid={`house-${house.id}`}
                Clicking a <li> should call onSelect(house) */}
        {/* Example shape (replace):
        <li data-testid="house-1" onClick={() => onSelect(houses[0])}>
          12 Ocean View — San Diego — $950000
        </li>
        */}
      </ul>
    </section>
  );
}
