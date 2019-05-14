import { IAction } from '../../../store/interfaces';

export const selectTimeActions = {
  SHOW_SELECT_TIME: 'SHOW_SELECT_TIME',
  HIDE_SELECT_TIME: 'HIDE_SELECT_TIME',
  CHOOSE_START_TIME: 'CHOOSE_START_TIME',
  CHOOSE_END_TIME: 'CHOOSE_END_TIME',
};

const initialState = {
  isVisibleInputTime: false,
  startTime: new Date(),
  endTime: new Date(new Date().setMilliseconds(3600000)),
};

interface IState {
  isVisibleInputTime: boolean,
  startTime: Date,
  endTime: Date
}

export function selectTimeReducer( state: IState = initialState, action: IAction<any> ) {
  switch ( action.type ) {
    case selectTimeActions.SHOW_SELECT_TIME:
      return {
        ...state,
        isVisibleInputTime: true,
        startTime: new Date(),
        endTime: new Date(new Date().setMilliseconds(3600000)),
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
