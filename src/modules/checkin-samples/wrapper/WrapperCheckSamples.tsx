import { useQuery } from "@tanstack/react-query";
import { dummyGetAllCellMethods } from "../../../services/cellMethods";

import Stack from "@mui/material/Stack";
import { SelectComp } from "../../ui/Select";

export const WrapperCheckSamples = () => {
  const {
    data: availableSamples,
    isLoading: availableSamplesLoading,
    isError: availableSamplesError,
    error: availableSamplesErrorMessage,
  } = useQuery({
    queryKey: ["availableSamples"],
    queryFn: dummyGetAllCellMethods,
  });

  if (availableSamplesLoading)
    return <div>Cargando muestras disponibles...</div>;
  if (availableSamplesError)
    return <div>Error: {(availableSamplesErrorMessage as Error).message}</div>;

  return (
    <section id="wrapper-check-samples">
      <Stack>
        <h2>Muestras disponibles</h2>
        <SelectComp optionsToDisplay={availableSamples} />
      </Stack>
    </section>
  );
};
