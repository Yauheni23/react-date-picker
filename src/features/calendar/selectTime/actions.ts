import { selectTimeActions } from './reducer';

export function showInputTime() {
  return {
    type: selectTimeActions.SHOW_SELECT_TIME
  };
}

export function hideInputTime() {
  return {
    type: selectTimeActions.HIDE_SELECT_TIME,
  };
}

export function chooseStartTime(date: Date) {
  return {
    type: selectTimeActions.CHOOSE_START_TIME,
    payload: date
  };
}

export function chooseEndTime(date: Date) {
  return {
    type: selectTimeActions.CHOOSE_END_TIME,
    payload: date
  };
}


