
import { combineReducers } from 'redux';
import { loadingReducer } from '../middleware/loading';
import test from './test';

export default combineReducers({
  loading: loadingReducer,
  test,
});

