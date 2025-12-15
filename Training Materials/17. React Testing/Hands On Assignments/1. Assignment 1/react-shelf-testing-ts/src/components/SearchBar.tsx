
import React from 'react';

export type SearchBarProps = {
  query: string;
  onChange?: (q: string) => void;
};

export default function SearchBar({ query, onChange }: SearchBarProps): JSX.Element {
  return (
    <div className="row">
      <label htmlFor="search-input" className="sr-only">Search books</label>
      <input
        id="search-input"
        className="search"
        type="text"
        placeholder="Search books"
        value={query}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
