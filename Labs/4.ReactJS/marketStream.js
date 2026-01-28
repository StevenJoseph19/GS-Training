/**
 * Simulated Market Data Stream
 * This utility mimics a WebSocket connection pushing high-frequency price updates.
 */
export const startMarketStream = (callback) => {
  const tickers = ['GS', 'AAPL', 'MSFT', 'TSLA', 'AMZN', 'GOOGL', 'NFLX', 'NVDA'];
  
  // 1. Create initial baseline data
  let marketData = tickers.map(symbol => ({
    symbol,
    price: Math.random() * 1000 + 100,
    change: 0
  }));

  // 2. Simulate the "Push" every 100ms
  const interval = setInterval(() => {
    marketData = marketData.map(asset => {
      const volatility = (Math.random() - 0.5) * 2; // Price moves up or down
      const newPrice = asset.price + volatility;
      return {
        ...asset,
        price: parseFloat(newPrice.toFixed(2)),
        change: parseFloat(volatility.toFixed(2))
      };
    });

    // 3. Send the entire updated list to the subscriber (Redux/Zustand)
    callback([...marketData]); 
  }, 100);

  // Return a cleanup function to prevent memory leaks
  return () => clearInterval(interval);
};