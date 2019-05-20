import { createSelector } from 'reselect';

export const viewTaskReducer = ( state: any ) => {
    return state.viewTaskReducer;
};

export const getIsVisibleViewTask = () => createSelector(
    viewTaskReducer,
    dialog => dialog.isVisibleViewTask,
);

export const getStartDate = () => createSelector(
    viewTaskReducer,
    dialog => dialog.startDate,
);

export const getEndDate = () => createSelector(
    viewTaskReducer,
    dialog => dialog.endDate,
);

export const getNameTask = () => createSelector(
    viewTaskReducer,
    dialog => dialog.nameTask,
);


