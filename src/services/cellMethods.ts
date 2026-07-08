import { api } from "./api";
import { dummyAvailableSampleList } from "../utils/libs/dummyLib";

export async function getOneCellSample(sampleName: string) {
  const response = await api.get(`samples/${sampleName}.json`);
  return response.data;
}

export async function dummyGetAllCellSamples(): Promise<string[]> {
  // Simulates an API call that returns the list of available samples.In production, this must fetch from a real backend endpoint.
  //
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Return the dummy data as if it came from the API
  return dummyAvailableSampleList;
}
