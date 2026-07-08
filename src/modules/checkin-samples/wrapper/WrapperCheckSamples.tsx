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

export const WrapperCheckSamples = () => {
  const [selectedSample, setSelectedSample] = useState<string | null>(null);

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
      <Stack>
        <h2>Muestras disponibles</h2>
        <SelectSample
          optionsToDisplay={availableSamples}
          onChange={handleSelectSample}
          selectedSample={selectedSample}
        />
        {dataSample && (
          <>
            <CheckinSampleDisplayData dataSample={dataSample.cells} />
            <SelectMethods />
          </>
        )}
      </Stack>
    </section>
  );
};
