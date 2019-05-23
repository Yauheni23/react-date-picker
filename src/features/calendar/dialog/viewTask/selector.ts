import { createSelector } from 'reselect';
import { ISelectors } from './types';

export const viewTaskReducer = ( state: any ): ISelectors => {
    return state.viewTaskReducer;
};

export const getId = () => createSelector(
    viewTaskReducer,
    viewTask => viewTask.id,
);


