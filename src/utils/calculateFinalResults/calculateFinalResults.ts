import type { TypeArrayMethodResult } from "../../types/typeMethosResults";

export function calculateFinalResult(methodsResults: TypeArrayMethodResult) {
  if (methodsResults.length === 0) return null;
  const resultsLength = methodsResults.length;
  const countTrueResults = methodsResults.filter(
    (result) => result.value,
  ).length;
  const finalResult = countTrueResults > resultsLength / 2;
  return finalResult;
}
