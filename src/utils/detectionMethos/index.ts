export function evenZeroesMethod(sample: number[]): boolean {
  if (!sample || sample.length === 0) return false;

  const isEvenIndex = (index: number) => index % 2 === 0;
  const isZero = (value: number) => value === 0;
  const isPositiveCell = (value: number, index: number) =>
    isEvenIndex(index) && isZero(value);

  const totalCells = sample.length;
  const positiveCells = sample.filter(isPositiveCell).length;
  const percentageRequired = 0.3;

  const result = positiveCells > totalCells * percentageRequired;

  return result;
}

export function contiguousOnesMethod(sample: number[]): boolean {
  if (!sample || sample.length === 0) return false;
  let countContiguousOnes = 0;
  for (let i = 0; i < sample.length - 1; i++) {
    if (sample[i] === 1 && sample[i + 1] === 1) {
      countContiguousOnes++;
    }
  }

  const percentageRequired = 0.2;

  return countContiguousOnes > sample.length * percentageRequired;
}

export function surroundedOnesByZeroes(sample: number[]): boolean {
  if (!sample || sample.length === 0) return false;
  let surroundedOnes = 0;
  for (let i = 1; i < sample.length - 1; i++) {
    if (sample[i] === 1 && sample[i + 1] === 0 && sample[i - 1] === 0) {
      surroundedOnes++;
    }
  }

  const percentageRequired = 0.1;

  return surroundedOnes > sample.length * percentageRequired;
}
