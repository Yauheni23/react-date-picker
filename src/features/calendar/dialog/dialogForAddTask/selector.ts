import { createSelector } from 'reselect';

export const dialogForAddTaskReducer = (state: any) => {
  return state.dialogForAddTaskReducer;
};
export const startDatePickerReducer = (state: any) => {
  return state.datePickerReducer.datePickers[0] && state.datePickerReducer.datePickers[0].selectedDate;
};
export const endDatePickerReducer = (state: any) => {
  return state.datePickerReducer.datePickers[1] && state.datePickerReducer.datePickers[1].selectedDate;
};
export const startTimeReducer = (state: any) => {
  return state.selectTimeReducer.startTime;
};
export const endTimeReducer = (state: any) => {
  return state.selectTimeReducer.endTime;
};

export const getIsVisibleDialog = () => createSelector(
  dialogForAddTaskReducer,
  dialog => dialog.isVisibleDialog
);

export const getNewTaskInfo = () => createSelector(
  startDatePickerReducer,
  endDatePickerReducer,
  startTimeReducer,
  endTimeReducer,
  (startSelectedDate,endSelectedDate, startTime, endTime) => ({
    startDate: startSelectedDate,
    endDate: endSelectedDate,
    startTime: startTime,
    endTime: endTime,
  })
);

export const getTaskInfo = () => createSelector(
  dialogForAddTaskReducer,
  dialog => ({
    startDate: dialog.startDate,
    endDate: dialog.endDate,
    duration: dialog.duration
  })
);


