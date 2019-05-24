import { createSelector, OutputSelector } from 'reselect';
import { ISelectors } from './types';

export const editorTaskReducer = (state: any): ISelectors => {
  return state.editorTaskReducer;
};

export const getStartDate = (): OutputSelector<any, Date, ( res: ISelectors ) => Date> => createSelector(
    editorTaskReducer,
    editorTask => editorTask.startDate
);

export const getEndDate = (): OutputSelector<any, Date, ( res: ISelectors ) => Date> => createSelector(
    editorTaskReducer,
    editorTask => editorTask.endDate
);

export const getIsVisibleDialog = (): OutputSelector<any, boolean, ( res: ISelectors ) => boolean> => createSelector(
    editorTaskReducer,
    editorTask => editorTask.isVisibleDialog
);


