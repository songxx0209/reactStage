// import { createReducer } from 'redux-action-tools';
import * as types from '../actionType';

const oldstate = {
  data: null,
};

const reducer = (state = oldstate, action) => {
  switch (action.type) {
    case types.ADD_INFO_COMPLETED:
      return { ...state, data: action.payload };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
