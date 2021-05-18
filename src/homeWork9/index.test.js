import { isRectangular, printCandSOfCircle } from "./index.js";

describe("home work 9 - math", () => {
  describe("first task - is triangle rectangular", () => {
    const cases = [
      [[3, 4, 5], true],
      [[3, 12, 13], false],
      [[3, 13], "Неверный ввод"],
      [[5, 12, 13, 16], "Неверный ввод"],
    ];

    test.each(cases)("given %s, return %p", (args, expectResult) => {
      const result = isRectangular(...args);
      expect(result).toBe(expectResult);
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
