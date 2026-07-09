import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  dummyGetAllCellSamples,
  getOneCellSample,
} from "../../../services/cellMethods";

import Stack from "@mui/material/Stack";
import { CheckinSampleDisplayData } from "../components/CheckinSampleDisplayData";
import { SelectMethods } from "../components/SelectMethods";
import { SelectSample } from "../../ui/SelectSample";
import { WrapperDisplayResults } from "./WrapperDisplayResults";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { collectedMethodsResults } from "../../../utils/detectionMethods/dectectionMethods";
import type { TypeFormValues } from "../../../types/typeMethosResults";

export const WrapperCheckSamples = () => {
  const [useMethodsResults, setUseMethodsResults] = useState<
    { value: boolean; method: string }[]
  >([]);

  const formSchema = yup.object({
    selectedSample: yup.string().required("Sample is required"),
    selectedMethods: yup
      .array()
      .of(yup.string().required())
      .required("Methods are required"),
  });
  const formMethods = useForm<TypeFormValues>({
    mode: "all",
    resolver: yupResolver(formSchema),
    defaultValues: {
      selectedSample: "",
      selectedMethods: [],
    },
  });

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const selectedSample = watch("selectedSample");

  const {
    data: dataSample,
    isLoading: availableSamplesLoading,
    isError: availableSamplesError,
    error: availableSamplesErrorMessage,
  } = useQuery({
    queryKey: ["getOneCellSample", selectedSample],
    queryFn: () => getOneCellSample(selectedSample!),
    enabled: !!selectedSample,
    gcTime: Infinity,
    staleTime: Infinity,
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
    gcTime: Infinity,
    staleTime: Infinity,
    retry: false,
  });

  const handleOnSubmit = (formValues: TypeFormValues) => {
    const results = collectedMethodsResults(
      formValues.selectedMethods,
      dataSample.cells,
    );
    setUseMethodsResults(results);
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
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <SelectSample control={control} optionsToDisplay={availableSamples} />
          {dataSample && (
            <Stack spacing={3}>
              <CheckinSampleDisplayData dataSample={dataSample.cells} />
              <SelectMethods control={control} />
              <Stack spacing={3}>
                <h3>Resultados de los métodos seleccionados:</h3>
                <WrapperDisplayResults resultsMethods={useMethodsResults} />
              </Stack>
            </Stack>
          )}

          <Button type="submit">Submit</Button>
        </form>
      </Stack>
    </section>
  );
};
