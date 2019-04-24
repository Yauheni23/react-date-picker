import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { history } from '../store/store';

import TestComponent from '../features/testFeature'; // импорт нашей новой фичи

const Router = () => (
  <ConnectedRouter history={history}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TestComponent} />
      </Switch>
    </BrowserRouter>
  </ConnectedRouter>
);

export default Router;