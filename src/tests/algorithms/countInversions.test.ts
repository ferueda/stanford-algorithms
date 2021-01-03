import countInversions from '../../algorithms/countInversions';

describe('countInversions', () => {
  test('empty array should return 0', () => {
    expect(countInversions([])).toBe(0);
  });

  test('1 value array should return 0', () => {
    expect(countInversions([2])).toBe(0);
  });

  test('sorted array should return 0 inversios', () => {
    expect(countInversions([1, 2, 3, 4, 5])).toBe(0);
  });

  test('it should return the right number of inversions for each input array', () => {
    expect(countInversions([2, 1, 3, 4, 5])).toBe(1);
    expect(countInversions([5, 4, 3, 2, 1])).toBe(10);
    expect(countInversions([1, 2, 3, 4, 6, 5])).toBe(1);
    expect(countInversions([2, 1, 3, 4, 6, 5])).toBe(2);
    expect(countInversions([6, 1, 2, 5, 4, 3])).toBe(8);
  });
});
