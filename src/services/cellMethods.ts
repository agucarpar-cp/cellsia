import { api } from "./api";
import { dummyAvailableMethodsList } from "../utils/libs/dummyLib";

export async function getOneCellMethod() {
  const response = await api.get("http://localhost:3000/cell-methods");
  return response;
}

/**
 * Simulates an API call that returns the list of available samples.
 * In production, this would fetch from a real backend endpoint.
 */
export async function dummyGetAllCellMethods(): Promise<string[]> {
  // Simulate network delay (300ms)
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  // Return the dummy data as if it came from the API
  return dummyAvailableMethodsList;
}
