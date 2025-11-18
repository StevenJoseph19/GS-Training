
'use client';

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HouseList } from './components/HouseList';
import { HouseDetails } from './components/HouseDetails';
import { StaticBadge } from './components/StaticBadge';
import { HOUSES, type House } from '@/lib/data/houses';

/**
 * Root page (App equivalent in App Router).
 * - Tracks selected house and a "ticks" counter to force parent re-renders.
 * - Renders Header + StaticBadge + conditional List/Details.
 */
export default function Page() {
  // TODO: selected house state (House | null)
  // const [selected, setSelected] = useState<House | null>(null);

  // TODO: ticks state and handlers
  // const [ticks, setTicks] = useState(0);

  // const handleSelect = (h: House) => setSelected(h);
  // const handleBack = () => setSelected(null);

  return (
    <main>
      {/* TODO: pass a real title string that includes "Globomantics" */}
      <Header /* title="TODO title" */ />

      <button
        data-testid="tick"
        // onClick={() => setTicks(t => t + 1)}
      >
        Tick Parent
      </button>
      <p>
        Parent ticks: <strong data-testid="ticks">0{/* {ticks} */}</strong>
      </p>

      <StaticBadge />

      <section data-testid="content">
        {/* TODO: if no selection -> show HouseList, else HouseDetails */}
        {/* Example:
        {!selected ? (
          <HouseList houses={HOUSES} onSelect={handleSelect} />
        ) : (
          <HouseDetails house={selected} onBack={handleBack} />
        )}
        */}
      </section>
    </main>
  );
}
