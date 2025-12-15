
import React from 'react';

export type SearchBarProps = {
  query: string;
  onChange?: (q: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange }) => {
  return (
    <div>
      <label htmlFor="recipe-search">Search recipes</label>
      <input
        id="recipe-search"
        type="text"
        placeholder="Search recipes"
        value={query}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
