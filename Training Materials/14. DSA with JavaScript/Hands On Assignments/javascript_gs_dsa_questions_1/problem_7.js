// Problem: Implement BFS traversal for a graph starting from a given node.
// Hints: Use a queue and a visited set to track nodes.
// Examples:
// Input: { A: ['B','C'], B:['A','D'], C:['A'], D:['B'] }, start='A'
// Output: ['A','B','C','D']
// Input: { A: ['B','C'], B:['A','D'], C:['A'], D:['B','E'], E:['D'] }, start='A'
// Output: ['A','B','C','D','E']

function bfs(graph, startNode) {
  // TODO: implement
}

const graph1 = { A: ["B", "C"], B: ["A", "D"], C: ["A"], D: ["B"] };
console.log(bfs(graph1, "A")); // [ 'A', 'B', 'C', 'D' ]
const graph2 = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B", "E"],
  E: ["D"],
};
console.log(bfs(graph2, "A")); // [ 'A', 'B', 'C', 'D', 'E' ]
