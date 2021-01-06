// export function split(input: string): string[] {
//   const len = input.length;
//   const half = Math.floor(len / 2);

//   if (len < 2) throw Error("Can't divide the number");

//   const firstHalf = input.slice(0, half);
//   const secondHalf = input.slice(half);

//   return [firstHalf.toString(), secondHalf.toString()];
// }

// function karatsubaMultiplication(input1: string, input2: string): bigint {
//   const num1 = BigInt(input1);
//   const num2 = BigInt(input2);

//   if (num1 < 10n || num2 < 10n) {
//     return BigInt(input1) * BigInt(input2);
//   }

//   const n = BigInt(input1.length + input2.length);
//   const middle = n / 2n;

//   const [a, b] = split(input1);
//   const [c, d] = split(input2);

//   const ac = karatsubaMultiplication(a, c);
//   const bd = karatsubaMultiplication(b, d);
//   const ad = karatsubaMultiplication(a, d);
//   const bc = karatsubaMultiplication(b, c);

//   return 10n ** n * ac + 10n ** middle * (ad + bc) + bd;
//   // const abcd = BigInt(
//   //   karatsubaMultiplication((BigInt(a) + BigInt(b)).toString(), (BigInt(c) + BigInt(d)).toString()),
//   // );

//   // const gaussTrick = abcd - ac - bd;

//   // return (ac * 10n ** (2n * middle) + gaussTrick * 10n ** middle + bd).toString();
// }

function karatsubaMultiplication(input1: string, input2: string): bigint {
  if (BigInt(input1) < 10n && BigInt(input2) < 10n) {
    return BigInt(input1) * BigInt(input2);
  }

  const input1Middle = Math.floor(input1.length / 2);
  const input2Middle = Math.floor(input2.length / 2);

  const a = input1.slice(0, input1Middle);
  const b = input1.slice(input1Middle);
  const c = input2.slice(0, input2Middle);
  const d = input2.slice(input2Middle);

  return merge(a, b, c, d);
}

function merge(a: string, b: string, c: string, d: string): bigint {
  const n = BigInt(a.length + b.length);
  const middle = n / 2n;

  const ac = karatsubaMultiplication(a, c);
  const bd = karatsubaMultiplication(b, d);
  const ad = karatsubaMultiplication(a, d);
  const bc = karatsubaMultiplication(b, c);

  return 10n ** n * ac + 10n ** middle * (ad + bc) + bd;
}

export default karatsubaMultiplication;
