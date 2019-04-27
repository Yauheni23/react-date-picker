export const datePickerActions = {
  SHOW_CALENDAR: 'SHOW_CALENDAR',
  HIDE_CALENDAR: 'HIDE_CALENDAR',
  CHANGE_SELECTED_DATE: 'CHANGE_SELECTED_DATE',
  CHANGE_MONTH: 'CHANGE_MONTH',
  CHANGE_YEAR: 'CHANGE_YEAR',
  CHOOSE_DATE: 'CHOOSE_DATE',
};
const initialState = [{
  selectedDate: new Date(),
  displayedDate: new Date(),
  isVisibleCalendar: false,
  id: '0',
}, {
  selectedDate: new Date(),
  displayedDate: new Date(),
  isVisibleCalendar: false,
  id: '1',
}, {
  selectedDate: new Date(),
  displayedDate: new Date(),
  isVisibleCalendar: false,
  id: '2',
}];

export function datePickerReducer(state = initialState, action) {
  const actionState = [
    {
      ...state[0],
    },
    {
      ...state[1],
    },
    {
      ...state[2],
    },
  ];
  switch(action.type) {
    case datePickerActions.SHOW_CALENDAR:
      actionState[action.id] = {
        ...state[action.id],
        displayedDate: state[action.id].selectedDate,
        isVisibleCalendar: true,
      };
      return actionState;
    case datePickerActions.HIDE_CALENDAR:
      actionState[action.id] = {
        ...state[action.id],
        isVisibleCalendar: false,
      };
      return actionState;
    case datePickerActions.CHANGE_SELECTED_DATE:
      actionState[action.id] = {
        ...state[action.id],
        selectedDate: action.payload,
      };
      return actionState;
    case datePickerActions.CHANGE_MONTH:
      actionState[action.id] = {
        ...state[action.id],
        displayedDate: new Date(state[action.id].displayedDate.getFullYear(), action.payload),
      };
      return actionState;
    case datePickerActions.CHANGE_YEAR:
      actionState[action.id] = {
        ...state[action.id],
        displayedDate: new Date(action.payload, state[action.id].displayedDate.getMonth()),
      };
      return actionState;
    case datePickerActions.CHOOSE_DATE:
      actionState[action.id] = {
        ...state[action.id],
        selectedDate: new Date(state[action.id].displayedDate.getFullYear(), state[action.id].displayedDate.getMonth(), action.payload),
      };
      return actionState;
    default:
      return state;
  }
}
