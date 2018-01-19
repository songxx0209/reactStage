import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { loadingReducer } from '../middleware/loading';
import test from './test';

export default combineReducers({
  routing,
  loading: loadingReducer,
  test,
});

