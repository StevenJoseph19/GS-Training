
'use client';
import React from 'react';
import type { House } from '@/lib/data/houses';
import { defaultPhoto } from '@/lib/hooks/defaultPhoto';

// TODO: Render details + image; Back button calls onBack()
export function HouseDetails({ house, onBack }: { house: House; onBack: () => void }) {
  const src = house.photo ? `/houseImages/${house.photo}.jpg` : defaultPhoto;
  return (
    <section data-testid="details">
      <button onClick={onBack}>Back</button>
      <h2>{house.address}</h2>
      <img src={src} alt="house" data-testid="photo" />
      <p>{house.city}</p>
      <p>{house.price}</p>
    </section>
  );
}
