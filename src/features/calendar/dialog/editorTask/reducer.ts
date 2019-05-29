import { IAction } from '../../../../store/interfaces';
import { datePickerActions } from '../../../datePicker';
import { editorTaskActions } from './constants';
import { IState } from './types';

const initialState: IState = {};

export function editorTaskReducer( state: IState = initialState, action: IAction<any> ): IState {
    switch ( action.type ) {
        case datePickerActions.CHOOSE_DATE:
            const changeDate = ( action.id === 'start' ? 'startDate' : 'endDate' );
            return {
                ...state,
                [ changeDate ]: new Date(
                    action.payload.getFullYear(),
                    action.payload.getMonth(),
                    action.payload.getDate(),
                    // @ts-ignore
                    state[ changeDate ] ? state[ changeDate ].getHours() : 0,
                    // @ts-ignore
                    state[ changeDate ] ? state[ changeDate ].getMinutes() : 0,
                ),
            };
        case editorTaskActions.SET_DIALOG_INITIAL_STATE:
            return {
                ...state,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
            };
        case editorTaskActions.OPEN_DIALOG:
            return {
                ...state,
                isVisibleDialog: true,
            };
        case editorTaskActions.CLOSE_DIALOG:
            return {
                ...state,
                isVisibleDialog: false,
            };
        case editorTaskActions.CHANGE_START_DATE:
            return {
                ...state,
                startDate: action.payload,
            };
        case editorTaskActions.CHANGE_END_DATE:
            return {
                ...state,
                endDate: action.payload,
            };

        default:
            return state;
    }
}
