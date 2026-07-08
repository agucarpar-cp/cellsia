import { api } from "./api";
import { dummyAvailableSampleList } from "../utils/libs/dummyLib";

export async function getOneCellSample(sampleName: string) {
  const response = await api.get(
    `/mini-nucleiq-code-challenge/samples/${sampleName}.json`,
  );
  return response;
}

// Simulates an API call that returns the list of available samples.In production, this would fetch from a real backend endpoint.
//
export async function dummyGetAllCellSamples(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Return the dummy data as if it came from the API
  return dummyAvailableSampleList;
}
