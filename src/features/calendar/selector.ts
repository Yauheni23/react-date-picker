import { createSelector, OutputSelector } from 'reselect';
import { IDescriptionOfTask, ISelectors } from './types';
import { IState as IViewTask } from './dialog/viewTask/types'
import { IState as IAppState } from '../../store/interfaces';

export const CalendarReducer = ( state: IAppState ): ISelectors => {
    return state.calendarReducer;
};

const ViewTaskReducer = ( state: IAppState ): IViewTask => {
    return state.viewTaskReducer;
};

export const getSelectedDate = (): OutputSelector<IAppState, Date, ( res: ISelectors ) => Date> => createSelector(
    CalendarReducer,
    calendar => calendar.selectedDate,
);

export const getModeCalendar = (): OutputSelector<IAppState, string, ( res: ISelectors ) => string> => createSelector(
    CalendarReducer,
    calendar => calendar.modeCalendar,
);

export const getListOfTasks = (): OutputSelector<IAppState, IDescriptionOfTask[], ( res: ISelectors ) => IDescriptionOfTask[]> => createSelector(
    CalendarReducer,
    calendar => calendar.listOfTasks,
);

export const getIsVisibleViewTask = (): OutputSelector<IAppState, boolean | undefined, ( res: IViewTask ) => ( boolean | undefined )> => createSelector(
    ViewTaskReducer,
    editorTask => editorTask.isVisibleViewTask,
);


