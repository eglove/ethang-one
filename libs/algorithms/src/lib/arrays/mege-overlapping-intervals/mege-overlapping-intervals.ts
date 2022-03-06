export const mergeOverlappingIntervals = (array: number[][]): number[][] => {
  const sortedIntervals = array.sort((a, b) => {
    return a[0] - b[0];
  });

  const mergedIntervals: number[][] = [];
  let currentInterval = sortedIntervals[0];
  mergedIntervals.push(currentInterval);

  for (const nextInterval of sortedIntervals) {
    const [, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
};
