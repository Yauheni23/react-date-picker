import { createSelector } from 'reselect';

export const dialogForAddTaskReducer = (state: any) => {
  return state.dialogForAddTaskReducer;
};

export const getIsVisibleDialog = () => createSelector(
  dialogForAddTaskReducer,
  dialog => dialog.isVisibleDialog
);


