import {testActions} from "./reducer"; // подключаем наши состояния

export function incrementAction() { // обычный акшн
  return {
    type: testActions.INCREMENT_ACTION
  }
};

export function asyncReset() {
  return (dispatch) => { // асинхронный экшн, удобно для запросов
    dispatch({
      type: testActions.ASYNC_SET_VALUE
    });

    setTimeout(() => {
      dispatch({
        type: testActions.SET_ZERO
      });
    }, 2000)
  }
};