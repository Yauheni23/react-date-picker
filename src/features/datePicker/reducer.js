export const datePickerActions = {
  SHOW_CALENDAR: 'SHOW_CALENDAR',
  HIDE_CALENDAR: 'HIDE_CALENDAR',
  CHANGE_SELECTED_DATE: 'CHANGE_SELECTED_DATE',
  CHANGE_MONTH: 'CHANGE_MONTH',
  CHANGE_YEAR: 'CHANGE_YEAR',
  CHOOSE_DATE: 'CHOOSE_DATE',
  SET_INIT_STATE: 'SET_INIT_STATE',
};

const initialState = {
  selectedDate: null,
  displayedDate: null,
  isVisibleCalendar: null,
  uuid: null,
};

export const datePickerReducer = (namespace) => (state = initialState, action) => {
  switch(action.type) {
    case `${namespace}/${datePickerActions.SHOW_CALENDAR}`:
      return {
        ...state,
        isVisibleCalendar: true,
      };
    case `${namespace}/${datePickerActions.HIDE_CALENDAR}`:
      return {
        ...state,
        isVisibleCalendar: false,
      };
    case `${namespace}/${datePickerActions.CHANGE_SELECTED_DATE}`:
      return {
        ...state,
        selectedDate: action.payload,
      };
    case `${namespace}/${datePickerActions.CHANGE_MONTH}`:
      return {
        ...state,
        displayedDate: new Date(state.displayedDate.getFullYear(), action.payload),
      };
    case `${namespace}/${datePickerActions.CHANGE_YEAR}`:
      return {
        ...state,
        displayedDate: new Date(action.payload, state.displayedDate.getMonth()),
      };
    case `${namespace}/${datePickerActions.CHOOSE_DATE}`:
      return {
        ...state,
        selectedDate: new Date(state.displayedDate.getFullYear(), state.displayedDate.getMonth(), action.payload),
      };
    case `${namespace}/${datePickerActions.SET_INIT_STATE}`:
      return {
        ...state,
        selectedDate: action.payload.selectedDate || new Date(),
        displayedDate: action.payload.displayedDate || new Date(),
        isVisibleCalendar: action.payload.isVisibleCalendar || false,
      };

    default:
      return state;
  }
};
