import { calculateDayOfWeek, timesFromDayStart, whoIsYounger } from "./index";

describe("home work 8 - date", () => {
  const defalutConsoleLog = console.log;
  beforeAll(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = defalutConsoleLog;
  });

  describe("first task - day of the week", () => {
    test("return пятница for 07.05.2021", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "07.05.2021");
      timesFromDayStart();
    });

    test("return воскресенье for 03.01.2021", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "03.01.2021");
      timesFromDayStart();
    });
  });

  describe("second task - time past from start day (from 00:00 to now)", () => {
    test("return пятница for 07.05.2021", () => {
      calculateDayOfWeek();
      expect(console.log).toHaveBeenCalledWith("пятница");
    });

    test("return воскресенье for 03.01.2021", () => {
      calculateDayOfWeek();
      expect(console.log).toHaveBeenCalledWith("воскресенье");
    });
  });

  describe("third task - day of the week", () => {
    test("return Вторая дата больше for 07.05.2021 and 03.01.2021", () => {
      whoIsYounger();
      expect(console.log).toHaveBeenCalledWith("Вторая дата больше");
    });

    test("return Первая дата больше for 03.01.2021 and 03.01.2020", () => {
      whoIsYounger();
      expect(console.log).toHaveBeenCalledWith("Первая дата больше");
    });

    test("return Даты равны for 03.01.2021 and 03.01.2021", () => {
      whoIsYounger();
      expect(console.log).toHaveBeenCalledWith("Даты равны");
    });
  });
});
