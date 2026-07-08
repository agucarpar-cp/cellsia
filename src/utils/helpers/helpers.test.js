import { checkIfNumber } from "./helpers";

describe("checkIfNumber", () => {
  test("returns true for valid numbers", () => {
    expect(checkIfNumber(5)).toBe(true);
    expect(checkIfNumber(0)).toBe(true);
    expect(checkIfNumber(-3.5)).toBe(true);
  });
  test("returns false for non-numbers", () => {
    expect(checkIfNumber(NaN)).toBe(false);
    expect(checkIfNumber(Infinity)).toBe(false);
    expect(checkIfNumber("5")).toBe(false);
    expect(checkIfNumber(null)).toBe(false);
  });
});
