import naiveMatrixMultiplication from '../../algorithms/naiveMatrixMultiplication';

describe('naiveMatrixMultiplication', () => {
  test('it returns the right sum for a 2x2 matrix', () => {
    expect(
      naiveMatrixMultiplication(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [9, 8],
          [5, 6],
        ],
      ),
    ).toEqual([
      [19, 20],
      [47, 48],
    ]);
  });

  test('it returns the right sum for a 3x3 matrix', () => {
    expect(
      naiveMatrixMultiplication(
        [
          [9, 8, 2],
          [2, 4, 4],
          [6, 1, -9],
        ],
        [
          [-3, 9, -2],
          [11, 2, 1],
          [-5, -6, 3],
        ],
      ),
    ).toEqual([
      [51, 85, -4],
      [18, 2, 12],
      [38, 110, -38],
    ]);
  });

  test('it returns the right sum for a 3x1 matrix', () => {
    expect(
      naiveMatrixMultiplication(
        [
          [9, 8, 2],
          [2, 4, 4],
          [6, 1, -9],
        ],
        [[-3], [11], [-5]],
      ),
    ).toEqual([[51], [18], [38]]);
  });

  test('it returns the right sum for a 1x3 matrix', () => {
    expect(
      naiveMatrixMultiplication(
        [[9, 8, 2]],
        [
          [-3, 1, 2],
          [11, -5, 0],
          [-5, 2, 1],
        ],
      ),
    ).toEqual([[51, -27, 20]]);
  });
});
