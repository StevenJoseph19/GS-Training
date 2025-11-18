
'use client';
import React from 'react';

/**
 * Header: Simple presentational component.
 * Receives a required 'title' prop.
 */
export function Header({ title }: { title: string }) {
  // TODO: Render the title inside a <header> with data-testid="app-header"
  // Also render a <p> subtitle with text "React Components & JSX"
  return (
    <header /* data-testid="app-header" */>
      <h1>TODO: Title</h1>
      <p>React Components & JSX</p>
    </header>
  );
}
