import { viewTaskActions } from './reducer';

export function setDialogInitialState(data: any) {
  return {
    type: viewTaskActions.SET_VIEW_TASK_INITIAL_STATE,
    payload: data
  };
}

export function openDialog(data: any) {
  return {
    type: viewTaskActions.OPEN_DIALOG,
    payload: data
  };
}

export function closeDialog() {
  return {
    type: viewTaskActions.CLOSE_DIALOG,
  };
}

