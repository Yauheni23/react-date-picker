import { createSelector } from 'reselect';

export const viewTaskReducer = ( state: any ) => {
    return state.viewTaskReducer;
};

export const getIsVisibleViewTask = () => createSelector(
    viewTaskReducer,
    viewTask => viewTask.isVisibleViewTask,
);

export const getId = () => createSelector(
    viewTaskReducer,
    viewTask => viewTask.id,
);


