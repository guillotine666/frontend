import { user, makeAdmin, returnAdminVariables } from "./index";

describe("fourth home work - loops", () => {
  const originalUser = { ...user };
  let tempUser = { ...user };
  afterEach(() => {
    tempUser = { ...originalUser };
  });

  describe("first task", () => {
    test("set age by user input", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "24");
      tempUser.setAge();
      expect(tempUser.age).toBe(24);
    });
  });

  describe("second task", () => {
    test("make admin from user", () => {
      const admin = makeAdmin();
      expect(admin).toEqual({ name: "John", role: "admin" });
    });
  });

  describe("third task", () => {
    test("return names keys of admin object", () => {
      expect(returnAdminVariables(makeAdmin())).toEqual(["name", "role"]);
    });
  });
});
