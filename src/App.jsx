import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {DatePickerComponent} from './features/datePicker/component';
import Router from './router';

const App = () => (
  <Provider store={store}>
    <DatePickerComponent></DatePickerComponent>
    <DatePickerComponent></DatePickerComponent>
    {/*<Router/>*/}
  </Provider>
);

export default App;