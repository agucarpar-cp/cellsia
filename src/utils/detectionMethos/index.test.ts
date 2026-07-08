/// <reference types="jest" />

import {
  evenZeroesMethod,
  contiguousOnesMethod,
  surroundedOnesByZeroes,
} from ".";
import {
  contiguousOnesMethodFalse,
  contiguousOnesMethodTrue,
  evenZeroesMethodFalse,
  evenZeroesMethodTrue,
  surroundedOnesByZeroesMethodFalse,
  surroundedOnesByZeroesMethodTrue,
} from "../dummyLib";

describe("math utilities", () => {
  test("evenZeroesMethod returns true for arrays with more than 30% even-indexed zeroes", () => {
    expect(evenZeroesMethod(evenZeroesMethodTrue)).toBe(true);
    expect(evenZeroesMethod(evenZeroesMethodFalse)).toBe(false);
  });

  test("contiguousOnes returns true if there are 20% of 1 in contiguous positions to another 1 in the sample", () => {
    expect(contiguousOnesMethod(contiguousOnesMethodTrue)).toBe(true);
    expect(contiguousOnesMethod(contiguousOnesMethodFalse)).toBe(false);
  });

  test("surroundedOnesByZeroes returns true if there are 10% of 1 in the sample that are surrounded by 0s", () => {
    expect(surroundedOnesByZeroes(surroundedOnesByZeroesMethodTrue)).toBe(true);
    expect(surroundedOnesByZeroes(surroundedOnesByZeroesMethodFalse)).toBe(
      false,
    );
  });
});
