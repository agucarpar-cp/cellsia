import { useState, useEffect } from "react";
import { methodsNamesList } from "../../../utils/libs/lib";
import { Stack, Typography } from "@mui/material";
import type { TypeArrayMethodResult } from "../../../types/typeMethosResults";
import { calculateFinalResult } from "../../../utils/calculateFinalResults/calculateFinalResults";

interface IPropsWrapperDisplayResults {
  resultsMethods: TypeArrayMethodResult;
}

export const WrapperDisplayResults = ({
  resultsMethods,
}: IPropsWrapperDisplayResults) => {
  const [finalResult, setFinalResult] = useState<boolean | null>(null);

  const handleCalculateFinalResult = () => {
    const results = calculateFinalResult(resultsMethods);
    setFinalResult(results);
  };

  useEffect(() => {
    handleCalculateFinalResult();
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
