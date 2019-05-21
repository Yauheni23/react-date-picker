import { IAction } from '../../../../store/interfaces';

export const viewTaskActions = {
    OPEN_DIALOG: 'OPEN_VIEW_TASK',
    CLOSE_DIALOG: 'CLOSE_VIEW_TASK',
};

const initialState = {
    isVisibleViewTask: null,
    id: null,
};

interface IState {
    isVisibleViewTask: boolean | null;
    id: string | null;
}

export function viewTaskReducer( state: IState = initialState, action: IAction<any> ): IState {
    switch ( action.type ) {
        case viewTaskActions.OPEN_DIALOG:
            return {
                ...state,
                id: action.payload,
                isVisibleViewTask: true,
            };

        case viewTaskActions.CLOSE_DIALOG:
            return {
                ...state,
                isVisibleViewTask: false,
            };

        default:
            return state;
    }
}
