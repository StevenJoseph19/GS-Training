import { bridgeObjects } from "./solution";

describe("Lab 05: Prototype Bridge", () => {
  test("child should access parent properties via the bridge", () => {
    const parent = {
      greet: function () {
        return `Hello from ${this.name}`;
      },
      isParent: true,
    };
    const child = { name: "Junior" };

    bridgeObjects(child, parent);

    expect(child.isParent).toBe(true);
    expect(child.greet()).toBe("Hello from Junior");
  });

  test("should verify the prototype link is live (not a copy)", () => {
    const parent = { version: 1 };
    const child = {};

    bridgeObjects(child, parent);

    // Update parent after the bridge is built
    parent.version = 2;

    // Child should see the update because it's a reference link
    expect(child.version).toBe(2);
  });

  test("should work with multiple levels of inheritance", () => {
    const grandParent = { legacy: "gold" };
    const parent = {};
    const child = {};

    bridgeObjects(parent, grandParent);
    bridgeObjects(child, parent);

    expect(child.legacy).toBe("gold");
    expect(grandParent.isPrototypeOf(child)).toBe(true);
  });
});
