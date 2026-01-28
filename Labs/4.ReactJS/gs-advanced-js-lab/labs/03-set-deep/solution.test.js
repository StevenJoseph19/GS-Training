import { setDeep } from "./solution";

describe("Lab 03: setDeep Utility", () => {
  test("should create a simple nested path", () => {
    const obj = {};
    setDeep(obj, "a.b", 100);
    expect(obj).toEqual({ a: { b: 100 } });
  });

  test("should append to existing objects without losing data", () => {
    const obj = { a: { x: 1 } };
    setDeep(obj, "a.y", 2);
    expect(obj).toEqual({ a: { x: 1, y: 2 } });
  });

  test("should handle deeply nested paths (4+ levels)", () => {
    const obj = {};
    setDeep(obj, "p.q.r.s", "final");
    expect(obj.p.q.r.s).toBe("final");
  });

  test("should overwrite primitives if they block the path", () => {
    // 'a' starts as a number, but path requires it to be an object
    const obj = { a: 10 };
    setDeep(obj, "a.b", 20);
    expect(obj.a).toEqual({ b: 20 });
  });

  test("should return the original object reference", () => {
    const obj = {};
    const result = setDeep(obj, "test", 1);
    expect(result).toBe(obj);
  });
});
