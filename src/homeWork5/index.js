export const sumOfElements = (arr) => {
  let result = 0;
  arr.reduce((prev, el) => {
    result += +el;
    return result;
  }, 0);
  return result;
};

export const doubleElement = (arr) => arr.map((el) => el * 2);

export const findMinAndMax = (arr) => [Math.min(...arr), Math.max(...arr)];
