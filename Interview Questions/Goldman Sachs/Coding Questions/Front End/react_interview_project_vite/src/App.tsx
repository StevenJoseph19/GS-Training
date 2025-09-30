// App.tsx
import React from "react";
import SearchableDropdown from "../src/components/SearchableDropdown";

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

export default function App() {
  return (
    <div>
      <h1>Searchable Dropdown</h1>
      <SearchableDropdown
        items={fruits}
        placeholder="Choose a fruit…"
        searchPlaceholder="Search fruits…"
        onSelect={(val) => console.log("Selected:", val)}
      />
    </div>
  );
}
