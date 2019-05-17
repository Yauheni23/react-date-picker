import { createSelector } from 'reselect';

export const CalendarReducer = (state: any) => {
  return state.calendarReducer;
};

export const getSelectedDate = () => createSelector(
  CalendarReducer,
  calendar => calendar.selectedDate
);

export const getModeCalendar = () => createSelector(
  CalendarReducer,
  calendar => calendar.modeCalendar
);


