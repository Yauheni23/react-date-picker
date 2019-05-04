import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { datePickerReducer } from '../features/datePicker';
import { calendarReducer } from '../features/calendar';
import { dialogForAddTaskReducer } from '../features/calendar/dialog/dialogForAddTask';

export default function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    datePickerReducer: datePickerReducer,
    calendarReducer: calendarReducer,
    dialogForAddTaskReducer: dialogForAddTaskReducer,
  });
}