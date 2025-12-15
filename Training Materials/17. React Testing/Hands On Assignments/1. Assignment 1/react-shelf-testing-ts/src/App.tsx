
import React from 'react';
import Shelf from './components/Shelf.tsx';

const DEMO_BOOKS: string[] = [
  'Dune',
  'Foundation',
  'Snow Crash',
  'Hyperion',
  'Neuromancer',
  'The Left Hand of Darkness',
];

export default function App(): JSX.Element {
  return (
    <div className="container">
      <Shelf name="Sci‑Fi Shelf" initialItems={DEMO_BOOKS} />
    </div>
  );
}
