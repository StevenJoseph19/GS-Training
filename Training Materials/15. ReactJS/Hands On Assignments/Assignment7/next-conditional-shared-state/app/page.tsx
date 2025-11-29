
'use client';
import { useState, useCallback } from 'react';
import Banner from '@/components/Banner';
import CarList from '@/components/CarList';
import CarDetails from '@/components/CarDetails';
import type { Car } from '@/lib/types';

export default function Page() {
  const [selectedCar, setSelectedCar] = useState<Car | undefined>();

  // wrapper keeps state control in the root; could add validation here
  const selectCar = useCallback((car: Car | undefined) => {
    setSelectedCar(car);
  }, []);

  return (
    <main>
      <Banner title="AutoMart" subtitle="Click a car to view details" />
      {selectedCar ? (
        <CarDetails car={selectedCar} onBack={() => selectCar(undefined)} />
      ) : (
        <CarList onSelect={selectCar} />
      )}
    </main>
  );
}
