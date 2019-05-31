import { createSelector } from 'reselect';

export const datePickerReducer = (state) => {
  return state.datePickerReducer;
};

export const getDisplayedDate = () => createSelector(
  datePickerReducer,
  datePicker => datePicker ? datePicker.displayedDate : null
);

export const getIsVisibleCalendar = () => createSelector(
  datePickerReducer,
  datePicker => datePicker ? datePicker.isVisibleCalendar : null
);
