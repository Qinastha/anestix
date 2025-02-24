export function sortByLabel<T extends { label: string }>(
  items?: T[],
  translator?: (label: string) => string
): T[] {
  if (!items) return [];
  return [...items].sort((a, b) => {
    const labelA = translator ? translator(a.label) : a.label;
    const labelB = translator ? translator(b.label) : b.label;
    return labelA.localeCompare(labelB);
  });
}
