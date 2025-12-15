
import React from 'react';

export type BookListProps = {
  items: string[];
  favorites?: string[];
  onItemToggle?: (name: string) => void;
};

export default function BookList({ items = [], favorites = [], onItemToggle }: BookListProps): JSX.Element {
  return (
    <ul aria-label="Books">
      {items.map((name) => (
        <li
          key={name}
          aria-label={name}
          className={favorites.includes(name) ? 'favorite' : ''}
          onClick={() => onItemToggle?.(name)}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
