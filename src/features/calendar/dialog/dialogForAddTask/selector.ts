import { createSelector } from 'reselect';

export const dialogForAddTaskReducer = (state: any) => {
  return state.dialogForAddTaskReducer;
};

export const getIsVisibleDialog = () => createSelector(
  dialogForAddTaskReducer,
  dialog => dialog.isVisibleDialog
);

export const getStartDate = () => createSelector(
  dialogForAddTaskReducer,
  dialog => dialog.startDate
);

export const getEndDate = () => createSelector(
  dialogForAddTaskReducer,
  dialog => dialog.endDate
);


