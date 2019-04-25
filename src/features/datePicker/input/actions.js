import { inputActions } from './reducer';

export function showCalendar() {
  return {
    type: inputActions.SHOW_CALENDAR,
  };
}

export function hideCalendar() {
  return {
    type: inputActions.HIDE_CALENDAR,
  };
}

export function changeSelectedDate(date) {
  return {
    type: inputActions.CHANGE_SELECTED_DATE,
    payload: date
  };
}
