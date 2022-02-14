import { logAverageTime } from '../../util/test-util';
import {
  firstDuplicateValue,
  firstDuplicateValueOptimized,
} from './first-duplicate-value';

describe('first duplicate value', () => {
  it('should work with the original implementation', () => {
    const times = [];

    for (const sample of samples) {
      const startTime = Date.now();
      expect(firstDuplicateValue(sample.array)).toEqual(sample.result);
      times.push(Date.now() - startTime);
    }

    logAverageTime(times);
  });

  it('should work with the optimized implementation', () => {
    const times = [];

    for (const sample of samples) {
      const startTime = Date.now();
      expect(firstDuplicateValueOptimized(sample.array)).toEqual(sample.result);
      times.push(Date.now() - startTime);
    }

    logAverageTime(times);
  });
});

const samples = [
  {
    array: [2, 1, 5, 2, 3, 3, 4],
    result: 2,
  },
  {
    array: [2, 1, 5, 3, 3, 2, 4],
    result: 3,
  },
];
