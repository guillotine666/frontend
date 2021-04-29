import {
  printSumAndMulti,
  printSumOfTwoStrings,
  sumDigitOfNumber,
} from "./index";

describe("first home work", () => {
  describe("first task (console.log sum and multiply)", () => {
    test("console.log 3 and 2 for printSumAndMulti(1, 2)", () => {
      console.log = jest.fn();
      printSumAndMulti(1, 2);
      expect(console.log).toHaveBeenCalledWith(3, 2);
    });

    test("console.log -2 and -0 for printSumAndMulti(-2, 0)", () => {
      console.log = jest.fn();
      printSumAndMulti(-2, 0);
      expect(console.log).toHaveBeenCalledWith(-2, -0);
    });

    test("console.log Некорректный ввод for printSumAndMulti(-2, undefined)", () => {
      console.log = jest.fn();
      printSumAndMulti(-2, undefined);
      expect(console.log).toHaveBeenCalledWith("Некорректный ввод");
    });

    test("console.log Некорректный ввод for printSumAndMulti(-2, null)", () => {
      console.log = jest.fn();
      printSumAndMulti(-2, null);
      expect(console.log).toHaveBeenCalledWith("Некорректный ввод");
    });
  });

  describe("second task sum length of two strings", () => {
    test("console.log 5 for printSumOfTwoStrings('str', 'sa')", () => {
      console.log = jest.fn();
      printSumOfTwoStrings("str", "sa");
      expect(console.log).toHaveBeenCalledWith(5);
    });

    test("console.log 'Некорректный ввод' for printSumOfTwoStrings(123, 'cds')", () => {
      console.log = jest.fn();
      printSumOfTwoStrings(123, "cds");
      expect(console.log).toHaveBeenCalledWith("Некорректный ввод");
    });

    test("console.log 13 for printSumOfTwoStrings('null', 'undefined')", () => {
      console.log = jest.fn();
      printSumOfTwoStrings("null", "undefined");
      expect(console.log).toHaveBeenCalledWith(13);
    });
  });

  describe("third task (console.log sum of the digits of the entered number)", () => {
    test("console.log 3 for sumDigitOfNumber(111)", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "111");
      console.log = jest.fn();
      sumDigitOfNumber(111);
      expect(console.log).toHaveBeenCalledWith(3);
    });

    test("console.log 'Некорректный ввод' for sumDigitOfNumber('qwe')", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "qwe");
      console.log = jest.fn();
      sumDigitOfNumber("qwe");
      expect(console.log).toHaveBeenCalledWith("Некорректный ввод");
    });
  });
});
