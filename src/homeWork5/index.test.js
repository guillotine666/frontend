import { sumOfElements, doubleElement, findMinAndMax } from "./index";

describe("fifth homework", () => {
  describe("first task - sum of arrays elements", () => {
    test("return 10 for sum of arrays only number elements", () => {
      expect(sumOfElements([1, 2, 3, 4])).toBe(10);
    });

    test("return 10 for sum of arrays number elements with string", () => {
      expect(sumOfElements([1, 2, "3", 4])).toBe(10);
    });

    test("return NaN for sum of arrays elements with undefined", () => {
      expect(sumOfElements([1, 2, undefined, 4])).toBe(NaN);
    });
  });

  describe("second task - double elements of array", () => {
    test("return double", () => {
      const array = [1, 2, 3, 4];
      expect(doubleElement(array)).toEqual([2, 4, 6, 8]);
    });

    test("return double with string", () => {
      const array = [1, 2, "6", 4];
      expect(doubleElement(array)).toEqual([2, 4, 12, 8]);
    });

    test("return NaN", () => {
      const array = [1, 2, undefined, 4];
      expect(doubleElement(array)).toEqual([2, 4, NaN, 8]);
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
