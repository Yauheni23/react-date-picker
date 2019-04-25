import { datePickerActions} from './reducer'

export function changeMonth(month) {
  return {
    type: datePickerActions.CHANGE_MONTH,
    payload: month,
  };
}

export function changeYear(year) {
  return {
    type: datePickerActions.CHANGE_YEAR,
    payload: year,
  };
}

export function chooseDate(day) {
  return {
    type: datePickerActions.CHOOSE_DATE,
    payload: day,
  };
}

export function showCalendar() {
  return {
    type: datePickerActions.SHOW_CALENDAR,
  };
}

export function hideCalendar() {
  return {
    type: datePickerActions.HIDE_CALENDAR,
  };
}

export function changeSelectedDate(date) {
  return {
    type: datePickerActions.CHANGE_SELECTED_DATE,
    payload: date,
  };
}
