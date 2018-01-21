// import { createAsyncAction } from 'redux-action-tools';
import request from '../../lib/request';

import * as types from '../actionType';

// function createAsyncAction(type, callback) {
//   return function () {
//     return {
//       type,
//       payload: 12,
//     };
//   };
// }

// createAsyncAction('ssss', async () => {
//   console.log('wowowo');
// });


// export const getInfo = createAsyncAction(types.ADD_INFO, async () => {
//   const { data } = await request.get('http://120.77.33.107:8000/web/get_datas/');
//   console.log('aaaaaa', data);
//   return data;
// });
export const getInfo = (type = types.ADD_INFO) => {
  let info = null;
  const ss = async () => {
    const { data } = await request.get('http://120.77.33.107:8000/web/get_datas/');
    info = data;
    console.log('info==', info);
    return {
      type,
      payload: info,
    };
  };
  return ss;

  // console.log('at last');
};

export const getData = () => ({ type: types.GET_DATA });
