import { ultimateFlatten } from "./solution";

describe("Lab 15: The Ultimate Flattener", () => {
  test("should flatten nested objects and join with pipe", () => {
    const input = { a: "X", b: { c: "Y" } };
    expect(ultimateFlatten(input)).toBe("X | Y");
  });

  test("should execute functions and flatten results", () => {
    const input = {
      a: 1,
      b: () => 2,
      c: {
        d: () => ({ e: 3 }),
      },
    };
    expect(ultimateFlatten(input)).toBe("1 | 2 | 3");
  });

  test("should handle arrays and nested arrays", () => {
    const input = {
      data: [1, 2, [3, 4]],
      status: () => "active",
    };
    expect(ultimateFlatten(input)).toBe("1 | 2 | 3 | 4 | active");
  });

  test("should handle the specific GS scenario from feedback", () => {
    const input = {
      val: "start",
      nested: () => ({
        inner: "middle",
        arr: [() => "end"],
      }),
    };
    // Note: The array contains a function, which must also be executed!
    expect(ultimateFlatten(input)).toBe("start | middle | end");
  });

  test("should skip null and undefined values", () => {
    const input = { a: 1, b: null, c: undefined, d: 2 };
    expect(ultimateFlatten(input)).toBe("1 | 2");
  });
});
