
'use client';
import React from 'react';

type Props = {
  active: 'dashboard' | 'houses';
  onChange: (tab: 'dashboard' | 'houses') => void;
};

// TODO: Render two buttons (Dashboard, Houses) with data-testids
//   - tab-dashboard, tab-houses
//   - set aria-pressed based on active
export function NavTabs({ active, onChange }: Props) {
  return (
    <nav aria-label="Primary">
      {/* TODO buttons */}
    </nav>
  );
}
