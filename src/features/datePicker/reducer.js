export const datePickerActions = {
  SHOW_CALENDAR: 'SHOW_CALENDAR',
  HIDE_CALENDAR: 'HIDE_CALENDAR',
  CHANGE_SELECTED_DATE: 'CHANGE_SELECTED_DATE',
  CHANGE_MONTH: 'CHANGE_MONTH',
  CHANGE_YEAR: 'CHANGE_YEAR',
  CHOOSE_DATE: 'CHOOSE_DATE',
  SET_DATE_PICKER_INITIAL_STATE: 'SET_DATE_PICKER_INITIAL_STATE',
};
const initialState = {
  datePickers: []
};

export function datePickerReducer(state = initialState, action) {
  const datePickersState = {
    datePickers: [
      ...state.datePickers
    ]
  };
  switch(action.type) {
    case datePickerActions.SHOW_CALENDAR:
      datePickersState.datePickers[action.datePickerId] = {
        ...state.datePickers[action.datePickerId],
        isVisibleCalendar: true,
        displayedDate: state.datePickers[action.datePickerId].selectedDate
      };
      return datePickersState;
    case datePickerActions.HIDE_CALENDAR:
      datePickersState.datePickers[action.datePickerId] = {
        ...state.datePickers[action.datePickerId],
        isVisibleCalendar: false,
      };
      return datePickersState;
    case datePickerActions.CHANGE_SELECTED_DATE:
      datePickersState.datePickers[action.datePickerId] = {
        ...state.datePickers[action.datePickerId],
        selectedDate: action.payload,
      };
      return datePickersState;
    case datePickerActions.CHANGE_MONTH:
      datePickersState.datePickers[action.datePickerId] = {
        ...state.datePickers[action.datePickerId],
        displayedDate: new Date(state.datePickers[action.datePickerId].displayedDate.getFullYear(), action.payload),
      };
      return datePickersState;
    case datePickerActions.CHANGE_YEAR:
      datePickersState.datePickers[action.datePickerId] = {
        ...state.datePickers[action.datePickerId],
        displayedDate: new Date(action.payload, state.datePickers[action.datePickerId].displayedDate.getMonth()),
      };
      return datePickersState;
    case datePickerActions.CHOOSE_DATE:
      datePickersState.datePickers[action.datePickerId] = {
        ...state.datePickers[action.datePickerId],
        selectedDate: new Date(
          state.datePickers[action.datePickerId].displayedDate.getFullYear(),
          state.datePickers[action.datePickerId].displayedDate.getMonth(),
          action.payload
        ),
      };
      return datePickersState;
    case datePickerActions.SET_DATE_PICKER_INITIAL_STATE:
      datePickersState.datePickers[action.datePickerId] = {
        ...state.datePickers[action.datePickerId],
        selectedDate: action.payload.selectedDate || new Date(),
        displayedDate: action.payload.displayedDate || new Date(),
        isVisibleCalendar: action.payload.isVisibleCalendar || false
      };
      return datePickersState;
    default:
      return datePickersState;
  }
}
