import { deepClone } from "./solution";

describe("Lab 04: Deep Clone", () => {
  test("should create a new object with different reference", () => {
    const original = { a: 1, b: { c: 2 } };
    const copy = deepClone(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy.b).not.toBe(original.b); // Nested check
  });

  test("should handle arrays correctly", () => {
    const original = [1, [2, 3], { a: 4 }];
    const copy = deepClone(original);

    expect(Array.isArray(copy[1])).toBe(true);
    expect(copy[2]).not.toBe(original[2]);
  });

  test("should preserve Functions and Dates", () => {
    const sayHi = () => "hi";
    const now = new Date();
    const original = { fn: sayHi, time: now };

    const copy = deepClone(original);

    expect(typeof copy.fn).toBe("function");
    expect(copy.fn()).toBe("hi");
    expect(copy.time).toBeInstanceOf(Date);
    expect(copy.time.getTime()).toBe(now.getTime());
  });

  test("should handle undefined values", () => {
    const original = { a: undefined, b: 2 };
    const copy = deepClone(original);
    expect(copy).toHaveProperty("a");
    expect(copy.a).toBeUndefined();
  });
});
