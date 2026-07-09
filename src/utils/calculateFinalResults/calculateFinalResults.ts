import type { TypeArrayMethodResult } from "../../types/typeMethosResults";

export function calculateFinalResult(methodsResults: TypeArrayMethodResult) {
  const resultsLength = methodsResults.length;
  const countTrueResults = methodsResults.filter(
    (result) => result.value,
  ).length;
  const finalResult = countTrueResults > resultsLength / 2;
  return finalResult;
}
