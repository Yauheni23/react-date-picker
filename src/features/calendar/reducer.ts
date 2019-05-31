import { IAction } from '../../store/interfaces';
import { editorTaskActions } from './dialog/editorTask';
import { IDescriptionOfTask, IState } from './types';
import { calendarActions } from './constants';
import { checkRoute } from '../../utils/checkRoute';

const initialState: IState = {
    selectedDate: new Date(),
    modeCalendar: 'month',
    listOfTasks: [],
};

export function calendarReducer( state: IState = initialState, action: IAction<any> ): IState {
    switch ( action.type ) {
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
                selectedDate: action.payload,
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

        case calendarActions.LOCATION_CHANGE:
            return {
                ...state,
                modeCalendar: checkRoute( action.payload.location.pathname ),
            };

        case editorTaskActions.SET_DIALOG_INITIAL_STATE:
            return {
                ...state,
                listOfTasks: [
                    ...state.listOfTasks,
                    action.payload
                ]
            };

        case editorTaskActions.CHANGE_NAME_TASK:{
            return {
                ...state,
                listOfTasks: changeTask('nameTask', state.listOfTasks, action)
            };
        }
            
        case editorTaskActions.CHANGE_START_DATE:{
            return {
                ...state,
                listOfTasks: changeTask('startDate', state.listOfTasks, action),
                selectedDate: action.payload
            };
        }
        case editorTaskActions.CHANGE_END_DATE:{
            return {
                ...state,
                listOfTasks: changeTask('endDate', state.listOfTasks, action)
            };
        }

        case editorTaskActions.CLOSE_DIALOG:{
            const index = state.listOfTasks.findIndex(task => {
                return task.id === action.taskId;
            });
            const newListOfTasks = [
                ...state.listOfTasks
            ];
            if(index !== -1){
                newListOfTasks.splice(index, 1)
            }
            return {
                ...state,
                listOfTasks: newListOfTasks
            };
        }

        default:
            return state;
    }
}

function changeTask( changeProps: string, listOfTasks: IDescriptionOfTask[], action: IAction<any> ): IDescriptionOfTask[] {
    const index = listOfTasks.findIndex(task => {
        return task.id === action.taskId;
    });
    const newTask = {
        ...listOfTasks[index],
        [changeProps]: action.payload
    };
    if((changeProps === 'endDate' || changeProps === 'startDate') && +newTask.startDate > +newTask.endDate ) {
        newTask.endDate = newTask.startDate;
    }
    const newListOfTasks = [
        ...listOfTasks
    ];
    newListOfTasks[index] = newTask;
    return newListOfTasks;
}
