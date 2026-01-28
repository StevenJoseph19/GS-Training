import { DataIndexer } from "./solution";

describe("Lab 13: Performance-First Filter", () => {
  const largeData = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    category: i % 2 === 0 ? "Electronics" : "Books",
    price: i * 10,
  }));

  const indexer = new DataIndexer(largeData);

  test("should filter by category using index", () => {
    const results = indexer.filter({ category: "Electronics" });
    expect(results.length).toBe(500);
    expect(results.every((item) => item.category === "Electronics")).toBe(true);
  });

  test("should combine indexed and non-indexed criteria", () => {
    const results = indexer.filter({ category: "Books", minPrice: 9000 });
    // Books are odd IDs. Price 9000 is ID 900.
    // We expect IDs 901, 903... 999 (50 items)
    expect(results.length).toBe(50);
  });

  test("should handle search terms correctly", () => {
    const results = indexer.filter({ searchTerm: "Item 999" });
    expect(results[0].id).toBe(999);
  });

  test("should return empty array if category does not exist", () => {
    const results = indexer.filter({ category: "Toys" });
    expect(results).toEqual([]);
  });
});
