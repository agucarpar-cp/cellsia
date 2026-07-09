import { useState, useEffect, useMemo } from "react";
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
  const finalResult = useMemo(() => {
    if (resultsMethods.length === 0) return null;
    return calculateFinalResult(resultsMethods);
  }, [resultsMethods]);

  if (!resultsMethods || resultsMethods.length === 0) {
    return null;
  }

  return (
    <Stack spacing={2}>
      <h3>Results of the selected methods:</h3>

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
