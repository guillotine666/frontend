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
    const cases = [
      ["07.05.2021", "пятница"],
      ["03.01.2021", "воскресенье"],
    ];

    test.each(cases)("given %s, return %p", (date, expectResult) => {
      jest.spyOn(window, "prompt").mockImplementation(() => date);
      calculateDayOfWeek();
      expect(console.log).toHaveBeenCalledWith(expectResult);
    });
  });

  describe("second task - time past from start day (from 00:00 to now)", () => {
    test("return ", () => {
      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date("2021-05-18T01:00:00.000"));

      timesFromDayStart();

      jest.useRealTimers();
      expect(console.log).toHaveBeenCalledWith(60);
    });
  });

  describe("third task - day of the week", () => {
    const cases = [
      ["07.05.2021", "03.01.2025", "Вторая дата больше"],
      ["03.01.2021", "03.01.2020", "Первая дата больше"],
      ["03.01.2021", "03.01.2021", "Даты равны"],
    ];

    test.each(cases)("given %s, return %p", (date1, date2, expectResult) => {
      whoIsYounger(date1, date2);
      expect(console.log).toHaveBeenCalledWith(expectResult);
    });
  });
});
