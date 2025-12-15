
// Plain TS utility: filter items by case-insensitive substring match
export function filterBooks(query: string | undefined, items: string[]): string[] {
  const q = String(query ?? '').toLowerCase();
  return items.filter((name) => name.toLowerCase().includes(q));
}
