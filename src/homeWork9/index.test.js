import { isRectangular, printCandSOfCircle } from "./index.js";

describe("home work 9 - math", () => {
  describe("first task - is triangle rectangular", () => {
    test("return true for 3,4,5", () => {
      expect(isRectangular(3, 4, 5)).toBe(true);
    });
    test("return false for 3,12,13", () => {
      expect(isRectangular(3, 12, 13)).toBe(false);
    });

    test("return Неверный ввод for 3,13", () => {
      expect(isRectangular(3, 13)).toBe("Неверный ввод");
    });

    test("return Неверный ввод for 5,12,13,16", () => {
      expect(isRectangular(5, 12, 13, 16)).toBe("Неверный ввод");
    });
  });

  describe("second task - print square and circumference of circle", () => {
    const originalConsoleLog = console.log;
    beforeEach(() => {
      console.log = jest.fn();
    });
    afterAll(() => {
      console.log = originalConsoleLog;
    });

    test("return 25.13 and 50.27 for 4", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "4");
      printCandSOfCircle();
      expect(console.log).toHaveBeenCalledWith("25.13", "50.27");
    });
    test("return Неверный ввод for asd", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "asd");
      printCandSOfCircle();
      expect(console.log).toHaveBeenCalledWith("Неверный ввод");
    });
  });
});
