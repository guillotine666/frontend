export const isDateOrEmailFormat = (str) => {
  const regexpForDate = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
  const regexpForEmail = /[\dA-z.]+@[\dA-z]+\.[A-z]+/;

  if (str.match(regexpForDate)) {
    return "It's a date";
  }

  if (str.match(regexpForEmail)) {
    return "It's a email";
  }

  return "Smth else";
};
