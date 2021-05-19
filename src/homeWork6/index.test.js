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
    const cases = [
      ["qweqwe", true],
      ["qwe qwe", false],
      [undefined, "Неверный ввод"],
    ];

    test.each(cases)("given %s, return %p", (str, expectResult) => {
      const result = isWord(str);
      expect(result).toBe(expectResult);
    });
  });

  describe("third task - pow function", () => {
    const cases = [
      [1, 10, 1],
      [2, 10, 1024],
      ["2", 10, "Неверный ввод"],
    ];

    test.each(cases)(
      "given %p and %p, return %p",
      (num, degree, expectResult) => {
        const result = pow(num, degree);
        expect(result).toBe(expectResult);
      }
    );
  });
});
