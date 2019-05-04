import { createSelector } from 'reselect';

export const CalendarReducer = (state: any) => {
  return state.calendarReducer;
};

export const getSelectedDate = () => createSelector(
  CalendarReducer,
  calendar => calendar.selectedDate
);

export const getDisplayedDate = () => createSelector(
  CalendarReducer,
  calendar => calendar.displayedDate
);


