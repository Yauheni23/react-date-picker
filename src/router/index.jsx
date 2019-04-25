import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { history } from '../store/store';

import InputComponent from '../features/datePicker/input'; // импорт нашей новой фичи
import CalendarComponent from '../features/datePicker/calendar'
import {DatePickerComponent} from '../features/datePicker/component'

const Router = () => (
  <ConnectedRouter history={history}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DatePickerComponent}/>
        <Route exact path="/input" component={InputComponent}/>
        <Route exact path="/calendar" component={CalendarComponent}/>
      </Switch>
    </BrowserRouter>
  </ConnectedRouter>
);

export default Router;