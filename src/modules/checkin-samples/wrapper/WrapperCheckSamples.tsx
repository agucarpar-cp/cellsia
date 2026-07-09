import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
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
import { Button, Container } from "@mui/material";
import { collectedMethodsResults } from "../../../utils/detectionMethods/dectectionMethods";
import type { TypeFormValues } from "../../../types/typeMethosResults";
import { Loading } from "../../ui/Loading";
import { ErrorMessage } from "../../ui/ErrorMessage";

export const WrapperCheckSamples = () => {
  const [useMethodsResults, setUseMethodsResults] = useState<
    { value: boolean; method: string }[]
  >([]);

  const formSchema = yup.object({
    selectedSample: yup.string().required("Sample is required"),
    selectedMethods: yup
      .array()
      .min(1)
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
    formState: { errors, isValid, isSubmitting, isSubmitted, isDirty },
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

  // This API call would be triggered by a SSR component
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
    if (!dataSample?.cells) return;
    const results = collectedMethodsResults(
      formValues.selectedMethods,
      dataSample.cells,
    );
    setUseMethodsResults(results);
  };

  useEffect(() => {
    setUseMethodsResults([]);
  }, [selectedSample]);

  if (isAllSamplesLoading || availableSamplesLoading) return <Loading />;

  if (availableSamplesError || allSamplesError)
    return (
      <ErrorMessage
        errorMessage={
          (availableSamplesErrorMessage || (allSamplesErrorMessage as Error))
            .message
        }
      />
    );

  return (
    <section id="wrapper-check-samples">
      <Container
        maxWidth="md"
        sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Stack spacing={3}>
          <h2>Available Samples</h2>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Stack spacing={3}>
              <SelectSample
                control={control}
                optionsToDisplay={availableSamples}
              />
              {dataSample && (
                <>
                  <Stack spacing={3}>
                    <CheckinSampleDisplayData dataSample={dataSample.cells} />
                    <SelectMethods control={control} />
                    <WrapperDisplayResults resultsMethods={useMethodsResults} />
                  </Stack>

                  <Button
                    type="submit"
                    disabled={
                      !isValid || isSubmitting || (isSubmitted && !isDirty)
                    }
                  >
                    Submit
                  </Button>
                </>
              )}
            </Stack>
          </form>
        </Stack>
      </Container>
    </section>
  );
};
