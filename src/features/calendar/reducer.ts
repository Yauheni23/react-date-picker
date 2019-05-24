import { IAction } from '../../store/interfaces';
import { datePickerActions } from '../datePicker';
import { IDescriptionOfTask, IState } from './types';
import { calendarActions } from './constants';

const initialState: IState = {
    selectedDate: new Date(),
    modeCalendar: 'month',
    listOfTasks: [],
};

export function calendarReducer( state: IState = initialState, action: IAction<any> ): IState {
    switch ( action.type ) {
        case datePickerActions.CHOOSE_DATE:
            if ( action.id === 'start' ) {
                return {
                    ...state,
                    selectedDate: new Date(
                        action.payload.getFullYear(),
                        action.payload.getMonth(),
                        action.payload.getDate(),
                    ),
                };
            }
            return state;
        case calendarActions.GET_LIST_OF_TASKS_FROM_STORAGE:
            return {
                ...state,
                listOfTasks: action.payload,
            };
        case calendarActions.ADD_TASK:
            return {
                ...state,
                listOfTasks: state.listOfTasks.concat( action.payload ),
            };

        case calendarActions.REMOVE_TASK:
            return {
                ...state,
                listOfTasks: state.listOfTasks.filter( ( task: IDescriptionOfTask ) => {
                    return task.id !== action.payload;
                } ),
            };

        case calendarActions.CHANGE_MONTH:
            return {
                ...state,
                selectedDate: new Date( state.selectedDate.getFullYear(), action.payload ),
            };
        case calendarActions.CHANGE_YEAR:
            return {
                ...state,
                selectedDate: new Date( action.payload, state.selectedDate.getMonth() ),
            };
        case calendarActions.SHOW_TODAY:
            return {
                ...state,
                selectedDate: new Date(),
            };
        case calendarActions.CHANGE_DISPLAYED_DATE:
            return {
                ...state,
                selectedDate: new Date( state.selectedDate.setMilliseconds( 0 ) + action.payload ),
            };
        case calendarActions.CHOOSE_DATE:
            return {
                ...state,
                selectedDate: action.payload,
            };
        case calendarActions.CHANGE_MODE_CALENDAR:
            return {
                ...state,
                modeCalendar: action.payload,
            };

        default:
            return state;
    }
}
