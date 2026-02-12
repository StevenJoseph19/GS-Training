const { executeTradeSequence } = require("./solution");

describe("Lab R-08: Async Handshake Verification", () => {
  test("should reach CONFIRMED status for valid trades", async () => {
    const trade = { ticker: "GS", amount: 50000 };
    const result = await executeTradeSequence(trade);
    expect(result.status).toBe("CONFIRMED");
  });

  test("should abort and catch if validation fails", async () => {
    const bigTrade = { ticker: "GS", amount: 9999999 };
    try {
      await executeTradeSequence(bigTrade);
    } catch (e) {
      expect(e.message).toContain("Compliance Failure");
    }
  });
});
