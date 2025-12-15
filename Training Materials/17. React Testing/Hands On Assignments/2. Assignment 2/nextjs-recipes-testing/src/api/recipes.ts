
export async function fetchRecipes(): Promise<string[]> {
  // In a real app, you'd fetch from an API. Here we simulate with a small delay.
  await new Promise((r) => setTimeout(r, 50));
  return ['Ramen', 'Paella', 'Biriyani', 'Tacos'];
}
