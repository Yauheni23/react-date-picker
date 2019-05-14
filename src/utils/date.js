export function validateDateFromInput(date) {
  return date.search(/[1-9][0-9]{3}-((0[0-9])|(1[0-2]))-(([0-2][0-9])|(3[0-1]))/) !== -1;
}

export function convertFromFormatInputInDate(date) {
  const year = (date[0] + date[1] + date[2] + date[3]);
  const month = (date[5] + date[6]) - 1;
  const day = (date[8] + date[9]);

  return new Date(year, month, day);
}

export function convertFromDateInFormatInput(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if(month <= 9) {
    month = '0' + month;
  }

  if(day <= 9) {
    day = '0' + day;
  }

  return `${date.getFullYear()}-${month}-${day}`;
}

export function daysInMonth(date) {
  return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
}

export function getArrayDaysInMonth(date) {
  const arrayDaysInMonth = [];
  const dayOfWeek = new Date(date.getFullYear(), date.getMonth()).getDay();
  const countWeeksInMonth = (daysInMonth(date) - 7 + dayOfWeek - 0.0001) / 7 | 0;

  for(let i = 0; i <= countWeeksInMonth + 1; i++) {
    arrayDaysInMonth[i] = [];
    for(let j = 0; j < 7; j++) {
      const currentDayOfMonth = (7 * i) + j + 1 - dayOfWeek;
      arrayDaysInMonth[i][j] = (currentDayOfMonth > 0 && currentDayOfMonth <= daysInMonth(date)) ?
        currentDayOfMonth + '' : '';
    }
  }
  return arrayDaysInMonth;
}

export function getFormatForInputTime(addHours = 0, addMinutes = 0) {
  let hours = addHours;
  let minutes = addMinutes;
  if(minutes > 0 && minutes <= 30) {
    minutes = 30;
  } else if(minutes > 30 && minutes <= 60) {
    minutes = 0;
    hours++;
  } else if (minutes > 60){
    minutes = 30;
    hours++;
  }

  if(hours >= 24) {
    hours = hours % 24;
  }
  if(hours <= 9) {
    hours = '0' + hours;
  }
  if(minutes <= 9) {
    minutes = '0' + minutes;
  }

  return `${hours}:${minutes}`;
}

export function validateFormatInputTime(time){
  return time.search(/[0-2][0-9]:[0-5][0-9]/) !== -1
}

export function getTimeFromInputTimeFormat(time) {
  const result = time.match(/([0-2][0-9]):([0-5][0-9])/);
  return {
    hours: result && +result[1],
    minutes: result && +result[2]
  };
}

export function equalDate(firstDate, secondDate) {
  return firstDate.getFullYear() === secondDate.getFullYear()
  && firstDate.getMonth() === secondDate.getMonth()
  && firstDate.getDate() === secondDate.getDate()
}