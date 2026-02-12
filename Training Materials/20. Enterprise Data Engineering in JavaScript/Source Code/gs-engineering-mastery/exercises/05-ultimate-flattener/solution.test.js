const { TradingEngine } = require("./solution");

describe("Lab R-10: Capstone Integration Test", () => {
  let engine;

  beforeEach(() => {
    engine = new TradingEngine();
    const mockData = {
      desks: {
        equities: {
          // ADD THE TICKER INSIDE THE OBJECT
          assets: { GS: { ticker: "GS", price: 400, quantity: 100 } },
        },
      },
    };
    engine.ingestMarketData(mockData);
  });

  test("Full System Integrity: Flattening + Prototyping + Memoization", () => {
    // 1. Check Flattening (O(1) access)
    expect(engine.state["GS"]).toBeDefined();

    // 2. Check Prototyping (Inherited method)
    // Assuming Instrument has a 'getTicker()' method from Lab R-05
    expect(typeof engine.state["GS"].calculateRisk).toBe("function");

    // 3. Check Reactive Update
    engine.updatePrice("GS", 410);
    expect(engine.state["GS"].valuation).toBe(41000);
  });
});
