export const calculateDayOfWeek = () => {
  const date = prompt("Введите дату в формате ДД.ММ.ГГГГ");
  const parseDate = date.split(".").reverse();

  const dateObject = new Date(parseDate[0], parseDate[1] - 1, parseDate[2]);
  const options = { weekday: "long" };
  console.log(new Intl.DateTimeFormat("ru-RU", options).format(dateObject));
};

export const timesFromDayStart = () => {
  const dateStart = new Date();
  dateStart.setHours(0, 0, 0, 0);
  console.log(Math.floor((Date.now() - dateStart) / 60 / 1000));
};

export const younger = (firstDate, secondDate) => {
  const firstDateObject = new Date(...firstDate.split(".").reverse());
  const secondDateObject = new Date(...secondDate.split(".").reverse());

  if (firstDateObject > secondDateObject) {
    console.log("Первая дата больше");
  } else if (firstDateObject < secondDateObject) {
    console.log("Вторая дата больше");
  } else {
    console.log("Даты равны");
  }
};
