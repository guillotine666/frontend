import {
  printMaxBetweenTwo,
  printMonthByNumber,
  willCircleFitSquare,
} from "./index.js";

describe("second home work - conditions", () => {
  const defalutConsoleLog = console.log;
  describe("first task printing maximum between two number", () => {
    beforeEach(() => {
      console.log = jest.fn();
    });

    afterEach(() => {
      console.log = defalutConsoleLog;
    });

    test("print 4 for 4 and 2", () => {
      printMaxBetweenTwo(4, 2);
      expect(console.log).toHaveBeenCalledWith(4);
    });

    test("print Введены не числа for '4' and '2'", () => {
      printMaxBetweenTwo("4", "2");
      expect(console.log).toHaveBeenCalledWith("Введены не числа");
    });

    test("print Введены не числа for undefined and 2", () => {
      printMaxBetweenTwo(undefined, 2);
      expect(console.log).toHaveBeenCalledWith("Введены не числа");
    });
  });

  describe("second task printing month by user input number", () => {
    beforeEach(() => {
      console.log = jest.fn();
    });

    afterEach(() => {
      console.log = defalutConsoleLog;
    });

    test("print 4 for 1", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "1");
      printMonthByNumber();
      expect(console.log).toHaveBeenCalledWith("Январь");
    });

    test("print Неверный ввод for 'not a number or string number'", () => {
      jest
        .spyOn(window, "prompt")
        .mockImplementation(() => "not a number or string number");
      printMonthByNumber();
      expect(console.log).toHaveBeenCalledWith("Неверный ввод");
    });
  });

  describe("third task return will circle fit the square", () => {
    test("return Поместится for 4 and 10", () => {
      const result = willCircleFitSquare(4, 10);
      expect(result).toBe("Поместится");
    });

    test("return Не поместится for 4 and 2", () => {
      const result = willCircleFitSquare(4, 2);
      expect(result).toBe("Не поместится");
    });

    test("return Не поместится for '4' and 10", () => {
      const result = willCircleFitSquare("4", 10);
      expect(result).toBe("Неверный ввод");
    });

    test("return Не поместится for undefined and 2", () => {
      const result = willCircleFitSquare(undefined, 2);
      expect(result).toBe("Неверный ввод");
    });
  });
});
