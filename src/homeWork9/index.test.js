import { isRectangular } from "./index";

describe("home work 9 - math", () => {
  describe("first task - is triangle rectangular", () => {
    test("return true for 3,4,5", () => {
      expect(isRectangular(3, 4, 5)).toBe(true);
    });
    test("return false for 3,12,13", () => {
      expect(isRectangular(3, 12, 13)).toBe(false);
    });

    test("return Incorrect input for 3,13", () => {
      expect(isRectangular(3, 13)).toBe("Incorrect input");
    });

    test("return Incorrect input for 5,12,13,16", () => {
      expect(isRectangular(5, 12, 13, 16)).toBe("Incorrect input");
    });
  });
});
