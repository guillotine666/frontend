import {
  sumOfIntegersFrom50To100,
  multiplicationTableBySeven,
  arithmeticAverageOfOdd,
} from "./index.js";

describe("third home work - loops", () => {
  const defalutConsoleLog = console.log;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = defalutConsoleLog;
  });

  describe("first task printing sum of integers from 50 to 100", () => {
    test("print 3825", () => {
      sumOfIntegersFrom50To100();
      expect(console.log).toHaveBeenCalledWith(3825);
    });
  });

  describe("second task printing table of multiplication by seven", () => {
    test("print 7 14 21 28 35 42 49 56 63", () => {
      multiplicationTableBySeven();
      [7, 14, 21, 28, 35, 42, 49, 56, 63].forEach((el, index) => {
        expect(console.log).toHaveBeenCalledWith(`7 x ${index + 1} = ${el}`);
      });
    });
  });

  describe("third task printing arithmetic average of odd from 1 to user input", () => {
    test("print 4 for 1", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "1");
      arithmeticAverageOfOdd();
      expect(console.log).toHaveBeenCalledWith(1);
    });

    test("print 4 for 'not a number or string number'", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => 7);
      arithmeticAverageOfOdd();
      expect(console.log).toHaveBeenCalledWith(4);
    });

    test("print Неверный ввод for 'not a number or string number'", () => {
      jest
        .spyOn(window, "prompt")
        .mockImplementation(() => "not a number or string number");
      arithmeticAverageOfOdd();
      expect(console.log).toHaveBeenCalledWith("Неверный ввод");
    });
  });
});
