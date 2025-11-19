
'use client';
import React from 'react';

// TODO: Render a single house row.
// Props: id, address, country, price
// - Wrap in <tr data-testid={`row-${id}`}> with three <td> cells.
export function HouseRow({ id, address, country, price }: { id: number; address: string; country: string; price: number }) {
  return (
    <tr data-testid={`row-${id}`}>
      {/* TODO: address */}
      {/* TODO: country */}
      {/* TODO: price */}
    </tr>
  );
}
