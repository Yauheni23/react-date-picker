import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { history } from '../store/store';

import DatePickerComponent from '../features/datePicker';
import ManyDatePickerComponent from '../features/component';

const Router = () => (
  <ConnectedRouter history={history}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/datepicker" component={DatePickerComponent}/>
        <Route exact path="/" component={ManyDatePickerComponent}/>
      </Switch>
    </BrowserRouter>
  </ConnectedRouter>
);

export default Router;