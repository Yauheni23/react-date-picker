import { IAction } from '../../../../store/interfaces';

export const dialogForAddTaskActions = {
  OPEN_DIALOG: 'OPEN_DIALOG_FOR_ADD_TASK',
  CLOSE_DIALOG: 'CLOSE_DIALOG_FOR_ADD_TASK',
};

const initialState = {
  isVisibleDialog: false
};

interface IState {
  isVisibleDialog: boolean,
}

export function dialogForAddTaskReducer( state: IState = initialState, action: IAction<any> ) {
  switch ( action.type ) {
    case dialogForAddTaskActions.OPEN_DIALOG:
      return {
        ...state,
        isVisibleDialog: true,
      };
    case dialogForAddTaskActions.CLOSE_DIALOG:
      return {
        ...state,
        isVisibleDialog: false,
      };
    default:
      return state;
  }
}
