# Goldman Sachs Advanced JavaScript & Data Engineering Lab

Welcome to the **GS Advanced Lab**. This repository is designed to bridge the gap between "knowing JavaScript" and "engineering JavaScript."

The problems here are derived from real interview feedback. They focus on **recursion, reference management, functional patterns, and performance optimization.**

## The 15-Lab Roadmap

### **Objects & Prototypes**

- **Lab 01: In-Place Flattener** – Learn to mutate objects by reference and manage memory without creating garbage.
- **Lab 02: Property Inspector** – Deep dive into the Prototype Chain and enumerable vs. non-enumerable properties.
- **Lab 03: setDeep Utility** – The "Pointer Pattern." Learn to navigate and build nested trees dynamically.
- **Lab 04: Deep Clone** – Go beyond `JSON.stringify`. Handle Dates, Functions, and circular references.
- **Lab 05: Prototype Bridge** – Manually link objects to understand how inheritance works under the hood.

### **Functional Logic (Closures & Async)**

- **Lab 06: Pure Flatten** – Practice the "Functional Programming" way of transforming data without side effects.
- **Lab 07: Value Extractor** – Learn to treat functions as first-class citizens by executing them during traversal.
- **Lab 08: Multi-Arg Memoizer** – Master closures and caching strategies for expensive computations.
- **Lab 09: Async Sequence** – Handle complex backend data flows using Promise waterfalls (without `async/await`).
- **Lab 10: Event Emitter** – Build a Pub/Sub system to understand how state management libraries notify the UI.

### **Enterprise Engineering (Scale & Robustness)**

- **Lab 11: Reverse Flatten** – Reconstruct complex objects from flat paths. (The "Final Boss" of many interviews).
- **Lab 12: Array-to-Tree Converter** – Solve hierarchical data problems with O(n) time complexity using Hash Maps.
- **Lab 13: Performance Filter** – Implement data indexing to keep UI filtering under the 16ms "jank" threshold.
- **Lab 14: Schema Validator** – Build defensive code to validate unpredictable backend API responses.
- **Lab 15: The Ultimate Flattener** – The culmination: Flattening, Function Execution, and Array handling in one recursive utility.

---

## How to Use This Lab

1. **Install Dependencies:**

```bash
npm install

```

2. **The Challenge:**
   Each lab is located in the `labs/` folder. Open `solution.js` in any lab. You will find a function that throws a `Not implemented` error.
3. **Run Tests:**
   To test your progress on a specific lab (e.g., Lab 15):

```bash
npx jest labs/15-ultimate-flattener

```

To run all tests:

```bash
npm test

```

4. **The Goal:**
   Your task is to make all **56 tests** turn green.

---

## Tips for the Interview

- **Clarify Constraints:** Always ask if you should mutate the input (Lab 01) or return a new object (Lab 06).
- **Handle Edge Cases:** Remember that `typeof null` is `'object'`. Always check for `null` and `undefined` (Lab 15).
- **Think About Complexity:** Don't just solve it; solve it efficiently. Use Maps for O(1) lookups instead of nested loops.
