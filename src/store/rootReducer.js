import { combineReducers } from 'redux'; // метод для объеденения редьюсеров
import { connectRouter } from 'connected-react-router' // метод для подключения роутинга к Redux
import {testReducer} from "../features/testFeature"; //импортимм

export default function rootReducer(history) { // сборка наших редюсеров
  return combineReducers({
    router: connectRouter(history),
    testReducer: testReducer//подключаем наш новый редюсер
  });
}