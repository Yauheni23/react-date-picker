export const calendarActions = {
  CHANGE_MONTH: 'CHANGE_MONTH',
  CHANGE_YEAR: 'CHANGE_YEAR',
  HIDE_CALENDAR: 'HIDE_CALENDAR',
  CHOOSE_DATE: 'CHOOSE_DATE',
};

const initialState = {
  displayedDate: new Date(),
};

export function calendarReducer(state = initialState, action) {
  switch(action.type) {
    case calendarActions.CHANGE_MONTH:
      return {
        ...state,
        displayedDate: new Date(state.displayedDate.getFullYear(), action.payload),
      };
    case calendarActions.CHANGE_YEAR:
      return {
        ...state,
        displayedDate: new Date(action.payload, state.displayedDate.getMonth()),
      };
    case calendarActions.CHOOSE_DATE:
      return {
        ...state,
        selectedDate: new Date(state.displayedDate.getFullYear(), state.displayedDate.getMonth(), action.payload),
      };
    case calendarActions.HIDE_CALENDAR:
      return {
        ...state,
        isVisibleCalendar: false,
      };

    default:
      return state;
  }
}
