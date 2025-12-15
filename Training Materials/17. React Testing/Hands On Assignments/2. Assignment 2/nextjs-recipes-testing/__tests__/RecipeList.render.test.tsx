import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
// import RecipeList from '../src/components/RecipeList'; // Assuming this is the component under test

const RECIPES = ["Ramen", "Paella", "Biriyani", "Tacos"];

describe("RecipeList rendering", () => {
  it("renders all items", () => {
    // TODO: Arrange — Render the RecipeList component, passing all RECIPES and an empty favorites array.
    // TODO: Act 1 — Get the list container element by its role and accessible name.
    // TODO: Act 2 — Query for all list item elements within the list container.
    // TODO: Assert 1 — Verify that the number of list item elements matches the length of the RECIPES array.
    // TODO: Assert 2 — Verify that the text content for every recipe name in the RECIPES array is present in the document.
  });

  it('marks favorites with the "favorite" class', () => {
    // TODO: Arrange — Render the RecipeList component, passing all RECIPES and a specific recipe (e.g., 'Ramen') in the favorites array.
    // TODO: Act 1 — Get the list item element for the favorited recipe ('Ramen').
    // TODO: Act 2 — Get the list item element for a non-favorited recipe (e.g., 'Paella').
    // TODO: Assert 1 — Verify that the favorited item element has the CSS class 'favorite'.
    // TODO: Assert 2 — Verify that the non-favorited item element does NOT have the CSS class 'favorite'.
  });
});
