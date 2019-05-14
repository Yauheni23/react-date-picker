import { IAction } from '../../../../store/interfaces';

export const dialogForAddTaskActions = {
  OPEN_DIALOG: 'OPEN_DIALOG_FOR_ADD_TASK',
  CLOSE_DIALOG: 'CLOSE_DIALOG_FOR_ADD_TASK',
  CHANGE_START_DATE: 'CHANGE_START_DATE',
  CHANGE_END_DATE: 'CHANGE_END_DATE',
  CHANGE_DURATION: 'CHANGE_DURATION',
  SET_DIALOG_INITIAL_STATE: 'SET_DIALOG_INITIAL_STATE',
};

const initialState = {
  isVisibleDialog: null,
  startDate: null,
  duration: null,
  endDate: null
};

interface IState {
  isVisibleDialog: boolean | null,
  startDate: Date | null,
  duration: number | null,
  endDate: Date | null
}

export function dialogForAddTaskReducer( state: IState = initialState, action: IAction<any> ) {
  switch ( action.type ) {
    case dialogForAddTaskActions.SET_DIALOG_INITIAL_STATE:
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        duration: action.payload.duration
      };
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
    case dialogForAddTaskActions.CHANGE_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case dialogForAddTaskActions.CHANGE_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case dialogForAddTaskActions.CHANGE_DURATION:
      return {
        ...state,
        duration: action.payload,
      };

    default:
      return state;
  }
}
