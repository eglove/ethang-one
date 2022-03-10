type Pairs = Record<number, Array<[number, number]>>;

export const fourNumberSum = (
  array: number[],
  targetSum: number
): number[][] => {
  const allPairSums: Pairs = {};
  const quadruplets: number[][] = [];

  for (let index = 0; index < array.length - 1; index++) {
    for (let index2 = index + 1; index2 < array.length; index2++) {
      const currentSum = array[index] + array[index2];
      const difference = targetSum - currentSum;

      if (difference in allPairSums) {
        for (const pair of allPairSums[difference]) {
          quadruplets.push([...pair, array[index], array[index2]]);
        }
      }
    }

    for (let index3 = 0; index3 < index; index3++) {
      const currentSum = array[index] + array[index3];
      if (currentSum in allPairSums) {
        allPairSums[currentSum].push([array[index3], array[index]]);
      } else {
        allPairSums[currentSum] = [[array[index3], array[index]]];
      }
    }
  }

  return quadruplets;
};