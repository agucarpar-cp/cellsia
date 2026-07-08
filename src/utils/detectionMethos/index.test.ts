/// <reference types="jest" />

import { evenZeroesMethod } from ".";

describe("math utilities", () => {
  test("evenZeroesMethod returns true for arrays with more than 30% even-indexed zeroes", () => {
    expect(evenZeroesMethod([0, 1, 0, 2, 0, 3])).toBe(true);
    expect(evenZeroesMethod([1, 2, 3, 4, 5, 6])).toBe(false);
  });
});
