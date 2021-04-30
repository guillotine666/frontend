import { sumOfIntegersFrom50To100 } from "./index";

describe("third home work - loops", () => {
  describe("first task printing sum of integers from 50 to 100", () => {
    test("print 3825", () => {
      console.log = jest.fn();
      sumOfIntegersFrom50To100();
      expect(console.log).toHaveBeenCalledWith(3825);
    });
  });
});
