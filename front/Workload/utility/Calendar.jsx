
const getDays = () => {
  const today = new Date();
  const date = new Date();
  var days = [];

  for (let i = 0; i < 30; i++) {
    days.push({
      weekDay: new Date(date).getDay(),
      monthDay: new Date(date).getDate(),
      date: new Date(date),
    });
    date.setDate(date.getDate() - 1);
  }

  return days;
};

const getPreviousDays = daysAgo => {
  const today = new Date();
  const date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - daysAgo,
  );
  var days = [];

  for (let i = 0; i < 30; i++) {
    days.push({
      weekDay: new Date(date).getDay(),
      monthDay: new Date(date).getDate(),
      date: new Date(date),
    });

    date.setDate(date.getDate() - 1);
  }
  return days;
};

const getCalendarTitle = changed => {
  const calendarTitle = {
    month: changed[0].item.date.getMonth(),
    year: changed[0].item.date.getFullYear(),
  };
  return calendarTitle;
};

export {getDays, getPreviousDays, getCalendarTitle};
