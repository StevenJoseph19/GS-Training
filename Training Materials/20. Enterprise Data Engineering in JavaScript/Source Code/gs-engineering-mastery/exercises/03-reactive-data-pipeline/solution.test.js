const { setDeep } = require("./solution.js");

describe("Lab R-03: setDeep Immutability Check", () => {
  const profile = {
    id: 1,
    info: { name: "Trader Joe", settings: { theme: "light" } },
  };

  test("should update nested value and return a NEW reference", () => {
    const updated = setDeep(profile, "info.settings.theme", "dark");

    expect(updated.info.settings.theme).toBe("dark");
    // Reference Integrity Checks
    expect(updated).not.toBe(profile); // Top level must be different
    expect(updated.info).not.toBe(profile.info); // Impacted level must be different
    expect(updated.id).toBe(profile.id); // Unimpacted data should be preserved
  });
});
