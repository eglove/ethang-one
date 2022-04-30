export const randomNumberClientSide = (): number => {
  if (typeof window === 'undefined') {
    return Math.random();
  }

  const array = new Uint32Array(1);
  return globalThis.crypto.getRandomValues(array)[0];
};
