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
  evenZeroesMethod: {
    label: "Even Zeroes Method",
    value: "evenZeroesMethod",
    method: evenZeroesMethod,
  },
  contiguousOnesMethod: {
    label: "Contiguous Ones Method",
    value: "contiguousOnesMethod",
    method: contiguousOnesMethod,
  },
  surroundedOnesByZeroes: {
    label: "Surrounded Ones By Zeroes Method",
    value: "surroundedOnesByZeroes",
    method: surroundedOnesByZeroesMethod,
  },
} as const;

export type MethodName = keyof typeof methodsNamesList;

export const methodsNamesListArray = Object.keys(
  methodsNamesList,
) as MethodName[];
