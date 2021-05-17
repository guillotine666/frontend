import {
  calculateDayOfWeek,
  timesFromDayStart,
  whoIsYounger,
} from "./index.js";

describe("home work 8 - date", () => {
  const defalutConsoleLog = console.log;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = defalutConsoleLog;
  });

  describe("first task - day of the week", () => {
    test("return пятница for 07.05.2021", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "07.05.2021");
      calculateDayOfWeek();
    });

    test("return воскресенье for 03.01.2021", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "03.01.2021");
      calculateDayOfWeek();
    });
  });

  describe("second task - time past from start day (from 00:00 to now)", () => {
    test("return ", () => {
      jest
        .spyOn(global.Date, "now")
        .mockImplementation(() => new Date("2021-05-18T01:00:00.000+05:00"));
      timesFromDayStart();
      expect(console.log).toHaveBeenCalledWith(60);
    });
  });

  describe("third task - day of the week", () => {
    test("return Вторая дата больше for 07.05.2021 and 03.01.2021", () => {
      whoIsYounger("07.05.2021", "03.01.2025");
      expect(console.log).toHaveBeenCalledWith("Вторая дата больше");
    });

    test("return Первая дата больше for 03.01.2021 and 03.01.2020", () => {
      whoIsYounger("03.01.2021", "03.01.2020");
      expect(console.log).toHaveBeenCalledWith("Первая дата больше");
    });

    test("return Даты равны for 03.01.2021 and 03.01.2021", () => {
      whoIsYounger("03.01.2021", "03.01.2021");
      expect(console.log).toHaveBeenCalledWith("Даты равны");
    });
  });
});
