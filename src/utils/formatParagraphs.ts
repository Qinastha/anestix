export const formatParagraphs = (text: string): string[] => {
  return text.split(/(?<=\.)\s+/);
};
