import { calendarActions } from './reducer';
import { dialogForAddTaskActions } from './dialog/dialogForAddTask';
import { selectTimeActions } from './selectTime';
import { IAction } from '../../store/interfaces';

export const changeMonth = ( month: number ):IAction<number> => ( {
  type: calendarActions.CHANGE_MONTH,
  payload: month,
} );

export const changeYear = ( year: number ):IAction<number> => ( {
  type: calendarActions.CHANGE_YEAR,
  payload: year,
} );

export const showToday = () => ( {
  type: calendarActions.SHOW_TODAY,
} );

export const changeDisplayedDate = (milliseconds: number):IAction<number> => ( {
  type: calendarActions.CHANGE_DISPLAYED_DATE,
  payload: milliseconds
} );

export const chooseDate = ( date: Date ):IAction<Date> => ( {
  type: calendarActions.CHOOSE_DATE,
  payload: date,
} );

export const changeModeCalendar = ( mode: string ): IAction<string> => ( {
  type: calendarActions.CHANGE_MODE_CALENDAR,
  payload: mode,
} );

export const openDialog = (): IAction<any>  => ( {
  type: dialogForAddTaskActions.OPEN_DIALOG,
} );

export const showSelectTime = (): IAction<any>  => ( {
  type: selectTimeActions.SHOW_SELECT_TIME,
} );

