// Problem Statement
// Implement a function efficientFilter(data, criteria) that can filter a list of 100,000+ records
// based on multiple keys (e.g., name, category, priceRange) while maintaining a "Frame Budget" of 16ms (60fps).
// In modern web development and high-performance engineering, the 16ms Frame Budget is the window of time your
// code has to complete all its work before the user notices a visual "hiccup" or lag.

// Most standard computer monitors refresh at a rate of 60 times per second (60Hz). To ensure the user sees a smooth, fluid animation or scrolling experience, the browser must deliver a new frame every time the screen refreshes.$$1 \text{ second} \div 60 \text{ frames} = 16.66 \text{ms per frame}$$If your JavaScript execution (like a heavy data filter or a recursive object
// transformation) takes 30ms, the browser is forced to skip a frame. This is known as "dropping a frame" or "jank."

// The Goldman Twist:
// 1. A standard .filter() with multiple .includes() checks inside can become sluggish at scale.
// 2. You must implement Search Indexing (Pre-computation).
// 3. You should demonstrate how to "warm up" the data so that subsequent searches are instantaneous.

// Why this matters to Goldman Sachs:
// Goldman UI developers work with real-time tickers and massive order books.
// "Virtualization" only works if the underlying data filtering is just as fast.
// This lab tests your ability to optimize for the "Main Thread" and prevent UI jank.

/**
 * A performance-optimized filter class.
 */
export class DataIndexer {
  constructor(data) {
    this.data = data;
    // TODO: Initialize a Map to serve as your "Category Index".
    // Requirement: The index should map a category name to an array of indices where that category appears.

    // TODO: "Warm up" the data by iterating through this.data once.
    // Populate your categoryIndex so that lookups are O(1) later.
  }

  /**
   * Filters data using pre-computed indices where possible.
   * @param {Object} criteria - { category: string, minPrice: number, searchTerm: string }
   */
  filter(criteria) {
    // TODO: Determine the "Fast Path".
    // If the criteria contains a category, fetch the pre-computed indices from your Map.

    // TODO: Prepare the data source.
    // If you found indices in the Map, map them back to the actual data objects.
    // If no indexed criteria was provided, default to using the entire dataset.

    // TODO: Implement the "Standard Path" (Narrowing down).
    // Filter the source based on non-indexed criteria like 'minPrice' or 'searchTerm'.
    // Note: Ensure the search term check is case-insensitive.

    // TODO: Return the filtered array.
    throw new Error("Not implemented");
  }
}
