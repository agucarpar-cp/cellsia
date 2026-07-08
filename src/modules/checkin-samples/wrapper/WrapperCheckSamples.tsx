import { useQuery } from "@tanstack/react-query";
import {
  dummyGetAllCellSamples,
  getOneCellSample,
} from "../../../services/cellMethods";

import Stack from "@mui/material/Stack";
import { useState } from "react";
import { CheckinSampleDisplayData } from "../components/CheckinSampleDisplayData";
import { SelectMethods } from "../components/SelectMethods";
import { SelectSample } from "../../ui/SelectSample";
import { WrapperDisplayResults } from "./WrapperDisplayResults";

export const WrapperCheckSamples = () => {
  const [selectedSample, setSelectedSample] = useState<string | null>(null);
  const [selectedMethods, setSelectedMethods] = useState<string[] | null>(null);

  const {
    data: dataSample,
    isLoading: availableSamplesLoading,
    isError: availableSamplesError,
    error: availableSamplesErrorMessage,
  } = useQuery({
    queryKey: ["getOneCellSample", selectedSample],
    queryFn: () => getOneCellSample(selectedSample!),
    enabled: !!selectedSample,
    retry: false,
  });

  const {
    data: availableSamples,
    isLoading: isAllSamplesLoading,
    isError: allSamplesError,
    error: allSamplesErrorMessage,
  } = useQuery({
    queryKey: ["availableSamples"],
    queryFn: dummyGetAllCellSamples,
  });

  const handleSelectSample = (sampleName: string) => {
    setSelectedSample(sampleName);
  };

  const handleSelectMethod = (methodName: string[]) => {
    setSelectedMethods(methodName);
    console.log(`Selected method: ${methodName}`);
  };

  if (isAllSamplesLoading || availableSamplesLoading)
    return <div>Loading...</div>;

  if (availableSamplesError || allSamplesError)
    return (
      <div>
        Error:{" "}
        {
          (availableSamplesErrorMessage || (allSamplesErrorMessage as Error))
            .message
        }
      </div>
    );

  return (
    <section id="wrapper-check-samples">
      <Stack spacing={3}>
        <h2>Muestras disponibles</h2>
        <SelectSample
          optionsToDisplay={availableSamples}
          onChange={handleSelectSample}
          selectedSample={selectedSample}
        />
        {dataSample && (
          <Stack spacing={3}>
            <CheckinSampleDisplayData dataSample={dataSample.cells} />
            <SelectMethods
              onChange={handleSelectMethod}
              selectedMethods={selectedMethods}
            />
            {selectedMethods && selectedMethods.length > 0 && (
              <Stack spacing={3}>
                <h3>Resultados de los métodos seleccionados:</h3>
                <WrapperDisplayResults selectedMethods={selectedMethods} />
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
    </section>
  );
};
