import { IAction } from '../../store/interfaces';
import { datePickerActions } from '../datePicker';
import { IDescriptionOfTask } from './day/listOfTasks/component';

export const calendarActions = {
    CHANGE_SELECTED_DATE: 'CALENDAR_CHANGE_SELECTED_DATE',
    CHANGE_MONTH: 'CALENDAR_CHANGE_MONTH',
    CHANGE_YEAR: 'CALENDAR_CHANGE_YEAR',
    CHOOSE_DATE: 'CALENDAR_CHOOSE_DATE',
    SHOW_TODAY: 'SHOW_TODAY',
    CHANGE_DISPLAYED_DATE: 'CHANGE_DISPLAYED_DATE',
    CHANGE_MODE_CALENDAR: 'CHANGE_MODE_CALENDAR',
    GET_LIST_OF_TASKS_FROM_STORAGE: 'GET_LIST_OF_TASKS_FROM_STORAGE',
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
};

const initialState = {
    selectedDate: new Date(),
    modeCalendar: 'month',
    listOfTasks: [],
};

interface IState {
    selectedDate: Date;
    modeCalendar: string;
    listOfTasks: any;
}

export function calendarReducer( state: IState = initialState, action: IAction<any> ) {
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
