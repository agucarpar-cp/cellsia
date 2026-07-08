/// <reference types="jest" />

import { evenZeroesMethod } from ".";
import {
  contiguousOnesMethodFalse,
  contiguousOnesMethodTrue,
  evenZeroesMethodFalse,
  evenZeroesMethodTrue,
} from "../dummyLib";

describe("math utilities", () => {
  test("evenZeroesMethod returns true for arrays with more than 30% even-indexed zeroes", () => {
    expect(evenZeroesMethod(evenZeroesMethodTrue)).toBe(true);
    expect(evenZeroesMethod(evenZeroesMethodFalse)).toBe(false);
  });

  test("contiguousOnes returns true if there are 20% of 1 in contiguous positions to another 1 in the sample", () => {
    expect(evenZeroesMethod(contiguousOnesMethodTrue)).toBe(true);
    expect(evenZeroesMethod(contiguousOnesMethodFalse)).toBe(false);
  });
});
