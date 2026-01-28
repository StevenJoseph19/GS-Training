import { reverseFlatten } from "./solution";

describe("Lab 11: Reverse Flattening", () => {
  test("should reconstruct a simple nested object", () => {
    const paths = ["user.name", "user.age", "settings.theme"];
    const values = ["Prabhakar", 25, "dark"];
    const expected = {
      user: { name: "Prabhakar", age: 25 },
      settings: { theme: "dark" },
    };
    expect(reverseFlatten(paths, values)).toEqual(expected);
  });

  test("should handle deep nesting (3+ levels)", () => {
    const paths = ["a.b.c.d"];
    const values = [100];
    expect(reverseFlatten(paths, values).a.b.c.d).toBe(100);
  });
});
