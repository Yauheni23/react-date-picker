import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { history } from '../store/store';

import Calendar from '../features/calendar';
import { Location } from '../features/location/component';

const Router = () => (
  <ConnectedRouter history={history}>
    <BrowserRouter>
      <Switch>
        <Route  path="/calendar" component={Calendar}/>
        <Route  path="/location" component={Location}/>
        <Redirect to="/calendar/month" />
      </Switch>
    </BrowserRouter>
  </ConnectedRouter>
);

export default Router;