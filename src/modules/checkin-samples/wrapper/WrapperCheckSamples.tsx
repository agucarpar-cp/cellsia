import { useQuery } from "@tanstack/react-query";
import {
  dummyGetAllCellSamples,
  getOneCellSample,
} from "../../../services/cellMethods";

import Stack from "@mui/material/Stack";
import { SelectComp } from "../../ui/SelectComp";
import { useState } from "react";
import { CheckinSampleDisplayData } from "../components/CheckinSampleDisplayData";

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
        <SelectComp
          optionsToDisplay={availableSamples}
          onChange={handleSelectSample}
          selectedSample={selectedSample}
        />
        {dataSample && (
          <CheckinSampleDisplayData dataSample={dataSample.cells} />
        )}
      </Stack>
    </section>
  );
};
