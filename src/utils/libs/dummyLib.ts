// We are cheating here. This file is a dummy file where we define a list of available methods. But, actually, the method list must be fetched from the backend, in a SSR component, storage in Context/redux/Zustand/pinia/.. and import there where it would be used. This is a temporary solution to avoid having to implement the full backend integration for now. We will use this dummyAvailableMethodsList to simulate the backend response.

export const dummyAvailableSampleList = [
  "sample-a",
  "sample-b",
  "sample-c",
  "sample-d",
  "sample-e",
];
