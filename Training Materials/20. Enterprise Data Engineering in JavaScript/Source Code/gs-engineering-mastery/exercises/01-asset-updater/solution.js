// The Data (The House)
const myAsset = {
  id: "GS-9921",
  details: {
    price: 150,
    risk: {
      rating: {
        score: "A",
      },
    },
  },
};

/**
 * Exercise: updateAssetPath
 * Goal: Update a nested property using a dot-notation path.
 * Constraint: MUST mutate the original object (No return).
 */
function updateAssetPath(obj, path, newValue) {
  // TODO: Implement the Pointer Navigation logic
  // 1. Split path
  // 2. Loop and slide pointer
  // 3. Mutate in-place
}

module.exports = { updateAssetPath };

// EXECUTION
updateAssetPath(myAsset, "details.risk.rating.score", "A+");
updateAssetPath(myAsset, "details.lastUpdated", Date.now());

console.log(JSON.stringify(myAsset, null, 2));
