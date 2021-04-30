import { sumOfIntegersFrom50To100, multiplicationTableBySeven } from "./index";

describe("third home work - loops", () => {
  describe("first task printing sum of integers from 50 to 100", () => {
    test("print 3825", () => {
      console.log = jest.fn();
      sumOfIntegersFrom50To100();
      expect(console.log).toHaveBeenCalledWith(3825);
    });
  });

  describe("first task printing maximum between two number", () => {
    test("print 7 14 21 28 35 42 49 56 63", () => {
      multiplicationTableBySeven();
      [7, 14, 21, 28, 35, 42, 49, 56, 63].forEach((el, index) => {
        expect(console.log).toHaveBeenCalledWith(`7 x ${index + 1} = ${el}`);
      });
    });
  });
});
