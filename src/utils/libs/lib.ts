import {
  contiguousOnesMethod,
  evenZeroesMethod,
  surroundedOnesByZeroesMethod,
} from "../detectionMethods/dectectionMethods";

export const methodsNamesList = [
  {
    label: "Even Zeroes Method",
    value: "evenZeroesMethod",
    method: evenZeroesMethod,
  },
  {
    label: "Contiguous Ones Method",
    value: "contiguousOnesMethod",
    method: contiguousOnesMethod,
  },
  {
    label: "Surrounded Ones By Zeroes Method",
    value: "surroundedOnesByZeroes",
    method: surroundedOnesByZeroesMethod,
  },
] as const;
