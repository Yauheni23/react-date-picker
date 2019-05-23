import { createSelector } from 'reselect';

export const CalendarReducer = ( state: any ) => {
    return state.calendarReducer;
};

const ViewTaskReducer = ( state: any ) => {
    return state.viewTaskReducer;
};

export const getSelectedDate = () => createSelector(
    CalendarReducer,
    calendar => calendar.selectedDate,
);

export const getModeCalendar = () => createSelector(
    CalendarReducer,
    calendar => calendar.modeCalendar,
);

export const getListOfTasks = () => createSelector(
    CalendarReducer,
    calendar => calendar.listOfTasks,
);

export const getIsVisibleViewTask = () => createSelector(
    ViewTaskReducer,
    editorTask => editorTask.isVisibleViewTask,
);


