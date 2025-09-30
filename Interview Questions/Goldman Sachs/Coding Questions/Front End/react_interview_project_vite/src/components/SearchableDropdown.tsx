// import React, { useMemo, useState } from "react";

// type Props = {
//   items: string[];
//   placeholder?: string; // Placeholder inside the <select> when nothing is selected
//   searchPlaceholder?: string; // Placeholder for the search input
//   onSelect?: (value: string | null) => void; // notify parent when selection changes
//   initialValue?: string | null; // optional pre-selected value
// };

// const SearchableDropdown: React.FC<Props> = ({
//   items,
//   placeholder = "Select an option…",
//   searchPlaceholder = "Search…",
//   onSelect,
//   initialValue = null,
// }) => {
//   const [search, setSearch] = useState("");
//   const [selected, setSelected] = useState<string | null>(initialValue);

//   const filtered = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     return q ? items.filter((i) => i.toLowerCase().includes(q)) : items;
//   }, [items, search]);

//   const hasMatches = filtered.length > 0;
//   const selectedIsVisible = selected ? filtered.includes(selected) : false;

//   return (
//     <div style={{ display: "grid", gap: 8, maxWidth: 320 }}>
//       <input
//         type="text"
//         placeholder={searchPlaceholder}
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         aria-label="dropdown-search"
//       />

//       <select
//         aria-label="dropdown-select"
//         // If selected item is filtered out, show placeholder
//         value={selectedIsVisible ? selected! : ""}
//         onChange={(e) => {
//           const val = e.target.value || null;
//           setSelected(val);
//           onSelect?.(val);
//         }}
//         disabled={!hasMatches}
//       >
//         {/* Placeholder / empty state */}
//         <option value="" disabled>
//           {hasMatches ? placeholder : "No matches"}
//         </option>

//         {/* Filtered options */}
//         {hasMatches &&
//           filtered.map((item) => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))}
//       </select>
//     </div>
//   );
// };

// export default SearchableDropdown;
// src/components/SearchableDropdown.tsx
import React, { useEffect, useMemo, useState } from "react";

type Props = {
  items: string[];
  placeholder?: string;
  searchPlaceholder?: string;
  onSelect?: (value: string | null) => void;
  initialValue?: string | null;

  /** Keep the selected option visible even if it doesn't match the filter */
  keepSelectedVisibleWhenFiltered?: boolean;

  /** Allow selecting the placeholder to clear the selection */
  clearablePlaceholder?: boolean;

  /** Message to show when there are no matches and no selection to show */
  emptyMessage?: string;

  /** Optional: expose query changes to parent */
  onQueryChange?: (q: string) => void;
};

const SearchableDropdown: React.FC<Props> = ({
  items,
  placeholder = "Select an option…",
  searchPlaceholder = "Search…",
  onSelect,
  initialValue = null,
  keepSelectedVisibleWhenFiltered = true,
  clearablePlaceholder = true,
  emptyMessage = "No matches",
  onQueryChange,
}) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(initialValue);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return q ? items.filter((i) => i.toLowerCase().includes(q)) : items;
  }, [items, search]);

  const hasMatches = filtered.length > 0;

  // Build the visible options list.
  // If the selected item isn't in the filtered list, inject it at the top
  // so the <select> can still display it as the current value.
  const visibleOptions = useMemo(() => {
    if (!keepSelectedVisibleWhenFiltered || !selected) return filtered;
    const inFiltered = filtered.includes(selected);
    return inFiltered ? filtered : [selected, ...filtered];
  }, [filtered, keepSelectedVisibleWhenFiltered, selected]);

  const hasVisibleOptions = visibleOptions.length > 0;

  useEffect(() => {
    onQueryChange?.(search);
  }, [onQueryChange, search]);

  return (
    <div style={{ display: "grid", gap: 8, maxWidth: 360 }}>
      <input
        id="dropdown-search"
        type="text"
        placeholder={searchPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="dropdown-search"
      />

      <select
        id="dropdown-select"
        aria-label="dropdown-select"
        style={{ minWidth: 220 }}
        // If we have a selection, always show it (because we inject it into visibleOptions)
        value={selected ?? ""}
        onChange={(e) => {
          const val = e.target.value || null;
          setSelected(val);
          onSelect?.(val);
        }}
        // Disable only if there is absolutely nothing to show (no matches & no selection)
        disabled={!hasVisibleOptions}
      >
        {/* Placeholder: selectable if clearablePlaceholder = true */}
        <option value="" disabled={!clearablePlaceholder}>
          {hasVisibleOptions ? placeholder : emptyMessage}
        </option>

        {visibleOptions.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Optional: little helper text to mirror what's displayed */}
      <div style={{ fontSize: 12, color: "#666" }}>
        Selected: <strong>{selected ?? "(none)"}</strong>
        {!hasMatches && selected && (
          <em style={{ marginLeft: 6 }}>(filtered out, kept visible)</em>
        )}
      </div>
    </div>
  );
};

export default SearchableDropdown;
