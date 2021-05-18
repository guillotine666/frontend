import { sumOfElements, doubleElement, findMinAndMax } from "./index.js";

describe("fifth homework", () => {
  describe("first task - sum of arrays elements", () => {
    const cases = [
      [[1, 2, 3, 4], 10],
      [[1, 2, "3", 4], 10],
      [[1, 2, undefined, 4], NaN],
    ];

    test.each(cases)("given %p and return %p", (arr, expectResult) => {
      const result = sumOfElements(arr);
      expect(result).toBe(expectResult);
    });
  });

  describe("second task - double elements of array", () => {
    const cases = [
      [
        [1, 2, 3, 4],
        [2, 4, 6, 8],
      ],
      [
        [1, 2, "6", 4],
        [2, 4, 12, 8],
      ],
      [
        [1, 2, undefined, 4],
        [2, 4, NaN, 8],
      ],
    ];

    test.each(cases)("given %p and return %p", (arr, expectResult) => {
      const result = doubleElement(arr);
      expect(result).toEqual(expectResult);
    });
  });

  describe("third task - find min and max from array", () => {
    test("return max and min", () => {
      expect(findMinAndMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    test("return max and min with string element", () => {
      expect(findMinAndMax([1, 2, "3", 4])).toEqual([1, 4]);
    });
  });
});
