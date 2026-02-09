import { flatten } from "./solution";

describe("Lab 06: Pure Flatten", () => {
  test("should return a NEW flat object without modifying the original", () => {
    const original = { a: 1, b: { c: 2 } };
    const result = flatten(original);

    expect(result).toEqual({ a: 1, "b.c": 2 });
    expect(original.b).toBeDefined(); // Original is untouched
    expect(result).not.toBe(original);
  });

  test("should handle deep nesting", () => {
    const input = { info: { personal: { name: "Prabhakar" } } };
    const expected = { "info.personal.name": "Prabhakar" };
    expect(flatten(input)).toEqual(expected);
  });

  test("should handle objects containing arrays correctly", () => {
    const input = { user: "Gaurav", roles: ["admin", "editor"] };
    const result = flatten(input);
    expect(result.roles).toEqual(["admin", "editor"]); // Arrays are leaf nodes
  });
});
