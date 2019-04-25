export const inputActions = {
  SHOW_CALENDAR: 'SHOW_CALENDAR',
  CHANGE_SELECTED_DATE: 'CHANGE_SELECTED_DATE',
  HIDE_CALENDAR: 'HIDE_CALENDAR'
};

const initialState = {
  selectedDate: new Date(),
  isVisibleCalendar: false
};

export function inputReducer(state = initialState, action) {
  switch(action.type) {
    case inputActions.SHOW_CALENDAR:
      return {
        ...state,
        isVisibleCalendar: true,
      };
      case inputActions.HIDE_CALENDAR:
      return {
        ...state,
        isVisibleCalendar: false,
      };
    case inputActions.CHANGE_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };

    default:
      return state;
  }
}
