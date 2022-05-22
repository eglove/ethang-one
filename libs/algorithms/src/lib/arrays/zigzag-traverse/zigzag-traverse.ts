// eslint-disable-next-line sonarjs/cognitive-complexity
export const zigzagTraverse = (array: number[][]): number[] => {
  const height = array.length - 1;
  const width = array[0].length - 1;
  const result = [];
  let row = 0;
  let column = 0;
  let goingDown = true;

  while (!isOutOfBounds(row, column, height, width)) {
    result.push(array[row][column]);
    if (goingDown) {
      if (column === 0 || row === height) {
        goingDown = false;
        if (row === height) {
          column++;
        } else {
          row++;
        }
      } else {
        row++;
        column--;
      }
    } else if (row === 0 || column === width) {
      goingDown = true;
      if (column === width) {
        row++;
      } else {
        column++;
      }
    } else {
      row--;
      column++;
    }
  }

  return result;
};

const isOutOfBounds = (
  row: number,
  column: number,
  height: number,
  width: number
): boolean => {
  return row < 0 || row > height || column < 0 || column > width;
};
