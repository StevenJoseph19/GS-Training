
'use client';
import React, { useCallback, useState } from 'react';
import { HouseList } from './components/HouseList';
import { HouseDetails } from './components/HouseDetails';
import type { House } from '@/lib/data/houses';

// TODO: Conditional render list vs details with wrapper function
export default function Page() {
  const [selected, setSelected] = useState<House | null>(null);

  const selectHouse = useCallback((h: House) => {
    if (h && typeof h === 'object') setSelected(h);
  }, []);

  return (
    <main>
      {!selected ? (
        <HouseList onSelect={selectHouse} />
      ) : (
        <HouseDetails house={selected} onBack={() => setSelected(null)} />
      )}
    </main>
  );
}
