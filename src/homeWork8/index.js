export const calculateDayOfWeek = () => {
  const date = prompt("Введите дату в формате ДД.ММ.ГГГГ");
  const parseDate = date.split(".").reverse();

  const dateObject = new Date(parseDate[0], parseDate[1] - 1, parseDate[2]);
  const options = { weekday: "long" };
  console.log(new Intl.DateTimeFormat("ru-RU", options).format(dateObject));
};

export const timesFromDayStart = () => {
  const d = new Date();
  console.log(
    (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()) / 60
  );
};

export const whoIsYounger = (firstDate, secondDate) => {
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
