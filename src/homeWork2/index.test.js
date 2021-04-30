import { printMaxBetweenTwo, printMonthByNumber } from "./index";

describe("second home work - conditions", () => {
  describe("first task printing maximum between two number", () => {
    const defalutConsoleLog = console.log;
    beforeAll(() => {
      console.log = jest.fn();
    });

    afterAll(() => {
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
    const defalutConsoleLog = console.log;
    beforeAll(() => {
      console.log = jest.fn();
    });

    afterAll(() => {
      console.log = defalutConsoleLog;
    });

    test("print 4 for 1", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "1");
      printMonthByNumber(1);
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
});
