import { editorTaskActions } from './constants';
import { calendarActions } from '../../';
import { IAction } from '../../../../store/interfaces';
import { IDialogDefault } from './types';
import { IDescriptionOfTask } from '../../types';

export const addTask = ( data: IDescriptionOfTask ): IAction<IDescriptionOfTask> => ( {
    type: calendarActions.ADD_TASK,
    payload: data,
} );

export const setDialogInitialState = ( data: IDialogDefault ): IAction<IDialogDefault> => ( {
    type: editorTaskActions.SET_DIALOG_INITIAL_STATE,
    payload: data,
} );

export const closeDialog = (taskId: string): IAction<any> => ( {
    type: editorTaskActions.CLOSE_DIALOG,
    taskId
} );

export const changeStartDate = ( date: Date, taskId: string ): IAction<Date> => ( {
    type: editorTaskActions.CHANGE_START_DATE,
    payload: date,
    taskId
} );

export const changeEndDate = ( date: Date, taskId: string  ): IAction<Date> => ( {
    type: editorTaskActions.CHANGE_END_DATE,
    payload: date,
    taskId
} );

export const changeNameTask = ( name: string, taskId: string ): IAction<string> => ( {
    type: editorTaskActions.CHANGE_NAME_TASK,
    payload: name,
    taskId
} );


