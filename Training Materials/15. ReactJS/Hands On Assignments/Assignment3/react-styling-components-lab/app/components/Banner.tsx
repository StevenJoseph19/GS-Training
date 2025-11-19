
'use client';
import React from 'react';
import styles from './Banner.module.css';

// TODO: Render a banner with global .container and CSS module classes
// - <header data-testid="banner" className="container">
// - <img src="/logo.svg" alt="logo" className={styles.logo} />
// - <h1 className={styles.title}>{title}</h1>
// - subtitle <p> using styles.subtitle and a small inline style (e.g., letterSpacing)
export function Banner({ title }: { title: string }) {
  return (
    <header data-testid="banner">
      {/* TODO: layout and content */}
    </header>
  );
}
