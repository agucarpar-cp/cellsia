export function evenZeroesMethod(sample: number[]): boolean {
  const sampleLength = sample.length;
  if (!sample || sampleLength === 0 || sampleLength < 2) return false;

  const isEvenIndex = (index: number) => index % 2 === 0;
  const isZero = (value: number) => value === 0;
  const isPositiveCell = (value: number, index: number) =>
    isEvenIndex(index) && isZero(value);

  const positiveCells = sample.filter(isPositiveCell).length;
  const percentageRequired = 0.3;

  return positiveCells > sampleLength * percentageRequired;
}

export function contiguousOnesMethod(sample: number[]): boolean {
  const sampleLength = sample.length;

  if (!sample || sampleLength === 0 || sampleLength < 2) return false;
  let countContiguousOnes = 0;
  for (let i = 0; i < sampleLength - 1; i++) {
    if (sample[i] === 1 && sample[i + 1] === 1) {
      countContiguousOnes++;
    }
  }

  const percentageRequired = 0.2;

  return countContiguousOnes > sampleLength * percentageRequired;
}

export function surroundedOnesByZeroes(sample: number[]): boolean {
  const sampleLength = sample.length;

  if (!sample || sampleLength === 0 || sampleLength < 3) return false;
  let surroundedOnes = 0;
  for (let i = 1; i < sampleLength - 1; i++) {
    if (sample[i - 1] === 0 && sample[i] === 1 && sample[i + 1] === 0) {
      surroundedOnes++;
    }
  }

  const percentageRequired = 0.1;

  return surroundedOnes > sampleLength * percentageRequired;
}
