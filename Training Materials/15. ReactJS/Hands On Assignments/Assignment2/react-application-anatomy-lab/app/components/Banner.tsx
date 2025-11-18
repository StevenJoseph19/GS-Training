
'use client';
import React from 'react';

type Props = { title: string };
// TODO: Render a <header data-testid="banner"> with <h1>{title}</h1>
// and a small <p> subtitle describing app anatomy.
export function Banner({ title }: Props) {
  return (
    <header /* data-testid="banner" */>
      <h1>{/* TODO title */}</h1>
      <p>/* TODO subtitle */</p>
    </header>
  );
}
