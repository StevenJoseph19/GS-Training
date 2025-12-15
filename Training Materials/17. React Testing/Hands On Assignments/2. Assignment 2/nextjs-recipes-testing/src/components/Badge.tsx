
import React from 'react';

const Badge: React.FC<{ count: number }> = ({ count }) => (
  <div role="status" aria-label="Count">{`Recipes: ${count}`}</div>
);

export default Badge;
