// // src/components/SearchableDropdown.test.tsx
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import SearchableDropdown from "./SearchableDropdown";

// test("filters options as user types and emits selection", async () => {
//   const user = userEvent.setup();
//   const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
//   const onSelect = vi.fn();

//   render(
//     <SearchableDropdown
//       items={items}
//       onSelect={onSelect}
//       placeholder="Choose…"
//       searchPlaceholder="Search…"
//     />
//   );

//   const search = screen.getByLabelText("dropdown-search");
//   const select = screen.getByLabelText("dropdown-select");

//   await user.type(search, "ap");
//   expect(screen.getByText("Apple")).toBeInTheDocument();
//   expect(screen.queryByText("Banana")).not.toBeInTheDocument();

//   await user.selectOptions(select, "Apple");
//   expect(onSelect).toHaveBeenLastCalledWith("Apple");

//   await user.clear(search);
//   await user.type(search, "zzz");
//   expect(screen.getByText("No matches")).toBeInTheDocument();
//   expect(select).toBeDisabled();
// });
// src/components/SearchableDropdown.persist-selection.test.tsx
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest";
import SearchableDropdown from "./SearchableDropdown";

test("keeps selected option visible even when filtered out", async () => {
  const user = userEvent.setup();
  const items = ["Apple", "Banana", "Cherry"];
  const onSelect = vi.fn();

  render(
    <SearchableDropdown
      items={items}
      onSelect={onSelect}
      placeholder="Choose…"
      searchPlaceholder="Search…"
      keepSelectedVisibleWhenFiltered
      clearablePlaceholder
    />
  );

  const search = screen.getByLabelText("dropdown-search");
  const select = screen.getByLabelText("dropdown-select");

  // Select 'Banana'
  await user.type(search, "ban");
  await user.selectOptions(select, "Banana");
  expect(onSelect).toHaveBeenLastCalledWith("Banana");
  expect(select).toHaveDisplayValue("Banana");

  // Now filter to 'ap' -> Banana doesn't match, Apple does
  await user.clear(search);
  await user.type(search, "ap");

  // The select should still *display* Banana as selected
  expect(select).toHaveDisplayValue("Banana");

  // The list should include Banana (injected) and Apple
  // expect(screen.getByText("Banana")).toBeInTheDocument();
  // expect(screen.getByText("Apple")).toBeInTheDocument();
  // expect(screen.queryByText("Cherry")).not.toBeInTheDocument();

  const inSelect = within(select);
  expect(inSelect.getByRole("option", { name: "Banana" })).toBeInTheDocument();
  expect(inSelect.getByRole("option", { name: "Apple" })).toBeInTheDocument();
  expect(
    inSelect.queryByRole("option", { name: "Cherry" })
  ).not.toBeInTheDocument();
});

test("shows empty message only when no selection and no matches", async () => {
  const user = userEvent.setup();
  const items = ["Apple"];
  render(
    <SearchableDropdown
      items={items}
      placeholder="Choose…"
      emptyMessage="No matches"
      clearablePlaceholder
    />
  );

  const search = screen.getByLabelText("dropdown-search");
  const select = screen.getByLabelText("dropdown-select");

  // Filter to something that has no matches
  await user.type(search, "zzz");

  // With no selection, should disable and show "No matches"
  expect(select).toBeDisabled();
  expect(screen.getByText("No matches")).toBeInTheDocument();
});

test("allows clearing selection via placeholder when clearable", async () => {
  const user = userEvent.setup();
  const items = ["Apple", "Banana"];
  const onSelect = vi.fn();
  render(
    <SearchableDropdown
      items={items}
      onSelect={onSelect}
      placeholder="Choose…"
      clearablePlaceholder
    />
  );

  const search = screen.getByLabelText("dropdown-search");
  const select = screen.getByLabelText("dropdown-select");

  await user.type(search, "ban");
  await user.selectOptions(select, "Banana");
  expect(onSelect).toHaveBeenLastCalledWith("Banana");
  expect(select).toHaveDisplayValue("Banana");

  // Clear the search, then select the placeholder to clear selection
  await user.clear(search);
  await user.selectOptions(select, ""); // value="" is placeholder
  expect(onSelect).toHaveBeenLastCalledWith(null);
  expect(select).toHaveDisplayValue("Choose…");
});
