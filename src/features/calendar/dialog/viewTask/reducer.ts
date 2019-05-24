import { IAction } from 'store/interfaces';
import { IState } from './types';
import { viewTaskActions } from './constants';

const initialState = {};

export function viewTaskReducer( state: IState = initialState, action: IAction<string> ): IState {
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
