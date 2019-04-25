import { createSelector } from 'reselect';

export const datePickerReducer = state => state.datePickerReducer;

export const getSelectedDate = () => createSelector(
  datePickerReducer,
  home => home.selectedDate,
);

export const getDisplayedDate = () => createSelector(
  datePickerReducer,
  home => home.displayedDate,
);

export const getIsVisibleCalendar = () => createSelector(
  datePickerReducer,
  home => home.isVisibleCalendar,
);