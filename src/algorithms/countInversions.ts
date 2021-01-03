function mergeCount(left: number[], right: number[]): { output: number[]; count: number } {
  let count = 0;
  let leftCounter = 0;
  let rightCounter = 0;
  const output: number[] = [];

  while (leftCounter < left.length && rightCounter < right.length) {
    if (left[leftCounter] < right[rightCounter]) {
      output.push(left[leftCounter]);
      leftCounter += 1;
    } else {
      output.push(right[rightCounter]);
      count += left.length - leftCounter;
      rightCounter += 1;
    }
  }

  return {
    output: output.concat(left.slice(leftCounter)).concat(right.slice(rightCounter)),
    count,
  };
}

function countInversions(input: number[]): { output: number[]; count: number } {
  if (input.length < 2) return { output: input, count: 0 };

  const middle = Math.floor(input.length / 2);

  const { output: left, count: a } = countInversions(input.slice(0, middle));
  const { output: right, count: b } = countInversions(input.slice(middle));
  const { output, count: c } = mergeCount(left, right);

  return { output, count: a + b + c };
}

function getNumberOfInversions(input: number[]): number {
  return countInversions(input).count;
}

export default getNumberOfInversions;
