import fs from 'fs';

type PivotType = 'FIRST' | 'MEDIAN' | 'LAST';

function swap(list: number[], lower: number, higher: number): void {
  [list[lower], list[higher]] = [list[higher], list[lower]];
}

function getQuickSortComparisons(
  list: number[],
  lower: number,
  higher: number,
  pivotType: PivotType,
  comparisons: number[],
): void {
  if (lower >= higher) return;

  let pivot: number;

  switch (pivotType) {
    case 'FIRST':
      pivot = list[lower];
      break;

    case 'MEDIAN':
      const median = Math.floor((lower + higher) / 2);
      pivot = list[median];
      swap(list, lower, median);
      break;

    case 'LAST':
      pivot = list[higher];
      swap(list, lower, higher);
      break;
  }

  comparisons.push(higher - lower);

  let i = lower + 1;

  for (let j = lower + 1; j <= higher + 1; j++) {
    if (list[j] < pivot) {
      swap(list, i, j);
      i += 1;
    }
  }

  swap(list, lower, i - 1);

  getQuickSortComparisons(list, lower, i - 2, pivotType, comparisons);
  getQuickSortComparisons(list, i, higher, pivotType, comparisons);
}

function getArrayToBeSorted(): number[] {
  return fs
    .readFileSync('../../src/programming_assignment_3/QuickSort.txt', 'utf-8')
    .split(/\n/gi)
    .map((str) => Number(str));
}

const toRun: PivotType[] = ['FIRST', 'MEDIAN', 'LAST'];

toRun.forEach((process) => {
  const comparisons: number[] = [];
  const arrayToBeSorted = getArrayToBeSorted();
  getQuickSortComparisons(arrayToBeSorted, 0, arrayToBeSorted.length - 1, process, comparisons);

  console.log(comparisons.reduce((acc, num) => acc + num, 0));
});
