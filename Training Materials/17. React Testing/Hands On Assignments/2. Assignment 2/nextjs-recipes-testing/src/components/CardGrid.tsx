import React from "react";

const CardGrid: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div aria-label="Selected recipes">
      {items.map((name) => (
        <article key={name} aria-label="recipe-card">
          {name}
        </article>
      ))}
    </div>
  );
};

export default CardGrid;
