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
  evenZeroesMethod: { label: "evenZeroesMethod", method: evenZeroesMethod },
  contiguousOnesMethod: {
    label: "contiguousOnesMethod",
    method: contiguousOnesMethod,
  },
  surroundedOnesByZeroes: {
    label: "surroundedOnesByZeroesMethod",
    method: surroundedOnesByZeroesMethod,
  },
} as const;

export const methodsNamesListArray = Object.values(methodsNamesList).map(
  (method) => method.label,
);
