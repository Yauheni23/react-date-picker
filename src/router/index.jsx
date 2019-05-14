import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { history } from '../store/store';

import Calendar from '../features/calendar';

const Router = () => (
  <ConnectedRouter history={history}>
    <BrowserRouter>
      <Switch>
        <Route  path="/calendar" component={Calendar}/>
        <Redirect to="/calendar/month" />
      </Switch>
    </BrowserRouter>
  </ConnectedRouter>
);

export default Router;