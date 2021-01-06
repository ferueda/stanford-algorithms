function naiveMatrixMultiplication(matrix1: number[][], matrix2: number[][]): number[][] {
  const m1ColNum = matrix1.length;
  const m1RowNum = matrix1[0].length;
  const m2RowNum = matrix2[0].length;

  const output: number[][] = [];

  for (let i = 0; i < m1ColNum; i++) {
    const row: number[] = [];

    for (let j = 0; j < m2RowNum; j++) {
      let c = 0;

      for (let k = 0; k < m1RowNum; k++) {
        c += matrix1[i][k] * matrix2[k][j];
      }

      row.push(c);
    }

    output.push(row);
  }

  return output;
}

export default naiveMatrixMultiplication;
