import { combineReducers } from 'redux'; // метод для объеденения редьюсеров
import { connectRouter } from 'connected-react-router'; // метод для подключения роутинга к Redux
import { inputReducer } from '../features/datePicker/input'; //импортимм
import { calendarReducer } from '../features/datePicker/calendar'; //импортимм

export default function rootReducer(history) { // сборка наших редюсеров
  return combineReducers({
    router: connectRouter(history),
    inputReducer: inputReducer,
    calendarReducer: calendarReducer,
  });
}