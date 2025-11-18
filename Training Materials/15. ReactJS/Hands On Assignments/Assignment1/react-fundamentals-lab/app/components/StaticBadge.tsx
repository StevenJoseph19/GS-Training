
'use client';
import React from 'react';
import { useRenderCount } from '@/lib/hooks/useRenderCount';

/**
 * StaticBadge
 * Memoized component to illustrate efficient updates.
 * It should NOT re-render when the parent updates unrelated state.
 */
function StaticBadgeInner() {
  const renders = useRenderCount();
  return (
    <div>
      <span>Static Badge</span>{' '}
      <em data-testid="badge-renders">{String(renders)}</em>
    </div>
  );
}

// TODO: memoize so it only re-renders if its props change
export const StaticBadge = /* React.memo(StaticBadgeInner) */ StaticBadgeInner;
