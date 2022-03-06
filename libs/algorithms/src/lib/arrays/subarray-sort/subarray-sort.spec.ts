import { logAverageTime } from '../../util/test-util';
import { subarraySort } from './subarray-sort';

describe('subarray sort', () => {
  it('should work with the original implementation', () => {
    const times = [];

    for (const sample of samples) {
      const startTime = Date.now();
      expect(subarraySort(sample.array)).toEqual(sample.result);
      times.push(Date.now() - startTime);
    }

    logAverageTime(times);
  });
});

const samples = [
  {
    array: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19],
    result: [3, 9],
  },
  {
    array: [1, 2],
    result: [-1, -1],
  },
  {
    array: [2, 1],
    result: [0, 1],
  },
  {
    array: [1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19],
    result: [4, 9],
  },
  {
    array: [1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19],
    result: [4, 6],
  },
  {
    array: [1, 2, 8, 4, 5],
    result: [2, 4],
  },
  {
    array: [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7],
    result: [0, 12],
  },
  {
    array: [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57],
    result: [0, 11],
  },
  {
    array: [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57],
    result: [1, 11],
  },
  {
    array: [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7],
    result: [1, 12],
  },
  {
    array: [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11],
    result: [6, 7],
  },
  {
    array: [1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19],
    result: [6, 16],
  },
  {
    array: [
      1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      19, 4, 14, 11, 6, 33, 35, 41, 55,
    ],
    result: [4, 24],
  },
  {
    array: [
      1, 2, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
    result: [2, 19],
  },
  {
    array: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2,
    ],
    result: [2, 19],
  },
  {
    array: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    result: [-1, -1],
  },
  {
    array: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
    result: [-1, -1],
  },
];
