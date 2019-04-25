import { createSelector } from 'reselect';

export const selectCalendar = state => state.calendarReducer;
export const selectInput = state => state.inputReducer;

export const getSelectedDate = () => createSelector(
  selectInput,
  home => home.selectedDate,
);

export const getDisplayedDate = () => createSelector(
  selectCalendar,
  home => home.displayedDate,
);

export const getIsVisibleCalendar = () => createSelector(
  selectInput,
  home => home.isVisibleCalendar,
);