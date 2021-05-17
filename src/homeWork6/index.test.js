import { diff, isWord, pow } from "./index.js";

describe("sixth homework", () => {
  describe("first task - diff function", () => {
    test("return 2 for 4 and 2", () => {
      expect(diff(4, 2)).toBe(2);
      expect(diff(2, 4)).toBe(2);
    });

    test("return Неверный ввод", () => {
      expect(diff("4", 2)).toBe("Неверный ввод");
      expect(diff(undefined, 4)).toBe("Неверный ввод");
    });
  });

  describe("second task - isWord function", () => {
    test('return true for "qweqwe"', () => {
      expect(isWord("qweqwe")).toBe(true);
    });

    test('return false for "qwe qwe"', () => {
      expect(isWord("qwe qwe")).toBe(false);
    });

    test("return Неверный ввод for undefined", () => {
      expect(isWord(undefined)).toBe("Неверный ввод");
    });
  });

  describe("third task - pow function", () => {
    test("return 1 for 1 and 10", () => {
      expect(pow(1, 10)).toBe(1);
    });

    test("return 1024 for 2 and 10", () => {
      expect(pow(2, 10)).toBe(1024);
    });

    test("return Неверный ввод for undefined", () => {
      expect(pow("2", 10)).toBe("Неверный ввод");
    });
  });
});
