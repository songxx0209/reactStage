import React from 'react';
import { Route } from 'react-router';

import Login from '../pages/login';
import Articles from '../pages/articles';


const routes = (
  <Route>
    <Route path="/" component={Login} />
    <Route path="articles" component={Articles} />
  </Route>
);

export default routes;
