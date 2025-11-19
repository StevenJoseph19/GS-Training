
'use client';
import React from 'react';
import { Banner } from './components/Banner';
import { HouseCard } from './components/HouseCard';
import { ThemeToggle } from './components/ThemeToggle';
import { LIST } from '@/lib/data/houses';

// TODO: Render Banner + a section with global .container listing HouseCard items
export default function Page() {
  return (
    <ThemeToggle>
      {/* TODO: Banner title "Globomantics Listings" */}
      <section data-testid="list">
        {/* TODO: map LIST to HouseCard components */}
      </section>
    </ThemeToggle>
  );
}
