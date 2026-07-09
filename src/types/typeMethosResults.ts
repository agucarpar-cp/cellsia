export interface TypeFormValues {
  selectedSample: string;
  selectedMethods: string[];
}

export interface TypeMethodResult {
  value: boolean;
  method: string;
}

export type TypeArrayMethodResult = TypeMethodResult[];
