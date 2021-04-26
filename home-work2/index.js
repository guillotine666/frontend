const firstTask = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    console.log(Math.max(a, b));
  } else {
    console.log("Введены не числа");
  }
};

const secondTask = () => {
  let userInput = prompt("Введите число от 1-12");
  switch (+userInput) {
    case 1:
      console.log("Январь");
      break;
    case 2:
      console.log("Февраль");
      break;
    case 3:
      console.log("Март");
      break;
    case 4:
      console.log("Апрель");
      break;
    case 5:
      console.log("Май");
      break;
    case 6:
      console.log("Июнь");
      break;
    case 7:
      console.log("Июль");
      break;
    case 8:
      console.log("Август");
      break;
    case 9:
      console.log("Сентябрь");
      break;
    case 10:
      console.log("Октябрь");
      break;
    case 11:
      console.log("Ноябрь");
      break;
    case 12:
      console.log("Декабрь");
      break;
    default:
      console.log("Неверный ввод.");
      break;
  }
};

const thirdTask = (circle, square) => {
  const circleDiameter = 2 * Math.sqrt(circle / Math.PI);
  const squareDiameter = Math.sqrt(2 * square);

  circleDiameter >= squareDiameter
    ? console.log("Поместится")
    : console.log("Не поместится");
};

thirdTask(5, 3);
