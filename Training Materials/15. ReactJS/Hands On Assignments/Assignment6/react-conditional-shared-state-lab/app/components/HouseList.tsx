
'use client';
import React from 'react';
import { useHouses } from '@/lib/hooks/useHouses';
import { HouseRow } from './HouseRow';

// TODO: Render loading until 'loaded', then the table of houses
export function HouseList({ onSelect }: { onSelect: (h: any) => void }) {
  const { houses, loading } = useHouses();
  if (loading !== 'loaded') {
    return <div data-testid="loading">{loading}</div>;
  }
  return (
    <table data-testid="list">
      <tbody>
        {houses.map(h => <HouseRow key={h.id} house={h} onSelect={onSelect} />)}
      </tbody>
    </table>
  );
}
