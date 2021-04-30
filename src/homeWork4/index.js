export const user = {
  name: "John",
  setAge() {
    this.age = +prompt("Введите возраст:", 0);
  },
};

export const makeAdmin = () => {
  const admin = {};
  Object.keys(user).forEach((field) => {
    if (typeof user[field] !== "function") {
      admin[field] = user[field];
    }
  });
  admin.role = "admin";
  return admin;
};

export const returnAdminVariables = (obj) => [...Object.keys(obj)];
