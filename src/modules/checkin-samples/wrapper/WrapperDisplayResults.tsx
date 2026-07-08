import { useState, useEffect } from "react";
import { methodsNamesList } from "../../../utils/libs/lib";
import { Stack, Typography } from "@mui/material";

interface IPropsWrapperDisplayResults {
  resultsMethods: { value: boolean; method: string }[];
}

export const WrapperDisplayResults = ({
  resultsMethods,
}: IPropsWrapperDisplayResults) => {
  const [finalResult, setFinalResult] = useState<boolean | null>(null);

  function calculateFinalResult(
    methodsResults: { value: boolean; method: string }[],
  ) {
    const resultsLength = methodsResults.length;
    const countTrueResults = methodsResults.filter(
      (result) => result.value,
    ).length;
    const finalResult = countTrueResults > resultsLength / 2;
    setFinalResult(finalResult);
  }

  // Calculate final result whenever resultsMethods change
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
