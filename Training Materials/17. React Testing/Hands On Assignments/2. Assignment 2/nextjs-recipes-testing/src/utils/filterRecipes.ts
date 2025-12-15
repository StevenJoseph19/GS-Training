
export function filterRecipes(query: string | undefined, items: string[]): string[] {
  const q = String(query ?? '').toLowerCase();
  return items.filter((name) => name.toLowerCase().includes(q));
}
