import { extractValues } from "./solution";

describe("Lab 07: Value Extractor", () => {
  test("should extract values and join them into a string", () => {
    const input = { a: "X", b: "Y", c: { d: 1, e: "ABC" } };
    const result = extractValues(input);
    expect(result).toBe("X, Y, 1, ABC");
  });

  test("should execute functions and include their return values", () => {
    const input = {
      a: "X",
      b: () => "Y", // Function returning a primitive
      c: {
        d: 1,
        e: () => ({ f: "3", g: "4" }), // Function returning an object
      },
    };
    // Expected: X (a), Y (b), 1 (d), 3 (f), 4 (g)
    const result = extractValues(input);
    expect(result).toBe("X, Y, 1, 3, 4");
  });

  test("should handle deeply nested structures with functions", () => {
    const input = {
      val: 10,
      next: () => ({
        val: 20,
        next: () => ({ val: 30 }),
      }),
    };
    expect(extractValues(input)).toBe("10, 20, 30");
  });
});
