import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { history } from '../store/store';

import {ManyDatePicker} from '../features/component';
import { Calendar } from '../features/calendar/component';

const Router = () => (
  <ConnectedRouter history={history}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Calendar}/>
        <Route exact path="/datepicker" component={ManyDatePicker}/>
      </Switch>
    </BrowserRouter>
  </ConnectedRouter>
);

export default Router;