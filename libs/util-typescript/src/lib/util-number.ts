export const randomNumberClientSide = (): number => {
  const array = new Uint32Array(1);
  return globalThis.crypto.getRandomValues(array)[0];
};
