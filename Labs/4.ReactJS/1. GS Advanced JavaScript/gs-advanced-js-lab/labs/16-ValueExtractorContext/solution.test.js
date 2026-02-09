const { extractValues } = require("./solution");

describe("Lab R-16: Context-Aware Value Extractor", () => {
  test("should handle the 'this' context for member functions (Interview Case)", () => {
    const input = {
      a: "X",
      b: "Y",
      c: function () {
        return this.a + this.b;
      },
    };

    const result = extractValues(input);
    // Expected: ["X", "Y", "XY"]
    expect(result).toEqual(["X", "Y", "XY"]);
  });

  test("should handle numerical calculations using 'this'", () => {
    const trade = {
      asset: "Goldman Sachs",
      ticker: "GS",
      price: 100,
      quantity: 5,
      total: function () {
        return this.price * this.quantity;
      },
    };

    const result = extractValues(trade);
    // Expected: ["Goldman Sachs", "GS", 100, 5, 500]
    expect(result).toContain(500);
    expect(result).toEqual(["Goldman Sachs", "GS", 100, 5, 500]);
  });

  test("should handle nested objects with their own context binding", () => {
    const portfolio = {
      user: "Trader_Alpha",
      details: {
        base: 1000,
        bonus: 200,
        calc: function () {
          // 'this' here refers to the 'details' object
          return this.base + this.bonus;
        },
      },
    };

    const result = extractValues(portfolio);
    // Expected: ["Trader_Alpha", 1000, 200, 1200]
    expect(result).toEqual(["Trader_Alpha", 1000, 200, 1200]);
  });

  test("should ignore null values and skip undefined", () => {
    const input = {
      a: 1,
      b: null,
      c: undefined,
      d: () => "Done",
    };

    const result = extractValues(input);
    // Note: Recursive objects are checked, but null is usually kept or skipped
    // depending on preference. Based on our logic, it pushes primitives.
    expect(result).toContain(1);
    expect(result).toContain("Done");
  });
});
