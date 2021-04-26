const firstTask = (a, b) => {
  console.log(a + b);
  console.log(a * b);
};

const secondTask = (str1, str2) => {
  console.log(str1.length + str2.length);
};

const thirdTask = () => {
  const userInput = prompt("Введите 3-х значное число:");

  if (userInput.match(/^[0-9]{3}$/)) {
    const result = userInput.split("").reduce((sum, number) => {
      return sum + +number;
    }, 0);
    console.log(result);
  } else {
    console.log("Некорректный ввод.");
  }
};
