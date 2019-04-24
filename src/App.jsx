import React from 'react';
import { Provider } from 'react-redux'; //компонент для связзи React и Redux
import { store } from './store/store'; // наш подготовленный стор
import Router from './router'; // наш роутер

//наконец все подключаем
const App = () => (
  <Provider store={store}>
    <Router/>
  </Provider>
);

export default App;