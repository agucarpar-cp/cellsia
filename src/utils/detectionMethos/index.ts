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
