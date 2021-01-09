function partition(list: number[], lower: number, higher: number): number {
  const pivot = list[Math.floor((lower + higher) / 2)];

  while (lower <= higher) {
    while (list[lower] < pivot) {
      lower += 1;
    }

    while (list[higher] > pivot) {
      higher -= 1;
    }

    if (lower <= higher) {
      [list[lower], list[higher]] = [list[higher], list[lower]];

      lower += 1;
      higher -= 1;
    }
  }

  return lower;
}

function quickSort(list: number[], lower: number = 0, higher: number = list.length - 1): number[] {
  if (list.length < 2) return list;

  const pivot = partition(list, lower, higher);

  if (lower < pivot - 1) {
    quickSort(list, lower, pivot - 1);
  }

  if (higher > pivot) {
    quickSort(list, pivot, higher);
  }

  return list;
}

export default quickSort;
