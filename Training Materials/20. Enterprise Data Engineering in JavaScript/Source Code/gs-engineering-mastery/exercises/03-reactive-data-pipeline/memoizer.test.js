const { memoize } = require("./memoizer");

describe("Memoization Performance", () => {
  test("should only execute the expensive function once for same inputs", () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedAdd = memoize(mockFn);

    memoizedAdd(10, 20); // First call (Execute)
    memoizedAdd(10, 20); // Second call (Cache Hit)
    memoizedAdd(10, 20); // Third call (Cache Hit)

    expect(mockFn).toHaveBeenCalledTimes(1); // The "Expensive" logic ran only once
    expect(memoizedAdd(10, 20)).toBe(30);
  });
});
