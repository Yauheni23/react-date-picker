import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { datePickerReducer} from '../features/datePicker';

export default function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    '0':  datePickerReducer('0'),
    '1':  datePickerReducer('1'),
    '2':  datePickerReducer('2'),
  });
}