
'use client';
import React from 'react';
import type { House } from '@/lib/data/houses';

// TODO: Clickable row that calls onSelect(house)
export function HouseRow({ house, onSelect }: { house: House; onSelect: (h: House) => void }) {
  return (
    <tr data-testid={`row-${house.id}`} onClick={() => onSelect(house)}>
      <td>{house.address}</td>
      <td>{house.city}</td>
      <td>{house.price}</td>
    </tr>
  );
}
