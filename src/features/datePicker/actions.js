import { datePickerActions} from './reducer'

export function changeMonth(id, month) {
  return {
    type: datePickerActions.CHANGE_MONTH,
    payload: month,
    id
  };
}

export function changeYear(id, year) {
  return {
    type: datePickerActions.CHANGE_YEAR,
    payload: year,
    id
  };
}

export function chooseDate(id, day) {
  return {
    type: datePickerActions.CHOOSE_DATE,
    payload: day,
    id
  };
}

export function showCalendar(id, ) {
  return {
    type: datePickerActions.SHOW_CALENDAR,
    id
  };
}

export function hideCalendar(id, ) {
  return {
    type: datePickerActions.HIDE_CALENDAR,
    id
  };
}

export function changeSelectedDate(id, date) {
  return {
    type: datePickerActions.CHANGE_SELECTED_DATE,
    payload: date,
    id
  };
}
