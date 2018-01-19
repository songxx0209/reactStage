import React from 'react';
import { Route } from 'react-router';

import Login from '../pages/login';
import Article from '../pages/article';


const routes = (
  <Route>
    <Route path="/" component={Login} />
    <Route path="article" component={Article} />
  </Route>
);

export default routes;
