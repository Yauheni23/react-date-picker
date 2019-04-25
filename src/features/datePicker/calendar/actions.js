import { calendarActions } from './reducer';

export function changeMonth(month) {
  return {
    type: calendarActions.CHANGE_MONTH,
    payload: month
  };
}

export function changeYear(year) {
  return {
    type: calendarActions.CHANGE_YEAR,
    payload: year
  };
}
export function chooseDate(day) {
  return {
    type: calendarActions.CHOOSE_DATE,
    payload: day
  };
}

export function hideCalendar() {
  return {
    type: calendarActions.HIDE_CALENDAR,
  };
}