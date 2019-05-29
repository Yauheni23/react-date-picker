import { calendarActions } from './';
import { editorTaskActions } from './dialog/editorTask';
import { IAction } from '../../store/interfaces';
import { viewTaskActions } from './dialog/viewTask';
import { IDescriptionOfTask } from './types';

export const setListOfTasksFromStorage = ( tasks: IDescriptionOfTask[] ): IAction<IDescriptionOfTask[]> => ( {
    type: calendarActions.GET_LIST_OF_TASKS_FROM_STORAGE,
    payload: tasks,
} );

export const removeTask = ( id: string ): IAction<string> => ( {
    type: calendarActions.REMOVE_TASK,
    payload: id,
} );


export const changeMonth = ( month: number ): IAction<number> => ( {
    type: calendarActions.CHANGE_MONTH,
    payload: month,
} );

export const changeYear = ( year: number ): IAction<number> => ( {
    type: calendarActions.CHANGE_YEAR,
    payload: year,
} );

export const showToday = (): IAction<any> => ( {
    type: calendarActions.SHOW_TODAY,
} );

export const changeDisplayedDate = ( milliseconds: number ): IAction<number> => ( {
    type: calendarActions.CHANGE_DISPLAYED_DATE,
    payload: milliseconds,
} );

export const chooseDate = ( date: Date ): IAction<Date> => ( {
    type: calendarActions.CHOOSE_DATE,
    payload: date,
} );

export const changeModeCalendar = ( mode: string ): IAction<string> => ( {
    type: calendarActions.CHANGE_MODE_CALENDAR,
    payload: mode,
} );

export const openDialog = (): IAction<any> => ( {
    type: editorTaskActions.OPEN_DIALOG,
} );

export const openViewTask = ( id: string ): IAction<string> => ( {
    type: viewTaskActions.OPEN_DIALOG,
    payload: id,
} );

