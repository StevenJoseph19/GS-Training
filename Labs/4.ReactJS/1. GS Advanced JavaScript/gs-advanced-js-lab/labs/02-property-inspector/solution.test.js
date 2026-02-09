import { getOwnKeys, getAllKeys } from "./solution";

describe("Lab 02: Property Inspector", () => {
  let parent;
  let child;

  beforeEach(() => {
    parent = { inheritedKey: "I am from parent" };
    child = Object.create(parent);
    child.ownKey = "I am from child";
  });

  test("getOwnKeys should only return properties defined on the instance", () => {
    const keys = getOwnKeys(child);
    expect(keys).toContain("ownKey");
    expect(keys).not.toContain("inheritedKey");
    expect(keys.length).toBe(1);
  });

  test("getAllKeys should return both instance and prototype properties", () => {
    const keys = getAllKeys(child);
    expect(keys).toContain("ownKey");
    expect(keys).toContain("inheritedKey");
    expect(keys.length).toBe(2);
  });

  test("should handle shadowing (property existing in both levels)", () => {
    const shadowParent = { version: 1 };
    const shadowChild = Object.create(shadowParent);
    shadowChild.version = 2;

    const keys = getAllKeys(shadowChild);
    expect(keys).toContain("version");
    expect(keys.length).toBe(1); // Should not have duplicates
    expect(shadowChild.version).toBe(2);
  });

  test("should return empty array for null/undefined", () => {
    expect(getOwnKeys({})).toEqual([]);
    expect(getAllKeys({})).toEqual([]);
  });
});
