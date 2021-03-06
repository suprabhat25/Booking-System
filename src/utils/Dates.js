export const GetDates = (startDate, daysToAdd) => {
  let aryDates = [];

  for (let i = 0; i <= daysToAdd; i++) {
    let currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    aryDates.push({
      day: DayAsString(currentDate.getDay()),
      date: currentDate.getDate(),
      month: MonthAsString(currentDate.getMonth()),
    });
  }

  return aryDates;
};

function MonthAsString(monthIndex) {
  let month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  return month[monthIndex];
}

function DayAsString(dayIndex) {
  let weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  return weekdays[dayIndex];
}

export const NumberasMonth = (monthName) => {
  let month = new Array();

  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  return month.indexOf(monthName);
};
