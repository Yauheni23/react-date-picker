import { createSelector } from 'reselect';

export const selectTimeReducer = (state: any) => {
  return state.selectTimeReducer;
};

export const getIsVisibleInputTime = () => createSelector(
  selectTimeReducer,
  dialog => dialog.isVisibleInputTime
);

export const getStartTime = () => createSelector(
  selectTimeReducer,
  dialog => dialog.startTime
);

export const getEndTime = () => createSelector(
  selectTimeReducer,
  dialog => dialog.endTime
);


