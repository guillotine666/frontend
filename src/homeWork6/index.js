export const diff = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Неверный ввод";
  }

  if (a >= b) {
    return a - b;
  }

  return b - a;
};

export const isWord = (inputString) => {
  if (typeof inputString !== "string") {
    return "Неверный ввод";
  }

  if (inputString.split(" ").length > 1) {
    return false;
  }

  return true;
};

export const pow = (a, x) => {
  if (typeof a !== "number" || typeof x !== "number") {
    return "Неверный ввод";
  }

  return a ** x;
};
