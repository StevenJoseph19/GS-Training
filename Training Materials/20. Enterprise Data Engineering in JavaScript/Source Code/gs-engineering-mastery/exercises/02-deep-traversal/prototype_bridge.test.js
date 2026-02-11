const {
  InstrumentPrototype,
  buildBridge,
  sampleAsset,
} = require("./prototype_bridge");

describe("Lab R-05: Prototype Bridge Verification", () => {
  test("should link asset to InstrumentPrototype", () => {
    const bridgedAsset = buildBridge(sampleAsset);

    // Verify inheritance: The method exists on the asset
    expect(bridgedAsset.calculateValue).toBeDefined();
    expect(bridgedAsset.calculateValue(0.1)).toBe(100000);
  });

  test('should NOT have the method as an "Owned" property', () => {
    const bridgedAsset = buildBridge(sampleAsset);

    // The "Legal Deed" check: The method is inherited, not owned
    const hasOwn = Object.prototype.hasOwnProperty.call(
      bridgedAsset,
      "calculateValue",
    );
    expect(hasOwn).toBe(false);
  });

  test("should recognize the prototype in the chain", () => {
    const bridgedAsset = buildBridge(sampleAsset);
    const proto = Object.getPrototypeOf(bridgedAsset);

    expect(proto).toBe(InstrumentPrototype);
  });
});
