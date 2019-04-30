import { datePickerActions} from './reducer'

export function changeMonth(datePickerId, month) {
  return {
    type: datePickerActions.CHANGE_MONTH,
    payload: month,
    datePickerId
  };
}

export function changeYear(datePickerId, year) {
  return {
    type: datePickerActions.CHANGE_YEAR,
    payload: year,
    datePickerId
  };
}

export function chooseDate(datePickerId, day) {
  return {
    type: datePickerActions.CHOOSE_DATE,
    payload: day,
    datePickerId
  };
}

export function showCalendar(datePickerId, ) {
  return {
    type: datePickerActions.SHOW_CALENDAR,
    datePickerId
  };
}

export function hideCalendar(datePickerId) {
  return {
    type: datePickerActions.HIDE_CALENDAR,
    datePickerId
  };
}

export function changeSelectedDate(datePickerId, date) {
  return {
    type: datePickerActions.CHANGE_SELECTED_DATE,
    payload: date,
    datePickerId
  };
}

export function setDatePickerInitialState(datePickerId, state) {
  return {
    type: datePickerActions.SET_DATE_PICKER_INITIAL_STATE,
    payload: state,
    datePickerId
  };
}
