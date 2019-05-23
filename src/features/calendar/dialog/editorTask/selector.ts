import { createSelector } from 'reselect';
import { ISelectors } from './types';

export const editorTaskReducer = (state: any): ISelectors => {
  return state.editorTaskReducer;
};

export const getStartDate = () => createSelector(
    editorTaskReducer,
    editorTask => editorTask.startDate
);

export const getEndDate = () => createSelector(
    editorTaskReducer,
    editorTask => editorTask.endDate
);

export const getIsVisibleDialog = () => createSelector(
    editorTaskReducer,
    editorTask => editorTask.isVisibleDialog
);


