import { createSelector } from 'reselect';

export const selectTest = state => state.testReducer; // получаем часть стора

export const getTestIncrementValue = () => createSelector(
    selectTest,
    home => home.testIncrementValue,// получаем необходимые данные
);