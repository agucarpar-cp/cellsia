import type { TypeCellsMethosPercentages } from "../../types/typeMethodsPercentages";
import {
  contiguousOnesMethod,
  evenZeroesMethod,
  surroundedOnesByZeroesMethod,
} from "../detectionMethods";

export const cellsMethosPercentages: TypeCellsMethosPercentages = {
  evenZeroesMethod: 0.3,
  contiguousOnesMethod: 0.2,
  surroundedOnesByZeroes: 0.1,
} as const;

export const methodsNamesList = {
  evenZeroesMethod: { label: "Even Zeroes Method", method: evenZeroesMethod },
  contiguousOnesMethod: {
    label: "Contiguous Ones Method",
    method: contiguousOnesMethod,
  },
  surroundedOnesByZeroes: {
    label: "Surrounded Ones By Zeroes Method",
    method: surroundedOnesByZeroesMethod,
  },
} as const;

export const methodsNamesListArray = Object.values(methodsNamesList).map(
  (method) => method.label,
);
