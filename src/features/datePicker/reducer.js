export const datePickerActions = {
  SHOW_CALENDAR: 'SHOW_CALENDAR',
  HIDE_CALENDAR: 'HIDE_CALENDAR',
  CHANGE_SELECTED_DATE: 'CHANGE_SELECTED_DATE',
  CHANGE_MONTH: 'CHANGE_MONTH',
  CHANGE_YEAR: 'CHANGE_YEAR',
  CHOOSE_DATE: 'CHOOSE_DATE',
};

const initialState = {
  selectedDate: new Date(),
  displayedDate: new Date(),
  isVisibleCalendar: false,
};

export function datePickerReducer(state = initialState, action) {
  switch(action.type) {
    case datePickerActions.SHOW_CALENDAR:
      return {
        ...state,
        isVisibleCalendar: true,
      };
    case datePickerActions.HIDE_CALENDAR:
      return {
        ...state,
        isVisibleCalendar: false,
      };
    case datePickerActions.CHANGE_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    case datePickerActions.CHANGE_MONTH:
      return {
        ...state,
        displayedDate: new Date(state.displayedDate.getFullYear(), action.payload),
      };
    case datePickerActions.CHANGE_YEAR:
      return {
        ...state,
        displayedDate: new Date(action.payload, state.displayedDate.getMonth()),
      };
    case datePickerActions.CHOOSE_DATE:
      return {
        ...state,
        selectedDate: new Date(state.displayedDate.getFullYear(), state.displayedDate.getMonth(), action.payload),
      };

    default:
      return state;
  }
}
