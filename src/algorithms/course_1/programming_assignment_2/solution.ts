import countInversions from '../../countInversions';
import fs from 'fs';

const integerArray = fs
  .readFileSync('../../../src/course_1/programming_assignment_2/integerArray.txt', 'utf-8')
  .split(/\n/gi)
  .map((str) => Number(str));

const result = countInversions(integerArray);

console.log(result);
