import { viewTaskActions } from './constants';
import { IAction } from '../../../../store/interfaces';
import { calendarActions } from '../../reducer';

export const removeTask = ( id: string ): IAction<string> => ( {
    type: calendarActions.REMOVE_TASK,
    payload: id,
} );

export const closeDialog = (): IAction<void> => ( {
    type: viewTaskActions.CLOSE_DIALOG,
} );

