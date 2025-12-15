
import React from 'react';
import RecipeList from '../components/RecipeList';
import CardGrid from '../components/CardGrid';

const ALL_RECIPES = ['Ramen','Paella','Biriyani','Tacos','Pho','Pizza'];

const KitchenPage: React.FC = () => {
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggle = (name: string) => {
    setSelected((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : prev.concat(name)));
  };

  return (
    <main>
      <RecipeList items={ALL_RECIPES} favorites={selected} onItemToggle={toggle} />
      <CardGrid items={selected} />
    </main>
  );
};

export default KitchenPage;
