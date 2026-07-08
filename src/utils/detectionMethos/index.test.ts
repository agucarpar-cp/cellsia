/// <reference types="jest" />

import {
  evenZeroesMethod,
  contiguousOnesMethod,
  surroundedOnesByZeroesMethod,
} from ".";
import {
  contiguousOnesMethodFalse,
  contiguousOnesMethodTrue,
  evenZeroesMethodFalse,
  evenZeroesMethodTrue,
  surroundedOnesByZeroesMethodFalse,
  surroundedOnesByZeroesMethodTrue,
} from "../libs/dummyLib";

describe("methods to check samples", () => {
  test("evenZeroesMethod returns true for arrays with more than 30% even-indexed zeroes", () => {
    expect(evenZeroesMethod(evenZeroesMethodTrue)).toBe(true);
    expect(evenZeroesMethod(evenZeroesMethodFalse)).toBe(false);
    expect(evenZeroesMethod([])).toBe(false);
    expect(evenZeroesMethod([1])).toBe(false);
    expect(evenZeroesMethod(null as any)).toBe(false);
    expect(evenZeroesMethod([1, NaN, 2])).toBe(false);
    expect(evenZeroesMethod(undefined as any)).toBe(false);
    expect(evenZeroesMethod([1, "a", 2] as any)).toBe(false);
    expect(evenZeroesMethod([1, null, 2] as any)).toBe(false);
  });

  test("contiguousOnesMethod returns true if there are 20% of 1 in contiguous positions to another 1 in the sample", () => {
    expect(contiguousOnesMethod(contiguousOnesMethodTrue)).toBe(true);
    expect(contiguousOnesMethod(contiguousOnesMethodFalse)).toBe(false);
    expect(contiguousOnesMethod([])).toBe(false);
    expect(contiguousOnesMethod([0])).toBe(false);
    expect(contiguousOnesMethod(null as any)).toBe(false);
    expect(contiguousOnesMethod([1, NaN, 2])).toBe(false);
    expect(contiguousOnesMethod(undefined as any)).toBe(false);
    expect(contiguousOnesMethod([1, "a", 2] as any)).toBe(false);
    expect(contiguousOnesMethod([1, null, 2] as any)).toBe(false);
  });

  test("surroundedOnesByZeroesMethod returns true if there are 10% of 1 in the sample that are surrounded by 0s", () => {
    expect(surroundedOnesByZeroesMethod(surroundedOnesByZeroesMethodTrue)).toBe(
      true,
    );
    expect(
      surroundedOnesByZeroesMethod(surroundedOnesByZeroesMethodFalse),
    ).toBe(false);
    expect(surroundedOnesByZeroesMethod([])).toBe(false);
    expect(surroundedOnesByZeroesMethod([1, 1])).toBe(false);
    expect(surroundedOnesByZeroesMethod([1, NaN, 2])).toBe(false);
    expect(surroundedOnesByZeroesMethod(null as any)).toBe(false);
    expect(surroundedOnesByZeroesMethod(undefined as any)).toBe(false);
    expect(surroundedOnesByZeroesMethod([1, "a", 2] as any)).toBe(false);
    expect(surroundedOnesByZeroesMethod([1, null, 2] as any)).toBe(false);
  });
});
