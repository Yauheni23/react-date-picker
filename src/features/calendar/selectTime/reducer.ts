import { IAction } from '../../../store/interfaces';

export const selectTimeActions = {
  SHOW_SELECT_TIME: 'SHOW_SELECT_TIME',
  HIDE_SELECT_TIME: 'HIDE_SELECT_TIME',
  CHOOSE_START_TIME: 'CHOOSE_START_TIME',
  CHOOSE_END_TIME: 'CHOOSE_END_TIME',
};

const initialState = {
  isVisibleInputTime: null,
  startTime: null,
  endTime: null,
};

export interface IState {
  isVisibleInputTime: boolean | null,
  startTime: Date | null,
  endTime: Date | null
}

export function selectTimeReducer( state: IState = initialState, action: IAction<any> ) {
  switch ( action.type ) {
    case selectTimeActions.SHOW_SELECT_TIME:
      return {
        ...state,
        isVisibleInputTime: action.payload.isVisibleInputTime || true,
        startTime: action.payload.startTime || new Date(),
        endTime: action.payload.endTime || new Date(new Date().setMilliseconds(3600000)),
      };
    case selectTimeActions.HIDE_SELECT_TIME:
      return {
        ...state,
        isVisibleInputTime: false,
      };
    case selectTimeActions.CHOOSE_START_TIME:
      return {
        ...state,
        startTime: action.payload,
      };
    case selectTimeActions.CHOOSE_END_TIME:
      return {
        ...state,
        endTime: action.payload,
      };

    default:
      return state;
  }
}
