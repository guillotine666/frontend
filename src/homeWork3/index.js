export const sumOfIntegersFrom50To100 = () => {
  let result = 0;
  for (let i = 50; i <= 100; i += 1) {
    result += i;
  }

  console.log(result);
};

export const multiplicationTableBySeven = () => {
  for (let i = 1; i <= 9; i += 1) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
};

export const arithmeticAverageOfOdd = () => {
  let sumOfOdds = 0;
  let counterOfOdds = 0;
  const userInput = prompt("Введите число:");

  for (let i = 1; i <= userInput; i += 1) {
    if (i % 2 !== 0) {
      sumOfOdds += i;
      counterOfOdds += 1;
    }
  }

  console.log(sumOfOdds / counterOfOdds);
};
