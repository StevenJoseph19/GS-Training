// __tests__/SearchBar.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SearchBar from "../src/components/SearchBar";
// import SearchBar from "../src/components/SearchBar"; // Assuming this is the component under test

describe("SearchBar", () => {
  it("renders input with accessible label and placeholder", () => {
    // TODO: Arrange — Render the SearchBar component with minimal props.
    // TODO: Assert 1 — Verify the input field is present in the document by its accessible label (e.g., /search recipes/i).
    // TODO: Assert 2 — Verify the input field is present in the document by its placeholder text (e.g., /search recipes/i).
  });

  it("publishes changes via onChange when the user types", async () => {
    // TODO: Arrange 1 (Setup User) — Initialize user event setup.

    // Arrange 2 (Mock) — Create a mock function for `onChange`.
    const onChange = jest.fn();

    // TODO: Arrange 3 (Wrapper) — Define a stateful TestWrapper component to manage the `query` state and call the mock `onChange`.
    const TestWrapper = () => {
      // TODO: Define local state and a handleChange function that updates state and calls the mock.
      // TODO: Return the SearchBar component passing the state and the wrapped handleChange.
      return <SearchBar query={""} onChange={onChange} />;
    };

    // TODO: Act 1 (Render) — Render the TestWrapper instead of the raw component.
    render(<TestWrapper />);

    // TODO: Act 2 (Type) — Get the input element and simulate the user typing a string (e.g., "ra").

    // TODO: Act 3 (Data Extraction) — Map the arguments from the mock function's calls to check the sequence of values passed.

    // TODO: Assert 1 — Verify that the mock function was called a number of times equal to or greater than the number of characters typed.

    // TODO: Assert 2 & 3 — Verify that the sequence of calls includes the intermediate characters and the final typed string (e.g., 'r' and 'ra').
  });
});
