export function sortByLabel<T extends { label: string }>(
  locale: string,
  translate: (key: string) => string,
  items?: T[]
): T[] {
  if (!items) return [];
  return [...items].sort((a, b) =>
    translate(a.label)
      .toLocaleLowerCase()
      .localeCompare(translate(b.label).toLocaleLowerCase(), locale, {
        sensitivity: 'base',
        ignorePunctuation: true,
      })
  );
}
