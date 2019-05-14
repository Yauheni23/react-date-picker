import { IAction } from '../../store/interfaces';

export const calendarActions = {
  CHANGE_SELECTED_DATE: 'CALENDAR_CHANGE_SELECTED_DATE',
  CHANGE_MONTH: 'CALENDAR_CHANGE_MONTH',
  CHANGE_YEAR: 'CALENDAR_CHANGE_YEAR',
  CHOOSE_DATE: 'CALENDAR_CHOOSE_DATE',
  SHOW_TODAY: 'SHOW_TODAY',
  CHANGE_DISPLAYED_DATE: 'CHANGE_DISPLAYED_DATE',
};

const initialState = {
  selectedDate: new Date(),
  displayedDate: new Date(),
};

interface IState {
  selectedDate: Date,
  displayedDate: Date,
}

export function calendarReducer( state: IState = initialState, action: IAction<any> ) {
  switch ( action.type ) {
    case calendarActions.CHANGE_MONTH:
      return {
        ...state,
        displayedDate: new Date( state.displayedDate.getFullYear(), action.payload ),
      };

    case calendarActions.CHANGE_YEAR:
      return {
        ...state,
        displayedDate: new Date( action.payload, state.displayedDate.getMonth() ),
      };

    case calendarActions.SHOW_TODAY:
      return {
        ...state,
        displayedDate: new Date(),
        selectedDate: new Date(),
      };

    case calendarActions.CHANGE_DISPLAYED_DATE:
      return {
        ...state,
        displayedDate: new Date(state.displayedDate.setMilliseconds(0) + action.payload ),
      };

    case calendarActions.CHOOSE_DATE:
      return {
        ...state,
        selectedDate: new Date(
          state.displayedDate.getFullYear(),
          state.displayedDate.getMonth(),
          action.payload,
        ),
      };

    default:
      return state;
  }
}
