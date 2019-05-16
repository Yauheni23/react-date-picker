import { datePickerActions } from './reducer';

export const setDisplayedDate = (date) => ({
  type: datePickerActions.SET_DISPLAYED_DATE,
  payload: date,
});

export const changeMonth = (month) => ({
  type: datePickerActions.CHANGE_MONTH,
  payload: month,
});

export const changeYear = (year) => ({
  type: datePickerActions.CHANGE_YEAR,
  payload: year,
});

export const chooseDate = (date, id) => ({
  type: datePickerActions.CHOOSE_DATE,
  payload: date,
  id: id
});

export const showCalendar = () => ({
  type: datePickerActions.SHOW_CALENDAR,
});

export const hideCalendar = () => ({
  type: datePickerActions.HIDE_CALENDAR,
});

