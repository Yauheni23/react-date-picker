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
  datePickers: [],
};

export function datePickerReducer(state = initialState, action) {
  const datePickers = [...state.datePickers];
  switch(action.type) {
    case datePickerActions.SHOW_CALENDAR:
      datePickers[action.datePickerId] = {
        ...datePickers[action.datePickerId],
        isVisibleCalendar: true,
        displayedDate: datePickers[action.datePickerId].selectedDate,
      };
      return { ...state, datePickers };
    case datePickerActions.HIDE_CALENDAR:
      datePickers[action.datePickerId] = {
        ...datePickers[action.datePickerId],
        isVisibleCalendar: false,
      };
      return { ...state, datePickers };
    case datePickerActions.CHANGE_SELECTED_DATE:
      datePickers[action.datePickerId] = {
        ...datePickers[action.datePickerId],
        selectedDate: action.payload,
        displayedDate: action.payload,
      };
      return { ...state, datePickers };
    case datePickerActions.CHANGE_MONTH:
      datePickers[action.datePickerId] = {
        ...datePickers[action.datePickerId],
        displayedDate: new Date(state.datePickers[action.datePickerId].displayedDate.getFullYear(), action.payload),
      };
      return { ...state, datePickers };
    case datePickerActions.CHANGE_YEAR:
      datePickers[action.datePickerId] = {
        ...datePickers[action.datePickerId],
        displayedDate: new Date(action.payload, state.datePickers[action.datePickerId].displayedDate.getMonth()),
      };
      return { ...state, datePickers };
    case datePickerActions.CHOOSE_DATE:
      datePickers[action.datePickerId] = {
        ...datePickers[action.datePickerId],
        selectedDate: new Date(
          state.datePickers[action.datePickerId].displayedDate.getFullYear(),
          state.datePickers[action.datePickerId].displayedDate.getMonth(),
          action.payload,
        ),
      };
      return { ...state, datePickers };
    case datePickerActions.SET_DATE_PICKER_INITIAL_STATE:
      datePickers.push({
        selectedDate: action.payload.selectedDate || new Date(),
        displayedDate: action.payload.displayedDate || new Date(),
        isVisibleCalendar: action.payload.isVisibleCalendar || false,
      });
      return { ...state, datePickers };
    default:
      return state;
  }
}
