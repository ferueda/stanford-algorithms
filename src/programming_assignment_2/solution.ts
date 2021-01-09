import countInversions from '../algorithms/countInversions';
import fs from 'fs';

const integerArray = fs
  .readFileSync(
    './integerArray.txt',
    'utf-8',
  )
  .split(/\n/gi)
  .map((str) => Number(str));

const result = countInversions(integerArray);

console.log(result);
