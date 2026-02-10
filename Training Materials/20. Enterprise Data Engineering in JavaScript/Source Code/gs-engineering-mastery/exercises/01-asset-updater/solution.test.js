const { updateAssetPath } = require("./solution");

describe("Exercise 01: Asset Updater", () => {
  test("should mutate the original object at a deep path", () => {
    const asset = { details: { risk: { score: "B" } } };
    updateAssetPath(asset, "details.risk.score", "A+");

    expect(asset.details.risk.score).toBe("A+");
  });

  test("should create the path if it does not exist", () => {
    const asset = {};
    updateAssetPath(asset, "meta.tags.active", true);

    expect(asset.meta.tags.active).toBe(true);
  });
});
