import { convertToTree } from "./solution";

describe("Lab 12: Array-to-Tree Converter", () => {
  test("should convert a simple flat list to a nested tree", () => {
    const input = [
      { id: 1, name: "Root", parentId: null },
      { id: 2, name: "Child", parentId: 1 },
    ];
    const result = convertToTree(input);

    expect(result.length).toBe(1);
    expect(result[0].id).toBe(1);
    expect(result[0].children[0].id).toBe(2);
  });

  test("should handle deep nesting (multiple levels)", () => {
    const input = [
      { id: 1, parentId: null },
      { id: 2, parentId: 1 },
      { id: 3, parentId: 2 },
      { id: 4, parentId: 3 },
    ];
    const result = convertToTree(input);
    expect(result[0].children[0].children[0].children[0].id).toBe(4);
  });

  test("should handle multiple root nodes", () => {
    const input = [
      { id: 1, parentId: null },
      { id: 2, parentId: null },
    ];
    const result = convertToTree(input);
    expect(result.length).toBe(2);
  });

  test("should not include children that have no valid parent in the input", () => {
    const input = [
      { id: 2, parentId: 99 }, // Parent 99 doesn't exist
    ];
    const result = convertToTree(input);
    expect(result.length).toBe(0);
  });
});
