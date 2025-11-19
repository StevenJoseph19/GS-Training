
'use client';
import React, { useState } from 'react';

// TODO: Wrap children in <main data-testid="main"> with theme-light/dark class based on state
// - Button data-testid="theme-btn" toggles state
export function ThemeToggle({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  return (
    <main data-testid="main">
      <button data-testid="theme-btn">Toggle Theme</button>
      {children}
    </main>
  );
}
