export const isNullOrUndefined = <Type>(value?: Type): boolean => {
  return value === null || typeof value === 'undefined';
};
