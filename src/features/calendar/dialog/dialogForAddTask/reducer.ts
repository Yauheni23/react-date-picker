import { IAction } from '../../../../store/interfaces';
import { datePickerActions } from '../../../datePicker';
import { selectTimeActions } from '../../selectTime';

export const dialogForAddTaskActions = {
  OPEN_DIALOG: 'OPEN_DIALOG_FOR_ADD_TASK',
  CLOSE_DIALOG: 'CLOSE_DIALOG_FOR_ADD_TASK',
  CHANGE_START_DATE: 'CHANGE_START_DATE',
  CHANGE_END_DATE: 'CHANGE_END_DATE',
  SET_DIALOG_INITIAL_STATE: 'SET_DIALOG_INITIAL_STATE',
};

const initialState = {
  isVisibleDialog: null,
  startDate: null,
  endDate: null
};

interface IState {
  isVisibleDialog: boolean | null;
  startDate: Date | null;
  endDate: Date | null;
}

export function dialogForAddTaskReducer( state: IState = initialState, action: IAction<any> ): IState {
  switch ( action.type ) {
    case datePickerActions.CHOOSE_DATE:
      const changeDate = ( action.id === 'start' ? 'startDate' : 'endDate' );
      return {
        ...state,
        [ changeDate ]: new Date(
          action.payload.getFullYear(),
          action.payload.getMonth(),
          action.payload.getDate(),
          // @ts-ignore
          state[ changeDate ] ? state[ changeDate ].getHours() : 1,
          // @ts-ignore
          state[ changeDate ] ? state[ changeDate ].getMinutes() : 1,
        ),
      };
    case selectTimeActions.CHOOSE_START_TIME:
      return {
        ...state,
        startDate: state.startDate ? new Date(
          state.startDate.getFullYear(),
          state.startDate.getMonth(),
          state.startDate.getDate(),
          action.payload.getHours(),
          action.payload.getMinutes(),
        ) : new Date(),
      };
    case selectTimeActions.CHOOSE_END_TIME:
      return {
        ...state,
        endDate: state.endDate ? new Date(
          state.endDate.getFullYear(),
          state.endDate.getMonth(),
          state.endDate.getDate(),
          action.payload.getHours(),
          action.payload.getMinutes(),
        ) : new Date(),
      };

    case selectTimeActions.SHOW_SELECT_TIME:
      return {
        ...state,
        startDate: state.startDate ? new Date(
          state.startDate.getFullYear(),
          state.startDate.getMonth(),
          state.startDate.getDate(),
          action.payload.startTime.getHours(),
          action.payload.startTime.getMinutes(),
        ) : new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate(),
          action.payload.startTime.getHours(),
          action.payload.startTime.getMinutes(),
        ),
        endDate: state.endDate ? new Date(
          state.endDate.getFullYear(),
          state.endDate.getMonth(),
          state.endDate.getDate(),
          action.payload.endTime.getHours(),
          action.payload.endTime.getMinutes(),
        ) : new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate(),
          action.payload.endTime.getHours(),
          action.payload.endTime.getMinutes(),
        ),
      };

    case dialogForAddTaskActions.SET_DIALOG_INITIAL_STATE:
      return {
        ...state,
        startDate: state.startDate ? new Date(
          action.payload.startDate.getFullYear(),
          action.payload.startDate.getMonth(),
          action.payload.startDate.getDate(),
          state.startDate.getHours(),
          state.startDate.getMinutes(),
        ) : new Date(
          action.payload.startDate.getFullYear(),
          action.payload.startDate.getMonth(),
          action.payload.startDate.getDate(),
          new Date().getHours(),
          new Date().getMinutes(),
        ),
        endDate: state.endDate ? new Date(
          action.payload.endDate.getFullYear(),
          action.payload.endDate.getMonth(),
          action.payload.endDate.getDate(),
          state.endDate.getHours(),
          state.endDate.getMinutes(),
        ) : new Date(
          action.payload.endDate.getFullYear(),
          action.payload.endDate.getMonth(),
          action.payload.endDate.getDate(),
          new Date().getHours(),
          new Date().getMinutes(),
        )
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

    default:
      return state;
  }
}
