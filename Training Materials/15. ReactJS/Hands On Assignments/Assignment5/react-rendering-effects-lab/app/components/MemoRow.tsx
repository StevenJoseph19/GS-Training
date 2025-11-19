
'use client';
import React from 'react';
import type { House } from '@/lib/data/houses';
import { useRenderCount } from '@/lib/hooks/renderCount';

// TODO: Inner component + memoized export
function RowInner({ house }: { house: House }) {
  const renders = useRenderCount();
  return (
    <li data-testid={`row-${house.id}`}>
      <span>{house.address}</span> — <strong>${house.price}</strong>
      <em data-testid={`renders-${house.id}`}>{renders}</em>
    </li>
  );
}

// TODO: Memoize so rows with unchanged props don't re-render
export const MemoRow = React.memo(RowInner);
