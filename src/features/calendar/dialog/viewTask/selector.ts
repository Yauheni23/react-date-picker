import { createSelector, OutputSelector } from 'reselect';
import { ISelectors } from './types';

export const viewTaskReducer = ( state: any ): ISelectors => {
    return state.viewTaskReducer;
};

export const getId = (): OutputSelector<any, string, ( res: ISelectors ) => string> => createSelector(
    viewTaskReducer,
    viewTask => viewTask.id,
);


