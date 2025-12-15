
import React from 'react';
import SiteTitle from './SiteTitle';
import SearchBar from './SearchBar';
import Badge from './Badge';
import RecipeList from './RecipeList';
import { filterRecipes } from '../utils/filterRecipes';

type Props = { title?: string; initialItems?: string[] };

const Dashboard: React.FC<Props> = ({ title = 'Recipes', initialItems = [] }) => {
  const [query, setQuery] = React.useState('');
  const [favorites, setFavorites] = React.useState<string[]>([]);

  const filtered = filterRecipes(query, initialItems);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : prev.concat(name)));
  };

  return (
    <main>
      <SiteTitle name={title} />
      <SearchBar query={query} onChange={setQuery} />
      <Badge count={filtered.length} />
      <RecipeList items={filtered} favorites={favorites} onItemToggle={toggleFavorite} />
    </main>
  );
};

export default Dashboard;
