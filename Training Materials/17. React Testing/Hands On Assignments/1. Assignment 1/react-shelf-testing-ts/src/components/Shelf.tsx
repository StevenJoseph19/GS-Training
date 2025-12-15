import React from "react";
import BookTitle from "./BookTitle";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Badge from "./Badge";
import { filterBooks } from "../utils/filterBooks";

export type ShelfProps = {
  name?: string;
  initialItems?: string[];
};

export default function Shelf({
  name = "My Shelf",
  initialItems = [],
}: ShelfProps): JSX.Element {
  const [query, setQuery] = React.useState<string>("");
  const [favorites, setFavorites] = React.useState<string[]>([]);

  const filtered = filterBooks(query, initialItems);

  const toggleFavorite = (bookName: string) => {
    setFavorites((prev) =>
      prev.includes(bookName)
        ? prev.filter((n) => n !== bookName)
        : prev.concat(bookName)
    );
  };

  return (
    <main>
      <BookTitle name={name} />
      <SearchBar query={query} onChange={setQuery} />
      <Badge count={filtered.length} />
      <BookList
        items={filtered}
        favorites={favorites}
        onItemToggle={toggleFavorite}
      />
    </main>
  );
}
