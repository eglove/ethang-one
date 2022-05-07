export const range = (number: number): number[] => {
  return [...Array.from({ length: number }).keys()];
};

export const zeroPadNumber = (number: number, spaces = 2): string => {
  return String(number).padStart(spaces, '0');
};
