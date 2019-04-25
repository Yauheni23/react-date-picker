import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { datePickerReducer } from '../features/datePicker/input';

export default function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    datePickerReducer: datePickerReducer,
  });
}