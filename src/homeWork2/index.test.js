import { printMaxBetweenTwo } from "./index";

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
});
