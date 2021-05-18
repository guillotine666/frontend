import {
  printMaxBetweenTwo,
  printMonthByNumber,
  willCircleFitSquare,
} from "./index.js";

describe("second home work - conditions", () => {
  const defalutConsoleLog = console.log;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = defalutConsoleLog;
  });

  describe("first task printing maximum between two number", () => {
    const cases = [
      [4, 2, 4],
      ["4", "2", "Введены не числа"],
      [undefined, 2, "Введены не числа"],
    ];

    test.each(cases)(
      "given %p and %p and print %p",
      (firstArg, secondArg, expectedResult) => {
        printMaxBetweenTwo(firstArg, secondArg);
        expect(console.log).toHaveBeenCalledWith(expectedResult);
      }
    );
  });

  describe("second task printing month by user input number", () => {
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
    const cases = [
      [4, 10, "Поместится"],
      [4, 2, "Не поместится"],
      ["4", 10, "Неверный ввод"],
      [undefined, 2, "Неверный ввод"],
    ];

    test.each(cases)(
      "given %p and %p and return %s",
      (firstArg, secondArg, expectedResult) => {
        const result = willCircleFitSquare(firstArg, secondArg);
        expect(result).toBe(expectedResult);
      }
    );
  });
});
