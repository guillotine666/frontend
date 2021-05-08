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
      calculateDayOfWeek();
    });

    test("return воскресенье for 03.01.2021", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "03.01.2021");
      calculateDayOfWeek();
    });
  });

  describe("second task - time past from start day (from 00:00 to now)", () => {
    test("return ", () => {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      timesFromDayStart();
      expect(console.log).toHaveBeenCalledWith(
        Math.floor((now - today) / 60 / 1000)
      );
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
