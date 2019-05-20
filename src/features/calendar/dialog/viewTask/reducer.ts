import { IAction } from '../../../../store/interfaces';

export const viewTaskActions = {
  OPEN_DIALOG: 'OPEN_VIEW_TASK',
  CLOSE_DIALOG: 'CLOSE_VIEW_TASK',
  SET_VIEW_TASK_INITIAL_STATE: 'SET_VIEW_TASK_INITIAL_STATE',
};

const initialState = {
  isVisibleViewTask: null,
  startDate: null,
  endDate: null,
  nameTask: null,
};

interface IState {
  isVisibleViewTask: boolean | null;
  startDate: Date | null;
  endDate: Date | null;
  nameTask: string | null;
}

export function viewTaskReducer( state: IState = initialState, action: IAction<any> ): IState {
  switch ( action.type ) {
    case viewTaskActions.SET_VIEW_TASK_INITIAL_STATE:
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate
      };
    case viewTaskActions.OPEN_DIALOG:
      return {
        ...state,
        isVisibleViewTask: true,
        nameTask: action.payload.nameTask,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate
      };
    case viewTaskActions.CLOSE_DIALOG:
      return {
        ...state,
        isVisibleViewTask: false,
      };

    default:
      return state;
  }
}
