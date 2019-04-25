export function validateDateFromInput(date) {
  const year = +(date[0] + date[1] + date[2] + date[3]);
  const month = +(date[5] + date[6]);
  const day = +(date[8] + date[9]);

  return !isNaN(year + month + day)
    && year >= 1000 && year <= 9999
    && month >= 1 && month <= 12
    && day >= 1 && day <= 31;
}

export function convertFromFormatInputInDate(date) {
  const year = +(date[0] + date[1] + date[2] + date[3]);
  const month = +(date[5] + date[6]) - 1;
  const day = +(date[8] + date[9]);

  return new Date(year, month, day);
}

export function convertFromDateInFormatInput(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  /* eslint-disable */
  (month <= 9) ? month = '0' + month : month + '';
  (day <= 9) ? day = '0' + day : day + '';
  /* eslint-disable */
  return `${date.getFullYear()}-${month}-${day}`;
}

export function daysInMonth(date) {
  return 33
    - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
}

export function  getArrayDaysInMonth(date) {
  const arrayDaysInMonth = [];
  const dayOfWeek = new Date(date.getFullYear(), date.getMonth()).getDay();
  const countWeeksInMonth = (daysInMonth(date) - 7 + dayOfWeek - 0.0001) / 7 | 0;

  for (let i = 0; i <= countWeeksInMonth + 1; i++) {
    arrayDaysInMonth[i] = [];
    for (let j = 0; j < 7; j++) {
      const currentDayOfMonth = (7 * i) + j + 1 - dayOfWeek;
      arrayDaysInMonth[i][j] = (currentDayOfMonth > 0 && currentDayOfMonth <= daysInMonth(date)) ?
        currentDayOfMonth + '' : '';
    }
  }
  return arrayDaysInMonth;
}
//
// export function formatForInputTime(addHours = 0, addMinutes = 0) {
//   let hours = this.getHours() + addHours;
//   let minutes = this.getMinutes() + addMinutes;
//
//   if (minutes > 0 && minutes <= 30) {
//     minutes = 30;
//   } else if (minutes > 30) {
//     minutes = 0;
//     hours++;
//   }
//   if (hours >= 24) {
//     hours = hours % 24;
//   }
//   (hours <= 9) ? hours = '0' + hours : hours + '';
//   (minutes <= 9) ? minutes = '0' + minutes : minutes + '';
//
//   return `${ hours }:${ minutes }`;
// }