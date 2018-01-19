import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import loadingMiddleware from './middleware/loading';
import reducers from './reducers';

const middleware = applyMiddleware(loadingMiddleware, thunk, logger);

export default createStore(reducers, middleware);
