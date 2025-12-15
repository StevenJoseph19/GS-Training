
import React from 'react';
import SearchBar from './SearchBar';
import Badge from './Badge';
import RecipeList from './RecipeList';
import { filterRecipes } from '../utils/filterRecipes';
import { fetchRecipes } from '../api/recipes';

const RecipeBoard: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const [favorites, setFavorites] = React.useState<string[]>([]);
  const [items, setItems] = React.useState<string[]>([]);

  React.useEffect(() => {
    let mounted = true;
    fetchRecipes().then((data) => {
      if (mounted) setItems(data);
    });
    return () => { mounted = false; };
  }, []);

  const filtered = filterRecipes(query, items);
  const toggleFavorite = (name: string) => {
    setFavorites((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : prev.concat(name)));
  };

  return (
    <section>
      <SearchBar query={query} onChange={setQuery} />
      <Badge count={filtered.length} />
      <RecipeList items={filtered} favorites={favorites} onItemToggle={toggleFavorite} />
    </section>
  );
};

export default RecipeBoard;
