import { dialogForAddTaskActions } from './reducer';

export function closeDialog() {
  return {
    type: dialogForAddTaskActions.CLOSE_DIALOG,
  };
}


