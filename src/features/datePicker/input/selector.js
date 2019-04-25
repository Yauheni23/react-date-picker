import { createSelector } from 'reselect';

export const selectInput = state => state.inputReducer;

export const getSelectedDate = () => createSelector(
  selectInput,
  home => home.selectedDate,
);