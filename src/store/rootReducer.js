import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { datePickerReducer } from '../features/datePicker';
import { calendarReducer } from '../features/calendar';
import { editorTaskReducer } from '../features/calendar/dialog/editorTask';
import { viewTaskReducer } from '../features/calendar/dialog/viewTask';

export default function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    datePickerReducer: datePickerReducer,
    calendarReducer: calendarReducer,
    editorTaskReducer: editorTaskReducer,
    viewTaskReducer: viewTaskReducer
  });
}
