export const printMaxBetweenTwo = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    console.log(Math.max(a, b));
  } else {
    console.log("Введены не числа");
  }
};

export const printMonthByNumber = () => {
  const userInput = prompt("Введите число от 1-12") - 1;
  const monthsNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  if (monthsNames[userInput] === undefined) {
    console.log("Неверный ввод");
  } else {
    console.log(monthsNames[userInput]);
  }
};

export const willCircleFitSquare = (circle, square) => {
  if (typeof circle === "number" && typeof square === "number") {
    const circleDiameter = 2 * Math.sqrt(circle / Math.PI);
    const squareDiameter = Math.sqrt(2 * square);

    return circleDiameter <= squareDiameter ? "Поместится" : "Не поместится";
  }
  return "Неверный ввод";
};
