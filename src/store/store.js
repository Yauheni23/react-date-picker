import {createStore, applyMiddleware} from 'redux';//createStore - создает наше хранилище данных, applyMiddleware - подключает мидлвари
import {createBrowserHistory} from 'history'; // позваляет подключиться истории браузера
import rootReducer from './rootReducer'; // тут сборка из наших редюсеров
import {routerMiddleware} from 'connected-react-router'; // перехватчик истории браузера для Redux
import logger from 'redux-logger'; // Мидлваря для логирования изменений стора
import thunk from 'redux-thunk'; // мидлваря для асинхронных событий
import {counterMiddleware} from "./counterMiddleware";//импортим мидлварю

export const history = createBrowserHistory(); // создаем объект истории

// создаем объект стора с подключением наших редюсеров и мидлварей
export const store = createStore(
  rootReducer(history),
  applyMiddleware(logger, thunk, routerMiddleware(history), counterMiddleware)
);