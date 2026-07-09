import { useState, useEffect } from "react";
import { methodsNamesList } from "../../../utils/libs/lib";
import { Stack, Typography } from "@mui/material";
import type { TypeArrayMethodResult } from "../../../types/typeMethosResults";

interface IPropsWrapperDisplayResults {
  resultsMethods: TypeArrayMethodResult;
}

export const WrapperDisplayResults = ({
  resultsMethods,
}: IPropsWrapperDisplayResults) => {
  const [finalResult, setFinalResult] = useState<boolean | null>(null);

  function calculateFinalResult(methodsResults: TypeArrayMethodResult) {
    const resultsLength = methodsResults.length;
    const countTrueResults = methodsResults.filter(
      (result) => result.value,
    ).length;
    const finalResult = countTrueResults > resultsLength / 2;
    setFinalResult(finalResult);
  }

  useEffect(() => {
    calculateFinalResult(resultsMethods);
  }, [resultsMethods]);
  return (
    <Stack>
      <ol>
        {resultsMethods.map(({ method, value }, index) => (
          <li key={method + index}>
            {methodsNamesList.find((m) => m.value === method)?.label}:{" "}
            {value ? "Positive" : "Negative"}
          </li>
        ))}
      </ol>
      <Typography>
        Final Result:{" "}
        {finalResult === null ? "N/A" : finalResult ? "Positive" : "Negative"}
      </Typography>
    </Stack>
  );
};
