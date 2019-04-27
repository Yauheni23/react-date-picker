import { createSelector } from 'reselect';

export const datePickerReducer = (state, props) => {
  return state.datePickerReducer.filter((el) => +props.id === +el.id)[0];
};


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