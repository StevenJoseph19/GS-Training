/**
 * LAB R-10: The Ultimate Flattener (Capstone)
 * Goal: Integrate all previous labs into a cohesive Trading Engine.
 */
const { setDeep } = require("../03-reactive-data-pipeline/solution");
const { Instrument } = require("./prototype_bridge");
const { memoize } = require("../03-reactive-data-pipeline/memoizer");
const {
  executeTradeSequence,
} = require("../04-async-sequence-handshake/solution");
const { flatten } = require("./flattener");

class TradingEngine {
  constructor() {
    // This will hold our flattened "Source of Truth"
  }

  /**
   * STEP 1: Process the initial API Snapshot
   */
  ingestMarketData(nestedSnapshot) {
    // Flatten the data for O(1) performance
    // Bridge each asset to the Instrument Prototype for valuation logic
  }

  /**
   * STEP 2: Reactive Update
   */

  updatePrice(assetId, newPrice) {}

  /**
   * STEP 3: Execution
   */
  async handleTrade(assetId, amount) {}
}

module.exports = { TradingEngine };
