import {createStore, applyMiddleware, compose} from 'redux';//createStore - создает наше хранилище данных, applyMiddleware - подключает мидлвари
import {createBrowserHistory} from 'history'; // позваляет подключиться истории браузера
import rootReducer from './rootReducer'; // тут сборка из наших редюсеров
import {routerMiddleware} from 'connected-react-router'; // перехватчик истории браузера для Redux
import logger from 'redux-logger'; // Мидлваря для логирования изменений стора
import thunk from 'redux-thunk'; // мидлваря для асинхронных событий

export const history = createBrowserHistory(); // создаем объект истории

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(logger, thunk, routerMiddleware(history)))

);
