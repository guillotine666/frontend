export const printSumAndMulti = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    console.log(a + b, a * b);
  } else {
    console.log("Некорректный ввод");
  }
};

export const printSumOfTwoStrings = (str1, str2) => {
  if (typeof str1 === "string" && typeof str2 === "string") {
    console.log(str1.length + str2.length);
  } else {
    console.log("Некорректный ввод");
  }
};

export const sumDigitOfNumber = () => {
  const userInput = prompt("Введите 3-х значное число:");

  if (userInput.match(/^[0-9]{3}$/)) {
    const result = userInput
      .split("")
      .reduce((sum, number) => sum + +number, 0);
    console.log(result);
  } else {
    console.log("Некорректный ввод");
  }
};
