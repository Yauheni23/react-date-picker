import { dialogForAddTaskActions } from './reducer';

export function setDialogInitialState(data: any) {
  return {
    type: dialogForAddTaskActions.SET_DIALOG_INITIAL_STATE,
    payload: data
  };
}

export function closeDialog() {
  return {
    type: dialogForAddTaskActions.CLOSE_DIALOG,
  };
}

export function changeStartDate(date: Date) {
  return {
    type: dialogForAddTaskActions.CHANGE_START_DATE,
    payload: date
  };
}

export function changeEndDate(date: Date) {
  return {
    type: dialogForAddTaskActions.CHANGE_END_DATE,
    payload: date
  };
}


