const { deepClone } = require("./solution");

describe("Exercise 02: Recursive Shadow Clone", () => {
  test("should create a copy that does not share references", () => {
    const original = { a: 1, b: { c: 2 } };
    const clone = deepClone(original);

    // Change the clone
    clone.b.c = 99;

    // The original should remain unchanged (Reference check)
    expect(original.b.c).toBe(2);
    expect(clone.b.c).toBe(99);
  });

  test("should handle arrays within objects", () => {
    const original = { tickers: ["GS", "AAPL"], meta: { count: 2 } };
    const clone = deepClone(original);

    expect(Array.isArray(clone.tickers)).toBe(true);
    expect(clone.tickers[0]).toBe("GS");
  });
});
