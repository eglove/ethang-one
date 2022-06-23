import { zigzagTraverse } from './zigzag-traverse';

describe('zigzag traverse', () => {
  it('should work', () => {
    for (const sample of samples) {
      expect(zigzagTraverse(sample.array)).toEqual(sample.expected);
    }
  });
});

const samples = [
  {
    array: [
      [1, 3, 4, 10],
      [2, 5, 9, 11],
      [6, 8, 12, 15],
      [7, 13, 14, 16],
    ],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  {
    array: [[1]],
    expected: [1],
  },
  {
    array: [[1, 2, 3, 4, 5]],
    expected: [1, 2, 3, 4, 5],
  },
  {
    array: [[1], [2], [3], [4], [5]],
    expected: [1, 2, 3, 4, 5],
  },
  {
    array: [
      [1, 3],
      [2, 4],
      [5, 7],
      [6, 8],
      [9, 10],
    ],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    array: [
      [1, 3, 4, 7, 8],
      [2, 5, 6, 9, 10],
    ],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    array: [
      [1, 3, 4, 10, 11],
      [2, 5, 9, 12, 19],
      [6, 8, 13, 18, 20],
      [7, 14, 17, 21, 24],
      [15, 16, 22, 23, 25],
    ],
    expected: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
  },
  {
    array: [
      [1, 3, 4, 10, 11, 20],
      [2, 5, 9, 12, 19, 21],
      [6, 8, 13, 18, 22, 27],
      [7, 14, 17, 23, 26, 28],
      [15, 16, 24, 25, 29, 30],
    ],
    expected: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
  },
  {
    array: [
      [1, 3, 4, 10, 11],
      [2, 5, 9, 12, 20],
      [6, 8, 13, 19, 21],
      [7, 14, 18, 22, 27],
      [15, 17, 23, 26, 28],
      [16, 24, 25, 29, 30],
    ],
    expected: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
  },
  {
    array: [
      [1, 21, -3, 4, 15, 6, -7, 88, 9],
      [10, 11, 112, 12, 20, -1, -2, -3, -4],
      [6, 8, 113, 19, 21, 0, 0, 0, 0],
      [7, 2, 18, 22, -27, 12, 32, -111, 66],
      [15, 17, 23, 226, 28, -28, -226, -23, -17],
      [16, 24, 27, 299, 30, 29, 32, 31, 88],
    ],
    expected: [
      1, 10, 21, -3, 11, 6, 7, 8, 112, 4, 15, 12, 113, 2, 15, 16, 17, 18, 19,
      20, 6, -7, -1, 21, 22, 23, 24, 27, 226, -27, 0, -2, 88, 9, -3, 0, 12, 28,
      299, 30, -28, 32, 0, -4, 0, -111, -226, 29, 32, -23, 66, -17, 31, 88,
    ],
  },
];
