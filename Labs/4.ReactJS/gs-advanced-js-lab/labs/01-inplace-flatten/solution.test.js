import { inplaceFlatten } from "./solution";

describe("Lab 01: In-Place Flattener", () => {
  test("should flatten a simple nested object in-place", () => {
    const data = { a: 1, b: { c: 2 } };
    inplaceFlatten(data);

    expect(data).toEqual({ a: 1, "b.c": 2 });
    expect(data.b).toBeUndefined(); // Ensure old key is deleted
  });

  test("should handle deep nesting", () => {
    const data = { a: { b: { c: { d: 5 } } } };
    inplaceFlatten(data);

    expect(data).toEqual({ "a.b.c.d": 5 });
  });

  test("should maintain primitive values at the root", () => {
    const data = { x: 10, y: { z: 20 } };
    inplaceFlatten(data);

    expect(data).toEqual({ x: 10, "y.z": 20 });
  });

  test("should not flatten arrays (treat as leaf nodes)", () => {
    const data = { a: [1, 2], b: { c: 3 } };
    inplaceFlatten(data);

    expect(data).toEqual({ a: [1, 2], "b.c": 3 });
  });
});
