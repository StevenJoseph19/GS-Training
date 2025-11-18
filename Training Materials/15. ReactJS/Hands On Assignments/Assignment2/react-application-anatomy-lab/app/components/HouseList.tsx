
'use client';
import React from 'react';
import { STOCK } from '@/lib/data/houses';

type Props = { onBack: () => void };

// TODO: List houses with <li data-testid={`house-${id}`}> and a back button.
export function HouseList({ onBack }: Props) {
  return (
    <section data-testid="houses">
      {/* TODO back button labeled "Back to Dashboard" */}
      <h2>Houses</h2>
      <ul>
        {/* TODO map STOCK to list items */}
      </ul>
      {/* TODO render data-testid="houses-count" with STOCK.length */}
    </section>
  );
}
