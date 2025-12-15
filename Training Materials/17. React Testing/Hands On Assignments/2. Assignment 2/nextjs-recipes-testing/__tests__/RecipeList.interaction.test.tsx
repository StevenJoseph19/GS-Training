import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
// import RecipeList from '../src/components/RecipeList';

const RECIPES = ["Ramen", "Paella", "Biriyani"];

describe("RecipeList interaction", () => {
  it("calls onItemToggle when an item is clicked (user-event)", async () => {
    // TODO: Arrange 1 (Setup User) — Initialize user event setup.
    // TODO: Arrange 2 (Mock) — Create a mock function for `onItemToggle`.
    // TODO: Arrange 3 (Render) — Render the RecipeList component, passing the RECIPES, an empty favorites array, and the mock toggle function.
    // TODO: Act — Simulate a click on one of the visible recipe names (e.g., 'Paella') using `user.click`.
    // TODO: Assert — Verify that the mock `onItemToggle` function was called once with the name of the clicked item as the argument.
  });

  it("calls onItemToggle when an item is clicked (fireEvent)", () => {
    // TODO: Arrange 1 (Mock) — Create a mock function for `onItemToggle`.
    // TODO: Arrange 2 (Render) — Render the RecipeList component, passing the RECIPES, an empty favorites array, and the mock toggle function.
    // TODO: Act — Simulate a click on one of the visible recipe names (e.g., 'Biriyani') using `fireEvent.click`.
    // TODO: Assert — Verify that the mock `onItemToggle` function was called once with the name of the clicked item as the argument.
  });
});
