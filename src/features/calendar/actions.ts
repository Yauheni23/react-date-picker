import { calendarActions } from './reducer';
import { dialogForAddTaskActions } from './dialog/dialogForAddTask';

export const changeMonth = ( month: number ) => ( {
  type: calendarActions.CHANGE_MONTH,
  payload: month,
} );

export const changeYear = ( year: number ) => ( {
  type: calendarActions.CHANGE_YEAR,
  payload: year,
} );

export const showToday = () => ( {
  type: calendarActions.SHOW_TODAY,
} );

export const changeDisplayedDate = (milliseconds: number) => ( {
  type: calendarActions.CHANGE_DISPLAYED_DATE,
  payload: milliseconds
} );

export const chooseDate = ( day: number ) => ( {
  type: calendarActions.CHOOSE_DATE,
  payload: day,
} );

export const openDialog = () => ( {
  type: dialogForAddTaskActions.OPEN_DIALOG,
} );

