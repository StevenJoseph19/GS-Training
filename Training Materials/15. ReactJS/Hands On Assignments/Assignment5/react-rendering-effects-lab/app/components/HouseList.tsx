
'use client';
import React, { useEffect, useMemo, useState } from 'react';
import type { House } from '@/lib/data/houses';
import { MemoRow } from './MemoRow';
import { useGetRequest } from '@/lib/hooks/get';

// TODO: Implement list with effect, memo total, and add button
export function HouseList() {
  const [houses, setHouses] = useState<House[]>([]);
  const { get } = useGetRequest('/api/houses');

  useEffect(() => {
    let mounted = true;
    (async () => {
      const data = await get();
      if (mounted) setHouses(data);
    })();
    return () => { mounted = false; };
  }, [get]);

  const expensiveTotal = useMemo(() => {
    return houses.reduce((acc, h) => acc + h.price, 0);
  }, [houses]);

  function addHouse() {
    const nextId = (houses[houses.length - 1]?.id || 0) + 1;
    setHouses([...houses, { id: nextId, address: 'Newly Added', price: 500000 }]);
  }

  return (
    <section>
      <h2 data-testid="total">${expensiveTotal}</h2>
      <ul>
        {houses.map(h => <MemoRow key={h.id} house={h} />)}
      </ul>
      <button data-testid="add" onClick={addHouse}>Add</button>
    </section>
  );
}
