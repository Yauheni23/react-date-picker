import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import rootReducer from './rootReducer';
import {routerMiddleware} from 'connected-react-router';
// import logger from 'redux-logger';
import thunk from 'redux-thunk'; // мидлваря для асинхронных событий

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware( thunk, routerMiddleware(history)))
);
