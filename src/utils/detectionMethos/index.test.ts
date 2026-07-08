/// <reference types="jest" />

import { evenZeroesMethod } from ".";
import { evenZeroesMethodFalse, evenZeroesMethodTrue } from "../dummyLib";

describe("math utilities", () => {
  test("evenZeroesMethod returns true for arrays with more than 30% even-indexed zeroes", () => {
    expect(evenZeroesMethod(evenZeroesMethodTrue)).toBe(true);
    expect(evenZeroesMethod(evenZeroesMethodFalse)).toBe(false);
  });
});
