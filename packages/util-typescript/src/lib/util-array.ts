export const randomizedArray = (length: number): number[] => {
  // Create array of given length, assign indexes to values
  const array: number[] = Array.from({
    length,
  });

  for (const [index, _] of array.entries()) {
    array[index] = index;
  }

  // Shuffle
  for (let index = array.length - 1; index > 0; index -= 1) {
    const index_ = Math.floor(Math.random() * index);
    const temporary = array[index];
    array[index] = array[index_];
    array[index_] = temporary;
  }

  return array;
};
