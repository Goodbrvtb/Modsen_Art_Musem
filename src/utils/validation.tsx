export const checkCyrillic = (text: string) => {
  const cyrillicPattern = /[\u0400-\u04FF]/;
  return cyrillicPattern.test(text);
};
