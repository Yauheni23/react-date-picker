import { calendarActions } from './reducer';

export function changeMonth( month: number ) {
  return {
    type: calendarActions.CHANGE_MONTH,
    payload: month,
  };
}

export function changeYear( year: number ) {
  return {
    type: calendarActions.CHANGE_YEAR,
    payload: year,
  };
}

export function chooseDate( day: number ) {
  return {
    type: calendarActions.CHOOSE_DATE,
    payload: day,
  };
}

