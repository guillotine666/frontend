import { isDateOrEmailFormat } from "./index";

describe("homework 10 - regexp", () => {
  test("return It's a date for 24/04/24", () => {
    expect(isDateOrEmailFormat("24/04/24")).toBe("It's a date");
  });
  test("return It's a date for 4/4/2024", () => {
    expect(isDateOrEmailFormat("4/4/2024")).toBe("It's a date");
  });
  test("return It's a date for 24.04.24", () => {
    expect(isDateOrEmailFormat("24.04.24")).toBe("It's a date");
  });
  test("return It's a date for 04.4.2024", () => {
    expect(isDateOrEmailFormat("04.4.2024")).toBe("It's a date");
  });

  test("return It's email for xaxalox2@gmail.com", () => {
    expect(isDateOrEmailFormat("xaxalox2@gmail.com")).toBe("It's email");
  });
  test("return It's email for 2x2axalox2@gmail.com", () => {
    expect(isDateOrEmailFormat("2x2axalox2@gmail.com")).toBe("It's email");
  });

  test("return Smth else for 2x2axalox2gmail.com", () => {
    expect(isDateOrEmailFormat("2x2axalox2gmail.com")).toBe("Smth else");
  });
  test("return It's a date for 04-04-2024", () => {
    expect(isDateOrEmailFormat("04-04-2024")).toBe("Smth else");
  });
});
