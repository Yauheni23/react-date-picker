import { viewTaskActions } from './reducer';
import { calendarActions } from '../../reducer';
import { IAction } from '../../../../store/interfaces';

export const openDialog = ( id: string ): IAction<string> => ( {
    type: viewTaskActions.OPEN_DIALOG,
    payload: id,
} );

export const closeDialog = (): IAction<any> => ( {
    type: viewTaskActions.CLOSE_DIALOG,
} );

export const removeTask = ( id: string ): IAction<string> => ( {
    type: calendarActions.REMOVE_TASK,
    payload: id,
} );

