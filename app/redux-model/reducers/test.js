// import { createReducer } from 'redux-action-tools';
import { ADD_INFO } from '../actionType';

// const initialState = {
//   fetching: false,
// };

// const reducer = createReducer()
//   .when(ADD_INFO, (state, action) =>
//     // console.log('action==', state, action);
//     ({ ...state, data: action.data }))
//   .done((state, action) =>
//     // console.log('action done==', state, action);
//     ({ ...state }))
//   .build(initialState); // 不要忘了调用build
const oldstate = {
  data: null,
};

const reducer = (state = oldstate, action) => {
  switch (action.type) {
    case ADD_INFO:
      return { ...state, data: action.payload };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
