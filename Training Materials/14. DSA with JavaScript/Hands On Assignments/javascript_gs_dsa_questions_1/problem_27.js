
// Problem: Design a data structure that follows the LRU (Least Recently Used) cache rules.
// Hints: Use a hash map for O(1) key lookups + a doubly linked list to track recency.
// Examples:
// Input: put(1,1), put(2,2), get(1), put(3,3), get(2)
// Output: 1 then -1

class LRUCache {
  constructor(capacity) {
    // TODO: initialize internal data structures
  }
  get(key) {
    // TODO: return value if present; update recency
  }
  put(key, value) {
    // TODO: insert/update; evict least recently used when over capacity
  }
}

// Test cases
const cache = new LRUCache(2);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1)); // 1
cache.put(3,3); // evicts key 2
console.log(cache.get(2)); // -1
cache.put(4,4); // evicts key 1
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
