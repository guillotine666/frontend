import {
  printSumAndMulti,
  printSumOfTwoStrings,
  sumDigitOfNumber,
} from "./index.js";

describe("first home work - types", () => {
  const defalutConsoleLog = console.log;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = defalutConsoleLog;
  });

  describe("first task (console.log sum and multiply)", () => {
    const cases = [
      [1, 2, 3, 2],
      [-2, 0, -2, -0],
      [-2, undefined, "Некорректный ввод"],
      [-2, null, "Некорректный ввод"],
    ];

    test.each(cases)(
      "given %p and %p as arguments, returns %p",
      (firstArg, secondArg, ...expectedResult) => {
        printSumAndMulti(firstArg, secondArg);
        expect(console.log).toHaveBeenCalledWith(...expectedResult);
      }
    );
  });

  describe("second task sum length of two strings", () => {
    const cases = [
      ["str", "sa", 5],
      [123, "cds", "Некорректный ввод"],
      ["null", "undefined", 13],
    ];
    test.each(cases)(
      "given %p and %p as argument, return %p",
      (firstArg, secondArg, expectedResult) => {
        printSumOfTwoStrings(firstArg, secondArg);
        expect(console.log).toHaveBeenCalledWith(expectedResult);
      }
    );
  });

  describe("third task (console.log sum of the digits of the entered number)", () => {
    test("console.log 3 for sumDigitOfNumber(111)", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "111");
      sumDigitOfNumber();
      expect(console.log).toHaveBeenCalledWith(3);
    });

    test("console.log 'Некорректный ввод' for sumDigitOfNumber('qwe')", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "qwe");
      sumDigitOfNumber();
      expect(console.log).toHaveBeenCalledWith("Некорректный ввод");
    });
  });
});
