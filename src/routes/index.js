import React from 'react';
import Home from '../components/Home';
import { Switch, Route } from 'react-router-dom';

const route = () => (
  <Switch>
    <Route
      exact
      path='/'
      component={Home}
    />
  </Switch>
);

export default route;
