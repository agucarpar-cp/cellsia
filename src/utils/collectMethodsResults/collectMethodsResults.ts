import { collectedMethodsResults } from "../detectionMethods/dectectionMethods";
import {
  contiguousOnesMethodTrue,
  evenZeroesMethodFalse,
  evenZeroesMethodTrue,
  surroundedOnesByZeroesMethodTrue,
} from "../libs/cellMethodsDataTest";

describe("collectedMethodsResults", () => {
  test("returns correct results for all three methods", () => {
    const results = collectedMethodsResults(
      ["evenZeroesMethod", "contiguousOnesMethod", "surroundedOnesByZeroes"],
      surroundedOnesByZeroesMethodTrue,
    );

    expect(results).toHaveLength(3);
    expect(results[0]).toEqual({ value: true, method: "evenZeroesMethod" });
    expect(results[1]).toEqual({
      value: false,
      method: "contiguousOnesMethod",
    });
    expect(results[2]).toEqual({
      value: true,
      method: "surroundedOnesByZeroes",
    });
  });

  test("returns true for evenZeroesMethod with valid data", () => {
    const results = collectedMethodsResults(
      ["evenZeroesMethod"],
      evenZeroesMethodTrue,
    );
    expect(results[0]).toEqual({ value: true, method: "evenZeroesMethod" });
  });

  test("returns false for evenZeroesMethod with invalid data", () => {
    const results = collectedMethodsResults(
      ["evenZeroesMethod"],
      evenZeroesMethodFalse,
    );
    expect(results[0]).toEqual({ value: false, method: "evenZeroesMethod" });
  });

  test("returns true for contiguousOnesMethod with valid data", () => {
    const results = collectedMethodsResults(
      ["contiguousOnesMethod"],
      contiguousOnesMethodTrue,
    );
    expect(results[0]).toEqual({ value: true, method: "contiguousOnesMethod" });
  });

  test("returns true for surroundedOnesByZeroes with valid data", () => {
    const results = collectedMethodsResults(
      ["surroundedOnesByZeroes"],
      surroundedOnesByZeroesMethodTrue,
    );
    expect(results[0]).toEqual({
      value: true,
      method: "surroundedOnesByZeroes",
    });
  });

  test("returns false for unknown method", () => {
    const results = collectedMethodsResults(
      ["unknownMethod"],
      evenZeroesMethodTrue,
    );
    expect(results[0]).toEqual({ value: false, method: "unknownMethod" });
  });

  test("returns empty array when no methods selected", () => {
    expect(collectedMethodsResults([], evenZeroesMethodTrue)).toEqual([]);
  });
});
