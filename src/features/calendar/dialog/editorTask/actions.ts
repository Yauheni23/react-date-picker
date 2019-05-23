import { editorTaskActions } from './constants';
import { calendarActions } from '../../reducer';
import { IDescriptionOfTask } from '../../day/listOfTasks/component';
import { IAction } from '../../../../store/interfaces';
import { IDialogDefault } from './types';

export const addTask = ( data: IDescriptionOfTask ): IAction<IDescriptionOfTask> => ( {
    type: calendarActions.ADD_TASK,
    payload: data,
} );

export const setDialogInitialState = ( data: IDialogDefault ): IAction<IDialogDefault> => ( {
    type: editorTaskActions.SET_DIALOG_INITIAL_STATE,
    payload: data,
} );

export const closeDialog = (): IAction<void> => ( {
    type: editorTaskActions.CLOSE_DIALOG,
} );

export const changeStartDate = ( date: Date ): IAction<Date> => ( {
    type: editorTaskActions.CHANGE_START_DATE,
    payload: date,
} );

export const changeEndDate = ( date: Date ): IAction<Date> => ( {
    type: editorTaskActions.CHANGE_END_DATE,
    payload: date,
} );

