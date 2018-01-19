import { createReducer } from 'redux-action-tools';
import { ADD_TODO } from '../actionType';

const initialState = {
  fetching: false,
};

const reducer = createReducer()
  .when(ADD_TODO, state => ({ ...state, fetching: true }))
  .done(state => ({ ...state, fetching: false }))
  .failed(state => ({ ...state, fetching: false }))
  .build(initialState); // 不要忘了调用build

export default reducer;
