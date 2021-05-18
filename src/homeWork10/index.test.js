import { isDateOrEmailFormat } from "./index.js";

describe("homework 10 - regexp", () => {
  test.each(["24/04/24", "4/4/2024", "24.04.24", "04.4.2024"])(
    "return It's a date for %s",
    (date) => {
      expect(isDateOrEmailFormat(date)).toBe("It's a date");
    }
  );

  test.each(["xaxalox2@gmail.com", "2x2axalox2@gmail.com"])(
    "return It's a email for %s",
    (email) => {
      expect(isDateOrEmailFormat(email)).toBe("It's email");
    }
  );

  test.each(["04-04-2024", "2x2axalox2gmail.com"])(
    "return Smth else for %s",
    (str) => {
      expect(isDateOrEmailFormat(str)).toBe("Smth else");
    }
  );
});
