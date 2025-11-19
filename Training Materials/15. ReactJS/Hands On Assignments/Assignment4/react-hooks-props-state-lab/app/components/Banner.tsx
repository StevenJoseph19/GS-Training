
'use client';
import React from 'react';

// TODO: Support either `headerText` prop OR `children` as the banner title.
// Requirements:
// - Render <header data-testid="banner"> with an <h1> containing the title.
// - If `headerText` is provided, use it; otherwise render `children`.
// - Add a small descriptive <p> underneath (any text).
export function Banner({ headerText, children }: { headerText?: string; children?: React.ReactNode }) {
  return (
    <header data-testid="banner">
      <h1>{/* TODO: title from headerText or children */}</h1>
      <p>{/* TODO: subtitle text */}</p>
    </header>
  );
}
