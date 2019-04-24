// пример простейшей мидлвари
import {testActions} from "../features/testFeature";

// эта мидлваря не даст нам
export const counterMiddleware = store => next => action => {
  const state = store.getState(); //получаем наше состояние приложения

  if(state.testReducer.testIncrementValue === 10){// если больше 10 обнуляем
    return next({
      type:testActions.SET_ZERO
    })
  }

  return next(action); // иначе пропускаем
};