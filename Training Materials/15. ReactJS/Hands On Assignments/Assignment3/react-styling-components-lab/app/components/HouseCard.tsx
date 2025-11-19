
'use client';
import React from 'react';
import type { House } from '@/lib/data/houses';
import styles from './Card.module.css';

// TODO: Render article with CSS module + global hover class
// - data-testid={`house-card-${house.id}`}
// - className={`${styles.card} hover-pointer`}
// - if house.price >= 800000 => inline style border: '2px solid red'
export function HouseCard({ house }: { house: House }) {
  return (
    <article data-testid={`house-card-${house.id}`}>
      {/* TODO: city/address/price with module classes */}
    </article>
  );
}
