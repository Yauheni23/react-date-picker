import { createSelector } from 'reselect';

export const datePickerReducer = (state) => {
  return state.datePickerReducer.datePickers;
};

export const getSelectedDate = (datePickerId) => createSelector(
  datePickerReducer,
  datePickers => datePickers[datePickerId] ? datePickers[datePickerId].selectedDate : null,
);

export const getDisplayedDate = (datePickerId) => createSelector(
  datePickerReducer,
  datePickers => datePickers[datePickerId] ? datePickers[datePickerId].displayedDate : null,
);

export const getIsVisibleCalendar = (datePickerId) => createSelector(
  datePickerReducer,
  datePickers => datePickers[datePickerId] ? datePickers[datePickerId].isVisibleCalendar : null,
);