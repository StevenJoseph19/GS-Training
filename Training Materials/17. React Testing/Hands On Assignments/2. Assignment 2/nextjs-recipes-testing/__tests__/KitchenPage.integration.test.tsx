// __tests__/KitchenPage.integration.test.tsx
import React from "react";
import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
// import KitchenPage from "../src/pages/KitchenPage";

describe("KitchenPage integration", () => {
  it("Given the page loads, Then no cards are displayed", async () => {
    // TODO: Arrange — Render the KitchenPage component.
    // TODO: Act — Get the grid container element.
    // TODO: Assert — Wait for the card count to be zero by querying for article roles inside the grid.
    /*
    await waitFor(() => {
      // Use 'article' instead of 'generic' if your empty state might check for them,
      // or generic is fine if checking for lack of existence,
      // but consistent usage of 'article' is safer.
      const cards = within(grid).queryAllByRole("article", {
        name: /recipe-card/i,
      });
      // TODO: Assert the cards length is 0.
    });
    */
  });

  it("When a single recipe is selected, Then one card appears", async () => {
    // TODO: Arrange — Setup user events and render the KitchenPage.
    // TODO: Act — Click the list item for "Tacos".
    // TODO: Assert — Verify exactly one recipe card appears in the grid and contains the correct recipe name.
    /*
    const grid = screen.getByLabelText(/selected recipes/i);
    // FIX 1: Change role from "generic" to "article"
    const cards = await within(grid).findAllByRole("article", {
      name: /recipe-card/i,
    });
    // TODO: Assert the cards length is 1.

    // FIX 2: Scope the text check to the grid to avoid finding the list item too
    // TODO: Assert that the text "Tacos" is in the grid container.
    */
  });

  it("When multiple recipes are selected, Then that many cards appear", async () => {
    // TODO: Arrange — Setup user events and render the KitchenPage. Define the list of recipes: "Ramen", "Paella", "Pizza".
    // TODO: Act — Loop through the picks and simulate a click on each one.
    // TODO: Assert — Verify the card count matches the number of picks, and all picked recipe names are visible within the grid container.
    /*
    const grid = screen.getByLabelText(/selected recipes/i);
    const picks = ["Ramen", "Paella", "Pizza"];

    const cards = await within(grid).findAllByRole("article", {
      name: /recipe-card/i,
    });
    // TODO: Assert the cards length matches the length of the picks array.

    // FIX 3: Scope these checks to the grid as well
    // TODO: Assert that each recipe name from the picks array is visible within the grid.
    */
  });
});
