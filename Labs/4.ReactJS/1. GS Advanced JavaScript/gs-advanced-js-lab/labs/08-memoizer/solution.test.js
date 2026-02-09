import { memoize } from "./solution";

describe("Lab 08: Multi-Arg Memoizer", () => {
  test("should return the correct result from the original function", () => {
    const add = (a, b) => a + b;
    const memoizedAdd = memoize(add);
    expect(memoizedAdd(2, 3)).toBe(5);
  });

  test("should only call the original function once for the same arguments", () => {
    const mockFn = jest.fn((a, b) => a * b);
    const memoizedFn = memoize(mockFn);

    memoizedFn(2, 4); // First call: executes
    memoizedFn(2, 4); // Second call: cached
    memoizedFn(2, 4); // Third call: cached

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should differentiate between different argument sets", () => {
    const mockFn = jest.fn((a) => a);
    const memoizedFn = memoize(mockFn);

    memoizedFn(1);
    memoizedFn(2);

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(memoizedFn(1)).toBe(1);
    expect(memoizedFn(2)).toBe(2);
  });

  test("should handle object arguments", () => {
    const mockFn = jest.fn((obj) => obj.id);
    const memoizedFn = memoize(mockFn);

    const arg = { id: 101 };
    expect(memoizedFn(arg)).toBe(101);
    expect(memoizedFn(arg)).toBe(101);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
