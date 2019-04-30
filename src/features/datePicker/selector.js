import { createSelector } from 'reselect';

export const datePickerReducer = (state) => {
  return state.datePickerReducer;
};

export const getSelectedDate = (datePickerId) => createSelector(
  datePickerReducer,
  datePickerReducer => {
    return datePickerReducer.datePickers[datePickerId] ? datePickerReducer.datePickers[datePickerId].selectedDate : null;
  },
);

export const getDisplayedDate = (datePickerId) => createSelector(
  datePickerReducer,
  datePickerReducer => datePickerReducer.datePickers[datePickerId] ?
    datePickerReducer.datePickers[datePickerId].displayedDate :
    null,
);

export const getIsVisibleCalendar = (datePickerId) => createSelector(
  datePickerReducer,
  datePickerReducer => datePickerReducer.datePickers[datePickerId] ?
    datePickerReducer.datePickers[datePickerId].isVisibleCalendar :
    null,
);