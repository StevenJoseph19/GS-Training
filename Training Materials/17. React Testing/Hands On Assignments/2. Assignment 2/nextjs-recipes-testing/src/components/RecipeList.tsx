
import React from 'react';

export type RecipeListProps = {
  items: string[];
  favorites?: string[];
  onItemToggle?: (name: string) => void;
};

const RecipeList: React.FC<RecipeListProps> = ({ items = [], favorites = [], onItemToggle }) => {
  return (
    <ul aria-label="Recipes">
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
};

export default RecipeList;
