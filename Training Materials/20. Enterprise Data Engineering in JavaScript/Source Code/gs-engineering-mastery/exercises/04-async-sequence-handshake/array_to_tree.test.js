const { arrayToTree } = require("./array_to_tree");

describe("Lab R-09: Array-to-Tree O(n) Verification", () => {
  const flatData = [
    { id: 1, name: "Global Markets", parentId: null },
    { id: 2, name: "Equities", parentId: 1 },
    { id: 3, name: "Cash Desk", parentId: 2 },
    { id: 4, name: "Fixed Income", parentId: 1 },
  ];

  test("should transform flat array into a nested hierarchy", () => {
    const tree = arrayToTree(flatData);

    // Assert Root
    expect(tree[0].name).toBe("Global Markets");
    expect(tree[0].children.length).toBe(2); // Equities and Fixed Income

    // Assert Deep Nesting
    const equities = tree[0].children.find((c) => c.name === "Equities");
    expect(equities.children[0].name).toBe("Cash Desk");
  });

  test("should handle multiple root nodes", () => {
    const data = [
      { id: 1, name: "Root A", parentId: null },
      { id: 2, name: "Root B", parentId: null },
    ];
    const tree = arrayToTree(data);
    expect(tree.length).toBe(2);
  });
});
