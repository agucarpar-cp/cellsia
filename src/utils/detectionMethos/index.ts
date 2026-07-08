import { checkIfNumber } from "../helpers/helpers";
import { cellsMethosPercentage } from "../libs/lib";

function validateSample(sample: number[], minLength: number): boolean {
  if (!sample || sample.length < minLength) return false;
  return sample.every(checkIfNumber);
}

export function evenZeroesMethod(sample: number[]): boolean {
  if (!validateSample(sample, 1)) return false;
  const sampleLength = sample.length;

  const isEvenIndex = (index: number) => index % 2 === 0;
  const isZero = (value: number) => value === 0;
  const isPositiveCell = (value: number, index: number) =>
    isEvenIndex(index) && isZero(value);

  const positiveCells = sample.filter(isPositiveCell).length;

  return positiveCells > sampleLength * cellsMethosPercentage.evenZeroesMethod;
}

export function contiguousOnesMethod(sample: number[]): boolean {
  if (!validateSample(sample, 2)) return false;
  const sampleLength = sample.length;
  let countContiguousOnes = 0;
  for (let i = 0; i < sampleLength - 1; i++) {
    if (sample[i] === 1 && sample[i + 1] === 1) {
      countContiguousOnes++;
    }
  }

  return (
    countContiguousOnes >
    sampleLength * cellsMethosPercentage.contiguousOnesMethod
  );
}

export function surroundedOnesByZeroesMethod(sample: number[]): boolean {
  if (!validateSample(sample, 3)) return false;

  const sampleLength = sample.length;

  let surroundedOnes = 0;
  for (let i = 1; i < sampleLength - 1; i++) {
    if (sample[i - 1] === 0 && sample[i] === 1 && sample[i + 1] === 0) {
      surroundedOnes++;
    }
  }

  return (
    surroundedOnes > sampleLength * cellsMethosPercentage.surroundedOnesByZeroes
  );
}
