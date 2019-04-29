import { datePickerActions } from './reducer'

export function changeMonth(namespace,month) {
  return {
    type: `${namespace}/${datePickerActions.CHANGE_MONTH}`,
    payload: month,
  };
}

export function changeYear(namespace,year) {
  return {
    type: `${namespace}/${datePickerActions.CHANGE_YEAR}`,
    payload: year,
  };
}

export function chooseDate(namespace,day) {
  return {
    type: `${namespace}/${datePickerActions.CHOOSE_DATE}`,
    payload: day,
  };
}

export function showCalendar(namespace,) {
  return {
    type: `${namespace}/${datePickerActions.SHOW_CALENDAR}`,
  };
}

export function hideCalendar(namespace,) {
  return {
    type: `${namespace}/${datePickerActions.HIDE_CALENDAR}`,
  };
}

export function setInitState(namespace,state) {
  return {
    type: `${namespace}/${datePickerActions.SET_INIT_STATE}`,
    payload: state,
  };
}
