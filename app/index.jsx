import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux-model';

import Login from './pages/login';

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('app'),
);
